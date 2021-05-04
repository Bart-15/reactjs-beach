import React, { Component } from 'react'
import { RoomContext } from '../../context'
import Title from '../Services/Title'
import Loading from '../Loading/Loading'
import Room from '../Room/Room'
export default class FeaturedRooms extends Component {
  static contextType = RoomContext
  render() {
    let { loading, featuredRooms: rooms } = this.context
    
    return (
     <>
        <Title title='featured rooms' />
        {loading ? <Loading /> : <Room rooms={rooms} />}
      </>
    )
  }
}
