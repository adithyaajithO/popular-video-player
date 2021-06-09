import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    responsiveIcon: {
        [theme.breakpoints.down('md')]: {
            fontSize: '1.25rem'
        }
    }
}));

const ActionButton = ({
    icon: Icon
}) => {
    const classes = useStyles();

    return <IconButton>
        <Icon className={classes.responsiveIcon} />
    </IconButton>
        ;
}

export default ActionButton;
