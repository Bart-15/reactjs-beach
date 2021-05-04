import React from 'react'
import Hero from '../../Hero/Hero'
import Banner from '../../Banner/Banner'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'
import useStyles from './styles'
import RoomContainer from '../../Rooms/RoomContainer'
const Rooms = () => {
  const classes = useStyles()
  return (
    <>
      <Hero hero='roomsHero'>
        <Banner title='our rooms'>
          <Link component={Button} className={classes.roomBtn} to='/'>
            Return to home
          </Link>
        </Banner>
      </Hero>
      <RoomContainer />
    </>
  )
}

export default Rooms
