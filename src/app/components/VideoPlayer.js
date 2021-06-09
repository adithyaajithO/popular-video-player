import React, { useState } from 'react';
import ReactPlayer from 'react-player'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    player: {
        position: 'absolute',
        top: 0,
        left: 0,
    }, title: {
        position: 'absolute',
        cursor: 'pointer'
        // marginTop: theme.spacing(5)
    }, container: {
        marginBottom: theme.spacing(6)
    }
}));

const VideoPlayer = ({
    id,
    setLoading,
}) => {
    const classes = useStyles();

    const [videoTitle, setVideoTitle] = useState('');
    const [light, setLight] = useState(false);

    return <div className={classes.container}>
        <ReactPlayer
            light={light}
            className={classes.player}
            playing={false}
            url={`https://www.youtube.com/watch?v=${id}`}
            config={{
                youtube: {
                    playerVars: {
                        origin: 'http://localhost:3000',
                    }
                }
            }}
            width='100%'
            height='100%'
            onReady={({ getInternalPlayer }) => {
                let intPl = getInternalPlayer();
                setLoading(false);
                setVideoTitle(intPl.getVideoData().title);
                setLight(true);
            }}
        />
        <Typography className={classes.title} variant='h6' component='h6'>
            {videoTitle}
        </Typography>
    </div>;
};

export default VideoPlayer;
