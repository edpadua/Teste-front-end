import axios from "axios";


const apiPokemons = axios.create({
    baseURL: "https://pokeapi.co/api/v2/"
})

export default apiPokemons