import "./App.css";
import DisBonjour, {
  DisSalut,
} from "./components/ui/DisBonjour/DisBonjour";
import Header from "./components/container/Header/Header";
import User from "./components/container/User/User";

function App() {
  let user_1 = {
    prenom: "Samy",
    nom: "Djemai",
  };
  return (
    <div className='App'>
      <Header />

      <User />

      <DisBonjour prenom='Julien' nom='Djemai' />

      <DisBonjour prenom='Samy' nom='Djemai' />

      {/* {DisBonjour({ prenom: "Julien", nom: "samy" })}
      {DisBonjour(user_1)} */}
      <DisSalut />
    </div>
  );
}

export default App;
