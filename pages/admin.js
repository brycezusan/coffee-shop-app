import useSWR from "swr";
import Layout from "../layout/adminLayout"
import Orden from "../components/orden"
import axios from "axios";

const fetcher = (url) => axios(url).then((res) => res.data);

export default function Admin() {
  const { data } = useSWR("/api/orden", fetcher ,{refreshInterval:500});

  const isValid = data?.length > 0;

  return (
    <Layout pagina="administracion">
      <div className="w-11/12 mx-auto">
        <header className=" text-center pt-4 font-bold text-slate-900 space-y-6">
          <h1 className=" text-slate-950 font-black text-3xl uppercase antialiased">
            Panel de Administración
          </h1>
          <p className="text-slate-900 text-lg">Gestiona las Ordenes</p>
        </header>

        <h2 className="text-3xl pt-10 pb-5 font-black text-slate-700 mb-10">Ordenes</h2>
        <section className="grid gap-4 xl:grid-cols-2">
          {isValid ? (
            data.map((d) => <Orden key={d.id} {...d} />)
          ) : (
            <h2 className="text-2xl text-center font-black text-slate-800">
              No hay Ordenes pendientes
            </h2>
          )}
        </section>
      </div>
    </Layout>
  );
}
