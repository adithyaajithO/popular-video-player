import React, { useState } from 'react';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    chip: {
        margin: `${theme.spacing(1)}px ${theme.spacing(0.3)}px`
    }
}));

const ChipKeyword = ({
    label,
}) => {
    const classes = useStyles();

    const [chipColor, setChipColor] = useState('default');

    const handleClassChange = () => {
        if (chipColor === 'default') {
            setChipColor('secondary');
        } else {
            setChipColor('default');
        }
    }

    return <Chip
        label={label}
        clickable
        onClick={handleClassChange}
        color={chipColor}
        className={classes.chip}
    />;
}

export default ChipKeyword;
