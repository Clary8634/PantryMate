from flask import Flask, request, jsonify
from flask_cors import CORS
from models import db, Recipe, Message
import requests
import os

API_KEY = os.getenv("SPOONACULAR_API_KEY")


def create_app():
    app = Flask(__name__)
    app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///recipes.db"
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

    db.init_app(app)
    CORS(app)

    @app.route("/api/search", methods=["POST"])
    def search_recipes():
        data = request.get_json()
        ingredients = data.get("ingredients", "")
        offset = data.get("offset", 0)

        if not ingredients:
            return jsonify({"recipes": []})

        url = (
            "https://api.spoonacular.com/recipes/findByIngredients"
            f"?ingredients={ingredients}"
            f"&number=12"
            f"&offset={offset}"
            f"&apiKey={API_KEY}"
        )

        try:
            r = requests.get(url)
            r.raise_for_status()
            results = r.json()

            items = []
            for rec in results:
                items.append({
                    "id": rec.get("id"),
                    "title": rec.get("title"),
                    "image": rec.get("image"),
                    "usedIngredients": [i["name"] for i in rec.get("usedIngredients", [])],
                    "missedIngredients": [i["name"] for i in rec.get("missedIngredients", [])],
                })
            return jsonify({"recipes": items})

        except:
            return jsonify({"recipes": []})

    @app.route("/api/recipe/<int:recipe_id>", methods=["GET"])
    def recipe_details(recipe_id):
        url = (
            f"https://api.spoonacular.com/recipes/{recipe_id}/information"
            f"?apiKey={API_KEY}&includeNutrition=false"
        )
        try:
            r = requests.get(url)
            r.raise_for_status()
            d = r.json()

            recipe = {
                "id": d.get("id"),
                "title": d.get("title"),
                "image": d.get("image"),
                "summary": d.get("summary"),
                "instructions": d.get("instructions"),
                "sourceUrl": d.get("spoonacularSourceUrl") or d.get("sourceUrl"),
                "extendedIngredients": d.get("extendedIngredients", []),
            }
            return jsonify(recipe)

        except:
            return jsonify({"error": "not found"}), 404

    @app.route("/api/save", methods=["POST"])
    def save_recipe():
        data = request.get_json()
        recipe_id = data.get("id") or data.get("recipe_id")

        if not recipe_id:
            return jsonify({"success": False, "message": "Missing recipe_id"})

        exists = Recipe.query.filter_by(recipe_id=recipe_id).first()
        if exists:
            return jsonify({"success": True, "message": "exists"})

        rec = Recipe(
            recipe_id=recipe_id,
            title=data.get("title"),
            image_url=data.get("image") or data.get("image_url"),
            summary=data.get("summary") or "",
        )
        db.session.add(rec)
        db.session.commit()

        return jsonify({"success": True, "message": "created"})

    @app.route("/api/saved", methods=["GET"])
    def saved_recipes():
        records = Recipe.query.all()
        items = [
            {
                "id": r.recipe_id,
                "title": r.title,
                "image": r.image_url,
            }
            for r in records
        ]
        return jsonify(items)

    @app.route("/api/delete/<int:recipe_id>", methods=["DELETE"])
    def delete_recipe(recipe_id):
        rec = Recipe.query.filter_by(recipe_id=recipe_id).first()
        if not rec:
            return jsonify({"success": False})

        db.session.delete(rec)
        db.session.commit()
        return jsonify({"success": True})

    @app.route("/api/contact", methods=["POST"])
    def contact():
        data = request.get_json()
        name = data.get("name")
        email = data.get("email")
        message_text = data.get("message")

        if not name or not email or not message_text:
            return jsonify({"success": False}), 400

        msg = Message(name=name, email=email, message=message_text)
        db.session.add(msg)
        db.session.commit()

        return jsonify({"success": True})

    return app


if __name__ == "__main__":
    app = create_app()
    app.run(debug=True)
