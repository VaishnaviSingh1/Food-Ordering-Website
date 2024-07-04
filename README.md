# Full-Stack-Food-Delivery-Project
****Home Page****

![img1](https://github.com/VaishnaviSingh1/Full-Stack-Food-Delivery-Projec/assets/98222001/25d55b4f-3b49-48de-8402-1dbefef34fae)

**Menu page**

![img2](https://github.com/VaishnaviSingh1/Full-Stack-Food-Delivery-Projec/assets/98222001/700aebe0-0a8a-434d-a7ee-2b97d890720f)

**Cart Page**

![img3](https://github.com/VaishnaviSingh1/Full-Stack-Food-Delivery-Projec/assets/98222001/56c2f60e-b7e4-444c-9141-13a94c684393)

**Admin Panel**

![img 4](https://github.com/VaishnaviSingh1/Full-Stack-Food-Delivery-Projec/assets/98222001/6e362e9b-31b9-447f-97c6-341871c7e6f2)


Build Full Stack Food Ordering Website using React JS, MongoDB, Express, Node JS &amp; Strip

**Project Overview**

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

This project implements a complete food ordering website using React JS, MongoDB, Express, Node JS, and Stripe payment gateway. Key features include:

**Frontend Website**: Allows users to browse food items, add them to the cart, and place orders.
**Admin Panel**: Enables administrators to manage food items and view orders.
**Backend Server**: Handles API requests, user authentication, shopping cart functionality, and interacts with MongoDB for data storage.
**User Authentication**: Supports user registration, login, and maintains session-based shopping carts.
**Shopping Cart Functionality**: Users can add/remove food items from their carts.
**Stripe Payment Integration**: Facilitates secure online payments for orders.
**Order Status Updates**: Provides real-time updates on order processing.

**Dependencies
Backend (Node.js / Express)**
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Dependencies:
express: Web framework for Node.js
mongoose: MongoDB object modeling for Node.js
jsonwebtoken: JSON Web Token implementation for authentication
bcrypt: Password hashing library
cors: Cross-Origin Resource Sharing middleware
dotenv: Environment variable management
stripe: Stripe API for payment processing
multer: Middleware for handling file uploads

**Frontend (React)**

**Dependencies:**
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

react: JavaScript library for building user interfaces
react-dom: React package for DOM rendering
react-router-dom: Declarative routing for React applications
axios: Promise-based HTTP client for the browser and Node.js

**Environment Variables**
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Ensure you have a .env file in your backend directory with the following variables:

JWT_SECRET: Secret key for JWT token generation
STRIPE_SECRET_KEY: Secret key for Stripe API integration


**API Documentation**
**Backend API Routes
User Routes:**
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

POST /register: Register a new user.
POST /login: Login existing user.
Cart Routes:

POST /add: Add an item to the user's cart.
POST /remove: Remove an item from the user's cart.
POST /get: Retrieve the user's cart data.
Food Routes:

POST /add: Add a new food item.
GET /list: Retrieve all food items.
POST /remove: Remove a food item.
Order Routes:

POST /place: Place a new order.
POST /verify: Verify order payment.
POST /userorders: Retrieve orders for a specific user.
GET /list: Retrieve all orders.
POST /status: Update order status.

**Database Structure**

**MongoDB Schemas**
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Food Model
const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true }
});

const Food = mongoose.model("Food", foodSchema);

module.exports = Food;

Order Model
const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  items: { type: Array, required: true },
  amount: { type: Number, required: true },
  address: { type: Object, required: true },
  status: { type: String, default: "Food processing" },
  date: { type: Date, default: Date.now() },
  payment: { type: Boolean, default: false }
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
User Model
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  cartData: { type: Object, default: {} }
}, { minimize: false });

const User = mongoose.model("User", userSchema);

module.exports = User;


**Deployment**

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


Deploy the backend (Node.js / Express) and frontend (React) to your preferred hosting services.
Configure environment variables (JWT_SECRET, STRIPE_SECRET_KEY) in your hosting environment.

