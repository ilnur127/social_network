import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux';
import {Provider} from 'react-redux';

import store from './redux/reduxStore'
import { initializeAppThunk } from './redux/appReduser';
import HeaderContainer from './components/Header/HeaderContainer'
import UsersContainer from './components/UsersComponents/UsersContainer';
import SitebarContainer from './components/Sitebar/SitebarContainer';
import LoginContainer from './components/Login/LoginContainer'
import Loader from './components/ui/Loader/Loader';

import './App.css'
import { WithSuspense } from './hoc/WithSuspense.jsx';
import { Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))
const News = React.lazy(() => import('./components/News/News'))
const Music = React.lazy(() => import('./components/MusicComponents/Music'))
const Settings = React.lazy(() => import('./components/SettingsComponents/Settings'))

class App extends Component {
  catchAllUnhandledErrors = (promiseRejectionEvent) => {
    alert("Some error occured")
    console.error(promiseRejectionEvent)
  }
  componentDidMount() {
    this.props.initializeApp()
    window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors)
  }
  componentWillUnmount() {
    window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors)
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
              <Switch>
                <Route exact path='/' render={() => <Redirect to={"/profile"} />} />
                <Route path='/profile/:userId?' render={WithSuspense(ProfileContainer)} />
                <Route path='/dialogs' render={WithSuspense(DialogsContainer)}/>
                <Route path='/news' render={WithSuspense(News)}/>
                <Route path='/music' render={WithSuspense(Music)}/>
                <Route path='/settings' render={WithSuspense(Settings)}/>
                <Route path='/users' render={() => <UsersContainer />} />
                <Route path='/login' render={() => <LoginContainer />} />
                <Route path='*' render={() => <div>Not found</div>} />
              </Switch>
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

const AppContainer = connect(mapStateToProps, {
  initializeApp: initializeAppThunk,
})(App);

const MainApp = (props) => <React.StrictMode>
  <Provider store={store}>
    <AppContainer />
  </Provider>
</React.StrictMode>

export default MainApp
