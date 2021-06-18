import React from "react";
// import notes from "./notes";
import Card from "./card";
import CreateArea from "./createnotes";

const date = new Date();
const currentYear = date.getFullYear();

function Header(){
    return <header><h1>KeeperApp</h1></header>
}

function Footer(){
    return <footer><p>copyright@mac {currentYear}</p></footer>
}

function App(prop){
    const [list, setList] = React.useState([]);

    function addItem(item){
        setList( prevValue =>{
            return [...prevValue, item]
        });
    }

    function deleteItem(id){
        setList( prevNotes =>{
            return prevNotes.filter( (item, index) =>{
                return index !== id;
            });
        });
    }

    return (<div>
                <Header />
                <CreateArea onAdd={addItem} />
                {list.map( (notesItem, index) =>{
                    return(<Card 
                            key={index}
                            id={index}
                            name={notesItem.title}
                            content={notesItem.content}
                            onDel={deleteItem}
                            />);
                })}
                <Footer />
           </div>
           );
}

export default App;