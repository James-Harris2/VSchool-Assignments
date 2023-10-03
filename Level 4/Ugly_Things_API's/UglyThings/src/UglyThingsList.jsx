import { useState, useContext } from 'react';
import { UglyThingsContext } from './UglyThingContext';



export default function UglyThingsList () {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [imgUrl, setImgUrl] = useState("");

    const {addUgly} = useContext(UglyThingsContext)


    const handleSubmit = e => {
        e.preventDefault();
        addUgly({title, description, imgUrl})
        setTitle("");
        setDescription("");
        setImgUrl("");
};   

return (
    <form onSubmit={handleSubmit}>
        <input value={title} onChange={e => setTitle(e.target.value)} required placeholder="Title"/>
        <input value={description} onChange={e => setDescription(e.target.value)} required placeholder="Description" />
        <input value={imgUrl} onChange={e => setImgUrl(e.target.value)}required placeholder="Image URL"/>
        <button type="submit">Submit</button>

    </form>
)




}
