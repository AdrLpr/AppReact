import logo from "../../../logo.svg";
import DisBonjour from "../../ui/DisBonjour/DisBonjour";

export default function Header() {
  return (
    <header>
      <img src={logo} alt='Logo React' />
      <h1>Bienvenu sur notre app!</h1>
    </header>
  );
}
