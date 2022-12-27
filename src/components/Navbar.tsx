import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';
import {NavLink, useNavigate} from "react-router-dom";
import {useAuthState, useSignInWithGoogle} from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import {useContext} from "react";
import {Context} from "../main";

export function Navbar() {
    const {auth} = useContext(Context);
    const navigate = useNavigate();
    const [user, loading, error] = useAuthState(auth);

    console.log(
        loading
    )

    const signOutUser = async () => {
        try {
            await signOut(auth);
            console.log('here')
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static" style={{backgroundColor: 'rgb(154 154 154)'}}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        Chat
                    </Typography>
                    {
                        user ? <Button variant="contained">Log out</Button> :
                            <Button variant="contained" onClick={() => navigate('/login')}>Log in</Button>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
}
