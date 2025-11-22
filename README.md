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

## 2. ListUser

The `ListUser` component displays all users in a table.

- **Frontend file:** [`ListUser.js`](./mnt/data/90078256-c466-4c84-b99d-b904c988f099.png)
- **Functionality:**
  - Fetches all users from the backend using `axios.get`.
  - Displays users in a table with columns: `ID`, `First Name`, `Last Name`, `Age`, and `Action`.
  - Each row includes **Update** and **Delete** buttons that link to the respective components.

- **Backend request example:**
```javascript
axios.get('http://localhost:8080/react-api/api/listdata.php')
  .then(response => setUsers(response.data));
