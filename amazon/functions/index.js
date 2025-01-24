/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51Qk26BDztWJChYG5AUbmWP7wC7px7CExyTtsR29ypt9Iig6ov82Icps4zVR2URQBqJvuSEV02OO8Cw8ia1wVv3Mn00grpdPXBf"
);
//API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routers
app.get("/", (request, response) => response.status(200).send("hello world"));
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment Request Received BOOM!!! for amount >>> ", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "inr",
  });
  //ok created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

//Example endpoint
//http://127.0.0.1:5001/clone-1cd78/us-central1/api
