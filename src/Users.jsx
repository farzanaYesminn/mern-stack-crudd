import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const Users = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
       axios.get('http://localhost:3001')
        .then(result => setUsers(result.data))
        .catch(err => console.log(err))

    }, [])

    const handleDelete = (id) => {
        axios.delete('http://localhost:3001/deleteUser/'+id)
        .then(res => {console.log(res)
        window.location.reload()})
        .catch(err => console.log(err))

    }

  return (
    <div className="d-flex container-fluid vh-100 text-bg-primary justify-content-center align-items-center">
        <div className=' w-75 lg:w-80 text-bg-dark  rounded p-4'>
        <Link to="/create" className='btn btn-warning mb-4'>Add +</Link>
            <table className='table'>
                <thead>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    {
                    users.map((user) => {
                        return <tr>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.age}</td>
                            <td className='d-flex p-2'>
                            
                            <Link to={`/update/${user._id}` }className='btn btn-success mb-4'>Update</Link>

                                <button className='btn btn-danger mb-4'
                                onClick={(e) => handleDelete(user._id)}>Delete</button>
                            </td>
                        </tr>
                    })
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Users