
import { createContext, useState } from 'react';
import { obtenerDiferencia, obtenerResultado, calcularPlan } from '../helpers';

const CotizadorContext = createContext();


// Se crea el provider que va a envolver a los componentes.

const CotizadorProvider = ({ children }) => {

  const [form, setForm] = useState({
    marca: '',
    year: '',
    plan: '',
  });

  const [error, setError] = useState('');
  const [ resultado, setResultado ] = useState(0);
  //Crear variable 
  const handleChangeDatos = ({ target }) => {
    console.log(target.name)
    console.log(target.value)
    setForm( {
      ...form,
      [target.name] : target.value
    })
  }

  const cotizarSeguro = () => {
    
    // Una base
    let resultado = 2000;

    // Obtener diferencia de a;os
    const diferencia = obtenerDiferencia(form.year)
    console.log(diferencia)

    // Hay que restar el 3% por cada anio
    resultado -= (resultado * 0.03) * diferencia
    console.log(resultado)

    //Americano 15%
    switch( form.marca ) {
      case '1':
        let resultEuropeo = obtenerResultado(0.30, resultado)
        const resultCase1 = calcularPlan(form.plan, resultEuropeo)
        console.log(resultCase1)
        setResultado(resultCase1)
        
        break;
      case '2':
        let resultAmericano = obtenerResultado(0.15, resultado)
        const resultCase2 = calcularPlan(form.plan, resultAmericano)
        console.log(resultAmericano)
        console.log(resultCase2)
        setResultado(resultCase2)
        break;
      case '3':
        let resultAsiatico = obtenerResultado(0.05, resultado)
        const resultCase3 = calcularPlan(form.plan, resultAsiatico)
        console.log(resultCase3)
        setResultado(resultCase3)

        break;
        default:
          break;
    }
    



    //Basico 20%
    //Completo 50%

  }

  return (
    <CotizadorContext.Provider value={
      { handleChangeDatos, 
        form,
        setForm, 
        setError, 
        error,
        cotizarSeguro,
        resultado 
      }}>
      { children }
    </CotizadorContext.Provider>
  )
}

export {
  CotizadorProvider,
  CotizadorContext
}