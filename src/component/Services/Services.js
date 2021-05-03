import React, { Component } from 'react'
import Title from './Title'
import {Grid, Typography, Card, Container} from '@material-ui/core'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'
import { withStyles } from '@material-ui/core/styles'
import 'aos/dist/aos.css'



const styles = (theme) => ({
  section: {
    background: '#45f7b6',
    height: '100%',
    marginBottom: '3%',
    paddingBottom: '100px',
  },
  root: {
    flexGrow: '1',
  },
  card: {
    background: 'transparent',
    boxShadow: 'none',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '2%',
    padding: '10px',
  },

  info: {
    textIndent: '30px',
  },

  cardTitle: {
    fontWeight: 'bold',
    letterSpacing: '2px',
  },
})

class Services extends Component {
    state = {
      services: [
        {
          icon: <FaCocktail size={50} color="#e89938" />,
          title: 'Free Cocktails',
          info:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?',
        },
        {
          icon: <FaHiking size={50} color="#e89938" />,
          title: 'Endless Hiking',
          info:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?',
        },
        {
          icon: <FaShuttleVan size={50} color="#e89938" />,
          title: 'Free Shuttle',
          info:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?',
        },
        {
          icon: <FaBeer size={50} color="#e89938" />,
          title: 'Strongest Beer',
          info:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?',
        },
      ],
    }
    render() {
        const {classes} = this.props;
        return (
          <div className={classes.section}>
            <Title title='services' />
            <Container className={classes.root}>
            <Grid container spacing={4}>
               {
                   this.state.services.map((item, index) =>{
                       return (
                         <Grid
                           key={index}
                           item
                           className={classes.container}
                           xs={12}
                           md={6}
                           lg={3}
                           data-aos='zoom-out-right'
                         >
                           <Card className={classes.card}>
                             <div className={classes.icon}>{item.icon}</div>
                             <Typography
                               className={classes.cardTitle}
                               variant='h5'
                             >
                               {item.title}
                             </Typography>
                             <Typography
                               className={classes.info}
                               variant='subtitle1'
                             >
                               {item.info}
                             </Typography>
                           </Card>
                         </Grid>
                       )
                  }) 
               }
            </Grid>
            </Container>
          </div>
        )
    }
}

export default withStyles(styles, {withTheme: true})(Services);
