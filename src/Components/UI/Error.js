import React from "react";
import Card from "./Card";
import Button from "./Button";
import classes from './Error.module.css';

function Error(props)
{
    return <div>
        <div onClick={props.onconfirm} className={classes.backdrop}></div>
        <Card className={classes.modal}>
        <header className={classes.header}>
            <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
            <p1>{props.msg}</p1>
        </div>
        <footer className={classes.actions}>
            <Button onClick={props.onconfirm}>Close</Button>
        </footer>
    </Card>
    </div>
}
export default Error;