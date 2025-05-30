import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function Cards() {
  return (
    <div className='cards'> 
      <h1>Check out this epic destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
            <ul className='cards__items'>
                <CardItem 
                src='images/img-9.jpg' 
                text='Explore the hidden waterfall deep inide the Amazon Jungle'
                label='Adventure'
                path='/services'
                />
                <CardItem 
                src='images/img-2.jpg' 
                text='Travel through the Island of Bali in a Private Cruise'
                label='Luxury'
                path='/services'
                />
            </ul>
            <ul className='cards__items'>
                <CardItem 
                src='images/img-3.jpg' 
                text='Set sail in the Atlantic Ocean'
                label='Mystery'
                path='/services'
                />
                <CardItem 
                src='images/img-4.jpg' 
                text='Experience football on top!'
                label='Adventure'
                path='/products'
                />
                <CardItem 
                src='images/img-8.jpg' 
                text='Ride through the Sahara Desert'
                label='Adrenaline'
                path='/sign-up'
                />
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
