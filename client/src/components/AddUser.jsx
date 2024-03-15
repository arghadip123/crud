import { useState } from 'react';
import {FormControl, FormGroup, Input, InputLabel, TextField, Typography, styled, Button } from '@mui/material';
import {addUser} from '../service/api';

import { useNavigate } from 'react-router-dom';

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

const AddUser = () => { 

    const [user, setUser] = useState(defaultValues);
    const navigate = useNavigate();

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

            <Typography variant='h4'> Add User</Typography>

            <FormControl> 
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name'/>
            </FormControl>

            <FormControl> 
                <InputLabel>UserId</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='userid'/>
            </FormControl>

            <FormControl> 
                <InputLabel>Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email'/>
            </FormControl>

            <FormControl> 
                <InputLabel>Contact No</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='contact'/>
            </FormControl>

            <FormControl> 
                <Button variant="contained" onClick = {() => AddUserDetails() }>Add User</Button>
            </FormControl>

        </Container>
    )
}

export default AddUser;