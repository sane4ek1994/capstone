import styled from 'styled-components'

export const SignContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  @media screen and (max-width: 800px) {
    width: 300px;
  }
`

export const SignTitle = styled.h2`
  margin: 10px 0;

  @media screen and (max-width: 800px) {
    margin: 5px 0;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    button:not(:last-child) {
      margin-bottom: 10px;
    }
  }
`
