import { connect } from 'react-redux'

import { profile } from './actions'
import Home from './Home'
 
const mapStateToProps = state => ({
  status: state
})
 
const mapDispatchToProps = dispatch => ({
    profile: () => dispatch(profile())
})
 
const Container= connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

export default Container;