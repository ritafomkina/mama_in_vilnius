import {
    ChangeDetectionStrategy,
    Component,
    OnDestroy,
    signal,
} from '@angular/core';
import {
    ActivatedRoute,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
} from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { map, of, Subject, switchMap, takeUntil } from 'rxjs';

import { Article, Topic } from '@models';
import { ArticleService } from '@core/services';
import { ArticleComponent } from '@ui';

@Component({
    selector: 'app-page',
    standalone: true,
    imports: [
        RouterOutlet,
        RouterLink,
        MatButtonModule,
        MatIconModule,
        ArticleComponent,
        RouterLinkActive,
    ],
    templateUrl: './page.component.html',
    styleUrl: './page.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageComponent implements OnDestroy {
    public topic = signal<Topic | undefined>(undefined);
    public article = signal<Article | undefined>(undefined);

    private unsubscribe$ = new Subject<void>();

    constructor(
        activatedRoute: ActivatedRoute,
        articleService: ArticleService,
    ) {
        activatedRoute.data
            .pipe(
                takeUntil(this.unsubscribe$),
                map(({ topic }) => {
                    this.topic.set(topic);
                    return topic as Topic;
                }),
                switchMap(({ topicPath }) =>
                    topicPath
                        ? articleService.getArticle(topicPath)
                        : of(undefined),
                ),
                map((article) => {
                    this.article.set(article);
                }),
            )
            .subscribe();
    }

    public ngOnDestroy(): void {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}
