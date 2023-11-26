import Logo from '../assets/images/logo.svg'
import { AiOutlineBars } from 'react-icons/ai'
import { GiCrossedSabres } from "react-icons/gi";
import '../assets/css/Navbar.css'
// DOM Virtual DOM
import { useRef } from 'react'
// Hooklar 



import Button from './Button'
function Navbar() {

  const overlayMenu = useRef()

 const overlayMenyunuAc = () => {
  overlayMenu.current.style.width="100%"
 }
// parametrsiz funksiyadir
 const overlayMenyunuBagla = ()=> {
  overlayMenu.current.style.width="0"
 }


  return (


    <>
      <div ref={overlayMenu} className="overlay-menu">
        <GiCrossedSabres onClick={overlayMenyunuBagla} className='x-iconu' />

        <nav className="nav-links">
          <a href="" className='nav-link'>About</a>
          <a href="" className='nav-link'>Services</a>
          <a href="" className='nav-link'>Blog</a>
          <a href="" className='nav-link'>Contact</a>

        <Button />
        </nav>


        
      </div>


      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={Logo} alt="" />
          </a>
          <button onClick={overlayMenyunuAc} className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <AiOutlineBars />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link text-white" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">About</a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-white" href="#">Services</a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-white" href="#">Blog</a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-white" href="#">Contact</a>
              </li>
            </ul>

            <Button buttonunIcindekiYazi="Sign In" buttonunKlassi ="sign-in-btn" />
          </div>
        </div>
      </nav>

    </>
  )
}

export default Navbar