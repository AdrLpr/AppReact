import { useState } from "react";
import Card from "../../hoc/Card/Card";

export default function MenuSecret( {children} ){
    const [showMenu, setShowMenu] = useState(false)
    
    function toogleShowMenu()
    {

        setShowMenu(!showMenu)
        
    }
    return <Card>
        <button onClick={toogleShowMenu}>{showMenu ? "Cacher" : "Afficher"} </button>
        
        {showMenu ? (
            <div>
            {children}</div>
        //     <div id="menuSecret">
        //     <ul> 
        //        <li>Element1</li>
        //        <li>Element2</li>
        //        <li>Element3</li> 
        //     </ul>
        // </div>
        ) : null}
        </Card>
}