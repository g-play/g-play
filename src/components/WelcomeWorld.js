import { useEffect, useState } from 'react';
import * as gameService from './../services/gameService'
import LatestGameCard from './GameCatalog/LatestGameCard';
const WelcomeWorld = () =>{
    const [games,setGame] = useState({});
    useEffect(() =>{
        gameService.getLatest()
     .then(result =>{setGame(result)
        console.log(result)
    })
       
 
      
    },[]);
    return(
        <section id="welcome-world">

        <div className="welcome-message">
            <h2>ALL new games are</h2>
            <h3>Only in GamesPlay</h3>
        </div>
        <img src="/images/four_slider_img01.png" alt="hero"/>

        <div id="home-page">
            <h1>Latest Games</h1>

            {/* <div className="game">
                <div className="image-wrap">
                    <img src="/images/CoverFire.png"/>
                </div>
                <h3>Cover Fire</h3>
                <div className="rating">
                    <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                </div>
                <div className="data-buttons">
                    <a href="#" className="btn details-btn">Details</a>
                </div>
            </div> */}
         
{<p>Import games here</p>||<p className="no-articles">No games yet</p>}
            
        </div>
    </section>
    )
}

export default WelcomeWorld;