import axios from 'axios';

const URL = 'http://localhost:8000' ;

export const addUser = async (data) => {
    try{
        return await axios.post(`${URL}/adduser`, data);
    } catch(error){
        console.log('error while calling addUser api', error);
    }
}

export const getUsers = async () => {
    
    try{
        return await axios.get(`${URL}/alluser`)
    } catch(error){
        console.log('error while calling getUsers api', error);
    }
}

export const getUser = async (id) => {
    
    try{
        return await axios.get(`${URL}/${id}`);
    } catch(error){
        console.log('error while calling getUser api', error);
    }
}