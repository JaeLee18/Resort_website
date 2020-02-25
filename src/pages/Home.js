import React from 'react'
import Hero from '../components/Heros'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'

export default function Home() {
    return (
        <Hero >
            <Banner title="luxurious rooms" subtitle="deluxe rooms starting $299">
            <Link to='/rooms' className="btn-primary">
                our rooms
            </Link>
            </Banner>
        </Hero>
    )
}
