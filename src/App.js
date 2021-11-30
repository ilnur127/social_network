import './App.css'
import Header from './components/Header/Header'
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/MusicComponents/Music';
import Settings from './components/SettingsComponents/Settings';
import { BrowserRouter, Route } from 'react-router-dom'
import StoreContext from './StoreContext'
function App(props) {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <StoreContext.Consumer>
          {(store) => (<NavBar friends={store.getState().sitebar.friends}/>)}
        </StoreContext.Consumer> 
        <div className='app-wrapper--content'>
          <Route path='/profile' render={() => <Profile/>} />
          <Route path='/dialogs' render={() => <DialogsContainer/>} />
          <Route path='/news' render={() => <News />} />
          <Route path='/music' render={() => <Music />} />
          <Route path='/settings' render={() => <Settings />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
