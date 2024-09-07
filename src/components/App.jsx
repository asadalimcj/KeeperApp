
// //kHVD

// import React from "react";
// import Header from "./Header";
// import Note from "./Note";
// import Footer from "./Footer";
// // import notes from "../data";
// import CreatArea from "./CreateArea";

// function App() {

//   const [newitem, setnewitem] = React.useState([]);
//   function addNewItem(item){
//     setnewitem((pre) =>{
//       return(
//         [...pre, item]
//       )
//     })
//   }

//   function handleDelete(id){
//     setnewitem((pre) =>{
//       return pre.filter((item, index) =>{
//         return index !==id;
//       });
//     })
//   }

//   return (
//     <div className="App">
//     <Header />
//     <CreatArea addItem={addNewItem} />
//     {newitem.map((x, index) => <Note
//      title={x.Title} 
//      content={x.content}
//       key={index}
//       id={index}
//       onChnage={handleDelete}
//      />)}
//     <Footer />
//     </div>
//   );
// }

// export default App;




import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
