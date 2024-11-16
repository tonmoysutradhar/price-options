
import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import PriceOptions from './components/PriceOptions/PriceOptions'


function App() {

  return (
    <>
      <DaisyNav></DaisyNav>
      <h1 className='bg-rose-600 text-3xl'>Vite + React</h1>

      <PriceOptions></PriceOptions>

    </>
  )
}

export default App
