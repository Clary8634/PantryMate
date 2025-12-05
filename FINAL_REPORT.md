# Pantrymate – Recipe Finder

## Project Title
Pantrymate — A Recipe Recommendation System Based on User Ingredients

## Project Tracker Link
https://trello.com/b/xePrR2mR/pantrymate

## Presentation Video
https://www.youtube.com/watch?v=2LcJzq8HZSI

## Repository Link
https://github.com/Clary8634/PantryMate/

## Public Deployment Site
https://pantrymate-frontend.onrender.com

---

# Final Status Report & Reflection

## What Was Completed
- Fully functional Flask backend API supporting:
  - Ingredient-based recipe search via Spoonacular API  
  - Fetching full recipe details  
  - Saving recipes locally  
  - Deleting saved recipes  
  - Contact form submission  
- Completed React frontend including:
  - Ingredient input with add/remove functionality  
  - Recipe suggestions page  
  - Full recipe details page with link to original recipe  
  - Saved recipes dashboard  
  - About page  
  - Contact form  
  - Navigation system with persistent “Back to Results”  
  - Example recipe cards on home page  
- SQLite database integrated with SQLAlchemy  

## What I Was in the Middle of Implementing
- Cleanup of frontend file layout  
- Codebase refactor
- Additional pages

## What I Planned for the Future
- User authentication and persistent stored pantry  
- Advanced ingredient management  
- Dietary filters (vegan, gluten-free, etc.)  
- Nutrition-based recommendations    

## Known Problems
- Spoonacular API rate limits can cause missing recipe data given the project is on the Starter Plan
- Missing instructions or summaries occur when API does not return values  
- Cloudflare went down (again) during Render deployment; may happen during grading

