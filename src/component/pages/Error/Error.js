import React from 'react'
import {Container, Button, Typography} from '@material-ui/core'
import {Link} from 'react-router-dom'
import useStyles from './styles'
const Error = () => {
    const classes = useStyles()
    return (
      <Container className={classes.container}>
        <Typography variant='subtitle1'>!Oops, something went wrong</Typography>
        <Link component={Button} to='/' className={classes.notfoundBtn}>Go back home</Link>
        {/* <Button className={classes.notfoundBtn}>Go back home</Button> */}
        <div className={classes.image}></div>
      </Container>
    )
}

export default Error
