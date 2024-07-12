
import { createWebHistory, createRouter } from "vue-router";
import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        // path: "/website",
        path: "/",
        name: "website-layout",
        component: () => import('../components/layout.vue'),
        children: [
            {
                path: "",
                name: "website-layout-landing",
                component: () => import('../components/landing/landing.vue')
            },
            {
                path: "project",
                name: "website-layout-project",
                component: () => import('../components/project/project.vue'),
                children: [
                    {
                        path: "fire-escape",
                        name: "project-algorithms-fireEscape",
                        component: () => import('../components/project/algorithms/fireEscape.vue')
                    },
                ]
            },
            {
                path: "about",
                name: "website-layout-about",
                component: () => import('../components/about/about.vue')
            },
            {
                path:"competition",
                name: "website-layout-competition",
                component: () => import('../components/competition/competition.vue')
            }
        ]
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.afterEach(() => {
    window.scrollTo(0, 0)
})

export default router;
