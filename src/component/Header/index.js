import React from 'react'
import { Route, Link } from 'react-router-dom'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const Header = props => (
    <header>
        <Link to="/">Home</Link>
        <Link to="/about-us">About</Link>
    </header>
)

const mapDispatchToProps = dispatch => bindActionCreators({
    changePage: () => push('/about-us')
}, dispatch)

export default connect(
    null,
    mapDispatchToProps
)(Header)