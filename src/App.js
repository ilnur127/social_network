import './App.css'
import Header from './components/Header/Header'
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/MusicComponents/Music';
import Settings from './components/SettingsComponents/Settings';
import { BrowserRouter, Route } from 'react-router-dom'
function App(props) {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <NavBar friends={props.state.sitebar.friends}/>
        <div className='app-wrapper--content'>
          <Route path='/profile' render={() => <Profile posts={props.state.profilePage.posts} newPostText={props.state.profilePage.newPostText} addPost={props.store.addPost.bind(props.store)} updateNewPostText={props.store.updateNewPostText.bind(props.store)}/>} />
          <Route path='/dialogs' render={() => <Dialogs dialogs={props.state.dialogsPage.dialogs} newMessageText={props.state.dialogsPage.newMessageText} messages={props.state.dialogsPage.messages} addMessage={props.store.addMessage.bind(props.store)} updateNewMessageText={props.store.updateNewMessageText.bind(props.store)}/>} />
          <Route path='/news' render={() => <News />} />
          <Route path='/music' render={() => <Music />} />
          <Route path='/settings' render={() => <Settings />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
