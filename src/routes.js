import Home from './pages/home';
import Vision from './pages/vision';
import Entfaltung from './pages/entfaltung';
import Essenz from './pages/essenz';
import Interviews from './pages/interviews';
import Netzwerk from './pages/netzwerk';

var routes = [
    {
      path: "/",
      name: "Home",
      exact: true,
      component: Home
    },
    {
      path: "/vision-buecher",
      name: "Vision",
      exact: false,
      component: Vision
    },
    {
      path: "/entfaltung-buecher",
      name: "Enfaltung",
      exact: false,
      component: Entfaltung
    },
    {
      path: "/essenz-buecher",
      name: "Essenz",
      exact: false,
      component: Essenz
    },
    {
      path: "/interviews",
      name: "Interviews",
      exact: false,
      component: Interviews
    },
    {
      path: "/netzwerk",
      name: "Netzwerk",
      exact: false,
      component: Netzwerk
    }
  ];
export default routes;
