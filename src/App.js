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
  const navigationChangeHandler = (path) =>{
    console.log(path)
    setPage(path)
  }



  const router =(path) =>{
    let pathNames = path.split('/')
    console.log(pathNames)
    let rootPath = pathNames[1];
    let argument = pathNames[2];
    console.log(argument)

    const routes = {
      '/':<WelcomeWorld/>,
      'home':<WelcomeWorld/>,
      'games':<GameCatalog navigationChangeHandler={navigationChangeHandler}/>,
      'create':<CreateGame/>,
      'login':<Login/>,
      'register':<Register/>,
      'details':<GameDetails id={argument}/>
  
    };
    return routes[rootPath];
  }

  return (
    <div id="box">

 <Header 
 navigationChangeHandler={navigationChangeHandler}
 />

    <main id="main-content">
    </main>
{router(page)|| <h2>No Page Found!</h2>}
{/* {routes[page]|| <h2>No Page Found!</h2>} */}
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
