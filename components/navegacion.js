import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import useTienda from "../hooks/useTienda"

const links = [
  {  id: 1, href: "/", name: "Menu" },
  {  id: 2, href: "/resumen", name: "Resumen" },
  {  id: 3, href: "/total", name: "Datos y Total" },
];

export default function Navegacion() {
  const pathname = usePathname();

  const { paso, handleClickPaso } = useTienda();
  return (
    <div className="w-11/12 mx-auto">
      <nav className="flex justify-between md:text-xl xl:text-2xl">
        {links.map((link) => (
          <Link
            className={`${
              pathname === link.href ? "text-amber-500" : "text-slate-800"
            }`}
            key={link.id}
            href={link.href}
          >
            {link.name}
          </Link>
        ))}
      </nav>
      <div className="h-2 mt-2 bg-gray-100 rounded-md">
        <div
          className={clsx(
            "h-2 rounded-r-md rounded-l-md bg-amber-300 ",
            { "w-full" : pathname === 'total'},
            { "w-1/2": pathname == "/resumen" },
            { "w-12 ": pathname == "/" },
          )}
        ></div>
      </div>
    </div>
  );
}
