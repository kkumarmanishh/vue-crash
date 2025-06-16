import { createRouter, createWebHistory } from "vue-router";
import Homeview from "@/views/Homeview.vue";
import JobsView from "@/views/JobsView.vue";
import AddJobView from "@/views/AddJobView.vue";
import JobView from "@/views/JobView.vue";
import EditJobView from "@/views/EditJobView.vue";
import NotFoundView from "@/views/NotFoundView.vue";

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
            component: JobsView,
        },
        {
            path: '/jobs/add',
            name: 'addJobView',
            component: AddJobView,
        },
        {
            path: '/jobs/:id',
            name: 'job',
            component:JobView,
        },
        {
            path: '/jobs/edit/:id',
            name: 'edit-job',
            component: EditJobView,
        },
        {
            path: '/:catchAll(.*)',
            name: 'not-found',
            component: NotFoundView,
        }
    ],
});

export default router;