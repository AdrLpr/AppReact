import FullName from "../../ui/FullName/FullName";
import Hobbies from "../../ui/Hobbies/Hobbies";
import Player from "../../ui/Player/Player";

export default function User() {
  return (
    <div>
      <FullName />
      <Player />
      <Hobbies />
    </div>
  );
}
