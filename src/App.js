import Header from "./components/Header";
import WelcomeWorld from "./components/WelcomeWorld";
import Login from "./components/Login";
import Register from "./components/Register";
import CreateGame from "./components/CreateGame";
import EditGame from "./components/EditGame";
import GameDetails from "./components/GameDetails";
import GameCatalog from "./components/GameCatalog";
function App() {
  const routes = {
    '/home':WelcomeWorld,
    '/games':GameCatalog,
    '/create-game':CreateGame
  };

  return (
    <div id="box">

 <Header/>

    <main id="main-content">
    </main>

<WelcomeWorld/>
   <Login/>
 <Register/>

  <CreateGame/>

<EditGame/>


<GameDetails/>
  
<GameCatalog/>
   
</div>
  );
}

export default App;
