import { AppBar, Toolbar, styled  } from '@mui/material';
import {NavLink} from 'react-router-dom';

const Header = styled(AppBar)`
    background : rgb(72,138,199);
`;   

const Tabs = styled(NavLink)`
    font-size: 20px;
    margin-right: 100px; 
    color: inherit;
    text-decoration: none;  
`;
    
const NavBar = () => {
    return (
        <Header position="static">
            <Toolbar >
                <Tabs to = '/home'> Home </Tabs>
                <Tabs to = '/allusers'> All Users </Tabs>
                <Tabs to = '/adduser'> Add User </Tabs>
            </Toolbar>
        </Header>
    )
}

export default NavBar;