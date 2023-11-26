import React from 'react'
import Shirket from './Shirket'

import shirketler from '../shirketler.json'

import '../assets/css/PartnerCompany.css'

const PartnyorShirketler = () => {
  return (
    <div className='partner-section row'>

        
        {
            shirketler.map(shirket=> (
                <Shirket shirketinLogosu={shirket.shirketin_logosu} />
            ))
        }
    </div>
  )
}

export default PartnyorShirketler