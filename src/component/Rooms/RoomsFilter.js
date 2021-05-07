import React from 'react'
import { useContext } from 'react'
import { RoomContext } from '../../context'
import {

  TextField,
  MenuItem,
  Typography,

} from '@material-ui/core'
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

  //get people
  let people = getUnique(rooms, 'capacity')
  people = people.map((item, index) => {
    return (
      <MenuItem value={item} key={index}>
        {item}
      </MenuItem>
    )
  })

  return (
    <form>
      <div className={classes.formRoot}>
        <TextField
          label='Select Room Type'
          className={classes.field}
          select
          name='type'
          id='type'
          value={type}
          onChange={handleChange}
        >
          {types}
        </TextField>
        {/* guest */}
        <TextField
          label='Select Capacity'
          className={classes.field}
          select
          name='capacity'
          id='capacity'
          value={capacity}
          onChange={handleChange}
        >
          {people}
        </TextField>
        <div className={classes.rangeContainer}>
          <Typography variant='h5'>Room price ₱{`${price}`}</Typography>
          <input
            className={classes.field}
            type='range'
            name='price'
            min={minPrice}
            max={maxPrice}
            id='price'
            value={price}
            onChange={handleChange}
          />
        </div>
        {/* Room size */}
        <div className={classes.rangeContainer}>
          <Typography variant='h5'>Room size</Typography>
          <div style={{dislpay:'flex', flexDirection:'column'}}>
          <TextField type='number' name="minSize"  value={minSize} onChange={handleChange} style={{width:'10ch', margin:'2px' }} id='standard-basic' label='Enter' />
          <TextField type='number' name="maxSize" style={{width:'10ch', margin:'2px' }} id='maxPrice'  value={maxSize} onChange={handleChange} label='SFQT' />
          </div>
        </div>
        {/* End Room size */}

        {/* Checkbox container */}
        <div className={classes.checkContainer}>
          <input
            type='checkbox'
            name='breakfast'
            id='breakfast'
            checked={breakfast}
            onChange={handleChange}
          />
          <label style={{ marginLeft: '3px' }} htmlFor='breakfast'>
            Breakfast
          </label>
          <input
            type='checkbox'
            name='pets'
            id='pets'
            checked={pets}
            onChange={handleChange}
          />
          <label style={{ margin: '2px' }} htmlFor='pets'>
            Pets
          </label>
        </div>
        {/* End checbox container */}
      </div>
    </form>
  )
}

export default RoomsFilter
