import useTienda from "../hooks/useTienda"
import Pedido from "../components/pedido"
import Layout from "../layout/layout"
export default function Resumen() {

  const{pedido} = useTienda()
  const isValid = pedido.length > 0

  return (
    <Layout title="Resumen">

      <div className="w-5/6 lg:w-11/12 mx-auto">
        <header className="py-10">
          <h1 className="text-center text-slate-950 font-black text-3xl uppercase antialiased">Resumen</h1>
          <p className="text-slate-900 text-lg">Revisa Tu Pedido.</p>
        </header>

        <section className="bg-white p-4 shadow rounded-none grid  gap-4 xl:grid-cols-2 2xl:grid-cols-3">
          {
            isValid ?(
            pedido.map( ped=>(
              <Pedido key={ped.id} pedido={ped}/>
            ))

            ):(
              <h2 className="text-center text-xl text-red-300">Selecciona Productos en la ventana Menu</h2>
            )
          }

        </section>

      </div>
    </Layout>
  )
}
