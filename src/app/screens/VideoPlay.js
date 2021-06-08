import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import VideoPlayer from '../components/VideoPlayer';
import ChipKeyword from '../components/ChipKeyword';
import Grid from '@material-ui/core/Grid';
import LoadingSpinner from '../components/LoadingSpinner';
import { recommended } from '../data/videodata.json';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import ActionButton from '../components/ActionButton';

const useStyles = makeStyles(theme => ({
    loadingContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    }, blackChip: {
        backgroundColor: 'black'
    }, chipContainer: {
        whiteSpace: 'noWrap',
        overflowX: 'scroll',
    }, videoContainer: {
        position: 'relative',
        paddingTop: '56.25% !important',
    }, videoGroup: {
        width: '50% !important',
        // margin: 'auto'
    }, buttonGroup: {
        width: '30% !important',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    }
}));

const VideoPlay = ({
    match,
    history
}) => {
    const classes = useStyles();

    const [loading, setLoading] = useState(true);
    const [id, setId] = useState(match.params.id);

    // const id = match.params.id;

    useEffect(() => {
        if (id.length !== 0) {
            history.push(`/video-play/${id}`)
        }
    }, [id]);

    const chipList = [
        'random 1',
        'random 1',
        'random 1',
        'random 1',
        'random 1',
        'random 1',
        'random 1',
        'random 1',
        'random 1',
        'random 1',
        'random 1',
        'random 1',
        'random 1',
        'random 1',
        'random 1',
        'random 1',
        'random 1',
        'random 1',
        'random 1',
        'random 1',
    ];

    return (
        <div key={id}>
            <LoadingSpinner open={loading} />
            <div className={classes.videoGroup}>
                <div>
                    <div className={classes.videoContainer}>
                        <VideoPlayer
                            id={id}
                            setLoading={setLoading}
                        />
                    </div>
                </div>
            </div>
            <Grid container spacing={3} className={classes.buttonGroup}>
                <Grid item xs={4}>
                    <ActionButton icon={ThumbUpOutlinedIcon} />
                </Grid>
                <Grid item xs={4}>
                    <ActionButton icon={ThumbDownOutlinedIcon} />
                </Grid>
                <Grid item xs={4}>
                    <ActionButton icon={ShareOutlinedIcon} />
                </Grid>
            </Grid>
            <div className={classes.chipContainer}>
                {chipList.map((el, indx) => (
                    <ChipKeyword
                        label={el}
                        key={indx}
                    />
                ))}
            </div>
            <Grid container className={classes.videoGroup} spacing={3}>
                {recommended.map((el, indx) => (
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
        </div >
    );
};

export default VideoPlay;
