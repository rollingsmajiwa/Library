import React, { useState} from 'react'

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
  return (
    <>
      <div>
        <h1>My Movies</h1>
        <form action="#" onSubmit={handleAddMovie}>
            <input type="text" placeholder='Title' value={newTitle} onChange={(event) => setNewTitle(event.target.value)} />
            <button type='submit'>Add</button>
        </form>
      </div>
    </>
  )
}

export default ItemList
