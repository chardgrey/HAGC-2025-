# HAGC API Test Guide

This guide lists all API endpoints, sample request bodies, and required tokens for testing.

---

## Users

### Register User

**POST /api/users/register**
_No token required_
**Body:**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "yourpassword"
}
```

### Login User

**POST /api/users/login**
_No token required_
**Body:**

```json
{
  "email": "john@example.com",
  "password": "yourpassword"
}
```

---

## Pets

### Get All Pets

**GET /api/pets**
_No token required_

### Get Pet by ID

**GET /api/pets/:id**
_No token required_

### Create Pet

**POST /api/pets**
_ADMIN token required_
**Body:**

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

**PUT /api/pets/:id**
_ADMIN token required_
**Body:**

```json
{
  "name": "Buddy Updated",
  "age": 4
}
```

### Delete Pet

**DELETE /api/pets/:id**
_ADMIN token required_

---

## Adoption Applications

### Submit Application

**POST /api/applications**
_USER token required_
**Body:**

```json
{
  "userId": "<user_id>",
  "petId": "<pet_id>",
  "message": "I would love to adopt Buddy!"
}
```

### Get All Applications

**GET /api/applications**
_ADMIN token required_

### Get Applications by User

**GET /api/applications/user/:userId**
_USER or ADMIN token required_

### Update Application Status

**PUT /api/applications/:id**
_ADMIN token required_
**Body:**

```json
{
  "status": "approved"
}
```

### Delete Application

**DELETE /api/applications/:id**
_ADMIN token required_

---

## Rescue Reports

### Create Rescue Report

**POST /api/rescues**
_USER token required_
**Body:**

```json
{
  "reporterId": "<user_id>",
  "description": "Found an injured dog near the park.",
  "image": "https://example.com/image.jpg",
  "location": "Central Park"
}
```

### Get All Rescue Reports

**GET /api/rescues**
_RESCUE OFFICER or ADMIN token required_

### Get Rescue Reports by User

**GET /api/rescues/user/:userId**
_USER or ADMIN token required_

### Update Rescue Report Status

**PUT /api/rescues/:id**
_RESCUE OFFICER or ADMIN token required_
**Body:**

```json
{
  "status": "resolved"
}
```

### Delete Rescue Report

**DELETE /api/rescues/:id**
_RESCUE OFFICER or ADMIN token required_

---

## Notes

- For protected routes, add the header:
  `Authorization: Bearer <your_token>`
- Replace `<user_id>`, `<pet_id>` with actual IDs from your database.
- All request bodies should be sent as JSON.
