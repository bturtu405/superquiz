import React, { useState, ChangeEvent } from "react"
import { Button, TextField, Grid } from "@material-ui/core"
import { useHistory } from "react-router-dom";
import { TRIVIA_ROUTE } from "../../Router/Routes";
import { Title } from "../../components/Title/Title";

const styles = {
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        width: 300,
        margin: 100,
    },
    //style for font size
    resize: {
        fontSize: '50'
    },
};

export const HomePage = () => {
    let history = useHistory();
    const [userName, setUserName] = useState<string>('');


    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUserName(event.target.value);
    }

    return <>
        <Grid container
            spacing={1}
            direction='column'
            justify='center'
            alignItems='center'>
            <Grid xs={12}>
                <Title />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    onChange={onChange}
                    value={userName}
                    InputProps={{ style: { fontSize: '5vh' } }}
                    placeholder={'Username'}
                    style={{ marginBottom: '2vh' }}
                />
            </Grid>
            <Grid item xs={12}>
                <Button onClick={() => history.replace(TRIVIA_ROUTE)} style={{
                    borderColor: 'black',
                    color: '#ffff',
                    backgroundColor: 'pink',
                    fontSize: '5vh',
                    fontWeight: 'bold',
                    width: '20vw'
                }}>
                    Start
             </Button>
            </Grid>
        </Grid>
    </>
}