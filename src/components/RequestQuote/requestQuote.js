import React from 'react';

const Example = (props) => {
    return (
        <div style={{
            background: '#2cab3b',
            padding: '1rem'
        }}>


            <form name="contact" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />
                <h1>Request A Quote</h1>
                <p>
                    <label>Your Name: <input type="text" name="name" /></label>
                </p>
                <p>
                    <label>Your Email: <input type="email" name="email" /></label>
                </p>
                <p>
                    <label>Message: <textarea name="message"></textarea></label>
                </p>
                <p>
                    <button type="submit">Send</button>
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
