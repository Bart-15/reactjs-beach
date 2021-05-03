import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Container, Grid, Card, CardMedia, CardActions, CardActionArea, Typography, Button} from '@material-ui/core'
import AOS from 'aos'
import 'aos/dist/aos.css'
import useStyles from './styles'
const Room = ({room}) => {

  const [hover, setHover] = useState(false)
  const {name, slug, images, price} = room;

  useEffect(() => {
       AOS.init({
         // initialise with other settings
         duration: 500,
         once:true
       })
  }, [])

  const classes = useStyles();
  return (
    <Container
      className={classes.container}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <Card className={classes.card} data-aos='zoom-out-down' >
        <CardActionArea>
          <CardMedia className={classes.media} image={images[0]} />
          <div className={classes.footer}>
            <Typography
              variant='h4'
              className={classes.sidePrice}
              style={{ borderRadius: '0px 30px 0px 30px' }}
            >
              Php {price}{' '}
              <span style={{ display: 'block', fontSize: '12px' }}>
                per night
              </span>
            </Typography>
            <Typography variant='h6' style={{ letterSpacing: '3px', fontWeight:'bold' }}>
              {name}
            </Typography>
          </div>
        </CardActionArea>
      </Card>
      <div className={hover ? classes.showMiddle : classes.middle}>
        <Button className={classes.btn} component={Link} to={`/rooms/${slug}`}>
          features
        </Button>
      </div>
    </Container>
  )
}

export default Room
