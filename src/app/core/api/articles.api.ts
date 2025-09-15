import { Injectable, inject } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Article } from '@models';

@Injectable({ providedIn: 'root' })
export class ArticlesApi {
    private readonly _http = inject(HttpClient);

    public getArticle(path: string): Observable<Article> {
        return this._http.get<Article>(`/assets/${path}.json`);
    }
}
