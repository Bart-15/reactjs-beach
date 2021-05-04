import React from 'react'
import RoomsFilter from './RoomsFilter'
import RoomsList from './RoomList'
import { Container } from '@material-ui/core'
import { withRoomConsumer } from '../../context'
import Title from '../Services/Title'
import Loading from '../Loading/Loading'

function RoomContainer({ context }) {
  const { loading, sortedRooms, rooms } = context
  if (loading) {
    return <Loading />
  }
   return (
          <>
            <Container>
              <Title title='Search Rooms'/>
              <RoomsFilter rooms={rooms} />
              <RoomsList rooms={sortedRooms} />
            </Container>
          </>
        )
}

export default withRoomConsumer(RoomContainer)



//Another way


// import React from 'react'
// import RoomsFilter from './RoomsFilter'
// import RoomsList from './RoomList'
// import { Container } from '@material-ui/core'
// import { RoomConsumer } from '../../context'
// import Loading from '../Loading/Loading'
// const RoomContainer = () => {
//   return (
//     <RoomConsumer>
//       {(value) => {
//         const { loading, sortedRooms, rooms } = value
//         // console.log(value)
//         if (loading) {
//           return <Loading />
//         }
//         return (
//           <div>
//             <Container>
//               This is rooms container
//               <RoomsFilter rooms={rooms} />
//               <RoomsList rooms={sortedRooms} />
//             </Container>
//           </div>
//         )
//       }}
//     </RoomConsumer>
//   )
// }

// export default RoomContainer
