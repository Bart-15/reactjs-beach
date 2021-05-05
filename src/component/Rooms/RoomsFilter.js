import React from 'react'
import { useContext } from 'react'
import { RoomContext } from '../../context'
import { Grid, TextField, MenuItem } from '@material-ui/core'
import useStyles from './styles'
const RoomsFilter = ({ rooms }) => {
  const context = useContext(RoomContext)
  const classes = useStyles()
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
  } = context

  const getUnique = (items, value) => {
    return [...new Set(items.map((item) => item[value]))]
  }

  let types = getUnique(rooms, 'type')
  types = ['all', ...types]
  //map
  types = types.map((item, index) => {
    return (
      <MenuItem key={index} value={item}>
        {item}
      </MenuItem>
    )
  })

  // console.log(rooms);
  return (
    <Grid container>
      <form action={classes.formRoot}>
        <div>
          <Grid item sm={12}>
            <TextField
              label='Select'
              select
              name='type'
              id='type'
              value={type}
              onChange={handleChange}
              helperText='Please select type'
            >
                {types}
            </TextField>
          </Grid>
        </div>
      </form>
    </Grid>
  )
}

export default RoomsFilter
