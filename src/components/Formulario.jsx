
import { Fragment } from 'react'
import { MARCAS, YEARS, PLANES } from '../constants'
import { useCotizador } from '../hooks/useCotizador';
import { useState } from 'react';
import { Error } from './Error';

export const Formulario = () => {

  const { handleChangeDatos, form, setForm, setError, error, cotizarSeguro } = useCotizador()

  const onSubmit = ( e ) => {
    e.preventDefault();

    if(Object.values(form).includes('')) return setError('Todos los campos son obligatorios')
   

    setError('');
    
    // TODO : Cotizar
    cotizarSeguro()
  }

  
  return (
    <>

      {
        error && <Error />
      }
      <form
        onSubmit={ onSubmit }
      >
        <div className='my-5'>
          <label className='block mb-3 font-bold text-gray-400 uppercase'>
            Marca
          </label>
          <select name="marca" className='w-full p-3 bg-white border border-gray-200'
            onChange={ handleChangeDatos }
            value = { form.name }
          >
            <option value="">-- Selecciona Marca --</option>
            {
              MARCAS.map( marca => (
                <option key={ marca.id } value={ marca.id}>{ marca.nombre }</option>
              ))
            }
          </select>
        </div>

        <div className='my-5'>
          <label className='block mb-3 font-bold text-gray-400 uppercase'>
            Anio
          </label>
          <select name="year" className='w-full p-3 bg-white border border-gray-200'
            onChange={ handleChangeDatos }
            value = { form.name }
          >
            <option value="">-- Elige un anio --</option>
            {
              YEARS.map( year => (
                <option key={ year } value={ year }>{ year }</option>
              ))
            }
          </select>
        </div>

        <div className='my-5'>
          <label className='block mb-3 font-bold text-gray-400 uppercase'>
            Elige un plan
          </label>
          
          <div className='flex gap-3'>
          {
              PLANES.map( plan => (
                <Fragment key={ plan.id }>
                  <label>
                    { plan.nombre }
                  </label>
                  <input type="radio" name='plan' value={ plan.id } 
                    onChange={ handleChangeDatos }
                  />
                </Fragment>
              ))
            }
          </div>
        </div>

        <input type="submit" className='w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold'
          value='Cotizar'
        />
      </form>
    </>
  )
}
