import { getAllItems } from "../api/api"
import { INIT_TODOS } from "./types"

export const getItems = () => {
    return (dispatch) => {
        getAllItems()
            .then((items) => {
                dispatch({
                    type: INIT_TODOS,
                    payload: items
                })
                console.log(items)
            })
    }
}