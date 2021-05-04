import React from 'react'
import Room from '../Room/Room'
import useStyles from './styles'
import {Typography} from '@material-ui/core'
const RoomList = ({rooms}) => {

    const classes = useStyles()
    if(rooms.length === 0) {
        return <div className={classes.noRooms}>
            <Typography className={classes.centerText} variant="h4">No rooms matched your search parameters...</Typography>
        </div>
    }

    return (
        <div>
            <Room rooms={rooms} />
        </div>
    )
}

export default RoomList
