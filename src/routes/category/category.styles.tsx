import styled from 'styled-components'

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
    gap: 15px;
  }
`

export const CategoryTitle = styled.h2`
  font-size: 38px;
  margin-bottom: 25px;
  text-align: center;
  text-transform: uppercase;
`
