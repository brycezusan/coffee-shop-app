import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const CoffeeContext = createContext();

const CoffeeProvider = ({ children }) => {
  const [categorias, setCategorias] = useState([]);
  const [categoriaActual, setCategoriaActual] = useState({});
  const [producto, setProducto] = useState({});
  const [modal, setModal] = useState(false);
  const [pedido, setPedido] = useState([]);
  const [nombre, setNombre] = useState("");
  const [totalPagar, setTotalPagar] = useState(0);

  const router = useRouter();

  useEffect(() => {
    obtenerCategorias();
  }, []);

  useEffect(() => {
    setCategoriaActual(categorias[0]);
  }, [categorias]);

  useEffect(() => {
    const total = pedido.reduce(
      (acum, valor) => acum + valor.precio * valor.cantidad,
      0
    );
    setTotalPagar(total);
  }, [pedido]);

  const obtenerCategorias = async () => {
    const { data } = await axios("/api/categorias");
    setCategorias(data);
  };

  const handleClickCategoria = (id) => {
    const categoria = categorias.filter((cat) => cat.id === id);
    setCategoriaActual(categoria[0]);
    router.push("/");
  };
  const handleSelectProduct = (producto) => {
    setProducto(producto);
  };

  const handleChangeModal = () => {
    setModal(!modal);
  };

  const handleAddPedido = (orden) => {
    const repetido = pedido.some((ped) => ped.id === orden.id);
    if (repetido) {
      const newPedido = pedido.map((ped) => {
        if (ped.id === orden.id) {
          ped.cantidad = orden.cantidad;
        }
        return ped;
      });
      setPedido[newPedido];
      toast.info("Pedido actualizado");
    } else {
      setPedido([...pedido, orden]);
      toast.success("Agregado");
    }
  };

  const hanbleChangeCantidad = (id, cantidad) => {
    const index = pedido.findIndex((ped) => ped.id === id);
    pedido[index].cantidad = cantidad;
    toast.info("cantidad actualizada");
  };

  const removeProducto = (id) => {
    const newPedido = pedido.filter((ped) => ped.id !== id);
    setPedido(newPedido);
    toast.error("Removido de Pedido");
  };

  const crearOrden = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/orden", {
        pedido,
        nombre,
        total: totalPagar,
        fecha: Date.now().toString(),
      });

      reset();
      toast.success('Pedido Realizado ❤️')
      setTimeout(() => {
        router.push("/")
      }, 1500);
    } catch (error) {
      console.log(error);
    }
  };

  const reset = () => {
    setNombre("");
    setPedido([]);
    setTotalPagar(0);
    setCategoriaActual(categorias[0])
  };

  return (
    <CoffeeContext.Provider
      value={{
        categorias,
        categoriaActual,
        modal,
        producto,
        pedido,
        nombre,
        totalPagar,
        setNombre,
        handleChangeModal,
        handleClickCategoria,
        handleSelectProduct,
        handleAddPedido,
        hanbleChangeCantidad,
        removeProducto,
        crearOrden,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  );
};

export { CoffeeProvider };

export default CoffeeContext;
