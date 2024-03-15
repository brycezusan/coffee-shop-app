/* eslint-disable react-hooks/exhaustive-deps */
import Image from "next/image";
import useTienda from "../hooks/useTienda";
import { formatearMoneda } from "../utils/index";
import { useEffect, useState } from "react";

export default function ModalProducto() {
  const [cantidad, setCantidad] = useState(1);
  const [editar, setEditar] = useState(false);
  const { producto, pedido, handleChangeModal, handleAddPedido } = useTienda();

  useEffect(() => {
    if (pedido.some((ped) => ped.id === producto.id)) {
      const index = pedido.findIndex((ped) => ped.id === producto.id);
      const productoPedido = pedido[index];
      setCantidad(productoPedido.cantidad);
      setEditar(true);
    }
  }, [pedido]);
  
  return (
    <article className="flex items-center gap-10 relative">
      <Image
        width={200}
        height={150}
        alt={`imagen-producto-${producto.nombre}`}
        src={`/assets/img/${producto.imagen}.jpg`}
        className="block object-cover aspect-auto "
      />
      <div className="text-xl text-center text-amber-400  lg:text-left space-y-4">
        <h2>{producto.nombre}</h2>
        <p>
          Precio:{" "}
          <span className="text-slate-500">
            {formatearMoneda(producto.precio)}
          </span>
        </p>
        <div>
          <label className="text-xl" htmlFor="cantidad">
            Cantidad
          </label>{" "}
          <div className="flex  justify-center gap-4 text-slate-800 mt-2">
            <button
              onClick={() => {
                if (cantidad <= 1) return;
                setCantidad(cantidad - 1);
              }}
              className="text-red-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 md:w-8 md:h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </button>
            <p className="text-2xl">{cantidad}</p>
            <button
              onClick={() => {
                if (cantidad >= 5) return;
                setCantidad(cantidad + 1);
              }}
              className="text-red-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 md:w-8 md:h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div>
          <button
            onClick={() => {
              handleAddPedido({ ...producto, cantidad });
              handleChangeModal();
            }}
            className="py-1 block w-full bg-sky-600 uppercase text-base font-bold text-white rounded-lg"
          >
            {editar ? "actualizar pedido" : "añadir pedido"}
          </button>
          
        </div>
      </div>
      <button
        onClick={() => handleChangeModal()}
        className="text-red-800 absolute -top-4 -right-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </button>
    </article>
  );
}
