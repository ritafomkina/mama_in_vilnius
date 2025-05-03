import {
    ChangeDetectionStrategy,
    Component,
    effect,
    inject,
    OnInit,
    signal,
} from '@angular/core';
import { ArticleComponent, BreadcrumbsComponent, TopicsComponent } from '@ui';
import { Breadcrumb, Topic } from '@models';
import { NgTemplateOutlet } from '@angular/common';
import { TOPICS } from '../core/constants/topics';
import { ArticleService } from '@core/services';
import { APP_LOCATION_TOKEN } from '@core/tokens';
import { Router } from '@angular/router';

@Component({
    selector: 'app-faq',
    standalone: true,
    templateUrl: 'faq.template.html',
    styleUrl: 'faq.style.scss',
    imports: [
        BreadcrumbsComponent,
        NgTemplateOutlet,
        ArticleComponent,
        TopicsComponent,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FaqComponent implements OnInit {
    private readonly _allTopics: Topic[] = TOPICS;
    private readonly _articleService = inject(ArticleService);
    private readonly _appLocation = inject(APP_LOCATION_TOKEN);
    private readonly _router = inject(Router);

    topics: Topic[] = [];
    article = this._articleService.article;
    activeTopic: Topic | null = null;
    breadcrumbs = signal<Breadcrumb[]>([]);

    isOpenMenuMode = false;

    constructor() {
        effect(() => {
            if (this.breadcrumbs().length) {
                const path = this.breadcrumbs().map((path) => path.id);
                this._appLocation.set(`/faq/${path.join('/')}`);
            }
        });
    }

    ngOnInit(): void {
        this.topics = this._allTopics;

        const path = this._appLocation.get().split('/').slice(2);

        for (const topic of path) {
            this.openTopic(topic);
        }
    }

    openTopic(topicId: string | null): void {
        if (!topicId) {
            return this._resetState();
        }

        const topic = this._findTopicById(topicId);

        if (!topic) {
            return this._resetState();
        }

        this.activeTopic = topic;

        if (this._allTopics.some((topic) => topic.id === topicId)) {
            this.breadcrumbs.set([this.activeTopic]);
        } else {
            this._updateBreadcrumbs();
        }

        const isList = 'topics' in topic;

        this.topics = isList ? topic.topics! : [];
        this._articleService.path = isList
            ? null
            : this.breadcrumbs().map((path) => path.id);
    }

    private _resetState(): void {
        this.topics = this._allTopics;
        this.activeTopic = null;
        this._articleService.path = null;
        this.breadcrumbs.set([]);
        this._appLocation.set('/faq');
        this._router.navigateByUrl('/faq');
    }

    private _findTopicById(
        id: string,
        topics: Topic[] = this._allTopics,
    ): Topic | null {
        for (const topic of topics) {
            if (topic.id === id) {
                return topic;
            }
            if (topic.topics) {
                const found = this._findTopicById(id, topic.topics);
                if (found) {
                    return found;
                }
            }
        }

        return null;
    }

    private _updateBreadcrumbs(): void {
        const topic = this.activeTopic!;

        const i = this.breadcrumbs().findIndex((path) => path.id === topic.id);

        if (i !== -1) {
            const newPath = this.breadcrumbs().slice(0, i + 1);
            this.breadcrumbs.set(newPath);
        } else {
            this.breadcrumbs.set([...this.breadcrumbs(), topic]);
        }
    }
}
