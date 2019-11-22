import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "../image"
import Topbar from "./topbar"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#f38c1e`,
      
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        background: 'linear-gradient(to right, white 1%, transparent)',
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <Topbar />
      <h1
        id='headerLogo'
        style={{ marginTop: '-75px', marginBottom: '-10px', maxWidth: '400px' }}
      >
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <Image />
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
