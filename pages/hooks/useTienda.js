import { useContext } from "react";
import CoffeeContext from "../context/CoffeeProvider";

const useTienda = () => {
 return useContext(CoffeeContext);
}  
export default useTienda
