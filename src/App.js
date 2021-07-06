import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from './components/Header';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import posts from './posts';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const sections = [ // TODOM: Links. Probably won't use. Or maybe replace.
  { title: 'These', url: '#' },
  { title: 'Links', url: '#' },
  { title: `Don't`, url: '#' },
  { title: 'Do', url: '#' },
  { title: 'Anything', url: '#' },
];

const sidebar = {
  title: 'About',
  description:
    `I haven't put anything in this yet. I guess I'm in Iceland or something though. ¯\\_(ツ)_/¯`,
  archives: [
    { title: 'lol', url: '#' },
    { title: 'nope', url: '#' }
  ],
};

function App() {
  const classes = useStyles();

  return (
    <Router basename="/reykjavik-adventures">
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title='Reykjavik Adventures' sections={sections} />
        <main>
          <div>
            {/* <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/topics">Topics</Link>
              </li>
              </ul>
            </nav> */}

            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            {/* <Switch>
              <Route path="/topics">
                <Topics />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch> */}
          </div>
          <Grid container spacing={5} className={classes.mainGrid}>
            <Main title="Reykjavik Adventures" posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
            />
          </Grid>
        </main>
      </Container>
      {/* TODOM: Little viking dudes running across or something*/}
      <Footer title='footer' description='Why do I even have a footer?' />
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function Topics() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}

export default App;
