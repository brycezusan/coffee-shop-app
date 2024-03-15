import Image from "next/image";
import useTienda from "../hooks/useTienda";
import { formatearMoneda } from "../../lib";
import { useState } from "react";

export default function Pedido({ nombre, imagen, id, cantidad, precio }) {
  const [edit, setEdit] = useState(false);
  const [newCantidad, setNewCantidad] = useState(cantidad);
  const { removeProducto, hanbleChangeCantidad } = useTienda();

  return (
    <article className="border min-h-[170px] relative rounded-2xl overflow-hidden grid grid-flow-col gap-3 items-center">
      <Image
        width={140}
        height={170}
        src={`/assets/img/${imagen}.jpg`}
        alt={`imagen-${nombre}`}
        className="img-pedido block object-cover"
      />
      <div className="text-center md:text-left space-y-1">
        <h2 className="font-bold xl:text-lg text-amber-500 truncate">{nombre}</h2>
        <p className="xl:text-lg  text-amber-500">
          Precio:{" "}
          <span className="text-slate-900">{formatearMoneda(precio)}</span>
        </p>
        <div className={`${edit ? 'flex gap-2 md:gap-6':''} `}>
          <p className=" text-amber-500">
            Cantidad: <span className="text-slate-900">{newCantidad}</span>
          </p>
          <div className={`${edit ? "flex gap-3" : "hidden"}`}>
            <button
              onClick={() => {
                if (newCantidad <= 1) return;
                setNewCantidad(newCantidad - 1);
              }}
              className="text-red-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </button>
            <button
              onClick={() => {
                if (newCantidad >= 5) return;
                setNewCantidad(newCantidad + 1);
              }}
              className="text-red-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </button>

            <button
              onClick={() => {
                hanbleChangeCantidad(id, newCantidad);
                setEdit(false);
              }}
              className="text-amber-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>
            </button>
          </div>
        </div>
        <p className=" text-amber-500">
          subtotal:{" "}
          <span className="text-slate-900">
            {formatearMoneda(newCantidad * precio)}
          </span>
        </p>
      </div>

      <button
        onClick={() => removeProducto(id)}
        className="text-red-500 absolute top-1 right-3"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
          />
        </svg>
      </button>
      <button
        onClick={() => {
          setEdit(!edit);
        }}
        className="absolute bottom-1 right-3 text-blue-800"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
          />
        </svg>
      </button>
    </article>
  );
}
