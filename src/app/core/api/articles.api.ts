import { Injectable, inject } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Article } from '@models';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ArticlesApi {
    private readonly _http = inject(HttpClient);

    getArticle(topic: string, article: string): Observable<Article> {
        return this._http.get<Article>(
            `/assets/articles/${topic}/${article}.json`,
        );
    }
}
