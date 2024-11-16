
import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import LineChart from './components/LineChart/LineChart'
import Phones from './components/Phones/Phones'
import PriceOptions from './components/PriceOptions/PriceOptions'


function App() {

  return (
    <>
      <DaisyNav></DaisyNav>
      <h1 className='bg-rose-600 text-3xl'>Vite + React</h1>

      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <Phones></Phones>

    </>
  )
}

export default App
