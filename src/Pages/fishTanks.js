import React from 'react'
import styled from 'styled-components'
import Pecera1 from '../Images/peceras/pecera-1.jpg'
import Pecera2 from '../Images/peceras/pecera-2.jpg'
import Pecera3 from '../Images/peceras/pecera-3.jpg'
import Pecera4 from '../Images/peceras/pecera-4.jpg'
import Pecera5 from '../Images/peceras/pecera-5.jpg'

const FishTankStyled = styled.div`
  h1 {
    color: #c0e6ec;
    text-align: center;
    padding: 20px;
  }
  div {
    padding: 20px;
  }
  img {
    width: 100%;
    margin: 10px 0;
  }
  @media screen and (min-width: 1024px) {
    div {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      justify-items: center;
    }
    img {
      width: 500px
    }
  }
`

function fishTanks() {
  const fishTanksImg = [
    {
      img: Pecera5
    },
    {
      img: Pecera2
    },
    {
      img: Pecera3
    },
    {
      img: Pecera4
    },
    {
      img: Pecera1
    }
  ]
  return (
    <FishTankStyled>
      <h1>Peceras Realizadas</h1>
      <div>
        {
          fishTanksImg.map((item) => {
            return (
              <img src={item.img} alt="peceras" />
            )
          })
        }
      </div>
    </FishTankStyled>
  )
}

export default fishTanks
