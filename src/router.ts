import { createMemoryHistory, createRouter } from "vue-router";
import { routes, handleHotUpdate } from "vue-router/auto-routes";

const router = createRouter({
  history: createMemoryHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;

if (import.meta.hot) {
  handleHotUpdate(router);
}
