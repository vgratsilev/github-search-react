import { Navbar } from './components/Navbar/Navbar';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { About } from './pages/About';
import { AlertState } from './context/alert/alertState';
import { Alert } from './components/Alert/Alert';
import { GithubState } from './context/github/githubState';

function App() {
    return (
        <GithubState>
            <AlertState>
                <BrowserRouter basename={'/react-hooks'}>
                    <Navbar/>
                    <div className={'container pt-4'}>
                        <Alert alert={{text: 'alert'}}/>
                        <Switch>
                            <Route path={'/'} exact component={Home}/>
                            <Route path={'/about'} component={About}/>
                            <Route path={'/profile/:name'} component={Profile}/>
                            <Redirect to={'/'}/>
                        </Switch>
                    </div>
                </BrowserRouter>
            </AlertState>
        </GithubState>
    );
}

export default App;
