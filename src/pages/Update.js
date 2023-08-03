import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import '../styles/home.css'


const Update = (props) => {
    

    const [redirect, setred] = useState(false)
    const nav = useNavigate()
    const { id } = useParams();
    const [data, setdata] = useState({
        title: "",
        description: "",
        status: ""
    })
    useEffect(() => {
        const get = async () => {
            let result = await fetch(
                `https://merntodo-fcte.onrender.com/gettodos/${id}`
            )
            result = await result.json()
            setdata({
                title: result.title,
                description: result.description,
                status:result.status
            })
        }
        get();
    }, []);
    const handlechange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setdata((preval) => {
            return { ...preval, [name]: value }
        })
    }
    const submit = async (e) => {
        e.preventDefault();
        let result = await fetch(
            `https://merntodo-fcte.onrender.com/updatetodo/${id}`,
            {
                method: 'PATCH',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }

            }
        )
        if (result.status === 200) {
            alert("details updated")
            setred(true)
            nav(-1)
        }
        console.log(result)
        result = await result.json()

    }
    return (
        <>
            <div className='body'>
                <div className='form'>
                    <form action=''>
                        <input autoComplete='off' type='text' placeholder='title' name='title' value={data.title} onChange={handlechange} className='title' required />
                        <input autoComplete='off' className='description' type='text' placeholder='Description' name='description' value={data.description} onChange={handlechange} required />

                        <div className="form-check form-check-inline" required>
                            <input className="form-check-input" type="radio" name="status" id="inlineRadio1" value="active" onClick={(e) => {
                                setdata((preval) => {
                                    return { ...preval, [e.target.name]: "active" }
                                })
                            }} />
                            <label className="form-check-label" htmlFor="inlineRadio1">active</label>
                        </div>
                        <div className='radbtn'>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="status" id="inlineRadio2" value="completed" onClick={(e) => {
                                    setdata((preval) => {
                                        return { ...preval, [e.target.name]: "completed" }
                                    })
                                }} />
                                <label className="form-check-label" htmlFor="inlineRadio2">completed</label>
                            </div>
                        </div>
                        <button className='btnsubmit' type='submit' value="submit" onClick={submit}>Submit</button>
                        <button className='btnsubmit'  onClick={() => {
                        nav("/todo")
                    }}>back</button>
                    </form>
                    
                </div>
            </div>
        </>
    )
}
export default Update;