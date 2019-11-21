import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import LaunchIcon from '@material-ui/icons/Launch';

const styles = {
    link: {
        display: 'flex',
        justifyContent: 'space-between',
        textDecoration: 'none',
        color: 'green'
    },
    text: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    icon: {
        width: '0.5em',
        paddingLeft: 2,
    },
};

const UrlField = ({ record = {}, source, classes }) =>
    <a href={record[source]} className={classes.link}>
        <span className={classes.text}>{record[source]}</span>
        <LaunchIcon className={classes.icon} />
    </a>;

export default withStyles(styles)(UrlField);