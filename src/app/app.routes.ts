import { Route, Routes } from '@angular/router';

import { TOPICS } from '@core/constants';

import { Breadcrumb, FaqRouterData, Topic } from '@models';

function parsTopicsToRoutes(
    path: string,
    articlePath: string,
    breadcrumbs: Breadcrumb[],
    topics: Topic[],
) {
    const routes: Routes = [];
    for (const topic of topics) {
        const topicPath = path + '/' + topic.id;
        const route: Route = {
            path: topicPath,
            title: topic.title,
            loadComponent: async () => import('./faq/faq.component'),
        };
        const data: FaqRouterData = {
            title: topic.title,
            breadcrumbs,
        };
        if (topic.topics?.length) {
            data.navigationItems = topic.topics.map(({ id, title }) => ({
                path: '/' + topicPath + '/' + id,
                title,
            }));
            routes.push(
                { ...route, data },
                ...parsTopicsToRoutes(
                    topicPath,
                    articlePath + '/' + topic.id,
                    [
                        ...breadcrumbs,
                        {
                            path: '/' + topicPath,
                            title: topic.title,
                        },
                    ],
                    topic.topics,
                ),
            );
        } else {
            data.articlePath = articlePath + '/' + topic.id;
            routes.push({ ...route, data });
        }
    }
    return routes;
}

export const routes: Routes = [
    {
        path: '',
        title: 'Мама в Вильнюсе',
        loadComponent: async () => import('./start-info/start-info.component'),
    },
    {
        path: 'faq',
        title: 'Гайд',
        loadComponent: async () => import('./faq/faq.component'),
        data: {
            title: 'Гайд',
            breadcrumbs: [
                {
                    path: '',
                    title: 'Главная',
                },
            ],
            navigationItems: TOPICS.map(({ id, title }) => ({
                path: id,
                title,
            })),
            rootTopic: true,
        } as FaqRouterData,
    },
    ...parsTopicsToRoutes(
        'faq',
        'articles',
        [
            {
                path: '',
                title: 'Главная',
            },
            {
                path: '/faq',
                title: 'Гайд',
            },
        ],
        TOPICS,
    ),
    {
        path: 'about-author',
        title: 'Про автора',
        loadComponent: async () =>
            import('./about-author/about-author.component'),
    },
    {
        path: 'md-editor',
        loadComponent: () =>
            import('./md-editor/md-editor.component').then(
                (m) => m.MdEditorComponent,
            ),
    },
    {
        path: '**',
        redirectTo: 'faq',
    },
];
