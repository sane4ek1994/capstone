import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { DirectoryCategory } from '../directory/directory.component'

import { DirectoryItemContainer, BackgroundImage, Body } from './directory-item.styles'

type DirectoryItemProps = {
  category: DirectoryCategory
}

export const DirectoryItem: FC<DirectoryItemProps> = ({ category }) => {
  const navigate = useNavigate()
  const { imageUrl, title, route } = category
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
