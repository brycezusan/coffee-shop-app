import Image from "next/image";
import Categoria from "./categoria";
import useTienda from "../hooks/useTienda";

export default function Sidebar(){ 

  const { categorias } = useTienda()

  const isValid = Object.keys(categorias).length > 0
  
  return (
    <aside className="md:w-2/6 xl:w-3/12 2xl:w-2/12 bg-yellow-100 py-10 space-y-8">
      <Image
        width={220}
        height={180}
        alt="logo logo img"
        className="logo mx-auto block aspect-video"
        src="/assets/img/logo.svg"
        priority
      />

      <nav className="pt-10 flex flex-col ml-4 ">
        {isValid && categorias.map( cat=>(
          <Categoria key={cat.id} categoria={cat}/>
        ))}
      </nav>
    </aside>
  );
};


