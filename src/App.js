// This project uses the PokeAPI to essentially grab the appropriate data from its database when an input is submitted by a user.
import './App.css';
// we need useState for some of the functions we use later on as well as useEffect
import React, {useState} from "react";
import {useEffect} from "react";
// we import this javascript library in order to help make the HTTP requests(from nodejs) we need for this API.
import axios from "axios";

const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
const url2 = `https://pokeapi.co/api/v2/pokemon-color/${pokemonName}`
// the App function constitutes setting variables for the data I want to pull from the PokeAPI.
const App = () => {
  const [pokemon, setPokemon] = useState("ditto")
  const [pokemonType, setPokemonType] = useState("")
  const [pokemonData, setPokemonData] = useState([])
  const [pokemonColor, setPokemonColor] = useState("")
  const [pokemonGeneration, setPokemonGeneration] = useState("")

  const getPokemon = async () => {
    const toArray = []
  }

  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    const url2 = `https://pokeapi.co/api/v2/pokemon-color/${pokemonName}`
    const res = await axios.get(url)
    const res2 = await axios.get(url2)
    toArray.push(res.data)
    setPokemonType(res.data.types[0].type.name);
    setPokemonData(toArray)
    setpokemonGeneration(res.data.generation[0].generation.name)
    setPokemonColor(res2.data.name)
    console.log(res)
    console.log(res2)
  } catch(e) {
    console.log(e)
  }
};

const handleChange = (e) => {
  setPokemon(e.target.value.toLowerCase())
}

const handleSubmit = (e) => {
  e.preventDefault();
  getPokemon()
}

function app() {
  // line below essentially outputs the code into the react page
  return (
    <div className="App">
      <form onSubmit= {handleSubmit}>
        <label/>
      <input
         type ="text" 
         onChange={handleChange} 
         placeholder="Enter Pokemon Name"/>
      </form>
    </div>

  );
  }

export default App;
