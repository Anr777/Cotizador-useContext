import { Formulario, Resultados } from "../components"
import { useCotizador } from "../hooks/useCotizador"


export const AppSeguro = () => {

  const { resultado } = useCotizador();

  return (
    <>
      <header className="my-10">
        <h1 className="text-white text-center text-4xl font-black mb-10">
          Cotizador de Seguros de Autos
        </h1>

        <main className="bg-white md:w-2/3 lg:w-2/4 mx-auto shadow rounded-lg p-10">
          <Formulario />
          {
            resultado > 0 && <Resultados resultado = { resultado } />
          }
        </main>
      </header>
    </>
  )
}
