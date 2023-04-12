import { useEffect, useState } from "react";
import GameCard from "./GameCard";

const GameCatalog = () =>{
    const [games,setGames] =useState([])
    useEffect (()=>{
setTimeout(()=>{
    fetch('http://localhost:3030/data/games?sortBy=_createdOn%20desc')
.then(res =>res.json())
.then(result =>{
    // console.log(result)
    setGames(result)
})
},2000)
    },[]);

    return(
        <section id="catalog-page">
        <h1>All Games</h1>
        {/* <div className="allGames">
            <div className="allGames-info">
                <img src="/images/avatar-1.jpg"/>
                <h6>Action</h6>
                <h2>Cover Fire</h2>
                <a href="#" className="details-button">Details</a>
            </div>

        </div> */}
 {games.map(x=><GameCard game={x}/>)}

        <h3 className="no-articles">No articles yet</h3>
    </section>
    )
}
export default GameCatalog;