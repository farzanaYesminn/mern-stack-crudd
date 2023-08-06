import React, { useState } from 'react'

const Users = () => {
    const [users, setUsers] = useState([{
        Name:"yousaf", Email: "ysf@gma", Age:20 
    }])
  return (
    <div className="d-flex container-fluid vh-100 text-bg-primary justify-content-center align-items-center">
        <div className='w-50 text-bg-dark rounded p-4'>
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
                            <tr>
                                <td>{user.Name}</td>
                                <td>{user.Email}</td>
                                <td>{user.Age}</td>
                                <td>
                                    <button>Edit</button>
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