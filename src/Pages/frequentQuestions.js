import React from 'react'
import styled from 'styled-components'

const FrequentQuestionsStyled = styled.div`
  h1 {
    color: #c0e6ec;
    text-align: center;
    padding: 20px;
  }
  div {
    padding: 20px;
  }
  h3 {
    color: white;
    margin: 50px 0;
  }
`

function frequentQuestions() {
  return (
    <FrequentQuestionsStyled>
      <h1>Preguntas Frecuentes</h1>
      <div>
        <h3>
          Quiero tener un acuario ¿Qué hago?
        </h3>
        <h3>
          Mi pez está enfermo
        </h3>
        <h3>
          ¿Como debo alimentar a mis peces?
        </h3>
        <h3>
          ¿Qué tipo de filtración debo utilizar en mi acuario?
        </h3>
        <h3>
          ¿Es muy difícil armar y mantener un acuario?
        </h3>
        <h3>
          ¿Donde puedo encontrarlos?
        </h3>
      </div>
    </FrequentQuestionsStyled>
  )
}

export default frequentQuestions
