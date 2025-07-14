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

---

## Endpoint : `/captains/register`

### Method: `POST`

**Description:**  
Registers a new captain with their details and vehicle information.

---

**Request Body:**
| Field                  | Type   | Description                                      |
|------------------------|--------|--------------------------------------------------|
| `fullname.firstname`   | String | First name of the captain (minimum 3 characters).|
| `fullname.lastname`    | String | Last name of the captain (minimum 3 characters). |
| `email`                | String | Email address of the captain (must be valid).    |
| `password`             | String | Password for the captain (minimum 5 characters). |
| `vehicle.color`        | String | Vehicle color (minimum 3 characters).            |
| `vehicle.plate`        | String | Vehicle plate number (minimum 3 characters).     |
| `vehicle.capacity`     | Number | Vehicle capacity (must be at least 1).           |
| `vehicle.vehicleType`  | String | Vehicle type (e.g., car, bike, auto).            |

**Example Request:**
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "johndoe@example.com",
  "password": "securepassword",
  "vehicle": {
    "color": "Red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

**Example Response:**
- **201 Created:**
```json
{
  "token": "jwt_token_here",
  "captain": {
    "_id": "captain_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "johndoe@example.com",
    "vehicle": {
      "color": "Red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    },
    "status": "inactive"
  }
}
```
- **400 Bad Request:**
```json
{
  "message": "Captain already exists"
}
```

---

## Endpoint : `/captains/login`

### Method: `POST`

**Description:**  
Logs in a captain using their email and password.

---

**Request Body:**
| Field      | Type   | Description                                      |
|------------|--------|--------------------------------------------------|
| `email`    | String | Email address of the captain (must be valid).    |
| `password` | String | Password for the captain (minimum 5 characters). |

**Example Request:**
```json
{
  "email": "johndoe@example.com",
  "password": "securepassword"
}
```

**Example Response:**
- **200 OK:**
```json
{
  "token": "jwt_token_here",
  "captain": {
    "_id": "captain_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "johndoe@example.com",
    "vehicle": {
      "color": "Red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    },
    "status": "inactive"
  }
}
```
- **401 Unauthorized:**
```json
{
  "message": "Invalid email or password"
}
```

---

## Endpoint : `/captains/profile`

### Method: `GET`


**Description:**  
Fetches the profile of the currently logged-in captain.

---

**Headers:**
| Header          | Value               | Description                     |
|------------------|---------------------|---------------------------------|
| `Authorization` | Bearer `<JWT Token>`| The JWT token of the captain.   |

**Example Response:**
- **200 OK:**
```json
{
  "captain": {
    "_id": "captain_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "johndoe@example.com",
    "vehicle": {
      "color": "Red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    },
    "status": "inactive"
  }
}
```
- **401 Unauthorized:**
```json
{
  "message": "Unauthorized"
}
```

---

## Endpoint : `/captains/logout`

### Method: `GET`

**Description:**  
Logs out the currently logged-in captain by blacklisting their token.

---

**Headers:**
| Header          | Value               | Description                     |
|------------------|---------------------|---------------------------------|
| `Authorization` | Bearer `<JWT Token>`| The JWT token of the captain.   |

**Example Response:**
- **200 OK:**
```json
{
  "message": "Logged out successfully"
}
```
- **401 Unauthorized:**
```json
{
  "message": "Unauthorized"
}
```

---

### Notes:
- Ensure that the token is passed in the `Authorization` header or as a cookie.
- The `/captains/logout` endpoint adds the token to a blacklist to prevent further use.

---

## Endpoint: `/maps/get-coordinates`

### Method: `GET`

### Description:
Returns the latitude and longitude for a given address using the Google Maps API.

---

### Query Parameters:
| Parameter | Type   | Description                        |
|-----------|--------|------------------------------------|
| `address` | String | The address to geocode (min 3 chars)|

### Headers:
- `Authorization`: Bearer `<JWT Token>`

### Example Request:
```
GET /maps/get-coordinates?address=Kolkata
```

### Example Response:
```json
{
  "ltd": 22.5726,
  "lang": 88.3639
}
```

---

## Endpoint: `/maps/get-distance-time`

### Method: `GET`

### Description:
Returns the distance and estimated travel time between two locations.

---

### Query Parameters:
| Parameter      | Type   | Description                        |
|----------------|--------|------------------------------------|
| `origin`       | String | Starting address (min 3 chars)     |
| `destination`  | String | Destination address (min 3 chars)  |

### Headers:
- `Authorization`: Bearer `<JWT Token>`

### Example Request:
```
GET /maps/get-distance-time?origin=Kolkata&destination=Howrah
```

### Example Response:
```json
{
  "distance": {
    "text": "10 km",
    "value": 10000
  },
  "duration": {
    "text": "30 mins",
    "value": 1800
  },
  "status": "OK"
}
```

---

## Endpoint: `/maps/get-suggestions`

### Method: `GET`

### Description:
Returns autocomplete suggestions for a location input.

---

### Query Parameters:
| Parameter | Type   | Description                        |
|-----------|--------|------------------------------------|
| `input`   | String | The partial address to autocomplete (min 3 chars)|

### Headers:
- `Authorization`: Bearer `<JWT Token>`

### Example Request:
```
GET /maps/get-suggestions?input=Kolk
```

### Example Response:
```json
[
  {
    "description": "Kolkata, West Bengal, India",
    "place_id": "ChIJZ_YISduC-DkR1Fv7awOa-PA"
  },
  ...
]
```

---

## Endpoint: `/rides/create`

### Method: `POST`

### Description:
Creates a new ride with fare calculation based on pickup and destination.

---

### Headers:
- `Authorization`: Bearer `<JWT Token>`

### Request Body:
| Field         | Type   | Description                                      |
|---------------|--------|--------------------------------------------------|
| `pickup`      | String | Pickup location (min 3 chars)                    |
| `destination` | String | Destination location (min 3 chars)               |
| `vehicleType` | String | One of: `auto`, `car`, `moto`                    |

**Example Request:**
```json
{
  "pickup": "Kolkata",
  "destination": "Howrah",
  "vehicleType": "car"
}
```

### Example Response:
```json
{
  "_id": "ride_id_here",
  "user": "user_id_here",
  "pickup": "Kolkata",
  "destination": "Howrah",
  "fare": 250.5,
  "otp": "1234",
  "status": "pending",
  // ...other ride fields...
}
```

### Error Responses:
- **400 Bad Request:** Validation errors (missing or invalid fields)
- **500 Internal Server Error:** Server or calculation errors

---

**Note:**  
All `/maps/*` and `/rides/create` endpoints require a valid JWT token in the `Authorization` header.