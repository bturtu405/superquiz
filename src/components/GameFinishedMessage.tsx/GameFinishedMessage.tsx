import React from "react";
import { Typography, Grid } from "@material-ui/core";

interface GameFinisedMessageProps {
    message: string;
}

const GameFinisedMessage = ({ message }: GameFinisedMessageProps) => 
    <Grid item>
        <Typography style={{ textAlign: 'center', fontSize: '6vh', color: 'purple' }}>
            {message}
        </Typography>
    </Grid>

export default GameFinisedMessage;