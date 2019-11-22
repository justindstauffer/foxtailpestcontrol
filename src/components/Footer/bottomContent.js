import React from 'react'
// import { faTwitterSquare, faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

const bottomContent = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
            alignItems: 'center',
            padding: '1rem'
        }}>
            {/* <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                width: '300px',
                padding: '1rem'
            }}>
                <div><FontAwesomeIcon icon={faTwitterSquare} color="black" size="3x" /></div>
                <div><FontAwesomeIcon icon={faFacebookSquare} color="black" size="3x" /></div>
                <div><FontAwesomeIcon icon={faInstagram} color="black" size="3x" /></div>
            </div> */}
            <div style={{
                width: '300px',
                padding: '1rem'
            }}>
                <h4><FontAwesomeIcon icon={faMapMarkerAlt} color="black" /><br></br>P.O.Box 182258<br></br>Casselberry, FL 32718</h4>
            </div>
            <div style={{
                width: '300px',
                padding: '1rem'
            }}>
                <h4><FontAwesomeIcon icon={faPhone} color="black" /><br></br>407-732-4220</h4>
            </div>

            </div>
    )
}

export default bottomContent
