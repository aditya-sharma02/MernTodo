import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { addTodo } from "../store/slice/TodoSclice";
import Card from "../Components/Card";
import "../styles/todo.css"
const Todo = () => {
    const disp = useDispatch()
    const navi= useNavigate()
    const data = useSelector((state) => state.todos)
    useEffect(() => {
        const get = async () => {
            let result = await fetch(
                "https://merntodo-fcte.onrender.com/gettodos"
            )
            result = await result.json()
            disp(addTodo(result))
        }
        get();
    }, []);

    const deleteTodo = async (payload) => {
        try {
            console.log("onselect")
            let data = await fetch(`https://merntodo-fcte.onrender.com/deletetotdo/${payload}`, { method: 'DELETE' })
        } catch (e) {
            return <h1>{e}</h1>
        }
    }

    return (
        <>
            <br />
            <div className="body">
                <div className="note">Please Refresh the page to see changes</div>
                {data.map((item, id) => {
                    return (
                        <Card
                            key={id}
                            data={item}
                            index={id}
                            onselect={deleteTodo}
                        />
                    )
                })}
            </div>
        </>
    )
}

export default Todo;