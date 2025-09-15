import {
    ChangeDetectionStrategy,
    Component,
    OnDestroy,
    signal,
} from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

import {
    filter,
    map,
    Observable,
    of,
    Subject,
    switchMap,
    takeUntil,
} from 'rxjs';

import { ArticleComponent, BreadcrumbsComponent, TopicsComponent } from '@ui';
import { Article, FaqRouterData } from '@models';
import { ArticlesApi } from '@core/api';

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
export default class FaqComponent implements OnDestroy {
    public routerData = signal<FaqRouterData | undefined>(undefined);
    public article = signal<Article | undefined>(undefined);

    private unsubscribe$ = new Subject<void>();

    constructor(
        router: Router,
        activatedRoute: ActivatedRoute,
        articlesApi: ArticlesApi,
    ) {
        router.events
            .pipe(
                filter((event) => event instanceof NavigationEnd),
                switchMap(() => {
                    return activatedRoute.data as Observable<FaqRouterData>;
                }),
                switchMap((data) => {
                    this.routerData.set(data);
                    return data.articlePath
                        ? articlesApi.getArticle(data.articlePath)
                        : of(undefined);
                }),
                map((article) => {
                    this.article.set(article);
                }),
                takeUntil(this.unsubscribe$),
            )
            .subscribe();
    }

    public ngOnDestroy(): void {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}
