import '../styles/home.css'
import { useState } from 'react';


function Home() {
    const [data, setdata] = useState({
        title: "",
        description: "",
        status: ""
    })
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
            'https://merntodo-fcte.onrender.com/createtodo', {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result = await result.json()
        console.log(result)
        if (result) {
            alert("Todo added succesfully");
            setdata({
                title: "",
                description: "",
                status: ""
            })

        }
    }

    return (
        <>
            <div className='body'>
            <div className="note">Please Click <span ><a style={{textDecoration:"none"}} href='/todo'>Todo</a></span> to see Tasks</div>
                <div className='form'>
                    <form action=''>
                         <input autoComplete='off' type='text' placeholder='title' name='title' value={data.title} onChange={handlechange} required className='title' />
                        <input autoComplete='off' className='description' type='text' placeholder='Description' name='description' value={data.description} onChange={handlechange} required />

                        <div className="form-check form-check-inline" required>
                            <input className="form-check-input" type="radio" name="status" id="inlineRadio1" value="active" onClick={(e) => {
                                setdata((preval) => {
                                    return { ...preval, [e.target.name]: "active" }
                                })
                            }} />
                            <label className="form-check-label" htmlFor="inlineRadio1">Active</label>
                        </div>
                        <div className='radbtn'>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="status" id="inlineRadio2" value="completed" onClick={(e) => {
                                    setdata((preval) => {
                                        return { ...preval, [e.target.name]: "completed" }
                                    })
                                }} />
                                <label className="form-check-label" htmlFor="inlineRadio2">Completed</label>
                            </div>
                        </div>
                        <button className='btnsubmit' type='submit' value="submit" onClick={submit}>Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Home;


