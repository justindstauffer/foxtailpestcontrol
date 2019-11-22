import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Example = (props) => {
    return (
        <div style={{
            background: '#2cab3b',
            padding: '1rem'
        }}>


            <Form className='text-center' name="requestQuote" method="POST" data-netlify="true" data-netlify-recaptcha="true" style={{
                maxWidth: '600px',
                margin: 'auto',
                border: '3px solid black',
                padding: '1rem'
            }}>
                <h1>Request A Quote</h1>
                <input type="hidden" name="form-name" value="requestQuote" />
                <FormGroup>
                    <Label for="exampleEmail">Name</Label>
                    <Input type="text" name="name" id="Name" placeholder="Enter your name here." />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input type="email" name="email" id="Email" placeholder="Enter your email here." />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleText">Message</Label>
                    <Input type="textarea" name="message" id="Message" placeholder="Enter a message here." />
                </FormGroup>
                <div data-netlify-recaptcha="true"></div>
                <Button className='btn' style={{
                    background: '#f38c1e',
                    border: '1px solid #f38c1e',
                    color: 'black'
                }}>Submit</Button>
            </Form>
        </div>
    );
}

export default Example;





// import React from 'react'

// const requestQuote = () => {
//     return (
//         <div className='text-center' style={{
//             width: '450px',
//             margin: 'auto'
//         }}>
//             <form name="contact" method="POST" data-netlify="true" data-netlify-recaptcha="true">
//                 <h1>Request A Quote</h1>
//                 <input type="hidden" name="form-name" value="request a quote" />
//                 <p>
//                     <label>Your Name: <input type="text" name="name" /></label>
//                 </p>
//                 <p>
//                     <label>Your Email: <input type="email" name="email" /></label>
//                 </p>
//                 <p>
//                     <label>Message: <textarea name="message"></textarea></label>
//                 </p>
//                 <div data-netlify-recaptcha="true">

//                 </div>
//                 <p>
//                     <button type="submit">Send</button>
//                 </p>
//             </form>
//         </div>
//     )
// }

// export default requestQuote
