import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./main/main.component').then((m) => m.MainComponent),
        children: [
            {
                path: '',
                loadComponent: async () =>
                    import('./start-info/start-info.component').then(
                        (m) => m.StartInfoComponent,
                    ),
            },
            {
                path: 'faq',
                loadComponent: async () =>
                    import('./faq/faq.component').then((m) => m.FaqComponent),
            },
        ],
    },
    {
        path: '**',
        redirectTo: 'faq',
    },
];
