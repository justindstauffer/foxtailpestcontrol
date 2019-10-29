// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'


const Topbar = () => (
    <header
        style={{
            background: `#c4996c, 0.0`,
            //   borderBottom: '1px solid #E70069'
        }}
    >

        <div
            style={{
                margin: `0 auto`,
                marginTop: '-5px',
                paddingTop: '0',
                paddingBottom: '.75rem',
                paddingRight: '.15rem',
                display: "flex",
                justifyContent: "flex-end",
                // background: 'linear-gradient(to left, white, transparent 25%)',
                borderRadius: "10px",
            }}
        >
            <div
                id="phoneDiv"
                style={{
                    margin: 0,
                    background: '#2cab3b',
                    padding: '0.5rem .75rem',
                    borderRadius: '25px'
                }}>
                <h3
                    id="phoneNumber"
                    style={{
                        margin: '0',
                        color: 'white'
                    }}>
                    407-687-2264
                </h3>
                <h3 id="phoneIcon" style={{
                    margin: '0',
                    display: 'none'
                }}>
                    <FontAwesomeIcon icon={faPhone} color="white" />
                </h3>


            </div>
        </div>
    </header>
)

Topbar.propTypes = {
    siteTitle: PropTypes.string,
}

Topbar.defaultProps = {
    siteTitle: ``,
}

export default Topbar
