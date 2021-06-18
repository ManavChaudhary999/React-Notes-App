import React from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab"; // first npm install @material-ui/core , here we are styling button
function CreateArea(props) {
    const [item, setItem] = React.useState({
        title: "",
        content: ""
    });

    function handleChange(event){
        const { name, value } = event.target;
        setItem( prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        });
    }

    function submittedNote(event){
        props.onAdd(item);
        setItem({
            title:"",
            content:""   
        })
        event.preventDefault();
    }

  return (
    <div>
      <form>
        <input onChange={handleChange} name="title" placeholder="Title" value={item.title} />
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={item.content} />
        {/* <button onClick={submittedNote}>Add</button> */}
        <Fab onClick={submittedNote}><AddIcon /></Fab>
      </form>
    </div>
  );
}

export default CreateArea;
