import React from 'react'
import Hero from '../../Hero/Hero'
import Banner from '../../Banner/Banner'
import {Button} from '@material-ui/core'
import Services from '../../Services/Services'
import FeaturedRooms from '../../FeaturedRooms/FeaturedRooms'
import {Link} from 'react-router-dom'
// import StyledHero from '../../Hero/StyledHero'
import useStyles from './styles'
const Home = () => {
    const classes = useStyles()
    return (
      <>
        <Hero>
          <Banner
            title='luxurious rooms'
            subtitle='deluxe room starting at ₱5,000'
          >
            <Button
              component={Link}
              className={classes.roomBtn}
              to='/rooms'
            >our rooms</Button>
          </Banner>
        </Hero>
        <Services />
        <FeaturedRooms />
        {/* <StyledHero>
        Hello
      </StyledHero> */}
      </>
    )
}

export default Home
