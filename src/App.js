import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

import HeaderContainer from './components/Header/HeaderContainer'
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/UsersComponents/UsersContainer';
import SitebarContainer from './components/Sitebar/SitebarContainer';
import LoginContainer from './components/Login/LoginContainer'
import News from './components/News/News';
import Music from './components/MusicComponents/Music';
import Settings from './components/SettingsComponents/Settings';
import { initializeAppThunk } from './redux/appReduser';

import './App.css'
import Loader from './components/ui/Loader/Loader';
class App extends Component {
  componentDidMount() {
    this.props.initializeApp()
  }
  render() {
    return (
      <BrowserRouter>
        {!this.props.initialized ?
          <Loader />
        :
          <div className='app-wrapper'>
            <HeaderContainer />
            <SitebarContainer />
            <div className='app-wrapper--content'>
              <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
              <Route path='/dialogs' render={() => <DialogsContainer/>} />
              <Route path='/news' render={() => <News />} />
              <Route path='/music' render={() => <Music />} />
              <Route path='/settings' render={() => <Settings />} />
              <Route path='/users' render={() => <UsersContainer />} />
              <Route path='/login' render={() => <LoginContainer />} />
            </div>
          </div>
        }
      </BrowserRouter>
    )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default connect(mapStateToProps, {
  initializeApp: initializeAppThunk,
})(App);
