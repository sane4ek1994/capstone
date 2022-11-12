import { DirectoryItemContainer, BackgroundImage, Body } from './directory-item.styles'

export const DirectoryItem = ({ imageUrl, title }) => {
  return (
    <DirectoryItemContainer to={`shop/${title}`}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Show Now</p>
      </Body>
    </DirectoryItemContainer>
  )
}
