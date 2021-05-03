import {makeStyles} from '@material-ui/core'
import notFound from '../../../images/404.svg'
const styles = makeStyles((theme) => ({
    container : {
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        maxWidth:'80vw',
        alignItems:'center'
    },
    image : {
        background:`url(${notFound})`,
        backgroundRepeat:'no-repeat',
        backgroundSize:'contain',
        height:'500px',
        width:'300px'
    },

    notfoundBtn: {
        backgroundColor: 'rgba(41, 40, 38, .9)',
        color: '#fff',
        margin:'4px',
        padding: '10px 10px',
        '&:hover': {
        backgroundColor: 'rgba(84, 184, 103, .6 )',
        color: '#fff',
        },
  },



  [theme.breakpoints.up('md')] : {
      image: {
          width:'800px',
      }
  }
    
}))

export default styles;