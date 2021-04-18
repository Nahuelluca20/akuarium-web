import React from 'react'
import styled from 'styled-components'

const FooterStyled = styled.div`
  background-color: #8cc1cd;
  padding: 20px;
  a {
    margin: 5px 0;
    color: #153945;
    font-weight: 700;
    text-decoration: none;
  }
  .nav-foot {
    display: grid;
  }
  .red-foot {
    display: flex;
    a {
      margin: 0 5px;
    }
  }
  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: space-evenly;
  }
`

function footer() {
  return (
    <FooterStyled>
      <div>
        <h3>NAVEGACIÓN</h3>
        <div className="nav-foot">
          <a href={`${process.env.PUBLIC_URL}/`}>
            Inicio
          </a>
          <a href={`${process.env.PUBLIC_URL}/quienes-somos`}>
            Quiénes Somos
          </a>
          <a href="/">
            Productos
          </a>
          <a href={`${process.env.PUBLIC_URL}/peceras-realizadas`}>
            Peceras realizadas
          </a>
          <a href={`${process.env.PUBLIC_URL}/preguntas-frecuentes`}>
            Preguntas Frecuentes
          </a>
          <a href={`${process.env.PUBLIC_URL}/contacto`}>
            Contacto
          </a>
        </div>
      </div>

      <div>

        <h3>CONTACTANOS</h3>
        <div className="nav-foot">
          <a href="/">
            <ion-icon name="call-outline"
            style={{
              marginRight:'5px'}}
            ></ion-icon> 
            +54 4203397
          </a>
          <a href="/">
            <ion-icon name="logo-whatsapp"
              style={{
                marginRight: '5px'
              }}></ion-icon>
            261 6137418
          </a>
          <a href="mailto:akuariummza@hotmail.com">
            <ion-icon name="mail-outline"
              style={{
                marginRight: '5px'
              }}></ion-icon>
            akuariummza@hotmail.com
          </a>
          <a href="/">
            <ion-icon name="map-outline"
              style={{
                marginRight: '5px'
              }}></ion-icon>
            Necochea 565
          </a>
        </div>
      </div>

      <div>
        <h3>REDES SOCIALES</h3>
        <div className="red-foot">
          <a href="https://www.instagram.com/akuarium_mendoza/">
            <ion-icon name="logo-instagram"
            style={{
              fontSize: '50px'
            }}></ion-icon>
          </a>
          <a href="https://www.instagram.com/akuarium_mendoza/">
            <ion-icon name="logo-facebook"
            style={{
              fontSize: '50px'
            }}></ion-icon>
          </a>
        </div>
      </div>

    </FooterStyled>
  )
}

export default footer
