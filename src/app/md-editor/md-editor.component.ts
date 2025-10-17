import {
    ChangeDetectionStrategy,
    Component,
    inject,
    OnDestroy,
    OnInit,
    signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpErrorResponse } from '@angular/common/http';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBar } from '@angular/material/snack-bar';

import { catchError, map, of } from 'rxjs';

import { ArticleComponent } from '@ui';
import { Article, Topic } from '@models';
import { JsonPipe } from '@angular/common';
import { ArticlesApi } from '@core/api';

import { ThreeComponent } from './three/three.component';
import { MarkdownService } from '../markdown.service';
import { LocalServerApiService } from '../local-server-api.service';

@Component({
    selector: 'app-md-editor',
    standalone: true,
    imports: [
        MatGridListModule,
        MatTabsModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        FormsModule,
        ArticleComponent,
        JsonPipe,
        ThreeComponent,
    ],
    templateUrl: './md-editor.component.html',
    styleUrl: './md-editor.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MdEditorComponent implements OnInit, OnDestroy {
    private markdownService = inject(MarkdownService);
    private articlesApi = inject(ArticlesApi);
    private localServerApiService = inject(LocalServerApiService);
    private snackBar = inject(MatSnackBar);

    public md = signal('');
    public title = signal('');
    readonly article = signal<Article>({ title: '' });

    public ngOnInit(): void {
        this.localServerApiService
            .ping()
            .pipe(
                catchError((error) => {
                    let message =
                        "Couldn't connect to the local server. See an error in the console.";
                    if (
                        error instanceof HttpErrorResponse &&
                        error.status === 0
                    ) {
                        message =
                            'The local server is offline. Run "npm run local-server".';
                    }
                    console.error(error);
                    this.snackBar.open(message);
                    return of();
                }),
            )
            .subscribe();
    }

    public userInputChanged() {
        this.article.set({
            title: this.title(),
            md: this.md(),
            html: this.markdownService.render(this.md()),
        });
    }

    public handleThreeSelect(topic: Topic | undefined) {
        // this.article.set(topic);
        if (topic?.articlePath) {
            this.articlesApi
                .getArticle(topic.articlePath)
                .pipe(
                    map((article) => {
                        this.title.set(article.title);
                        this.md.set(article.md || article.html || '');
                        this.article.set(article);
                    }),
                )
                .subscribe();
        }
    }

    public ngOnDestroy(): void {}
}
