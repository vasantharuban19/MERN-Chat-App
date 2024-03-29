import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar.jsx'
import MessageScreen from '../../components/messages/MessageScreen.jsx'

const Home = () => {
  return (
    <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
			<Sidebar />
			<MessageScreen />
		</div>
  )
}

export default Home