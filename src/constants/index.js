
export const MARCAS = [
  { id: 1, nombre: 'Europeo'},
  { id: 2, nombre: 'Americano'},
  { id: 3, nombre: 'Asiatico'},
]

const YEARMAX = new Date().getFullYear();
const arrayYears = new Array(20)
export const YEARS = Array.from(
  arrayYears, ( valor, index ) => YEARMAX - index
)

export const PLANES = [
  { id: 1, nombre: 'Basico'},
  { id: 2, nombre: 'Completo'}
]