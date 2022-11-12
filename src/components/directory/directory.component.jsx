import { DirectoryItem } from '../../components'

import './directory.styles.scss'

export const Directory = ({ categories }) => {
  return (
    <div className='directory-container'>
      {categories.map(category => (
        <DirectoryItem key={category.id} title={category.title} imageUrl={category.imageUrl} />
      ))}
    </div>
  )
}
