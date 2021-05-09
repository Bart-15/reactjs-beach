import React, { Component } from 'react'
import AOS from 'aos'
//  
import Client from './Contenful'



const RoomContext = React.createContext()
//
class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type:'all',
    capacity:1,
    price:0,
    minPrice:0,
    maxPrice:0,
    minSize:0,
    maxSize:0,
    breakfast:false,
    pets:false
  }

  fetchData = async () => {
    try{
      let response = await Client.getEntries({
        content_type: 'bartBeach',
        order: '-sys.createdAt',
      })
      let rooms = this.formatData(response.items)
      let featuredRooms = rooms.filter((room) => room.featured === true)
      let maxPrice = Math.max(...rooms.map((item) => item.price))
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
        maxSize,
      })
      
    }catch(error) {
      console.log(error)
    }
  } 

  componentDidMount() {

    this.fetchData();
    
  }

  handleChange = event  => {
  const target = event.target;
  const value = target.type === 'checkbox' ? target.checked : target.value;
  const name = event.target.name;

    this.setState({
      [name] : value
    }, this.filterRooms)
  }

  filterRooms = () => {
    let {rooms, type, capacity, price, minSize, maxSize, breakfast, pets} =  this.state;
    //all the rooms
    let tempRooms = [...rooms];
    //Transform value
    capacity = parseInt(capacity)
    price = parseInt(price)

    // console.log(price)
    //get the price

    //Filter by type
    if(type !== 'all') {
      tempRooms = tempRooms.filter(room => room.type === type)
    }

    //Filter by capacity
    if(capacity !== 1) {
      tempRooms = tempRooms.filter(room => room.capacity >= capacity )
    }

    // filter by price
    // if(price < 0) {
      tempRooms = tempRooms.filter(room => room.price <= price)
    // }

    //filter breakfast
    if(breakfast) {
      tempRooms = tempRooms.filter(room => room.breakfast === true)
    }

    //FIlter pets

    if(pets) {
      tempRooms = tempRooms.filter(room => room.pets === true)
    }

    //Filter size
    tempRooms = tempRooms.filter(room => room.size  >= minSize && room.size <= maxSize)


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
