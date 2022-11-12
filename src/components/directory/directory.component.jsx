import { DirectoryItem } from '../../components'

import { DirectoryContainer } from './directory.styles'

export const Directory = ({ categories }) => {
  return (
    <DirectoryContainer>
      {categories.map(category => (
        <DirectoryItem key={category.id} title={category.title} imageUrl={category.imageUrl} />
      ))}
    </DirectoryContainer>
  )
}
