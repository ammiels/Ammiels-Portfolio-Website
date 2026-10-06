import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = process.env.PORT || 3000;
const frontendDist = path.resolve(__dirname, "../frontend/dist");

app.disable("x-powered-by");
app.use(express.json());

app.get("/api/health", (_request, response) => {
  response.json({ status: "ok", service: "ammiels-portfolio" });
});

app.use(express.static(frontendDist));

app.get("*", (_request, response) => {
  response.sendFile(path.join(frontendDist, "index.html"), (error) => {
    if (error && !response.headersSent) {
      response.status(404).send("Frontend build not found. Run npm run build first.");
    }
  });
});

app.listen(port, () => {
  console.log(`Portfolio server running at http://localhost:${port}`);
});
