import Image from "next/image";
import useTienda from "../hooks/useTienda"
import { formatearMoneda } from "../lib";

export default function CardProducto({ nombre, precio, imagen, id }) {
  const {handleSelectProduct, handleChangeModal} = useTienda()

  return (
    <article className="w-full max-w-[380px] bg-white shadow border rounded-md p-4 space-y-3">
      <h2 className="text-center text-2xl text-amber-400 truncate">{nombre}</h2>
      <Image
        src={`/assets/img/${imagen}.jpg`}
        alt="image image-producto"
        width={200}
        height={120}
        className="mx-auto block w-full rounded-md object-cover"
        loading="lazy"
      />
      <p className="text-center text-xl font-black">
        {formatearMoneda(precio)}
      </p>
      <button 
        onClick={()=>{
          handleChangeModal()
          handleSelectProduct({nombre,precio,imagen,id})
        }}
        className="bg-amber-400 block py-1 rounded-lg uppercase text-white w-full transition-all hover:tracking-widest  hover:bg-amber-500 border-none">
        Agregar
      </button>
    </article>
  );
}
