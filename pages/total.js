import { useEffect, useCallback } from "react";
import Layout from "./layout/layout";
import useTienda from "./hooks/useTienda";
import { formatearMoneda } from "./lib";
export default function Total() {

  const { pedido , nombre, totalPagar , setNombre , crearOrden } = useTienda();

  const comprobarPedido = useCallback(() => {
    return pedido.length === 0 || nombre === '' || nombre.length <= 3;
  }, [pedido,nombre]);

  useEffect(() => {
    comprobarPedido();
  }, [comprobarPedido, pedido]);



  return (
    <Layout title="Datos">
      <div className="w-5/6 lg:w-11/12 mx-auto">
        <header className="py-10">
          <h1 className="text-center text-slate-950 font-black text-3xl uppercase antialiased">
            Datos y Pagos
          </h1>
          <p className="text-slate-900 text-lg">
            Finaliza y confirma Tu Pedido.
          </p>
        </header>

        <form onSubmit={crearOrden} className="space-y-3 max-w-lg">
          <label htmlFor="nombre" className="block">
            <span className="font-bold text-slate-900">Nombre</span>
            <input
              type="text"
              id="nombre"
              className="mt-1 py-1 pl-5 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
              placeholder="Nombre Cliente"
              value={nombre}
              onChange={e=>setNombre(e.target.value)}
            />
          </label>
          <p className="font-black text-2xl pb-5">
            Total a pagar: <span className="">{formatearMoneda(totalPagar)}</span>
          </p>
          <input
            type="submit"
            value="confirmar pedido"
            disabled={comprobarPedido()}
            className={`${ comprobarPedido() ? 'cursor-not-allowed bg-indigo-300' : 'bg-indigo-600 hover:bg-indigo-700 hover:cursor-pointer hover:ring-1 '} text-white uppercase font-bold text-center py-2 rounded-md w-[220px]`}
          />
        </form>
      </div>
    </Layout>
  );
}
