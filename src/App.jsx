
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import NavMenyu from './components/Navbar'
import Introduction from './components/Introduction'
import { useEffect } from 'react'
import PartnyorShirketler from './components/PartnyorShirketler'

function App() {


  useEffect(()=> {
    AOS.init()
  }, [])
  return (
    <>
      <NavMenyu />
      <Introduction />
      <PartnyorShirketler />

    </>
   
    
  
  )
}

export default App
