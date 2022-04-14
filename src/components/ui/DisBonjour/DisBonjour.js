export default function DisBonjour({ prenom, nom }) {
  return (
    <div>
      <p>
        Bonjour, {prenom} {nom}.
      </p>
      <p>Ceci est un composant en React</p>
    </div>
  );
}

export function DisSalut() {
  let prenom = "Sam";
  return (
    <div>
      <p>Salut, {prenom}.</p>
      <p>Ceci est un autre composant en React</p>
    </div>
  );
}
