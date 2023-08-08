import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Users = () => {
    const [users, setUsers] = useState([{
        Name:"yousaf", Email: "ysf@gma", Age:20 
    }])
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
                                <td>{user.Name}</td>
                                <td>{user.Email}</td>
                                <td>{user.Age}</td>
                                <td className='d-flex p-2'>
                                <Link to="/update" className='btn btn-success mb-4'>Update</Link>
                                    <button>Delete</button>
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