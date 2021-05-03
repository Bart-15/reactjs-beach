import React, { Component } from 'react'
import AOS from 'aos'
import items from './data'
const RoomContext = React.createContext()
//
class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
  }

  componentDidMount() {
    let rooms = this.formatData(items)
    let featuredRooms = rooms.filter((room) => room.featured === true)

    AOS.init({
      // initialise with other settings
      duration: 2000,
    })
    this.setState({
      rooms,
      sortedRooms: rooms,
      featuredRooms,
      loading: false,
    })
  }

  //temp data
  formatData(items) {
    let tempItems = items.map((item) => {
      let id = item.sys.id
      let images = item.fields.images.map((image) => image.fields.file.url)

      let room = { ...item.fields, images, id }
      return room
    })

    return tempItems
  }

  //getroom
  getRoom = slug => {
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find(room => room.slug === slug)

    return room;
  }

  render() {
    return (
      <RoomContext.Provider value={{ ...this.state, getRoom: this.getRoom }}>
        {this.props.children}
      </RoomContext.Provider>
    )
  }
}

const RoomConsumer = RoomContext.Consumer

export { RoomProvider, RoomConsumer, RoomContext }