import React from 'react'
import styled from 'styled-components'

const HomeStyled = styled.div`
  section {
    margin: 50px 0;
    display: flex;
    justify-content: center;
    align-items:center;
    height: 400px;
    width: auto;
    background-size: cover;
    background-position: center;
    h1 {
      color: white;
      font-size: 30px;
    }
    a {
      cursor: pointer;
      color: #c0e6ec;
      padding: 15px;
      background-color: #153945;
    }
  }
  .peces {
    margin: 0px 0;
    background-image: url('//d2r9epyceweg5n.cloudfront.net/stores/423/264/themes/new_linkedman/img-1996814670-1601149694-1aeed7c36efa799e80742f0fdf12dcc81601149694.jpg?1717037095');
  }
  .accesorios {
    background-image: url('//d2r9epyceweg5n.cloudfront.net/stores/423/264/themes/new_linkedman/img-1751921784-1601150255-b3e3413b07488d9f8ada2f3e6d553a6a1601150256.png?1717037095');
  }
  .corales {
    background-image: url('//d2r9epyceweg5n.cloudfront.net/stores/423/264/themes/new_linkedman/img-639801102-1601143850-0a4f3c33abb5b4e920d5cdbdbd64841e1601143850.jpg?1717037095');
  }
  .invertevrados {
    background-image: url('//d2r9epyceweg5n.cloudfront.net/stores/423/264/themes/new_linkedman/img-532783202-1601145329-eeb748369be2668c94efddc530620d2c1601145329.jpg?1717037095');
  }
  div {
    text-align: center;
  }
  .horarios {
    padding: 0px 20px;
    color: #c0e6ec;
  }
  .redes {
    margin: 100px 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #c0e6ec;
    div {
      margin-left: 20px;
      text-align: left;
    }
    h3 {
      margin: 0;
    }
  }
  @media screen and (min-width: 1024px) {
    main {
      text-align: center;
    }
    .grid-sreen {
      display: grid;
      padding: 0 50px;
      grid-template-columns: repeat(2, 1fr);
    }
    .peces {
      margin: 20px;
    }
    section {
      margin: 20px;
    }
  }
`

function home() {
  return (
    <HomeStyled>
      <main>
      <div className="grid-sreen">
        <section className="peces">
          <div>
            <h1>PECES</h1>
            <a href>
              CLICK ACÁ
            </a>
          </div>
        </section>

        <section className="accesorios">
          <div>
            <h1>ACCESORIOS</h1>
            <a href>
              CLICK ACÁ
            </a>
          </div>
        </section>

        <section className="corales">
          <div>
            <h1>CORALES</h1>
            <a href>
              CLICK ACÁ
            </a>
          </div>
        </section>

        <section className="invertevrados">
          <div>
            <h1>INVERTEBRADOS</h1>
            <a href>
              CLICK ACÁ
            </a>
          </div>
        </section>
      </div>
      <div className="horarios">
          <h2>
            HORARIO DE ATENCIÓN LUNES A VIERNES DE 9 A 13HS Y DE
            17 A 20HS. SÁBADOS DE 9 A 13HS
          </h2>
        </div>

        <div className="redes">
          <ion-icon name="logo-instagram" style={{
            fontSize: '50px',
          }}></ion-icon>
          <div>
            <small>SEGUINOS EN INSTAGRAM</small>
            <h3>@AKUARIUM_MENDOZA</h3>
          </div>
        </div>
      </main>
    </HomeStyled>
  )
}

export default home
