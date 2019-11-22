import React from 'react'
import ServicesCard from '../Cards/servicesCard'
import LawnImage from '../../images/lawnandshrub.jpg'
import ShrubImage from '../../images/lawnandshrub2.jpg'
const welcomeCards = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            alignItems: 'center',
            background: '#f38c1e',
        }}>
            <ServicesCard title='Lawn Care' text='Healthy Lawns' image={LawnImage} />
            <ServicesCard title='Shrub Care' text='Healthy Shrubs' image={ShrubImage} />
        </div>
    )
}

export default welcomeCards
