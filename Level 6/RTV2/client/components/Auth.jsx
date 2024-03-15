import { useContext,useState } from "react";
import { UserContext } from "../context/UserProvider";
import AuthForm from "./AuthForm";


export default function Auth() {
    const { signup, login, errMsg } = useContext(UserContext)

    const [toggle, setToggle] = useState(false)

    function handleToggle(){
        setToggle(prev => !prev)
    }

    return (
        <>
            {
                toggle ?
                    <AuthForm submit = {signup}/>
                    :
                    <AuthForm submit = {login}/>
            }

            <button onClick={handleToggle}>{toggle ? 'Need to Sign up?' : 'Need to Login?'}</button>
            {errMsg && <p>{errMsg}</p>}

        </>
    )
}