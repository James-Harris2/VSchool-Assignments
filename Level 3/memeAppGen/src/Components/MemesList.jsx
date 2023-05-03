import React from "react";

function MemesList (props){

    //This is where we destructure our props from the Meme component
  const {
    topText,
    bottomText,
    randomImage,
    id,
    updateMeme,
    removeMeme,
  } = props;

  
  
   
// console.log(props.topText, "top")
  //This allows for conditional rendering of the save and edit buttons as well as allowing the user to edit top and bottom text
  const [isEditable, setIsEditable] = React.useState(false);
  //Sets the intitial state to the values passed in from props and will also update if the user inputs new values
  const [memeTopBottom, setMemeTopBottom] = React.useState({
    topText: props.topText,
    bottomText: props.bottomText,
  });

  //This targets our top text on edit and then updates upon save
  function handleTopText(e) {
    setMemeTopBottom({ ...memeTopBottom, topText: e.target.innerText });
    console.log(memeTopBottom);
  }

  //This targets our bottom text on edit and then updates upon save
  function handleBottomText(e) {
    setMemeTopBottom({ ...memeTopBottom, bottomText: e.target.innerText });
  }

  //Toggles our isEditable state
  function handleEdit() {
    setIsEditable(true);
  }

  //Saves the edited values and then passes them into our upDateMeme function in the Meme component
  function handleSave() {
    setIsEditable(false);
    // updateMeme(id, memeTopBottom);
  }

  return (
    <div className="wrapper">
      <div className="meme-wrapper">
        <div className="new-meme">
          <img src={props.randomImage} className="memeImg" />
          <h2
            className="meme--text top"
            onInput={handleTopText}
            contentEditable={isEditable}
          >
            {props.topText}
          </h2>
          <h2
            className="meme--text bottom"
            onInput={handleBottomText}
            contentEditable={isEditable}
          >
            {props.bottomText}
          </h2>
          <div className="meme-buttons">
            {isEditable ? (
              <button onClick={handleSave} id="save-button-two">
                <i className="foSo">Save Me</i>
              </button>
            ) : (
              <button onClick={handleEdit} id="edit-button">
                <i className="foSo">Edit Me</i>
              </button>
            )}
            <button onClick={() => props.removeMeme(props.id)} id="delete-button">
              <i className="foSo">Delete Me</i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

}
export default MemesList;
