# API Documentation

## Endpoint: `/users/register`

### Method: `POST`

### Description:
This endpoint is used to register a new user in the system. It validates the input data, hashes the password, and creates a new user in the database. Upon successful registration, it returns a JSON Web Token (JWT) and the user details.

---

### Request Body:
The following fields are required in the request body:

| Field               | Type   | Description                                      |
|---------------------|--------|--------------------------------------------------|
| `fullname.firstname`| String | First name of the user (minimum 3 characters).   |
| `fullname.lastname` | String | Last name of the user (minimum 3 characters).    |
| `email`             | String | Email address of the user (must be valid).       |
| `password`          | String | Password for the user (minimum 5 characters).    |

Example:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "johndoe@example.com",
  "password": "securepassword"
}
```

### Example Response
- `user` (object) :
   - `fullname` (object) :
        - `firstname` (string) : User's firstname (min. 3 characters) 
        - `lastname` (string) : User's lastname (min. 3 characters) 
   - `email` (string) : User's email address (must be a valid email)
   - `password` (string) : User's password (min. 5 characters)
- `token` (string) : JWT Token 


## Endpoint: `/users/login`

### Method: `POST`

### Description:
This endpoint is used to authenticate a user. It validates the input data, checks the email and password against the database, and returns a JSON Web Token (JWT) upon successful authentication.

---

### Request Body:
The following fields are required in the request body:

| Field               | Type   | Description                                      |
|---------------------|--------|--------------------------------------------------|
| `email`             | String | Email address of the user (must be valid).       |
| `password`          | String | Password for the user (minimum 5 characters).    |

Example:
```json
{
  "email": "johndoe@example.com",
  "password": "securepassword"
}
```
### Example Response
- `token` (string) : JWT Token 
- `user` (object) :
   - `fullname` (object) :
        - `firstname` (string) : User's firstname (min. 3 characters) 
        - `lastname` (string) : User's lastname (min. 3 characters) 
   - `_id` (string) : User ID
   - `email` (string) : User's email address (must be a valid email)
   - `password` (string) : User's password (min. 5 characters)
   - `__v` (integer) : Version key

## Endpoint: `/users/profile`

### Method: `GET`

### Description:
This endpoint is used to retrieve the profile of the currently authenticated user.

---

### Headers:
- `Authorization` : Bearer `<JWT Token>`

---

### Response:

Success (200) :
- Description: Returns the user's profile.
- Response Body:
```json
{
  "user": {
    "_id": "user_id_here",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "johndoe@example.com"
  }
}
```

Error (401):
- Description: Unauthorized access (e.g., missing or invalid token).
- Response Body:
```json
{
  "message": "Unauthorized"
}
```

---

## Endpoint: `/users/logout`

### Method: `GET`

### Description:
This endpoint is used to log out the currently authenticated user by blacklisting their token.

---

### Headers:
- `Authorization` : Bearer `<JWT Token>`

---

### Response:

Success (200) :

- Description: Returns the user's profile.
- Response Body:
```json
{
  "message": "Logged out successfully"
}
```

Error (401):
- Description: Unauthorized access (e.g., missing or invalid token).
- Response Body:
```json
{
  "message": "Unauthorized"
}
```

---

Notes:
- Ensure that the token is passed in the `Authorization` header or as a cookie.
- The `/users/logout` endpoint adds the token to a blacklist to prevent further use.

