import "./App.css";
import DisBonjour, {
  DisSalut,
} from "./components/ui/DisBonjour/DisBonjour";
import Header from "./components/container/Header/Header";
import User from "./components/container/User/User";
import { Routine } from "./components/container/Routine/Routine";
import Counter from "./components/container/Counter/Counter";
import MenuSecret from "./components/container/MenuSecret/MenuSecret";
import UsernameForm from "./components/container/UsernameForm/UsernameForm";

function App() {
  let user_1 = {
    prenom: "Adrien",
    nom: "Leprince",
    hobbies: [
      { id: 0, hobby_name: "Programmation" },
      { id: 1, hobby_name: "Graphisme" },
      { id: 2, hobby_name: "Dessin" },
    ],
  };
  return (
    <div className='App'>
      <Header />

      <User user={user_1}/>

      <DisBonjour prenom='Julien' nom='Djemai' />

      <DisBonjour prenom='Samy' nom='Djemai' />

      <Routine/>
      <Counter />
      <MenuSecret>
        <h2> UN SECRET </h2>
      </MenuSecret> 
      <UsernameForm />
      {/* {DisBonjour({ prenom: "Julien", nom: "samy" })}
      {DisBonjour(user_1)} */}
      <DisSalut />
    </div>
  );
}

export default App;
