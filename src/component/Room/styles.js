import { makeStyles } from '@material-ui/core/styles'

const styles = makeStyles((theme) => ({
  root: {
    flexGrow: '1',
  },
  card: {
    position: 'relative',
    '&:hover': {
      boxShadow: '-18px -21px 0px -3px  rgba(0,0,0,0.25)',
      transition: 'transform 0.15s ease-in-out',
    },
  },
  media: {
    height: 300,
    '&:hover': {
      opacity: '0.3',
      transition: '.2s  ease',
    },
  },
  footer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    color: '#fff',
    textTransform: 'uppercase',
    background: '#231278',
  },

  sidePrice: {
    position: 'absolute',
    top: '0',
    padding: '10px',
    right: '0',
    background: 'RGBA(69,83,80,0.55)',
    color: '#fff',
  },

  middle: {
    opacity: '0',
    transition: '.5s ease',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
  },

  showMiddle: {
    transition: '.5s ease',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    opacity: '1',
  },

  text: {
    background: 'red',
    padding: '1.2rem 5rem',
  },

  btn: {
    background: 'RGBA(69,83,80,0.55)',
    color: '#fff',
    fontSize: '20px',
    letterSpacing: '3px',
    textTransform: 'uppercase',
    '&:hover': {
      background: '#333',
    },
  },
}))

export default styles
