import {makeStyles} from '@material-ui/core/styles'

const styles = makeStyles((theme) => ({
  noRooms: {
    marginTop: '50px',
    display: 'flex',
    margin: '0 auto',
    justifyContent: 'center',
    height: '200px',
  },
  formRoot: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom:'10px'
  },
  rangeContainer : {
    display:'flex',
    flexDirection:'column',
    alignItems:'center'
  },

  checkContainer : {
    fontSize:'18px',
    letterSpacing:'3px'
  },
  field: {
    width: '35ch',
    margin:'0 20px'
  },

  [theme.breakpoints.up('md')]: {
    field: {
      width: '23ch',
    },
    formRoot: {
      flexDirection: 'row',
      margin:'2%'
    },
  },
}))

export default styles;
