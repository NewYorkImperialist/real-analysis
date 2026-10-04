import { render } from 'preact';
import 'katex/dist/katex.min.css';
import './styles/tokens.css';
import './styles/base.css';
import { useRoute } from './lib/router';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Browse } from './pages/Browse';
import { SearchPage } from './pages/Search';
import { Practice } from './pages/Practice';
import { ProblemPage } from './pages/ProblemPage';
import { Sources } from './pages/Sources';
import { ProgressPage } from './pages/Progress';
import { About } from './pages/About';

function App() {
  const route = useRoute();
  const [head, arg] = route.path;
  let page;
  switch (head) {
    case undefined: page = <Home />; break;
    case 'browse': page = <Browse query={route.query} />; break;
    case 'search': page = <SearchPage query={route.query} />; break;
    case 'practice': page = <Practice query={route.query} />; break;
    case 'p': page = <ProblemPage id={arg} query={route.query} />; break;
    case 'sources': page = <Sources sourceKey={arg} />; break;
    case 'progress': page = <ProgressPage />; break;
    case 'about': page = <About />; break;
    default: page = <p>Page not found.</p>;
  }
  return <Layout active={head ?? ''}>{page}</Layout>;
}

render(<App />, document.getElementById('app')!);
