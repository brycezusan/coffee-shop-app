import useTienda from "../hooks/useTienda";
import Layout from "../layout/layout"
import CardProducto from "../components/cardProducto"

export default function Home() {
  const { categoriaActual } = useTienda();
  return (
    <>
      <Layout title={`${categoriaActual?.nombre}`}>
        <div className="w-11/12 mx-auto pt-4 font-bold text-slate-900 space-y-6">
          <h1 className="text-center text-slate-950 font-black text-3xl uppercase antialiased">
            {categoriaActual?.nombre}
          </h1>
          <p className="text-slate-900 text-lg">
            Elige y personaliza tu pedido.
          </p>
        </div>

        <section className="py-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 justify-items-center justify-center mx-auto w-5/6 lg:w-11/12">
          {categoriaActual?.productos?.map((prod) => (
            <CardProducto key={prod.id} producto={prod} />
          ))}
        </section>
      </Layout>
    </>
  );
}
