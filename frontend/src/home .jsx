import React, { useEffect, useState } from 'react'
import './home.css';

import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'; 

function Home() {

  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8017/')
    .then(res => setData(res.data))
    .catch(err => console.log(err));
  })
  const navigate = useNavigate();
  const handleDelete = (id) => {
    axios.delete('http://localhost:8017/delete/'+id)
    .then(res => Navigate('/'))
    .catch(err => console.log(err));

  }

  return (
    <div>
      <div>
        <h1>STUDENT RECORD</h1> 

        <Link to = "/create">
          <button >Add Data</button>
        </Link>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <Link to = {'/update/'+item.id}>
                      <button>Update</button>
                  </Link>
                  <button onClick={e => handleDelete(item.id)}>Delete</button>
                </tr>
              ))}
            </tbody>
        </table>
      </div>
    </div>
  )
}

export default Home
