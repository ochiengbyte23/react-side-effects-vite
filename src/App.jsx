import { useState, useEffect } from 'react'
import JokeDisplay from './components/JokeDisplay'
import FetchButton from './components/FetchButton'

function App() {
  // Step 1: Create state variables for `joke` and `loading`
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(true);
  // Step 2: Use `useEffect` to call a function that fetches a joke when the component mounts
  useEffect(() => {
    async function fetchJoke() {
      const response = await fetch("https://v2.jokeapi.dev/joke/Programming?type=single")
      const data = await response.json();
      setJoke(data.joke);
    }
    fetchJoke();
  }, []);
  // Step 3: Define a function that fetches a programming joke from an API
  // - Start by setting `loading` to true
  // - Fetch a joke from "https://v2.jokeapi.dev/joke/Programming?type=single"
  // - Update the `joke` state with the fetched joke
  // - Set `loading` to false once the joke is loaded
  // - Handle any errors in the `.catch` block
  async function fetchNewJokes() {
    setLoading(true);
    try {
      const response = await fetch("https://v2.jokeapi.dev/joke/Programming?type=single")
      const data = await response.json();
      setJoke(data.joke);
    } catch (error) {
      console.error("Error fetching joke:", error)
    } finally {
      setLoading(false)
    }
  };

  return (
    <div className="app">
      <h1>Programming Jokes</h1>
      {/* Step 4: Pass the necessary props to JokeDisplay */}
      <JokeDisplay />
      {/* Step 5: Pass the function to FetchButton so it can fetch a new joke on click */}
      <FetchButton />
    </div>
  )
}

export default App
