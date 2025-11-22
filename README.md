# React-PHP-CRUD API Integration

This React frontend communicates with a PHP backend API to perform CRUD operations via the endpoint:

Below are the detailed explanations of the four frontend methods:

---

## 1. CreateUser

The `CreateUser` component allows you to add a new user.

- **Frontend file:** [`CreateUser.js`](./path/to/CreateUser.js)
- **Form fields:** `first_name`, `last_name`, `age`
- **How it works:**
  - Uses `axios.post` to send a POST request with JSON payload to the backend API.
  - On success, it navigates to the list of users.

- **Example request payload:**
```json
{
  "first_name": "John",
  "last_name": "Doe",
  "age": "25"
}
