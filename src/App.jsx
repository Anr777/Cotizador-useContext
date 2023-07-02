import { CotizadorProvider } from './contex/CotizadorProvider'
import './App.css'
import { AppSeguro } from './components'

function App() {

  return (
    <CotizadorProvider value="hola">
      <AppSeguro />
    </CotizadorProvider>
  )
}

export default App
