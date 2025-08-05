/* eslint-disable no-undef */
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const users = require("./users");
const bodyParser = require("body-parser");

const app = express();
const port = 8080;
app.use(cors());
app.use(bodyParser.json());

const API_KEY = "573291b6-71a9-11f0-a562-0200cd936042"; // Replace with your actual key

// Send OTP
app.post("/send-otp", async (req, res) => {
  const { phone } = req.body;
  if (!phone) {
    return res
      .status(400)
      .json({ success: false, message: "Phone number required" });
  }

  try {
    const response = await axios.get(
      `https://2factor.in/API/V1/${API_KEY}/SMS/${phone}/AUTOGEN`
    );
    res.json({
      success: true,
      message: "OTP sent",
      sessionId: response.data.Details,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "OTP not sent",
      error: error.response.data,
    });
  }
});

// Verify OTP
app.post("/verify-otp", async (req, res) => {
  const { otp, sessionId } = req.body;
  if (!otp || !sessionId) {
    return res
      .status(400)
      .json({ success: false, message: "OTP and session ID required" });
  }

  try {
    const verifyRes = await axios.get(
      `https://2factor.in/API/V1/${API_KEY}/SMS/VERIFY/${sessionId}/${otp}`
    );
    res.json({ success: true, message: verifyRes.data.Details });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "OTP verification failed",
      error: error.response.data,
    });
  }
});

app.get("/users", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(users));
  // res.json({message: "Hello i am node JS.....!!!!"})
});

app.listen(port, () => {
  console.log(`Server listenig on port........!!!! ${port} `);
});
