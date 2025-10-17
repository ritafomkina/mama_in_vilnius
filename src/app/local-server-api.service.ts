import { inject, Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

const localServerUrl = 'http://127.0.0.1:3000';

@Injectable({
    providedIn: 'root',
})
export class LocalServerApiService {
    private readonly _http = inject(HttpClient);

    constructor() {}

    public ping() {
        return this._http.get(`${localServerUrl}/ping`);
    }

    public getArticle() {}

    public updateArticle() {}
}
