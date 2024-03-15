/* eslint-disable react-hooks/rules-of-hooks */
import Head from "next/head";
import Sidebar from "../components/sidebar";
import ModalProducto from "../components/modal"
import Modal from "react-modal";
import useTienda from "../hooks/useTienda";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navegacion from "../components/navegacion";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement('#__next');


export default function layout({ children, title }) {

  const { modal } = useTienda()

  return (
    <>
      <Head>
        <title>{`Coffee - ${title}`}</title>
        <meta
          name="description"
          content="Tiendita,Quiosko,CooffeShop , Bazar"
        />
      </Head>
      <main className="md:flex ">
        <Sidebar />
        <section className="md:w-4/6 xl:w-9/12 2xl:w-10/12 mx-auto h-screen md:overflow-y-scroll bg-indigo-50/10 py-10">
          <Navegacion />
          {children}
        </section>
      </main>
     {
      modal && (
        <Modal isOpen={modal} style={customStyles}>
          <ModalProducto  />
        </Modal>
      )
     }
     <ToastContainer />
    </>
  );
}
