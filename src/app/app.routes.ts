import { Routes } from '@angular/router';
import { TOPICS } from '@core/constants';
import { Topic } from '@models';

import { PageComponent } from '@ui';

function parsTopics(topics: Topic[]): Routes {
    return topics.map((topic) => ({
        path: topic.id,
        title: topic.title,
        children: topic.topics ? parsTopics(topic.topics) : undefined,
        component: PageComponent,
        data: { topic },
    }));
}

export const routes: Routes = [
    {
        path: '',
        loadComponent: async () => import('./start-info/start-info.component'),
    },
    ...parsTopics([{ id: 'faq', title: 'faq', topics: TOPICS }]),
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
