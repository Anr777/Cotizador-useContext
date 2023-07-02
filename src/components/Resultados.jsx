import { useCallback, useMemo } from "react";
import { useCotizador } from "../hooks/useCotizador"
import { MARCAS, PLANES } from "../constants";

export const Resultados = ({ resultado }) => {
  const { form } = useCotizador()
  const { marca, plan, year } = form;
  
  return (
    <div className='bg-gray-100 text-center mt-5 p-5 shadow'>
      <h2 className='text-gray-600 font-black text-3xl'>
        Resumen
      </h2>
      <p className='my-2'>
        <span className='font-bold'>Marca: </span>
        {
          useCallback(
               MARCAS[marca - 1].nombre 
            ,
            [resultado]
          )
        }
      </p>
      
      <p className='my-2'>
        <span className='font-bold'>Plan: </span>
        {
          useCallback(  PLANES[plan - 1].nombre 
            ,[resultado])
        }
      </p>

      <p className='my-2'>
        <span className='font-bold'>Año: </span>
        {useCallback(
          year,
          [resultado]
        )}
      </p>

      <p className='my-2 text-2xl'>
        <span className='font-bold'>Total Cotización: </span>
        $ { resultado }
      </p>

    </div>
  )
}
