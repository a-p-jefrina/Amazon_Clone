# Amazon Clone

A fully-functional Amazon clone built using React.js, Firebase, and Stripe. This project includes user authentication, product listing, and a checkout system with payment processing.

## Features
- User Authentication using Firebase.
- Product listing and dynamic cart functionality.
- Secure payment processing using Stripe.
- Responsive design for desktop and mobile views.
- Order tracking and management.
- Customizable homepage with slider and hover effects.

---

## Getting Started

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [Firebase CLI](https://firebase.google.com/docs/cli)

### Steps to Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/amazon-clone.git
   cd amazon-clone
   ```

2. **Install Dependencies**
   ```bash
   npm install
   npm config set legacy-peer-deps true
   npm install --save-dev ajv@^7
   ```

3. **Setup Firebase**
   - Log in to Firebase CLI:
     ```bash
     firebase login
     ```
   - Initialize Firebase:
     ```bash
     firebase init
     ```
     - Select **Hosting** and **Firestore Database**.
     - Choose the project to link.
     - Set the build directory as `build`.

4. **Run the Project**
   ```bash
   npm start
   ```

5. **Build and Deploy**
   - Create a production build:
     ```bash
     npm run build
     ```
   - Deploy to Firebase:
     ```bash
     firebase deploy
     ```

6. **Optional Firebase Commands**
   - Start emulators locally:
     ```bash
     firebase emulators:start
     ```
   - Deploy hosting only:
     ```bash
     firebase deploy --only hosting
     ```
   - Deploy functions only (requires Blaze plan):
     ```bash
     firebase deploy --only functions
     ```

---

## Folder Structure

```
/src
  |-- components
  |     |-- Header.js
  |     |-- Footer.js
  |     |-- Slider.js
  |     |-- Product.js
  |     |-- Checkout.js
  |     |-- CheckoutProduct.js
  |     |-- Login.js
  |     |-- Payment.js
  |     |-- Orders.js
  |-- StateProvider.js
  |-- reducer.js
  |-- App.js
  |-- axios.js
  |-- firebase.js
```

- **`Header.js`**: Navigation bar component with user authentication and cart links.
- **`Footer.js`**: Footer component with site links and information.
- **`Slider.js`**: Customizable slider for the homepage.
- **`Product.js`**: Component for displaying individual products.
- **`Checkout.js`**: Component for the checkout page.
- **`CheckoutProduct.js`**: Component for items in the checkout cart.
- **`Login.js`**: User authentication component.
- **`Payment.js`**: Component for Stripe-based payment processing.
- **`Orders.js`**: Component for displaying past orders.
- **`StateProvider.js`**: Context API setup for global state management.
- **`reducer.js`**: Reducer functions for handling state updates.
- **`axios.js`**: Axios instance for handling API requests.
- **`firebase.js`**: Firebase configuration and initialization.

---

## Dependencies

| Package             | Description                                      |
|---------------------|--------------------------------------------------|
| `axios`             | To handle HTTP requests.                        |
| `react-router-dom`  | For routing between pages.                      |
| `firebase`          | To handle backend operations and authentication.|
| `stripe`            | For payment processing.                         |

Install them using:
```bash
npm install axios react-router-dom firebase stripe
```

---

## Firebase Hosting Steps

1. Add a project on Firebase.
2. Select the **Web icon** and register your app.
3. Set up **Hosting** and **Firestore Database** during Firebase initialization.
4. Navigate to **Project Settings** to retrieve configuration keys.

---

## Cleaning Up

After creating the app with `create-react-app`, remove the following files:
- `App.test.js`
- `setupTests.js`
- `logo.svg`

---

## Hosting Link

https://clone-1cd78.web.app/

## License

This project is licensed under the MIT License. See the LICENSE file for details.
