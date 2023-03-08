import React from 'react'
import { CardButton, CardContainer, CardHeader, CardImg } from './Card.style'

const Card = ({item}) => {
  console.log(item)
  return (
    <CardContainer>
      <CardHeader>{item.volumeInfo.title}</CardHeader>
      <CardImg scr={item.volumeInfo.imageLinks.smallThumbnail} />
      <CardButton>View More</CardButton>
    </CardContainer>
  );
}

export default Card