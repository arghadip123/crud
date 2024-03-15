import { useState, useEffect } from 'react';
import {FormControl, FormGroup, Input, InputLabel, TextField, Typography, styled, Button } from '@mui/material';
import {addUser, getUser} from '../service/api';

import { useNavigate, useParams } from 'react-router-dom';

const Container = styled(FormGroup)`
    width: 40%;
    margin: 3% auto 0 auto;
    & div {
        margin: 10px;  
    }
`;

const defaultValues = {
    name: '',
    userid: '',
    email: '',
    contact: ''
}

const EditUser = () => { 

    const [user, setUser] = useState(defaultValues);
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        loadUserDetails();
    },[])

    const loadUserDetails = async () => {
        const response = await getUser(id); 
        // setUser(response.data);
        console.log(response.user);
    } 


    const onValueChange = (e) => {
        //console.log(e.target.name, e.target.value); 
        setUser({...user, [e.target.name]: e.target.value});
        console.log(user);
    }

    const AddUserDetails = async () => {
        await addUser(user);
        navigate('/allusers');
    }

    return (
        <Container> 

            <Typography variant='h4'> Edit User</Typography>

            <FormControl> 
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value= {user.name}/>
            </FormControl>

            <FormControl> 
                <InputLabel>UserId</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='userid' value= {user.userid} />
            </FormControl>

            <FormControl> 
                <InputLabel>Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value= {user.email}/>
            </FormControl>

            <FormControl> 
                <InputLabel>Contact No</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='contact' value= {user.contact}/>
            </FormControl>

            <FormControl> 
                <Button variant="contained" onClick = {() => AddUserDetails() }>Update User</Button>
            </FormControl>

        </Container>
    )
}

export default EditUser;