import React from 'react';
import {
    Card, CardImg,  CardBody,
    CardTitle
} from 'reactstrap';

const ServicesCard = (props) => {
    return (
        <div style={{
            margin: '2rem'

        }}>
            <Card style={{
                maxWidth: '400px',
                border: '3px solid black',
                boxShadow: '0px 0px 0px 5px #2cab3b'
            }}>
                <CardImg top width='100%' style={{
                    width: '400px',
                    margin: '0'
                }} src={props.image} alt="Service Card Image" />
                <CardBody className="text-center" style={{
                    padding: '0',
                    margin: '0'
                }}>
                    <CardTitle><h1>{props.title}</h1></CardTitle>
                    
                </CardBody>
            </Card>
        </div>
        // <div style={{
        //     border: '3px solid #2cab3b',
        //     boxShadow: '0px 0px 0px 5px #f38c1e',
        //     padding: '8px',
        //     background: 'white'
        // }}>
        //     <img src={props.image} alt="Lawn & Pest" style={{ maxWidth: '400px', }} />
        //     <div style={{
        //         textAlign: 'center'
        //     }}>
        //         <h2>{props.title}</h2>
        //     </div>
        // </div>
    );
};

export default ServicesCard;
