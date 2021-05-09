import React, { Component } from 'react'
import loadinggif from '../../images/gif/loading-arrow.gif'
import {withStyles} from '@material-ui/core/styles'


const styles  = (theme) => ({
    loading : {
        textTransform:'capitalize',
        textAlign:'center',
        marginTop:'3rem'

    }
});

class Loading extends Component {
    render() {
        const {classes} = this.props;
        return (
           <div className={classes.loading}>
               <h4>rooms data loading ...</h4>
               <img src={loadinggif} alt=""/>
            </div>
        )
    }
}

export default withStyles(styles, {withTheme: true})(Loading);