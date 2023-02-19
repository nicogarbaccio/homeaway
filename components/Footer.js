import React from 'react'

function Footer() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600'>
        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>ABOUT</h5>
            <p>How Airbnb works</p>
            <p>Newsroom</p>
            <p>Investors</p>
            <p>Airbnb Plus</p>
            <p>Airbnb Luxe</p>
        </div>
        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>COMMUNITY</h5>
            <p>This is not a real site</p>
            <p>It's a clone of Airbnb</p>
            <p>Pretty cool though!</p>
            <p>Hope you like it</p>
            <p>It's been fun to build!</p>
        </div>
        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>SUPPORT</h5>
            <p>Helpbnh  Center</p>
            <p>Trust & Safety</p>
            <p>Easter Eggs are fun to hide</p>
            <p>Airbnb Plus</p>
            <p>Airbnb Luxe</p>
        </div>
        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>CONNECT</h5>
            <p>Reach out!</p>
            <p>Nico Garbaccio</p>
            <p>garbaccio20@gmail.com</p>
            <p>Or hit me up on LinkedIn</p>
            <p>I'd love to connect!</p>
        </div>
    </div>
  )
}

export default Footer