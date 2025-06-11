import { Injectable, inject } from '@angular/core';
import { Article } from '@models';
import { Observable, Subject, of, switchMap } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({ providedIn: 'root' })
export class ArticleService {
    private readonly _http = inject(HttpClient);
    private readonly _path = new Subject<string[] | null>();

    readonly article = toSignal<Article | null>(
        this._path.pipe(
            switchMap((path) =>
                path ? this.getArticle(path.join('/')) : of(null),
            ),
        ),
        { initialValue: null },
    );

    set path(path: string[] | null) {
        this._path.next(path);
    }

    public getArticle(path: string): Observable<Article> {
        return this._http.get<Article>(`/assets/articles/${path}.json`);
    }
}
