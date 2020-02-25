import React, { Component } from 'react'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'
import Title from './Title'
export default class Services extends Component {
    state = {
        services:[
            {
                icon:<FaCocktail/>,
                title:"Free Cocktails",
                info:"This is an info section!"
            },
            {
                icon:<FaHiking/>,
                title:"Hiking",
                info:"This is an info section!"
            },
            {
                icon:<FaShuttleVan/>,
                title:"Free Shuttle Bus",
                info:"This is an info section!"
            },
            {
                icon:<FaBeer/>,
                title:"Outstanding Beers",
                info:"This is an info section!"
            },
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services"/>
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return (
                            <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                        );
                    })}
                </div>
            </section>
        )
    }
}
