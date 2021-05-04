// export default Room
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardActions,
  CardActionArea,
  Typography,
  Button,
} from '@material-ui/core'
import AOS from 'aos'
import 'aos/dist/aos.css'
import useStyles from './styles'
const Room = ({ rooms }) => {


  const classes = useStyles()
  const [hover, setHover] = useState(-1)


  useEffect(() => {
    AOS.init({
      // initialise with other settings
      duration: 500,
      once: true,
    })
  }, [hover])

  const handleHover = (index) => {
    setHover(index)
    // alert(hover)
  }

  // const outHover = () => {
  //   setHover(0)
  // }

  console.log(hover)
  return (
    <>
      <Container>
          
        <Grid container spacing={4}>
          {rooms.map((room, index) => {
            const { name, images, price, slug } = room
            return (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <Card
                  className={classes.root}
                  data-aos='zoom-out-down'
                  onMouseOver={() => handleHover(index)}
                  onMouseOut={() => setHover(-1)}
                >
                  <CardActionArea>
                    <CardMedia className={classes.media} image={images[0]} />
                    <Typography
                      variant='h4'
                      className={classes.sidePrice}
                      style={{ borderRadius: '0px 30px 0px 30px' }}
                    >
                      Php {price}{' '}
                      <span style={{ display: 'block', fontSize: '15px' }}>
                        per night
                      </span>
                    </Typography>

                   
                      <div className={hover === index ? classes.showMiddle : classes.middle}>

                         <Button
                         className={classes.btn}
                         component={Link}
                          to={`/rooms/${slug}`}
                        >
                          features
                        </Button>

                      </div>
                  </CardActionArea>
                  <div className={classes.footer}>
                    <Typography
                      variant='h6'
                      style={{ letterSpacing: '3px', fontWeight: 'bold' }}
                    >
                      {name}
                    </Typography>
                  </div>
                </Card>
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </>
  )
}

export default Room
