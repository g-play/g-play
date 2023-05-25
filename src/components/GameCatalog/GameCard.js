import { Link } from "react-router-dom";
const GameCard = ({
    game,
    // navigationChangeHandler
}) =>{
// const onDetailsClick =(e)=>{
//     e.preventDefault();
//     navigationChangeHandler(`/details/${game._id}`)
//     // navigationChangeHandler(`/details/${game._id}`)
//     console.log(game)
// }
return(
    <div className="allGames">
    <div className="allGames-info">
      
    <img src={game.imageUrl}/>
    <h6>{game.category}</h6>
    <h2>{game.title}</h2>
    <Link to={`/games/${game._id}`}   className="details-button">Details</Link>
    {/* <a href={`/details/${game._id}`} onClick={onDetailsClick} className="details-button">Details</a> */}
</div>
</div>
)


}
export default GameCard;