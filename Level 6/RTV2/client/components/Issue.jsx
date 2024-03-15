// Issue Function
import { useContext } from "react"
import { UserProvider } from "../context/UserProvider"
import { UserContext } from "../context/UserProvider"

function Issue(props) {
    const { comments } = useContext(UserContext)
    const {_id } = props.issue
    const FilteredComments = comments.filter(comment => comment.issue === _id)
    console.log(FilteredComments);
}

export default Issue