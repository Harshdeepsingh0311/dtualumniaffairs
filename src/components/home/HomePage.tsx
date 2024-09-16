import React from 'react'
import HomeHero from './HomeHero'
import DistAlumniCarousel from './DistAlumniCarousel'
import HomeInfo from './HomeInfo'
import HomeEvents from './HomeEvents'
import HomeQuickLinks from './HomeQuickLinks'


export default function HomePage(){
    return (
        <>
            <HomeHero />
            <DistAlumniCarousel />
            <HomeInfo />
            <HomeEvents />
            <HomeQuickLinks />
        </>
    )
}