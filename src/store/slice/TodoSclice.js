import { createSlice } from "@reduxjs/toolkit"

const TodoSclice = createSlice({
    name: "Todos",
    initialState: [],
    reducers: {
        addTodo(state, action) {
            console.log(state)
            if (state.length != 0) {
                state = []; 
            }
            action.payload.map((elem, id) => {
                state.push(elem)
            })
        },
        popTodo(state, action) {
            console.log("del id" + action.payload)
            for (let i = 0; i < state.length; i++){
                console.log(state)
                if (state[i]._id = action.payload) {
                    state.splice(i, 1);
                }
            }
            // state.filter((elem, index) => {
            //     console.log(elem)
            //     return elem._id!==action.payload
            // }) 

        },
        deleteTodo() {
            return [];
        },
    }
})

export const { addTodo, popTodo,deleteTodo, addIn } = TodoSclice.actions;
export default TodoSclice.reducer;