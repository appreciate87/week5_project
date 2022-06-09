// 덕스구조 연습
// 매일 반복하기

// action

const ADD_TODO = "todos/ADD_TODO"
const DELETE_TODO = "todos/DELETE_TODO"
const GET_TODOS = "todos/GET_TODOS"

// action creator

export const addTodo = (payload) => ({type:ADD_TODO , payload});
export const deleteTodo = (payload) => ({type:DELETE_TODO , payload});
const getTodos = (payload) => ({type:GET_TODOS , payload});


// history 서버에서 todos 불러오기

export const __getTodos = () => async(dispatch , getState) => {
    const data = await (
        await fetch ("https://jsonplaceholder.typicode.com/todos?_page=1")
    ).json();
    dispatch(getTodos(data));
}


//reducer

const todos = (state = initialState , {payload, type}) => {
    console.log(type);
    switch(type){
        case ADD_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {id: state.todos.length +1 , titie: payload}
                ]
            };
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo)=>{
                    return todo.id !== payload;
                })
            };

        case GET_TODOS:
            return {
                ...state, todos: payload,
            }
    }
}

export default todos;