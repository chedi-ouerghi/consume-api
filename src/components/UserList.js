import { Box, Container } from '@mui/material';
import React, { useEffect, useState } from 'react'
import UserCard from './UserCard';

function UserList() {
    const[users,setUsers]=useState([])
    const[loading,setLoading]=useState(true)

    useEffect (()=>{
const fetchUsers=async() =>{
try{
const response=await fetch(
    "https://jsonplaceholder.typicode.com/users"
    );
    const jsonRes=await response.json();
    setUsers(jsonRes)
    setLoading(false)
} 
catch(error){

}
};
fetchUsers();
    },[]);
  return (
    <Container sx={{mt:"50px" }}>
<Box sx={{display:"flex", justifyContent:"space-between", flexWrap:"wrap",gap:"30px"}}>

        {
        loading ? <h3 className='Loader'> </h3> :
        <>
        {
users.map((user)=>
<UserCard key={user.id} user={user} />)
        }
        </>
        
       
    } 
    </Box>
    </Container>
  )
}

export default UserList