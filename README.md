# PantryMate

**Team:** Solo

**Team members:** Clary (Github Username: Clary8634) (Email: sccl8634@colorado.edu)

**Time Zone:** Fridays 4pm MST

## Vision Statement

PantryMate is a web app that helps users save time and reduce food waste by providing recipe suggestions based on the ingredients they already have. A quick and easy way to discover new meals without buying extra groceries.

## Motivation

Cooking can be difficult when you're stuck with a pantry full of ingredients and no idea what to make. PantryMate makes cooking more efficient by helping you find recipes based on what you already have.

## Risks to Project Completion

1. **Learning Curve with Python and Flask**  
   Flask is quite easy to learn, but there may still be a bit of a learning curve given limited experience with it currently. A quick review of Flask tutorials can help get back up to speed.

2. **API Usage Limits**  
   Some external recipe APIs (like Spoonacular or Edamam) have usage limits for free-tier access, which might limit how many recipes can be fetched. The app can potentially handle this by caching results or limiting requests.

## Mitigation Strategy

1. **Quick Flask Tutorials**  
   Spend a few hours refreshing with Flask tutorials. The official Flask documentation is also well fleshed out.

2. **Choose a Free API**  
   This project will be initially starting with a free-tier access from Spoonacular or Edamam.

## Development Method

A **Waterfall approach** will be used for this project. Planning and executing the entire app will happen in one go, completing one feature at a time until the app is functional.

### Development Steps:
1. Set up a basic Flask app with a home page.
2. Implement a simple form where users can input ingredients.
3. Integrate with a recipe API to fetch meal suggestions.
4. Display recipes on the frontend.

## Project Tracking

**Trello** will be used for task tracking:

[Trello Board - PantryMate Project](https://trello.com/b/xePrR2mR/pantrymate)

## Technology Stack

### Frontend:
- **HTML/CSS:** For basic page structure and styling.
- **JavaScript:**: Updating the UI dynamically.
- **React**:  For interacting with the backend and displaying recipes. 

### Backend:
- **Python (Flask):** Lightweight framework for building the backend API.
- **PostgreSQL or SQLite:** Simple database to store ingredients and recipe history (optional).

### External API:
- **Spoonacular API or Edamam API:** For fetching recipes based on ingredients.
