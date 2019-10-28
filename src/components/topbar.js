// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

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
                padding: `0.5rem 0.5rem`,
                display: "flex",
                justifyContent: "flex-end",
                // background: 'linear-gradient(to left, white, transparent 25%)',
                borderRadius: "10px",
            }}
        >
            <div style={{
                margin: 0,
                background: '#2cab3b',
                padding: '.5rem .85rem',
                borderRadius: '25px'
            }}>
                <h3 style={{
                    margin: '0',
                    color: 'white'
                }}>407-687-2264</h3>
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
