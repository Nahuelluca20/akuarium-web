import React from 'react'
import styled from 'styled-components'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Logo from '../Images/logo.jpg'
import Home from '../Pages/home'
import About from '../Pages/about'
import Contact from '../Pages/contact'
import FishTanks from '../Pages/fishTanks'
import FrequentQuestions from '../Pages/frequentQuestions'

const NavbarStyled = styled.div`
  li {
    list-style: none;
  }
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 15px;
    background-color: #1e4e59;
  }
  .button-mobile {
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .logo {
    width: 120px;
  }
  .close {
    padding: 20px 20px 0px 20px;
    display: flex;
    justify-content: flex-end;
}
  nav ul {
    display: none;
  }
  .mobile-menu {
    margin: 0;
    padding: 100px 0px;
    position: absolute;
    background-color: #1e4e59;
    top: 10px;
    left: 0px;
    animation-name: menu-animation;
    animation-duration: .8s;
    li {
      border: 5px red;
      font-size: 20px;
      color: white;
      padding: 20px 34px;
    }
  }
  @keyframes menu-animation {
  0% { left: -600px}
  100% { lef: 0}
  }
  .mobile-desktop {
    display: none;
  }
  @media screen and (min-width: 1024px) {
    .button-mobile {
      display: none
    }
    .mobile-desktop {
      display: flex;
      li {
        margin: 0 10px;
      }
    }
  }
`

function showMenu() {
  const menuShow =document.getElementById("menu-mobile")
  menuShow.style.display = 'block'
}

function closeMenu() {
  const menuShow =document.getElementById("menu-mobile")
  menuShow.style.display = 'none'
}

const navItems = [
  {
    title: "Inicio",
    component: <Home />,
    route: `${process.env.PUBLIC_URL}/`
  },
  {
    title: "Quiénes Somos",
    component: <About />,
    route: `${process.env.PUBLIC_URL}/quienes-somos`
  },
  {
    title: "Productos",
    route: `${process.env.PUBLIC_URL}/productos`
  },
  {
    title: "Peceras Realizadas",
    component: <FishTanks />,
    route: `${process.env.PUBLIC_URL}/peceras-realizadas`
  },
  {
    title: "Preguntas Frecuentes",
    component: <FrequentQuestions />,
    route: `${process.env.PUBLIC_URL}/preguntas-frecuentes`
  },
  {
    title: "Contacto",
    component: <Contact />,
    route: `${process.env.PUBLIC_URL}/contacto`,
  }
]

function navbar() {
  return (
    <NavbarStyled>
      <Router>
        <nav>
          <div className="button-mobile" onClick={showMenu}>
            <ion-icon name="menu-outline" 
              style={{
                color: 'white',
                fontSize:'40px'}}>
            </ion-icon>
            <span>Menú</span>
          </div>
          <div className="mobile-menu" id="menu-mobile"
            style={{
              display: 'none'
            }}>
            <div className="close" onClick={closeMenu}>
              <ion-icon name="close-outline"
                style={{
                  color: 'white',
                  fontSize:'30px'
                }}>
              </ion-icon>
            </div>
            {
              navItems.map((items) => {
                return(
                  <li key={items.title} onClick={closeMenu}>
                    {items.icon}
                    <Link to={items.route} style={{color:'white', textDecoration:'none'}}>
                      {items.title}
                    </Link>
                  </li>
                )
              })
            }
          </div>

          <div className="mobile-desktop" id="">
            {
              navItems.map((items) => {
                return(
                  <li key={items.title} onClick={closeMenu}>
                    {items.icon}
                    <Link to={items.route} style={{color:'white', textDecoration:'none'}}>
                      {items.title}
                    </Link>
                  </li>
                )
              })
            }
          </div>
          <ul>
            {
              navItems.map((items) => {
                return(
                  <li key={items.title}>
                    {items.icon}
                    {items.title}
                  </li>
                )
              })
            }
          </ul>
          <div className="menu-mobile">
            <img src={Logo} alt="logo" className="logo"/>
          </div>
        </nav>

        <Switch>
          {
            navItems.map((item) => {
              return(
                <Route exact path={item.route} key={item.title}>
                  {item.component}
                </Route>
              )
            })
          }
        </Switch>
      </Router>
    </NavbarStyled>
  )
}

export default navbar
