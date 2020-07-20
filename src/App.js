import React, { useState, useEffect } from 'react';
import Nest from './Nest.js';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import data from "./data.md";

const useStyles = makeStyles(theme => {
    return {   

        hide: {
            display: "none",
        },
    }
})

function App() {
    
    const classes = useStyles();
    const [lines, setLines]=useState([])
    
    useEffect(() => {
        function parseMindMapMarkdown() {
            
            console.log('data',data)
            fetch(data)
                .then((r) => r.text())
                .then(text  => {
                    var rawLines=text.split(/\r?\n/)
                    var plines=[]
                    for (var i = 0; i < rawLines.length; i++) {
                        plines.push({"text": rawLines[i]})
                    }
                    setLines(plines)
                })          
        }

        parseMindMapMarkdown()
    }, [])
    
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Practitioner Documentation
                    </Typography>
                </Toolbar>
            </AppBar>
            
            <Nest header={""} lines={lines} indent={0} root={true}/>
        </div>
    );
}

export default App;
