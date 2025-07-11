import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: async () => import('./start-info/start-info.component'),
    },
    {
        path: 'faq',
        loadComponent: async () => import('./faq/faq.component'),
    },
    {
        path: 'about-author',
        loadComponent: async () =>
            import('./about-author/about-author.component'),
    },
    {
        path: '**',
        redirectTo: 'faq',
    },
];
