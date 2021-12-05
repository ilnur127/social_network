import React from 'react'
import Sitebar from './Sitebar'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
    Sitebar : state.sitebar
})

const mapDispatchToProps = (dispatch) => ({

})

const SitebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sitebar)
export default SitebarContainer
