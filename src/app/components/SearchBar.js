import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        // marginTop: theme.spacing(1),
        marginBottom: theme.spacing(2),
        // maxWidth: '50%',
    }, formControl: {
        // marginTop: theme.spacing(2),
        marginBottom: theme.spacing(1),
        border: 'none'
    },
}));

const SearchBar = ({
    searchPhrase,
    style = {
        // width: '100%'
    },
    setSearchPhrase,
    label = "Search Videos"
}) => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <TextField
                style={style}
                id="searchBar"
                value={searchPhrase}
                onChange={e => setSearchPhrase(e.target.value)}
                variant="outlined"
                fullWidth
                label={label}
                InputProps={{
                    endAdornment: searchPhrase.length !== 0 && (
                        <IconButton onClick={() => setSearchPhrase('')}>
                            <InputAdornment position="end">
                                <CloseIcon />
                            </InputAdornment>
                        </IconButton>
                    ),
                }}
            />
        </div>
    )
};

export default SearchBar;