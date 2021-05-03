import React from 'react'
import {Typography} from '@material-ui/core'
import useStyles from './styles'
const Title = ({title}) => {
    const classes = useStyles();
    return (
        <div className={classes.sectionTitle}>
            <Typography className={classes.title} variant='h4'>{title}</Typography>
            <div className={classes.underline}></div>
        </div>
    )
}

export default Title
