import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req, res) {

  // Cargar ordenes
  const ordenes = await prisma.orden.findMany({
    where: {
      estado: false,
    },
  });
  res.status(200).json(ordenes);


  // Generar Orden
  if (req.method == "POST") {
    const orden = await prisma.orden.create({
      data: {
        nombre: req.body.nombre,
        fecha: req.body.fecha,
        total: req.body.total,
        pedido: req.body.pedido,
      },
    });

    res.json(orden);
  }
}
