import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneSquare } from '@fortawesome/free-solid-svg-icons'

const welcomeContent = () => {
    return (
        <div style={{
            textAlign: 'center',
            maxWidth: '900px',
            margin: '0 auto'
        }}>
            <h1>Welcome</h1>
            <FontAwesomeIcon icon={faPhoneSquare} size="lg" />
            <p>Foxtail Pest Control focuses on providing the most comprehensive lawn pest solutions. Maintaining 
                an elegant yard requires much more than weekly maintenance from a landscaper. 
                The health and wellness of a lawn is directly related to the maintenance of pest control. 
            </p>
        </div>
    )
}

export default welcomeContent
