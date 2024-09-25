import express from "express";
import axios from "axios";
import { users } from "./data.js";
const url = "https://jsonplaceholder.typicode.com/posts";

const app = express();
const port = 3000;

app.get("/data", async (req, res) => {
  try {
    const response = await axios.get(url);

    res.status(200).json([
      {
        total_posts: response.data.length,
        posts: response.data,
      },
      {
        total_users: users.length,
        users: users,
      },
    ]);
  } catch (error) {
    res.status(400).json({
      message: "Data not found",
    });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
