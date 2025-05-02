import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { APP_LOCATION_TOKEN } from './core/tokens/app-location-token';
import { Location } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    template: ` <router-outlet></router-outlet> `,
    imports: [RouterOutlet],
})
export class AppComponent implements OnInit {
    private readonly _location = inject(Location);
    private readonly _appLocation = inject(APP_LOCATION_TOKEN);

    ngOnInit(): void {
        const currentPath = this._location.path();
        this._appLocation.set(currentPath);
    }
}
