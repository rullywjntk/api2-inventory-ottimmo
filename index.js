const express = require("express");

const app = express();

const PORT = 3000;

app.use((request, response) => {
  response.status(200).json({
    message: "Welcome",
  });
});

app.use((request, response, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

app.use((error, request, response, next) => {
  response.status(error.status || 500);
  response.json({
    error: {
      message: error.message,
    },
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
