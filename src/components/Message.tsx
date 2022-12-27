import Box from "@mui/material/Box";
import {Avatar, Grid} from "@mui/material";

export const Message = ({authorName, authorUid, authorImage, currentUser, message, timestamp}) => {

    const formatedDate = new Date(timestamp).toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
    });

    return <Grid item sm={12}>
        <Box display={'flex'} columnGap={'10px'} justifyContent={authorUid === currentUser ? 'flex-end' : 'flex-start'} borderColor={authorUid === currentUser ? 'red' : 'black'}>
            <Avatar alt={authorName} src={authorImage} sx={{ width: 56, height: 56 }} />
            <div>
                <div>{message}</div>
                <div>{authorName}</div>
                <div>{formatedDate}</div>
            </div>
        </Box>
    </Grid>
}