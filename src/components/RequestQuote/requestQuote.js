import React from 'react';

const Example = (props) => {
    return (
        <div style={{
            background: '#2cab3b',
            padding: '2rem',
            
        }}>
            <form name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true" style={{
                textAlign: 'center',
                border: '3px solid black',
                maxWidth: '450px',
                margin: 'auto',
                boxShadow: '0px 0px 0px 5px #f38c1e',
                borderRadius: '10px'
            }}>
                <p hidden>
                    <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
                </p>
                <input type="hidden" name="form-name" value="contact" />
                <h1>Request A Quote</h1>
                <p>
                    <label>Your Name: <br></br><input type="text" name="name" placeholder="Enter your name here." style={{
                        width: '300px',
                    }} required /></label>
                </p>
                <p>
                    <label>Your Email: <br></br><input type="email" name="email" placeholder="Enter your email here." style={{
                        width: '300px',
                    }} required /></label>
                </p>
                <p>
                    <label>Message: <br></br><textarea placeholder="Enter a message here." style={{
                        width: '300px'
                    }} name="message"></textarea></label>
                </p>
                <p>
                    <button className="btn" style={{
                        background: '#f38c1e'
                    }} type="submit">Send</button>
                </p>
            </form>
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
