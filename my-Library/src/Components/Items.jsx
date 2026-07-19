import React from 'react'

function Items({movie, onDelete}) {

  return (
    <>
    <li>
        <div className='movieItem'>
            <h2>{movie.title}</h2>
            <button type='submit' onClick={() => onDelete(movie.id)}>Delete</button>
        </div>
    </li>
      
    </>
  )
}

export default Items
