import PropTypes from "prop-types"
import React from "react"

const Footer = ({ siteTitle }) => (
    <div style={{
        textAlign: 'center',
        background: '#f38c1e'
      }}>
        © {new Date().getFullYear()}, Foxtail Pest Control
      </div>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
