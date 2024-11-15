import { createRouter, createWebHistory } from "vue-router";
import Homeview from "@/assets/views/Homeview.vue";
import Aboutview from "@/assets/views/Aboutview.vue";
import Serviceview from "@/views/Serviceview.vue";
import Benefitsview from "@/assets/views/Benefitsview.vue";
import contactusview from "@/assets/views/contactusview.vue";
import Registrationviews from "@/assets/views/Registrationviews.vue";

const router = createRouter ({
    history: createWebHistory (import.meta.env.BASE_URL),
    routes: [
        {
            path: './',
            name: 'home',
            component:Homeview,
        },

        {
            path: './about',
            name: 'about',
            component:Aboutview,
        },

        {
            path: './service',
            name: 'service',
            component:Serviceview,
        },

        {
            path: './benefits',
            name: 'benefits',
            component:Benefitsview,
        },

        {
            path: './contact',
            name: 'contact',
            component:contactusview,
        },

        {
            path: './registration',
            name: 'registration',
            component:Registrationviews,
        },

    ]
})

export default router;