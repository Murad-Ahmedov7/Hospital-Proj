import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function JsServer() {
  const [data, setData] = useState([])
  const [name, setName] = useState("")

  // GET users
  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = () => {
    axios.get('http://localhost:3031/users')
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }

  // POST new user
  const addUser = () => {
    if (!name) return
    axios.post('http://localhost:3031/users', { name })
      .then(res => {
        console.log("User added:", res.data)
        fetchUsers() // listi yenilə
        setName("")  // inputu təmizlə
      })
      .catch(err => console.log(err))
  }

  // DELETE user
  const deleteUser = (id) => {
    axios.delete(`http://localhost:3031/users/${id}`)
      .then(res => {
        console.log("User deleted:", id)
        fetchUsers()
      })
      .catch(err => console.log(err))
  }

  // UPDATE user
  const updateUser = (id) => {
    const newName = prompt("Enter new name:")
    if (!newName) return
    axios.patch(`http://localhost:3031/users/${id}`, { name: newName })
      .then(res => {
        console.log("User updated:", res.data)
        fetchUsers()
      })
      .catch(err => console.log(err))
  }

  return (
    <div className='flex flex-col items-center justify-center absolute top-40 left-40 gap-4'>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
          className="border p-2 mr-2"
        />
        <button onClick={addUser} className="bg-teal-500 text-white px-4 py-2">
          Add User
        </button>
      </div>

      <div>
        {data.map(d => (
          <div key={d.id} className="border-b py-1 flex gap-2 items-center">
            <p>ID: {d.id}</p>
            <p>Name: {d.name}</p>
            <button onClick={() => updateUser(d.id)} className="bg-blue-500 text-white px-2">Edit</button>
            <button onClick={() => deleteUser(d.id)} className="bg-red-500 text-white px-2">Delete</button>
          </div>  
        ))}
      </div>
    </div>
  )
}
