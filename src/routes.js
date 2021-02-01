import Home from './pages/home';
import Vision from './pages/vision';
import Entfaltung from './pages/entfaltung';
import Essenz from './pages/essenz';

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
    }
  ];
export default routes;
