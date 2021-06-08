import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

const useStyles = makeStyles(theme => ({
    loadingContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    }
}));

const LoadingSpinner = ({ open }) => {
    const classes = useStyles();

    return (
        <Modal
            open={open}
            className={classes.modal}
            aria-labelledby="create-distributor-title"
            aria-describedby="create-distributor-form"
        >
            <div className={classes.loadingContainer} data-test='loadingSpinner'>
                <CircularProgress />
            </div>
        </Modal>
    );
};

export default LoadingSpinner;