import FirstName from "../FirstName/FirstName";
import LastName from "../LastName/LastName";

export default function FullName({prenom , nom}) {
  return (
    <div>
      <FirstName prenom={prenom}/>
      <LastName nom={nom}/>
    </div>
  );
}
