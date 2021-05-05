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
    type:'',
    capacity:1,
    price:0,
    minPrice:0,
    maxPrice:0,
    minSize:0,
    maxSize:0,
    breakfast:false,
    pets:false
  }

  componentDidMount() {
    let rooms = this.formatData(items)
    let featuredRooms = rooms.filter((room) => room.featured === true)
    let maxPrice = Math.max(...rooms.map(item => item.price));
     let maxSize = Math.max(...rooms.map((item) => item.size))
    AOS.init({
      // initialise with other settings
      duration: 2000,
    })
    this.setState({
      rooms,
      sortedRooms: rooms,
      featuredRooms,
      loading: false,
      price: maxPrice,
      maxPrice,
      maxSize
    })
  }

  handleChange = event  => {
    const type = event.target.type;
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name] : value
    }, this.filterRooms)
  }

  filterRooms = () => {
    let {rooms, type, capacity, minSize, maxSize, breakfast, pets} =  this.state;

    let tempRooms = [...rooms];
    if(type !== 'all') {
      tempRooms = tempRooms.filter(room => room.type === type)
    }
    this.setState({
      sortedRooms: tempRooms
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

    return tempItems;
  }

  //getroom
  getRoom = slug => {
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find(room => room.slug === slug)

    return room;
  }

  render() {
    return (
      <RoomContext.Provider value={{ ...this.state, getRoom: this.getRoom, handleChange : this.handleChange }}>
        {this.props.children}
      </RoomContext.Provider>
    )
  }
}

const RoomConsumer = RoomContext.Consumer

export function withRoomConsumer(Component){
  return function ConsumerWrapper(props){
    return <RoomConsumer>
      {
        value =>  <Component {...props} context={value} />
      }
    </RoomConsumer>
  }
}

export { RoomProvider, RoomConsumer, RoomContext }
