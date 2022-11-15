import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Details = () => {

    const[user,setUser]=useState(null);
    const[loading,setLoading]=useState(true);
    const {id}=useParams();

    useEffect (()=>{
const fetchUser =async() =>{
try{
const response=await fetch(
`https://jsonplaceholder.typicode.com/users/${id}`
    );
    const jsonRes=await response.json();
    setUser(jsonRes)
    setLoading(false)
} 
catch(error){

}
};
fetchUser();
    },[]);

  return (
    <div>
        {
loading ? (<h3 className='Loader'></h3>) : (<div className='conteudo'>
   
    <h1>{user.name}</h1>
    <h4>{user.username}</h4>
    <h4>{user.email}</h4>
    <h4>{user.address.city}</h4>
    <h4>{user.address.geo.lat}</h4>

    </div>
        )}
    </div>
  ) ;
} ;

export default Details;