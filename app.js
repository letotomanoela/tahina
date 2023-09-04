import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const app = express();

app.use(express.json());

const PORT = 3000;

app.get("/", async (req, res) => {
  const user = await prisma.user.findMany();
  res.json(user);
});

app.post("/", async (req, res) => {
  const { name } = req.body;
  const user = await prisma.user.create({
    data: { name },
  });
  res.json(user);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
