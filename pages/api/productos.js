import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  try {
    const productos = await prisma.producto.findMany({
      where:{
        categoriaId:1
      }
    });
    res.status(200).json(productos);
  } catch (error) {
    console.log(error);
  }
}
