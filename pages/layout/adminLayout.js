import clsx from "clsx";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AdminLayout({ children, pagina }) {
  const pathname =usePathname()
  return (
    <>
      <Head>
        <title>{`Café - ${pagina}`}</title>
        <meta name="description" content="Quosco Cafetería" />
      </Head>

      <div className="md:flex">
        <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5 py-5 bg-yellow-100">
          <Image
            width={300}
            height={100}
            src="/assets/img/logo.svg"
            alt="imagen logotipo"
            className="logo block mx-auto max-w-xs"
            priority
          />

          <nav className="flex justify-center py-12 text-lg gap-4 uppercase text-slate-600 md:flex-col md:items-center">
            <Link href='/admin' className={clsx(
              {
                "text-slate-900 font-black" : pathname === "/admin"
              }
            )} >Ordenes</Link>
            <Link href='/admin/resumen' className={clsx({
              "text-slate-900 font-black" : pathname === "/admin/resumen"
            })}>Resumen</Link>
          </nav>
        </aside>

        <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll bg-indigo-50/30 ">
          <div className="p-10">{children}</div>
        </main>
      </div>
      <ToastContainer />
    </>
  );
}
