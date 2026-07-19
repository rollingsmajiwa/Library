import React, { useState} from 'react'
import Items from './Items';

function ItemList() {
    const storedMovies = [
        {id: 1, title: "Bird Box"},
        {id: 2, title: "The Power"},
        {id: 3, title: "The Polygamist"},
        {id: 4, title: "Beauty in Black"},
        {id: 5, title: "The Oval"}
    ]

    const [movies, setMovies] = useState(storedMovies);
    const [newTitle, setNewTitle] = useState("");
    const availableMovies = movies.length
    

    const handleAddMovie = (event) => {
        event.preventDefault();
        if(!newTitle) return alert("Please add a movie!")

            const newMovie = {
                id: Date.now(),
                title: newTitle
            }
            setMovies([...movies, newMovie])
            setNewTitle("")
    }
    const handleDeleteMovie = (id) => {
      const updatedMovies = movies.filter(movie => movie.id !== id)
      setMovies(updatedMovies)
    }
  return (
    <>
      <div className='movieBox'>
        <h1>My Movies</h1>
        <form action="#" onSubmit={handleAddMovie}>
            <input type="text" placeholder='Title' value={newTitle} onChange={(event) => setNewTitle(event.target.value)} />
            <button type='submit'>Add</button>
        </form>
        <ul>
            {availableMovies > 0 ? movies.map((movie) => <Items key={movie.id} movie={movie} onDelete={handleDeleteMovie} />) : (<p>No Movie Added</p>)}
        </ul>
      </div>
    </>
  )
}

export default ItemList
