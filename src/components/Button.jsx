import React from 'react'
import '../assets/css/Button.css'

function Button(props) {
  console.log(props.buttonunIcindekiYazi)
  return (
    <button className={`shexsi-btn ${props.buttonunKlassi}`}> <img src={props.buttonunIcindekiShekil} alt="" /> {props.buttonunIcindekiYazi}</button>
  )
}

export default Button