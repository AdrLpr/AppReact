import Card from "../../hoc/Card/Card"

function alertClickMange()
{
    alert("Tu manges")
}
function alertClickDors()
{
    alert("Tu dors")
}
function alertClickEtudis()
{
    alert("Tu étudis")
}

export function Routine()
{
    return(
        <Card>
            <button onClick={alertClickMange}>Manger</button>
            
            <button onClick={alertClickEtudis}>Etudier</button>
       
            <button onClick={alertClickDors}>Dormir</button>
        
        </Card>
    )
}
