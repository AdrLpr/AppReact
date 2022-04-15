import Card from "../../hoc/Card/Card";
import FullName from "../../ui/FullName/FullName";
import Hobbies from "../../ui/Hobbies/Hobbies";
import Player from "../../ui/Player/Player";

export default function User({user}) {
  return (
    <Card>
      <FullName prenom={user.prenom} nom={user.nom}/>
      <Player />
      <Hobbies hobbies={user.hobbies}/>
    </Card>
  );
}
