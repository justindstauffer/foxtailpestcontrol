import React from 'react';
import Background from '../images/bg-header.jpg'

const Example = (props) => {
    return (
        <div>
            <div style={{
                background: `url(${Background})`,
                backgroundSize: 'cover',
                height: '400px',
                margin: '0',
                padding: '0',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <h1 className="display-1 text-center text-light">Pest Control Services</h1>

            </div>
        </div>
    );
};

export default Example;
