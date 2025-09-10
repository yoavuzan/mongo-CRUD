# Express MongoDB API Server

This project is a simple and robust REST API server built with Node.js, Express, and MongoDB. It provides a basic structure for creating, reading, updating, and deleting resources, with a focus on good structure and security best practices.

## Features

- **RESTful API:** A full CRUD API for managing 'Person' resources.
- **MongoDB Integration:** Uses Mongoose for elegant MongoDB object modeling.
- **Well-Structured:** Code is organized into `routes`, `controllers`, and `middleware` for scalability and maintainability.
- **Security:** Includes rate limiting to protect against basic DDoS attacks.
- **Request Logging:** Uses `morgan` to log all incoming requests to the console for easy debugging.
- **Centralized Error Handling:** A custom error handler ensures all errors are caught and returned in a consistent JSON format.

## Getting Started

### Prerequisites

- Node.js
- A MongoDB database (local or cloud-based like MongoDB Atlas)

### Installation & Setup

1.  **Clone the repository** or download the source code.

2.  **Install NPM packages:**
    ```bash
    npm install
    ```

3.  **Create a `.env` file** in the root of the project and add your MongoDB connection string:
    ```
    MONGODB_URI=your_mongodb_connection_string
    ```

### Running the Application

To start the server in development mode (with auto-restarting), run:

```bash
npm run dev
```

The server will start on `http://localhost:3000`.

## API Endpoints

The following endpoints are available for the `Person` resource:

| Method | Route          | Description                |
|--------|----------------|----------------------------|
| `POST` | `/person`      | Creates a new person.      |
| `GET`  | `/people`      | Retrieves all people.      |
| `GET`  | `/person/:id`  | Retrieves a single person by ID. |
| `PUT`  | `/person/:id`  | Updates a person by ID.    |
| `DELETE`| `/person/:id` | Deletes a person by ID.    |

### Example: Create a Person

Send a `POST` request to `http://localhost:3000/person` with the following JSON body:

```json
{
  "firstname": "John",
  "lastname": "Doe",
  "age": 30
}
```