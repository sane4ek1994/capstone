import styled from 'styled-components'

export const AuthenticationContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 900px;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 30px auto;

  @media screen and (max-width: 800px) {
    width: 80%;
    grid-template-columns: 1fr;
    gap: 15px;
  }
`
