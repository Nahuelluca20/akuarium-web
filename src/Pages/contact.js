import React from 'react'
import styled from 'styled-components'
import Call from '../Images/call-outline.svg'
import Whatsapp from '../Images/logo-whatsapp.svg'
import Email from '../Images/mail-outline.svg'
import Maps from '../Images/map-outline.svg'
import Instagram from '../Images/logo-instagram.svg'
import Facebook from '../Images/logo-facebook.svg'

const ContactStyled = styled.div`
  h1 {
    color: #c0e6ec;
    text-align: center;
    padding: 20px;
  }
  .nav-foot {
    padding: 60px 10px;
    display: grid;
  }
  a {
    display: flex;
    align-items: center;
    img {
      width: 30px;
      margin-right: 5px;
    }
    margin: 5px 0;
    color: white;
    font-size: 25px;
    font-weight: 500;
    text-decoration: none;
  }
  @media screen and (min-width: 1024px) {
    .nav-foot {
      justify-items: center;  
      text-align: start;
      grid-template-columns: repeat(2, 1fr);
    } 
    a {
      margin: 20px 0;
    }
  }
`

function contact() {
  return (
    <ContactStyled>
    <div>

      <h1>Dejamos tu consulta y en breve te atenderemos.</h1>
      <div className="nav-foot">
          <a href="/">
            <img src={Call} alt="llama"/>
            +54 4203397
          </a>
          <a href="/">
            <img src={Whatsapp} alt="Whatsapp" />
            261 6137418
          </a>
          <a href="mailto:akuariummza@hotmail.com">
            <img src={Email} alt="Email"/>
            akuariummza@hotmail.com
          </a>
          <a href="/">
            <img src={Maps} alt="dirección"/>
            Necochea 565
          </a>
          <a href="/https://www.instagram.com/akuarium_mendoza/">
            <img src={Instagram} alt="Instagram" />
            Siguenos en instagram
          </a>
          <a href="/https://www.instagram.com/akuarium_mendoza/">
            <img src={Facebook} alt="Facebook"/>
            Siguenos en Facebook
          </a>
        </div>
    </div>
    </ContactStyled>
  )
}

export default contact
