import React from "react";
import DeleteIcon from "@material-ui/icons/Delete"; // first we have to install @material-ui/icons - it is inbuilt react based styling where we can style pages
// go to material Ui site to know more about it 

function Card(prop){
    return (<div className = 'note'>
            <h1>{prop.name}</h1>
            <p>{prop.content}</p>
            <button onClick={()=>{ prop.onDel(prop.id) }}><DeleteIcon /></button>
    </div>);
}

export default Card;