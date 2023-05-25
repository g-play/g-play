import {Link,NavLink} from 'react-router-dom'

const Header = () =>{
// const onHeaderClick = (e) =>{
//     e.preventDefault();
//     if(e.target.tagName == 'A'){
//         let url = new URL(e.target.href)
//         navigationChangeHandler(url.pathname)
//     }
// }
let activeLinkStyles ={
    backgroundColor:'grey',
    textDecoration:'underline'
}
return (
    <header>
    <h1><NavLink  className="home" to="/">GamesPlay</NavLink></h1>
    <nav>
        <NavLink activeStyle={{ backgroundColor:'grey',
    textDecoration:'underline'}}  to="/games">All games</NavLink>
        <div id="user">
            <NavLink activeStyle={{ backgroundColor:'grey',
    textDecoration:'underline'}} to="/create">Create Game</NavLink>
            <NavLink activeStyle={{ backgroundColor:'grey',
    textDecoration:'underline'}} to="/logout">Logout</NavLink>
        </div>
        <div id="guest">
            <NavLink  activeStyle={{ backgroundColor:'grey',
    textDecoration:'underline'}} to="/login">Login</NavLink>
            <NavLink  activeStyle={{ backgroundColor:'grey',
    textDecoration:'underline'}} to="/register">Register</NavLink>
        </div>
    </nav>
</header>
)
}

export default Header;