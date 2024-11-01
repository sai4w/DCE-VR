import app from "./app";
import http from "http";

const port = process.env.PORT || 5000;
const server = http.createServer(app);
app.listen(port || 8080, () => {
  console.log(`Listening: http://localhost:${port}`);
});
