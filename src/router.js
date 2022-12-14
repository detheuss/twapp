import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/views/Home.vue";
import ChargeNotes from "./components/views/ChargeNotes.vue";
import NewChargeNotes from "./components/views/NewChargeNotes.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: Home },
        { path: "/charge-notes", component: ChargeNotes },
        { path: "/new-charge-notes", component: NewChargeNotes },
    ],
});

export default router;
