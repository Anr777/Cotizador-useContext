import { useContext } from "react";
import { CotizadorContext } from "../contex/CotizadorProvider";

export const useCotizador = () => {
  return useContext(CotizadorContext);
}