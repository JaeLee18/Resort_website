import React from 'react'
import Hero from '../components/Heros'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'

export const Rooms = () => {
    return (
        <Hero hero="roomsHero">
            <Banner title="out rooms">
                <Link to='/' className='btn-primary'>
                    return home
                </Link>
            </Banner>
        </Hero>
    )
}

export default Rooms;