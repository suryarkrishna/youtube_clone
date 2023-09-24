import React from 'react';
import { Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { logo } from '../utils/constants';
import SearchBar from './SearchBar';


const Navbar = () => (
    <Stack direction="row" alignItems="center" p={2} sx={{ position: 'sticky', background: '#000', top: 0, justifyContent: "space-between" }}>
        <Link to="/" style={{ display: 'flex', alignItems:'center'}}>
            <img src={logo} alt='logo' height={45} />
        <Typography sx={{color: '#bbb7e1', fontWeight: 'bold', fontSize: 20, ml: 2,}}>MeTube</Typography>
        </Link>
        <SearchBar />
    </Stack>

)

export default Navbar;