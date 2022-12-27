import {Container, Grid, TextField} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";
import React, {useContext} from "react";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {collection, addDoc, serverTimestamp} from 'firebase/firestore';
import {Context} from "../main";
import {Message} from "./Message";
import {useAuthState} from "react-firebase-hooks/auth";

export const Chat = () => {
    const [message, setMessage] = React.useState('');
    const {db, auth} = useContext(Context);
    const messagesRef = collection(db, 'messages');
    const [values, loading, error] = useCollectionData(messagesRef, {
        initialValue: []
    });
    const [user] = useAuthState(auth);

    const sendMessage = async () => {
        await addDoc(messagesRef, {
            authorName: user?.displayName,
            authorUid: user?.uid,
            authorImage: user?.photoURL,
            message,
            timestamp: serverTimestamp()
        })
    }

    return <Container>
        asdf
        <Grid container>
            <Grid item xs={12}>
                <Box sx={{height: '70vh', border: '1px solid #87aab9', margin: '25px 0'}}>
                    <Grid container overflow={'auto'} width={'80%'} marginInline={'auto'} paddingBlock={'50px'}>
                        {values?.map(message => <Message {...message} currentUser={user?.uid} />)}
                    </Grid>
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={2} alignItems={'center'}>
                    <Grid item sm={10}>
                        <TextField fullWidth label={'message...'} onChange={(e) => setMessage(e.target.value)} />
                    </Grid>
                    <Grid item sm={2} textAlign={'center'}>
                        <Button variant="contained" endIcon={<SendIcon />} onClick={sendMessage} disabled={!message.length}>
                            Send
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Container>
}