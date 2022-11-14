import { useNavigate } from 'react-router-dom'
import { DirectoryItemContainer, BackgroundImage, Body } from './directory-item.styles'

export const DirectoryItem = ({ imageUrl, title, route }) => {
  const navigate = useNavigate()
  const onNavigateHandler = () => navigate(route)

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Show Now</p>
      </Body>
    </DirectoryItemContainer>
  )
}
