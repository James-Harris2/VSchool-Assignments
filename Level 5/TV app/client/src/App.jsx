import { useState } from 'react'
import axios from "axios"
import { useEffect } from "react"

function App(){
  const [movieData, setMovieData] = useState({
    title: '',
    description: '',
  });

  const handleChange = (event) => {
    setMovieData({
      ...movieData,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission,
    console.log(movieData);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
        type='text'
        id='title'
        name='title'
        value={movieData.title}
        onChange={handleChange}
        />
    </div>
    <div>
      <label htmlFor="description">Description</label>
      <input
      type="text"
      id="description"
      name='description'
      value={movieData.description}
      onChange={handleChange}
      />
    </div>
    <button type="submit">Submit Me</button>
    </form>
  )
}






export default App
