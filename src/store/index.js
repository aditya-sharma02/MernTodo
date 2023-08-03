import { configureStore } from "@reduxjs/toolkit";
import TodoSclice from "./slice/TodoSclice";

const store = configureStore({
    reducer: {
        todos: TodoSclice
    }
})

export default store;