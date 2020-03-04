import Home from '~/routes/Home.svelte';
import Event from '~/routes/Event.svelte';

const routes = {
  '/': Home,
  '/special': Event,
};

export default routes;
