import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Banner from '../../Banner/Banner'
import { RoomContext } from '../../../context'
import { withStyles } from '@material-ui/core/styles'
import {
  Container,
  Typography,
  Button,
  GridList,
  GridListTile,
  Grid,
} from '@material-ui/core'
import StyledHero from '../../Hero/StyledHero'

//css styles
const styles = (theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: '20px',
    height: '200px',
  },
  btn: {
    background: '#58db7d',
    color: '#fff',
    fontSize: '15px',
    '&:hover': {
      background: 'none',
      color: '#58db7d',
      border: '.5px solid #58db7d',
    },
  },

  title: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    letterSpacing:'4px'
  },

  //image Grid
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  imageRoot: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    margin: '3%',
  },

    descRoot : {
        flexGrow:1,
    },
    
    descContainer : {
        display:'flex',
        margin:'0 auto',
        maxWidth:'100%',
        padding:'0 5%',
        fontFamily:`Nunito, sans-serif`
    },
    text : {
        letterSpacing:'3px'
    }
  //Details
})
class SingleRoom extends Component {
  constructor(props) {
    super(props)

    // console.log(this.props)
    this.state = {
      slug: this.props.match.params.slug,
    }
  }

  static contextType = RoomContext
  render() {
    const { classes } = this.props
    const { getRoom } = this.context
    const room = getRoom(this.state.slug)
    console.log(room)
    if (!room) {
      return (
        <Container>
          <div className={classes.container}>
            <Typography className={classes.title} variant='h5'>
              no such rooms could be found...
            </Typography>
            <Button className={classes.btn} component={Link} to='/rooms'>
              back to rooms
            </Button>
          </div>
        </Container>
      )
    }

    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images,
    } = room

    return (
      <>
        <StyledHero img={images[0]}>
          <Banner title={`${name} room`}>
            <Button className={classes.btn} component={Link} to='/rooms'>
              back to rooms
            </Button>
          </Banner>
        </StyledHero>

        <Container maxWidth='lg'>
          <div className={classes.imageRoot}>
            <GridList className={classes.gridList} cols={1.5} cellHeight={300}>
              {images.map((image, index) => {
                return (
                  <GridListTile key={index}>
                    <img src={image} alt='' />
                  </GridListTile>
                )
              })}
            </GridList>
          </div>
        </Container>

        <div className={classes.descRoot}>
          <Grid container className={classes.descContainer} spacing={6}>
            <Grid item xs={12} md={6}>
              <Typography variant='h4' className={classes.title}>
                Details
              </Typography>
              <Typography variant='subtitle1'>{description}</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant='h4' className={classes.title}>
                Info
              </Typography>
              <Typography variant='h6' className={classes.text}>
                Price : ₱{price}
              </Typography>
              <Typography variant='h6' className={classes.text}>
                Size : {size} SQFT
              </Typography>
              <Typography variant='h6' className={classes.text}>
                Max Capacity :{' '}
                {capacity > 1 ? `${capacity} People` : `${capacity} Person`}
              </Typography>
              <Typography variant='h6' className={classes.text}>
                {pets ? 'Pets Allowed' : 'Pets Not Allowed'}
              </Typography>
              <Typography variant='h6' className={classes.text}>
                {breakfast && "Free Breakfast Included"}
              </Typography>
            </Grid>
          </Grid>
        </div>

        <div className={classes.listContainer}>
           <Grid container className={classes.descContainer} spacing={6}>
              <Grid item>
               <Typography className={classes.title} variant="h4">Extras</Typography>
                  <ul style={{listStyle:'none'}}>
                      {
                          extras.map((extra, index) => {
                              return (
                                 <li className={classes.text} key={index}> - {extra}</li>
                              )
                          })
                      }
                  </ul>
              </Grid>
           </Grid>
        </div>
      </>
    )
  }
}

export default withStyles(styles, { withTheme: true })(SingleRoom)
