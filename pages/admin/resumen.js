import AdminLayout from "../layout/adminLayout";
import { PrismaClient } from "@prisma/client";
import { formatearMoneda } from "../../lib/index";
import { useEffect, useState } from "react";
const prisma = new PrismaClient();

export async function getStaticProps() {
  const ordenes = await prisma.orden.findMany({
    where: {
      estado: true,
    },
  });

  return {
    props: {
      ordenes,
    },
  };
}

export default function AdminResumen({ ordenes }) {
  const [atentidos] = useState(ordenes)
  const [totalVentas , setTotalVentas] = useState(0)

  useEffect(() => {
    const total = atentidos.reduce( (acum , valor)=> acum + (valor.total), 0)
    setTotalVentas(total)
  }, [atentidos])
  

  return (
    <AdminLayout pagina="Admin Resumen">
      <div className="w-5/6 lg:w-11/12 mx-auto">
        <header className="py-10">
          <h1 className="text-center text-slate-950 font-black text-3xl uppercase antialiased">
            Resumen de Ventas
          </h1>
          <p className="text-slate-900 text-lg mt-10">
            Revisa las ventas del dia
          </p>
        </header>

        <h2 className="text-center text-2xl font-black text-red-500 pb-4">Ventas del Dia - <span className="text-slate-950">{formatearMoneda(totalVentas)}</span></h2>
        <ul className="bg-white shadow w-full p-8 grid lg:grid-cols-3 xl:grid-cols-4">
          {
            atentidos.map(orden =>(
              <li key={orden.id} className="list-disc	">
                <h2 className="text-amber-600 antialiased">Venta - <span className="text-slate-900">{orden.id}</span> : Total: <span className="text-slate-900">{formatearMoneda(orden.total)}</span></h2>
              </li>
            ))
          }
        </ul>
      </div>
    </AdminLayout>
  );
}
