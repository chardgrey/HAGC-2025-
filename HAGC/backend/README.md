# HAGC API Documentation

## Authentication

- **JWT Required:** Most endpoints require a JWT in the `Authorization` header:
  ```
  Authorization: Bearer <token>
  ```
- **Obtain JWT:**  
  `POST /api/users/login`  
  Response: `{ "token": "...", "user": { ... } }`

## Users

### Register

- `POST /api/users/register`
- **Body:**
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "yourpassword"
  }
  ```
- **Response:**  
  `{ "user": { ... } }`

### Login

- `POST /api/users/login`
- **Body:**
  ```json
  { "email": "john@example.com", "password": "yourpassword" }
  ```
- **Response:**  
  `{ "token": "...", "user": { ... } }`

### Get User Info

- `GET /api/users/:id`
- **Auth Required**

## Pets

### List All Pets

- `GET /api/pets`
- **Public**

### Get Pet by ID

- `GET /api/pets/:id`
- **Public**

### Create Pet

- `POST /api/pets`
- **Auth:** Admin only
- **Body:**
  ```json
  {
    "name": "Buddy",
    "species": "Dog",
    "breed": "Labrador",
    "age": 3,
    "description": "Friendly and playful"
  }
  ```

### Update Pet

- `PUT /api/pets/:id`
- **Auth:** Admin only

### Delete Pet

- `DELETE /api/pets/:id`
- **Auth:** Admin only

## Adoption Applications

### Submit Application

- `POST /api/applications`
- **Auth Required**
- **Body:**
  ```json
  {
    "userId": "<user_id>",
    "petId": "<pet_id>",
    "message": "I would love to adopt Buddy!"
  }
  ```

### List All Applications

- `GET /api/applications`
- **Auth:** Admin only

### List Applications by User

- `GET /api/applications/user/:userId`
- **Auth:** User or Admin

### Update Application Status

- `PUT /api/applications/:id`
- **Auth:** Admin only
- **Body:**
  ```json
  { "status": "approved" }
  ```

### Delete Application

- `DELETE /api/applications/:id`
- **Auth:** Admin only

## Rescue Reports

### Create Rescue Report

- `POST /api/rescues`
- **Auth Required**
- **Body:**
  ```json
  {
    "reporterId": "<user_id>",
    "description": "Found an injured dog.",
    "image": "https://...",
    "location": "Central Park"
  }
  ```

### List All Rescue Reports

- `GET /api/rescues`
- **Auth:** Rescue officer or Admin

### List Reports by User

- `GET /api/rescues/user/:userId`
- **Auth:** User or Admin

### Update Report Status

- `PUT /api/rescues/:id`
- **Auth:** Rescue officer or Admin
- **Body:**
  ```json
  { "status": "resolved" }
  ```

### Delete Report

- `DELETE /api/rescues/:id`
- **Auth:** Rescue officer or Admin

## Error Handling

- Errors are returned as:
  ```json
  { "error": "Error message" }
  ```
- Validation errors:
  ```json
  { "errors": [{ "field": "fieldName", "message": "Validation message" }] }
  ```

## Notes for Frontend

- Always include JWT in the `Authorization` header for protected routes.
- Use the provided request bodies for POST/PUT.
- Handle error responses gracefully.
- For file/image uploads, use multipart/form-data if implemented.
