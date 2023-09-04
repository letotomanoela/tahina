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

app.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const user = await prisma.user.delete({
        where: { id: parseInt(id) },
    });
    res.json(user);
})

app.put("/:id", async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const user = await prisma.user.update({
        where: { id: parseInt(id) },
        data: { name },
    });
    res.json(user);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
