import { makeStyles } from '@material-ui/core/styles'

const styles = makeStyles((theme) => ({
  sectionTitle: {
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  title: {
    color: '#333',
    padding: '2px 5px',
    letterSpacing: '3px',
    fontWeight:'bold'
  },

  underline : {
    width:'8rem',
    height:'5px',
    background:'#333',
    margin:'0.7rem auto'
  },

  [theme.breakpoints.up('md')]: {
    title: {
      paddingTop: '60px',
    },
  },
}))

export default styles
