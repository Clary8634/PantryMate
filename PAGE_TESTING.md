# Pantrymate - PAGE_TESTING

## Page 1: Home Page

### Page Description:
The home page serves as the landing page for users. It provides an introduction to the app's purpose and a simple interface where users can enter ingredients they have in their pantry to start searching for recipes.

### Parameters Needed for the Page:
- None.

### Data Needed to Render the Page:
- A brief description of the app and stock photos.
- A search input field for ingredients.

### Link Destinations for the Page:
- **Search Results Page**: After the user submits their ingredients, they are redirected to the recipe suggestions page.
- **Pages for Example Recipes**: Direct links to the example displayed recipes.
- **Site Navigation in Header & Footer**: Links in the header & footer to provide additional navigation means.

### List of Tests for Verifying the Rendering of the Page:
1. **Image Rendering Test**:
   - Test to verify the images are correctly displayed on the page.
2. **Text Visibility Test**:
   - Test to ensure that the description of the app ("Find recipes based on the ingredients in your pantry") is visible and legible.
4. **Search Test**:
   - Test to verify that the search input field is functional and allows users to type in ingredients.
5. **Navigation Test**:
   - Test to ensure that clicking the header & footer links redirect correctly.
7. **Error Handling Test**:
   - Test that the page handles and displays an appropriate message if there are issues with submitting ingredients (e.g., empty search input).

![](C:\Users\User\Desktop\PantryMate\page_testing_photos\page 1.PNG)



------

## Page 2: About
### Page Description:
The About Page provides users with information about the app’s purpose, goals, and the technology stack behind it.

### Parameters Needed for the Page:
- None.

### Data Needed to Render the Page:
- Text content for the app description, technology stack, and motivation.

### Link Destinations for the Page:
- **Site Navigation in Header & Footer**: Links in the header & footer to provide additional navigation means.

### List of Tests for Verifying the Rendering of the Page:
1. **Text Display Test**:
   - Verify that the app description and technology stack are correctly displayed.
4. **Visual Consistency Test**:
   - Ensure the page matches the overall app design and color scheme.

![](C:\Users\User\Desktop\PantryMate\page_testing_photos\page 2.PNG)



------

## Page 3: Suggestions
### Page Description:
This page displays a list of recipe suggestions based on the ingredients entered by the user on the home page. Each recipe includes a title, a brief description, and an option to view the full recipe.

### Parameters Needed for the Page:
- A list of recipe objects returned from the external API (Spoonacular or Edamam).
- Ingredients the user input on the home page.

### Data Needed to Render the Page:
- Recipe titles.
- Recipe descriptions.
- Recipe images (if available).
- Links to full recipe details.

### Link Destinations for the Page:
- **Recipe Detail Page**: When a user clicks on a recipe card, they are redirected to the Recipe Detail Page.
- **Site Navigation in Header & Footer**: Links in the header & footer to provide additional navigation means.

### List of Tests for Verifying the Rendering of the Page:
1. **Recipe Display Test**:
   - Verify that recipe cards display the correct titles, descriptions, and images (if available).
2. **Link Test**:
   - Verify that the "Go to Recipe" button links to the correct Recipe Detail Page.
4. **Empty Results Handling Test**:
   - Test that the page shows a "No recipes found" message if no results are returned from the API.

![](C:\Users\User\Desktop\PantryMate\page_testing_photos\page 3.PNG)



------

## Page 4: Details
### Page Description:
This page displays the full details of a selected recipe, including a list of ingredients, preparation steps, and cooking time. Users can also see a larger image of the recipe.

### Parameters Needed for the Page:
- Recipe ID or unique identifier to fetch full recipe details from the API.

### Data Needed to Render the Page:
- Recipe name.
- Ingredient list.
- Preparation steps.
- Cooking time and other metadata.
- Recipe image (if available).

### Link Destinations for the Page:
- **Site Navigation in Header & Footer**: Links in the header & footer to provide additional navigation means.

### List of Tests for Verifying the Rendering of the Page:
1. **Recipe Content Test**:
   - Verify that the recipe name, ingredients, and steps are displayed correctly.
3. **Image Display Test**:
   - Test that the recipe image is shown and is of a reasonable size.
4. **Cooking Time Test**:
   - Verify that cooking time and other metadata are displayed correctly.

![](C:\Users\User\Desktop\PantryMate\page_testing_photos\page 4.PNG)



------

## Page 5: Contact
### Page Description:
The Contact Page includes a simple form where users can submit questions, feedback, or issues they’ve encountered while using the app. The form includes fields for the user's name, email, and message.

### Parameters Needed for the Page:
- None.

### Data Needed to Render the Page:
- Text content for form fields and button labels.
- A success message or confirmation upon form submission.

### Link Destinations for the Page:
- **Site Navigation in Header & Footer**: Links in the header & footer to provide additional navigation means.

### List of Tests for Verifying the Rendering of the Page:
1. **Form Field Test**:
   - Verify that the name, email, and message fields are visible and functional.
2. **Form Validation Test**:
   - Test that the form validation works correctly (e.g., email format, required fields).
3. **Submit Button Test**:
   - Verify that the form submits when the "Submit" button is clicked, and the confirmation message is shown.
5. **Error Handling Test**:
   - Test the form’s response when the user submits incomplete or incorrect data (e.g., missing name or invalid email).

![](C:\Users\User\Desktop\PantryMate\page_testing_photos\page 5.PNG)

