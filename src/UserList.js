import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import axios from 'axios'

const UserList = () => {
    const [listOfUsers, setListOfUsers] = useState([])
    

    useEffect(
       ()=> async()=>{
        try {
            const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
            setListOfUsers(data)
            
        } catch (err) {
            console.log(err)
        }
    }
        ,[])


  return (
    <div>

      {listOfUsers?.map(user=> 
        <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{user.phone}</Card.Subtitle>
          <Card.Text>
            {user.email}
          </Card.Text>
          
        </Card.Body>
      </Card>)}
    </div>
  )
}

export default UserList
