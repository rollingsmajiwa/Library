import React from 'react'

function Items({movie, onDelete}) {

  return (
    <>
    <li>
        <div>
            <h2>{movie.title}</h2>
            <button type='submit' onClick={() => onDelete(movie.id)}></button>
        </div>
    </li>
      
    </>
  )
}

export default Items
