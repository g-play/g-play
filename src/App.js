import Header from "./components/Header";
import WelcomeWorld from "./components/WelcomeWorld";
import Login from "./components/Login";
import Register from "./components/Register";
import CreateGame from "./components/CreateGame";
import EditGame from "./components/EditGame";
import GameDetails from "./components/GameDetails";
import GameCatalog from "./components/GameCatalog/GameCatalog";
// import { useState } from "react";
import {Redirect, Route,Switch} from 'react-router-dom'
function App() {

  // const  [page, setPage] = useState('/home')
  // const navigationChangeHandler = (path) =>{
  //   console.log(path)
  //   setPage(path)
  // }



  const router =(path) =>{
    let pathNames = path.split('/')
    console.log(pathNames)
    let rootPath = pathNames[1];
    let argument = pathNames[2];
    console.log(argument)

    // const routes = {
    //   '/':<WelcomeWorld navigationChangeHandler={navigationChangeHandler}/>,
    //   'home':<WelcomeWorld navigationChangeHandler={navigationChangeHandler}/>,
    //   'games':<GameCatalog navigationChangeHandler={navigationChangeHandler}/>,
    //   'create':<CreateGame/>,
    //   'login':<Login/>,
    //   'register':<Register/>,
    //   'details':<GameDetails id={argument}/>
  
    // };
    // return routes[rootPath];
  }

  return (
    <div id="box">

 <Header 
//  navigationChangeHandler={navigationChangeHandler}
 />

    <main id="main-content">
      <Switch>
      <Route path ="/" exact component={WelcomeWorld}/>
      <Route path ="/home" component={WelcomeWorld}/>
      <Route path ="/games" exact component={GameCatalog}/>
      <Route path ="/create" component={CreateGame}/>
      <Route path ="/login"  component={Login}/>
      <Route path ="/register" component={Register}/>
      <Route path ="/games/:gameId" component={GameDetails}/>
      <Route path ="/custom" >
        <h2>Custom Page</h2>
        <p>Custom page!</p>
      </Route>
      <Route path="/logout" render={(props)=>{
        console.log('log out! >>>')
        return <Redirect to="/"/>  }} />
    


      </Switch>
    </main>
{/* {router(page)|| <h2>No Page Found!</h2>} */}
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
