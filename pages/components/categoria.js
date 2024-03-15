import Image from "next/image";
import useTienda from "../hooks/useTienda";
import { clsx } from "clsx";

export default function Categoria({ categoria }) {
  const { handleClickCategoria, categoriaActual } = useTienda();
  const { id, nombre, icono } = categoria;
  return (
    <div
      className={clsx(
        "flex gap-4 items-center border-t brder-gray-600 p-4  hover:border-transparent hover:bg-amber-400 transition-colors ",
        {
          "bg-amber-400 border-transparent": categoriaActual?.id === id,
        }
      )}
    >
      <Image
        width={90}
        height={60}
        alt={`imagen-categoria$nombre`}
        src={`/assets/img/icono_${icono}.svg`}
        className="img-cat max-w-[80px]"
      />
      <button onClick={() => handleClickCategoria(id)} className="text-xl">
        {nombre}
      </button>
    </div>
  );
}
