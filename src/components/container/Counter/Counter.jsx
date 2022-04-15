import { useState } from "react"
import Card from "../../hoc/Card/Card"

export default function Counter(){
    const [ res, setResultat] = useState(0)

    function sub()
    {
        console.log("resultat avant:", res)
        setResultat(res-1)
        console.log("res apres:", res)

    }
    function add()
    {
        console.log("resultat avant:", res)
        setResultat(res+1)
        console.log("res apres:", res)
    }
    return <Card>
        <h2>Counter: {res}</h2>
        <button onClick={sub}> -1 </button>
        <button onClick={add}> +1 </button>
    </Card>
}