import Lander from './components/Lander';
import Directory from './components/Directory';

const routes = {
  '/': () => <Lander />,
  '/directory': () => <Directory />,
};

export default routes;
