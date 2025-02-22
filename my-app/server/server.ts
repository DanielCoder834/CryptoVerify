import express, { Request, Response } from "express";
// npx tsx server/server.ts
const app = express();
const port = 8080;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World!");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
