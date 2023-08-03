import React from "react";
import "../styles/todo.css"

const Card = (props) => {
    return (
        <>
            <div className="card">
                <div className={props.data.status == "active" ? "title1" : "title2"}>{props.data.title}</div>
                <div className={props.data.status == "active" ? "description1" : "description2"}>{props.data.description}</div>
                <div className={props.data.status == "active" ? "statusactive" : "statuscomplete"}>{props.data.status}</div>
                <button className={props.data.status == "active" ? "del1" : "del2"} onClick={() => props.onselect(props.data._id)}>delete</button>
                <button className={props.data.status == "active" ? "del1" : "del2"}>
                    <a style={{ textDecoration: "none" }} href={`/update/${props.data._id}`}>Edit</a></button>
            </div>
        </>
    )
}

export default Card;