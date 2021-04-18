import React from 'react'
import styled from 'styled-components'
import BG from '../Images/about-bg.jpg'

const AboutStyled = styled.div`
  color: white;
  .bg {
    text-align: center;
    background-image: url(${BG});
    background-size: cover;
    background-position: center;
    h1 {
      font-size: 40px;
      text-decoration: underline white; 
      margin: 0;
      padding: 100px 0;
    }
  }
  .about {
    margin: 40px 0;
    h3 {
      text-align: center;
    }
    p {
      padding: 0 20px;
      line-height: 30px;
      color: #c0e6ec;
    }
  }
  @media screen and (min-width: 1024px) {
    .bg {
      h1 {
        font-size: 60px;
        padding: 200px 0;
      }
    }
    .about {
    margin: 100px 0;
      h3 {
        font-size: 50px;
      }
      p {
        font-size: 20px;
        padding: 0 100px;
      }
    }
  }
`

function about() {
  return (
    <AboutStyled>
      <div className="bg">
        <h1>AKUARIUM</h1>
      </div>
      <div className="about">
        <h3>¿Quiénes Somos?</h3>
        <p>
          Akuarium es una empresa que nace en el año 2009 materializando 15 años de experiencia en el rubro del acuarismo.
          Nuestro local cuenta con dos pisos, un sector de exposición de trabajos terminados, y la más amplia variedad de 
          peces nacionales e importados, como asi tambien la mayor variedad de marcas en alimentos y accesorios para los más 
          exigentes acuaristas de Argentina.
          También contamos con un taller acondicionado para el trabajo con vidrio, madera y metal donde se realiza el armado 
          de acuarios, filtros y muebles para acuarios familiares, empresas, consultorios, estudios, hoteles y restaurantes.
        </p>
      </div>
    </AboutStyled>
  )
}

export default about
