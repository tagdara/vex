import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => {
    return {   

        hide: {
            display: "none",
        },
        show: {
            display: "flex",
        },
        root: {
            display: "flex",
            flexDirection: "column",
        },
        nest: {
            paddingLeft: 24,
            display: "flex",
            flexDirection: "column",
        },
        end: {
            lineHeight: 1.5,
            backgroundColor: "#0C0",
            width: "100%",
            padding: 2,
        },
        notEnd: {
            lineHeight: 1.5,
            backgroundColor: "#FFF",
            padding: 2,
        }
    }
});

export default function Nest(props) {
    
    const classes = useStyles();
    const [show, setShow]=useState(props.root)
    const [content, setContent]=useState(false)   
    
    useEffect(() => {
    
        function parseLines() {
            var note=false
            var lastindent=0
            var indentLevel=undefined
            var dataLines=props.lines
            var foundEnd=false;
            var indent=0
            var childLines=[]
            var nextLines=[]
            var header=undefined
            var topElements=[]
            var preindent=0
            
            for (var i = 0; i < dataLines.length; i++) {
                var line=dataLines[i].text
                if (line && line.trim().length>0) {
                    var lineIndent=line.search(/\S/)
                    var linedata=line.trim()
                    
                    if (linedata.startsWith("### ")) { 
                        preindent=3
                    } else if (linedata.startsWith("## ")) { 
                        preindent=2
                    } else if (linedata.startsWith("# ")) { 
                        preindent=1
                    } else if (linedata.startsWith("- ")) { 
                        lineIndent=lineIndent+1
                    }
                    if (linedata.startsWith("- ") || linedata.startsWith("#") ) { 
                        indent=lineIndent+preindent
                        lastindent=indent
                        note=false
                    } else {
                        indent=lastindent
                        note=true
                    }
                    
                    
                    if (indentLevel===undefined) { indentLevel=indent }
                    //console.log(indent,line)
                    if (indent>-1) {
                        if (indent===indentLevel) {
                            if (header) {
                                topElements.push(<Nest key={header+i} indent={indent} header={header} lines={childLines} end={childLines.length>0} />)
                            }
                            childLines=[]
                            header=line
                        } else if (!foundEnd && indent>indentLevel) {
                            if (note) {
                                childLines[childLines.length - 1].notes.push(line)
                            } else {
                                childLines.push({ "text" : line, "notes": [] })
                            }
                        } else {
                            if (!foundEnd) {
                                foundEnd=true
                            }
                            nextLines.push(line)
                        }
                    }
                }
            }
            if (header) {
                topElements.push(<Nest key={header} indent={indentLevel} header={header} lines={childLines} end={childLines.length>0} />)
            }        
            return <div>{topElements} </div>
        }
        
        setContent(parseLines())
        
    }, [props.lines])
    
    function toggleShow() {
        setShow(!show)
    }
    
    function formatHeader() {
        var variant='subtitle1'
        var line=props.header.trim()
        if (line.startsWith("### ")) {
            line=line.replace(/^#+/g, '');
            variant="subtitle1"
        } else if (line.startsWith("## ")) {
            line=line.replace(/^#+/g, '');
            variant="h6"
        } else if (line.startsWith("# ")) {
            line=line.replace(/^#+/g, '');
            variant="h5"
        } else if (line.startsWith("- ")) {
            line=line.replace(/^-+/g, '');
            variant="subtitle2"
        } else {
            line=line.replace(/^#+/g, '');
        }
        return <Typography onClick={toggleShow} className={props.lines.length ? classes.notEnd : classes.end} variant={variant}>{line}</Typography>
    }

    return (
        <div className={props.root ? classes.root : classes.nest} >
            { formatHeader() }
            <div className={show ? classes.show : classes.hide}>
                <div className={props.lines.length ? classes.notEnd : classes.end}>
                    { content }
                </div>
            </div>
        </div>
        
    )
}
