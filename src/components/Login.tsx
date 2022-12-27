import {Button, Container, Grid, withStyles} from "@mui/material";
import {useContext} from "react";
import {Context} from "../main";
import {useNavigate} from "react-router-dom";
import {useSignInWithGoogle} from "react-firebase-hooks/auth";

export const Login = () => {
    const {auth} = useContext(Context);
    const navigate = useNavigate();
    const [signInWithGoogle, loading, error] = useSignInWithGoogle(auth);

    return (<Container>
        <Grid container style={{height: window.innerHeight - 50}} justifyContent={'center'} alignItems={'center'}>
            <Button variant="outlined" size="large" onClick={() => signInWithGoogle()}>
                Log in with Google
            </Button>
        </Grid>
    </Container>)
}
