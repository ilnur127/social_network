import './App.css'
import HeaderContainer from './components/Header/HeaderContainer'
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/MusicComponents/Music';
import Settings from './components/SettingsComponents/Settings';
import Users from './components/UsersComponents/UsersContainer';
import { BrowserRouter, Route } from 'react-router-dom'
import SitebarContainer from './components/Sitebar/SitebarContainer';
function App(props) {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <HeaderContainer />
        <SitebarContainer />
        <div className='app-wrapper--content'>
          <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
          <Route path='/dialogs' render={() => <DialogsContainer/>} />
          <Route path='/news' render={() => <News />} />
          <Route path='/music' render={() => <Music />} />
          <Route path='/settings' render={() => <Settings />} />
          <Route path='/users' render={() => <Users />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
