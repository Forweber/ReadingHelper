import styles from './MainFrame.module.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './home/Home';
import Header from '../common/header/Header';
import Library from './library/library';
import Report from './report/report';
import WriteReport from './report/writeReport/writeReport';
import Calendar from './calendar/calendar';
import SearchResult from './search/Search';
import SearchDetail from './search/SearchDetail';
import LibraryDetail from './library/libraryDetail/libraryDetail';
import ReportDetail from './report/reportDetail/reportDetail';
import Login from './login/login';
import Join from './join/join';
import Profile from './profile/profile';
import ProfileEdit from './profile/profileEdit';

export default function MainFrame(){
  return (
    <div className={styles.container}>
      <BrowserRouter>
        <Header />
        <div className={styles.pages}>
          <Switch>
            <Route exact path="/" render={()=><Home />} />
            <Route exact path="/library" render={()=><Library/>}/>
            <Route exact path="/report" render={()=><Report />} />
            <Route exact path="/report/write" render={()=><WriteReport />} />
            <Route exact path="/calendar" render={()=><Calendar />} />
            <Route exact path="/search" render={()=><SearchResult />} />
            <Route exact path="/search/detail" render={()=><SearchDetail />} />
            <Route exact path="/library/detail" render={()=><LibraryDetail />} />
            <Route exact path="/report/detail" render={()=><ReportDetail />} />
            <Route exact path="/login" render={()=><Login />} />
            <Route exact path="/join" render={()=><Join />} />
            <Route exact path="/profile" render={() => <Profile />} />
            <Route exact path="/profile/edit" render={() => <ProfileEdit />} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

