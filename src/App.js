import { Route } from 'react-router-dom';
import './App.css';
import Messages from './components/Content/Messages/Messages';
import Music from './components/Content/Music/Music';
import News from './components/Content/News/News';
import Profile from './components/Content/Profile/Profile';
import Settings from './components/Content/Settings/Settings';
import UsersContainer from './components/Content/Users/UsersContainer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';

const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar state={props.store.getState().sidebar} />
      <div className='app-wrapper-content'>
        <Route path='/profile/:userId?' render={() => <Profile />} />
        <Route path='/messages' render={() => <Messages
          state={props.store.getState().messagesPage}
          store={props.store} />} />
        <Route path='/users' render={() => <UsersContainer />} />
        <Route path='/news' render={() => <News />} />
        <Route path='/music' render={() => <Music />} />
        <Route path='/settings' render={() => <Settings />} />
      </div>
    </div>
  );
}

export default App;
