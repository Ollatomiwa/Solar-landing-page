import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/components/Home.vue";
import ContactUs from "@/components/ContactUs.vue";
import About from "@/components/About.vue";
import Service from "@/components/Service.vue";
import Battery from "@/components/Battery.vue";
import Registration from "@/components/Registration.vue";

const router = createRouter ({
    history: createWebHashHistory (),
    routes: [
        {
            path: '/',
            name: 'home',
            component:Home
        },

        {
            path: '/about',
            name: 'about',
            component:About
        },

        {
            path: '/service',
            name: 'Service',
            component:Service
        },

        {
            path: '/service/battery',
            name: 'Battery',
            component:Battery
        },

        {
            path: '/contact',
            name: 'contact',
            component:ContactUs
        },

        {
            path: '/registration',
            name: 'registration',
            component:Registration
        },

    ]
})

export default router;