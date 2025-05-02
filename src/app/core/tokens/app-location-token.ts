import { InjectionToken, inject } from '@angular/core';
import { Location } from '@angular/common';

interface LocationInterface {
    set(path: string): void;
    get(): string;
}

export const APP_LOCATION_TOKEN = new InjectionToken<LocationInterface>(
    'an abstraction over Location',
    {
        providedIn: 'root',
        factory: (): LocationInterface => {
            const location = inject(Location);

            let initialLocation = '';
            return {
                set: (path: string) => {
                    initialLocation = path;
                    location.go(path);
                },
                get: () => initialLocation,
            };
        },
    }
);
