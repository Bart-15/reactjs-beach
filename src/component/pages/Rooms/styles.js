import {makeStyles} from '@material-ui/core/styles'

const styles = makeStyles((theme) => ({
  roomBtn: {
    backgroundColor: 'rgba(41, 40, 38, .9)',
    color: '#fff',
    padding: '10px 10px',
    '&:hover': {
      backgroundColor: 'rgba(84, 184, 103, .6 )',
      color: '#fff',
    },
  },
}))

export default styles;

