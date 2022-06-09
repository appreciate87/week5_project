import { collection, getDocs } from "firebase/firestore";
import { db } from "../../components/shared/firebase";

// action 

const USER_CREATE = "users/USER_CREATE"
const USER_LOAD = "users/USER_LOAD"

// const USER_DELETE = "users/USER_DELETE"
// const USER_UPDATE = "user/USER_UPDATE"

// initialState 초기값 설정

const initialState = {

    name: "",
    comment: "" 

}

// action creator

export const userCreate = (payload) => ({type: USER_CREATE , payload});
// export const userDelete = (payload) => ({type: USER_DELETE , payload});
export const userLoad = (payload) => ({type: USER_LOAD , payload});
// export const userUpdate = (payload) => ({type: USER_UPDATE , payload});


//middlewares
export const loadUserFB = () => {
    return async function (dispatch) {
        const user_data = await getDocs(collection(db,"users"));
        console.log(user_data);

        let users_list = [];
        user_data.forEach((u) => {
            console.log(u.data());
            users_list.push({id: u.id, ...u.data()});
        })

        console.log(users_list);

        dispatch(userLoad(users_list));
    }
}

//reducer

function reducer (state = initialState , action={}){
    switch(action.type){
        case "user/USER_CREATE":{
            return {
                ...state, name: action.name
            }
        }

        default:
            return state;
    }
}

export default reducer;

