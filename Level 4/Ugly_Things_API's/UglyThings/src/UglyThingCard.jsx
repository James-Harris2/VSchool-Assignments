import axios from 'axios';
import { useState } from 'react'

function UglyThingCard (props) {
    const { item, getUglies }= props
    const [isEditing,setIsEditing] = useState(false);
    const [title, setTitle] = useState(item.title);
    const [description, setDescription] = useState(item.description);
    const [imgUrl, setImgUrl] = useState(item.imgUrl);
    

    function deleteThing (){
        axios.delete('https://api.vschool.io/jamesharris/thing/' + item._id  )
        .then(getUglies())
        .catch((error) =>{
            console.log(error)
        } )

    }
    function editThing (){
        setIsEditing(true)
        // axios.put    
    }
    function exitEditing(){
        setIsEditing(false)
    }
    function saveEdit(){
        axios.put("https://api.vschool.io/jamesharris/thing/" + item._id,{title,} )
        .then(getUglies())
        .catch(error => {
            console.log(error)
        } )
        exitEditing()
    } 
    return(
        <>
        {isEditing ?
        <div >
        <input onChange={e => setTitle(e.target.value)} type="text" value={title} />
        <input onChange={e => setDescription(e.target.value)} type="text" value={description} />
        <input onChange={e => setImgUrl(e.target.value)} type="text" value={imgUrl} />
        <button onClick={saveEdit}> save</button>
        <button onClick={exitEditing }> exit</button>
        </div>
        :

        <>
        
        < img src={item.imgUrl} className="thing-img"/>
            <h3>
                {item.title}
    
            </h3>

            <p>
                {item.description}
            </p>
        <button onClick={deleteThing}> 
            delete 

        </button>
        <button onClick={editThing}> 
            edit

        </button>
    </>
}
        </>
    )

}

export default UglyThingCard