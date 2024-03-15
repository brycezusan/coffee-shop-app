import Image from "next/image";
import { formatearFecha, formatearMoneda } from "../lib";
import axios from "axios";
import { toast } from "react-toastify";

export default function Orden({ id, nombre, fecha, total, pedido }) {
  
  const completarOrden = async()=>{
    try {
      const res = await axios.post(`/api/orden/${id}`)
      toast.success('Orden lista')
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <article className="bg-white relative self-baseline	 shadow p-6 rounded-md font-bold text-xl space-y-3">
      <h2 className="text-center text-2xl  text-amber-500">
        Administrar Orden
      </h2>
      <h3 className=" font-bold">Orden : {id}</h3>
      <div className="flex flex-col gap-3 lg:flex-row md:justify-between md:gap-0">
        <p>
          Cliente: <span className="text-slate-700">{nombre}</span>
        </p>
        <p>
          Fecha: <span className="text-slate-700">{formatearFecha(fecha)}</span>
        </p>
      </div>
      <div className="flex flex-wrap py-6 justify-between gap-4">
        {pedido.map((ped) => (
          <div key={ped.id} className="flex gap-2 items-center">
            <Image
              width={120}
              height={90}
              alt="image-producto"
              src={`/assets/img/${ped.imagen}.jpg`}
              className="w-1/4"
            />
            <div className="text-amber-500 w-2/4">
              <p>
                Cantidad: <span className="text-slate-700">{ped.cantidad}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
        <p className="text-2xl lg:text-3xl font-black">
          Total a Pagar: {formatearMoneda(total)}
        </p>
        <button 
          onClick={completarOrden}
          className="text-blue-700 absolute top-0 right-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 lg:w-8 lg:h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </button>
    </article>
  );
}
