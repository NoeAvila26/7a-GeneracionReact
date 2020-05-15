import React from 'react'
import './Card.css'


function Card({
  category,
  title,
  description,
  author,
  publicationDate,
  timeRead
}) {
  return (
    <div className="Card">
      <div className="Card-content">
  <p>categoria {category}</p>
  <p><strong>title {title}</strong></p>
  <p>description {description}</p>
  <p>author {author}</p>
  <p>publicationDate {publicationDate}, timeRead {timeRead}</p>
      </div>
      <div className="card-image">
        <figure>
          <img alt='card-p' src={`https://picsum.photos/id/237/200/300`} />
        </figure>
      </div>
    </div>
  )
}

export default Card;

//Card
//Categoria, titulo, descripcion, author, publicationDate, timeRead