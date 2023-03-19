import express from "express";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config({ path: "./config/config.env" });

const app = express();

// Constants for API endpoint and header values
const XR_API_KEY = process.env.XRAPID_API_KEY;
const XR_API_HOST = process.env.XR_API_HOST;

app.get("/", (req, res) => res.send("Server running"));

app.get("/api/weather", async (req, res) => {
  const { location } = req.query;

  if (!location || location.trim() === "") {
    return res.status(400).send("Invalid or missing location parameter");
  }

  const options = {
    method: "GET",
    url: "https://weatherapi-com.p.rapidapi.com/current.json",
    params: { q: location },
    headers: {
      "X-RapidAPI-Key": "2b0fe4d5efmshe6ee64f7d20f879p1677b5jsn4513724cf147",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    const weatherData = response.data;
    res.json(weatherData);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching weather data");
  }
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
