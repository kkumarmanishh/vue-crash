import { createRouter, createWebHistory } from "vue-router";
import Homeview from "@/views/Homeview.vue";
import Jobs from "@/views/Jobs.vue";
import AddJobs from "@/views/AddJobs.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path: '/',
            name: 'home',
            component: Homeview,
        },
        {
            path:'/jobs',
            name: 'jobs',
            component: Jobs,
        },
        {
            path: '/add-job',
            name: 'addJob',
            component: AddJobs,
        }
    ],
});

export default router;