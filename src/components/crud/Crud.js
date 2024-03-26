import React , {useState} from 'react'
import './crud.css'
import { RiDeleteBinLine } from "react-icons/ri";
import list from "../../assets/images/icon.png"

function Crud() {
    const [name , setName] = useState("")
    const [data , setData] = useState([])



    const handleSubmit = (e) => {
        e.preventDefault()
        let newUser = {
            id: `user-${new  Date().getTime()}`,
            name,
        }
        setData(p=> [...p , newUser])
        setName("")
    }

    const handleDelete = (id) => {
       let filtered=  data?.filter(user => user.id !== id)
       setData(filtered)
    }

    let cards = data?.map ((user) => 
        <li key={user.id}>{user.name} <button onClick={() =>handleDelete(user.id)}><RiDeleteBinLine /></button></li>)
  return (
    <div id="crud">
        <div className="container">
            <div className="crud">
                <div className="todo__app">
                    <h2>To-Do List <img src={list} alt="" /></h2>
                    <form onSubmit={handleSubmit} action='' className="row">
                        <input required value={name} onChange={(e) => setName(e.target.value)} type="text" id='input__box' placeholder='Add your text' />
                        <button className='button'>Add</button>
                    </form>
                    <ul id='list__container'>
                        {cards}
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Crud