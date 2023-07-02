export const obtenerDiferencia = ( year ) => {
  return new Date().getFullYear() - year;
}


export const obtenerResultado = ( porcentaje, resultado ) => {
  return resultado += (resultado * porcentaje)
}

export const calcularPlan = ( plan, resultado ) => {
  return plan === '1' ? resultado * 1.2 :  resultado * 1.5
}