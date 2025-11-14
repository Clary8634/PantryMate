# Database Design Overview
# 1. Tables

## Table 1: users
### **Table Description**
Stores account information for users interacting with the PantryMate application.

### **Fields**
| Field Name | Description                                |
| ---------- | ------------------------------------------ |
| user_id    | Primary key, identifier for each user      |
| name       | User's display name                        |
| email      | User's email address, must be unique       |
| created_at | Timestamp marking when account was created |

### **Tests for users Table**
#### Use Case Name: Verify table structure and constraints for users
- **Description:** Ensure fields exist with correct types and constraints.
- **Pre-conditions:** Database initialzed
- **Test Steps:**
  1. Inspect schema.
  2. Attempt inserting valid user.
  3. Attempt inserting user with duplicate email.
- **Expected Result:** Duplicate email is rejected, valid insert succeeds.
- **Status:** Pass
- **Post-conditions:** Table enforces uniqueness and PK.

---

## Table 2: ingredients
### **Table Description**
Stores ingredient entries submitted by users for recipe searching.

### **Fields**
| Field Name      | Description                                 |
| --------------- | ------------------------------------------- |
| ingredient_id   | Primary key                                 |
| user_id         | Foreign key referencing users.user_id       |
| ingredient_name | The name of the ingredient provided by user |
| created_at      | Timestamp of entry creation                 |

### **Tests for ingredients Table**
#### Use Case Name: Verify foreign key enforcement
- **Description:** Ensure that an ingredient cannot exist without a valid user.
- **Pre-conditions:** Users table populated with at least one user.
- **Test Steps:**
  1. Insert ingredient with valid user_id.
  2. Insert ingredient with invalid user_id.
- **Expected Result:** Valid insert succeeds, invalid insert fails.
- **Status:** Pass
- **Post-conditions:** Ingredients always tied to valid users.

---

## Table 3: recipes
### **Table Description**
Stores recipes returned by external API for saving/cache purposes.

### **Fields**
| Field Name | Description                      |
| ---------- | -------------------------------- |
| recipe_id  | Primary key                      |
| title      | Recipe title                     |
| image_url  | URL of recipe image              |
| summary    | Description of the recipe        |
| api_source | Source of recipe data            |
| created_at | Timestamp when recipe was stored |

### **Tests for recipes Table**
#### Use Case Name: Verify recipe insertion and required fields
- **Description:** Ensure fields are properly stored & required constraints are enforced.
- **Pre-conditions:** Database is running.
- **Test Steps:**
  1. Insert recipe without title.
  2. Insert fully valid recipe.
- **Expected Result:** Missing title results in failure, valid insert succeeds.
- **Status:** Pass
- **Post-conditions:** Recipe rows must always include required metadata.

---

# 2. Data Access Methods

### **Access Method 1: get_user_by_email(email)**

- **Description:** Fetches user information by unique email.
- **Parameters:** email – User's email
- **Returns:** User object or None if no match found.
- **Tests:**
  1. Search for existing email -> returns correct user.
  2. Search for nonexistent email -> returns None.
  3. Invalid email format -> raises validation error.

---

### **Access Method 2: get_ingredients_by_user(user_id)**

- **Description:** Retrieves all ingredients submitted by a given user.
- **Parameters:** user_id – User primary key
- **Returns:** List of ingredient objects.
- **Tests:**
  1. Valid user returns ingredient list.
  2. User without ingredients returns empty list.
  3. Invalid user_id -> error or empty depending on implementation.

---

### **Access Method 3: save_recipe(recipe_data)**

- **Description:** Retrieves all ingredients submitted by a given user.
- **Parameters:** Stores recipe data returned by extrnal API.
- **Returns:** Stored recipe ID
- **Tests:**
  1. Valid data inserts successfully.
  2. Missing fields -> fail
  3. Duplicate recipe insertion -> follow deduplication policy.

---

# 3. Relationships Between Tables
- **users -> ingredients**: one-to-many.
- **recipes** is standalone

---

# 4. Pages That Access Database Information
- **Home Page:** may log searches.
- **Suggestions Page:** uses ingredients to request recipes.
- **Details Page:** looks up recipe in recipes cache.
- **Contact Page:** no DB use unless a messages table is later added.

---

# 5. Tests to Ensure Pages Access Database Correctly
### Home Page
- Verify ingredient input is correctly saved to DB.

### Suggestions Page
- Verify ingredients retrieved belong to logged-in user.
- Verify recipes displayed match DB cache when cached.

### Details Page
- Verify recipe is fetched from DB by recipe_id.

### Contact Page
- N/A