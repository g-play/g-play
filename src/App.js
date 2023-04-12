import Header from "./components/Header";
import WelcomeWorld from "./components/WelcomeWorld";
import Login from "./components/Login";
import Register from "./components/Register";
import CreateGame from "./components/CreateGame";
import EditGame from "./components/EditGame";
import GameDetails from "./components/GameDetails";
import GameCatalog from "./components/GameCatalog/GameCatalog";
import { useState } from "react";
function App() {

  const  [page, setPage] = useState('/home')


  const routes = {
    '/':<WelcomeWorld/>,
    '/home':<WelcomeWorld/>,
    '/all-games':<GameCatalog/>,
    '/create':<CreateGame/>,
    '/login':<Login/>,
    '/register':<Register/>
  };
  const navigationChangeHandler = (path) =>{
    console.log(path)
    setPage(path)
  }

  return (
    <div id="box">

 <Header 
 navigationChangeHandler={navigationChangeHandler}
 />

    <main id="main-content">
    </main>
{routes[page]|| <h2>No Page Found!</h2>}
{/* <WelcomeWorld/> */}
   {/* <Login/>
 <Register/>

  <CreateGame/>

<EditGame/>


<GameDetails/>
  
<GameCatalog/> */}
   
</div>
  );
}

export default App;
