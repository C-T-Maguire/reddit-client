import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from '../features/Header/Header';
import { Home } from '../features/Home/Home';
import { Subreddit } from '../features/SubReddit/Subreddit';
import { SubAside } from '../features/SubAside/SubredditsAside';
import { SearchResults } from '../features/SearchResults/SearchResults';
import './App.css';

export const App = () => {
  return (
    <Router>
      <div id="app-container">
        <Header />
        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/r/:id" component={Subreddit} />
            <Route path="/search/:id" component={SearchResults} />
                        {/* 
            <Route component={NotFoundPage} /> */}
          </Switch>
        </main>
        <aside>
          <SubAside />
        </aside>
      </div>
    </Router>
  );
}

export default App;