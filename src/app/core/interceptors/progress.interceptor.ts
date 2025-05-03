import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { LOADING } from '@core/tokens';
import { finalize, Observable } from 'rxjs';

let counter = 0;

export const progressInterceptor = (
    request: HttpRequest<unknown>,
    next: HttpHandlerFn,
): Observable<HttpEvent<unknown>> => {
    const loading = inject(LOADING);

    if (request.method === 'GET') {
        counter++;
        loading.start();
    }

    return next(request).pipe(
        finalize(() => {
            if (request.method === 'GET') {
                counter--;
                if (counter === 0) {
                    loading.stop();
                }
            }
        }),
    );
};
