import { useLoaderData } from "react-router";
import axios from "axios"

const baseeURL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`;
export const loader = async ()=>{
const searchTerm = `margarita`

    const fetchdata = await axios.get(`${baseeURL}${searchTerm}`)
    console.log(fetchdata)
//   return {drinks:fetchdata.data.drinks,searchTerm}
}
const Landing = ()=>{
    
    const {drinks,searchTerm} = useLoaderData();
    console.log(drinks,searchTerm);
    return <h2>Landing</h2>
}

export default Landing;