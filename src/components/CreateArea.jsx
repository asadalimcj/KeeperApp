// import React from "react";

// function CreatArea(props) {
//   const [note, setnote] = React.useState({
//     Title: "",
//     content: "",
//   });

//   function handleChange(event) {
//     const { name, value } = event.target;
//     setnote((pre) => {
//       return {
//         ...pre,
//         [name]: value,
//       };
//     });
//     console.log(note);
//   }

//   return (
//     <div className="form">
//       <input
//         onChange={handleChange}
//         value={note.Title}
//         placeholder="Title ..."
//         name="Title"
//       />
//       <textarea
//         onChange={handleChange}
//         value={note.content}
//         name="content"
//         placeholder="Take a note ..."
//         rows="3"
//       />
//       <button
//         onClick={() => {
//           props.addItem(note);
//           setnote({
//             Title:"",
//             content:""
//           })
//         }}
//       >
//         Add
//       </button>
//     </div>
//   );
// }

// export default CreatArea;



import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
