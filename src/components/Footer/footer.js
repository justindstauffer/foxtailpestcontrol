import PropTypes from "prop-types"
import React from "react"
import BottomContent from './bottomContent'

const Footer = ({ siteTitle }) => (
    <div style={{
        textAlign: 'center',
        background: 'linear-gradient(to top, white, #f38c1e)'
      }}>
        <BottomContent />
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
