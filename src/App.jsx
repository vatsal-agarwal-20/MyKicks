import './App.css'
import Hero from './components/Hero'
import { heroApi } from './data/Data'

function App() {

  return (
    <>
      <div>
        <Hero heroApi={heroApi}/>
      </div>
    </>
  )
}

export default App
