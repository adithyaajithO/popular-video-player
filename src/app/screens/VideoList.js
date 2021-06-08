import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import SearchBar from '../components/SearchBar';
import ActionButton from '../components/ActionButton';
import VideoPlayer from '../components/VideoPlayer';
import MicNoneOutlinedIcon from '@material-ui/icons/MicNoneOutlined';
import CastOutlinedIcon from '@material-ui/icons/CastOutlined';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import { makeStyles } from '@material-ui/core/styles';
import { videourls } from '../data/videodata.json';
import LoadingSpinner from '../components/LoadingSpinner';

const useStyles = makeStyles(theme => ({
    endCenter: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
    }, videoContainer: {
        position: 'relative',
        paddingTop: '56.25% !important',
    }, videoGroup: {
        width: '50% !important',
        margin: 'auto'
    }, toolBar: {
        padding: `${theme.spacing(2)}px 0 0 ${theme.spacing(5)}px`
    }
}));

const VideoList = ({
    history
}) => {
    const [loading, setLoading] = useState(true);
    const [searchPhrase, setSearchPhrase] = useState('');
    const [id, setId] = useState('');
    const classes = useStyles();

    useEffect(() => {
        if (id.length !== 0) {
            history.push(`/video-play/${id}`)
        }
    }, [id]);

    return (
        <div>
            <LoadingSpinner open={loading} />
            <Grid container className={classes.toolBar}>
                <Grid item xs={6}>
                    <SearchBar
                        searchPhrase={searchPhrase}
                        setSearchPhrase={setSearchPhrase}
                    />
                </Grid>
                <Grid item className={classes.endCenter} xs={1}>
                    <ActionButton
                        icon={MicNoneOutlinedIcon}
                    />
                </Grid>
                <Grid item className={classes.endCenter} xs={1}>
                    <ActionButton
                        icon={CastOutlinedIcon}
                    />
                </Grid>
                <Grid item className={classes.endCenter} xs={1}>
                    <ActionButton
                        icon={TuneOutlinedIcon}
                    />
                </Grid>
            </Grid>
            <Grid container className={classes.videoGroup} spacing={3}>
                {videourls.map((el, indx) => (
                    <Grid
                        key={indx}
                        item xs={12}
                        onClick={() => setId(el)} 
                    >
                        <div className={classes.videoContainer}>
                            <VideoPlayer
                                id={el}
                                setLoading={setLoading}
                            />
                        </div>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default VideoList;
