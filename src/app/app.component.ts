import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { APP_LOCATION_TOKEN } from './core/tokens/app-location-token';
import { Location } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LOADING } from './core/tokens/loading.token';
import { FooterComponent } from './ui/footer/footer.component';
import { HeaderComponent } from './ui/header/header.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.template.html',
    styleUrl: './app.style.scss',
    imports: [
        RouterOutlet,
        MatProgressSpinnerModule,
        HeaderComponent,
        FooterComponent,
    ],
})
export class AppComponent implements OnInit {
    // this approach cause the router bug
    // private readonly _location = inject(Location);
    // private readonly _appLocation = inject(APP_LOCATION_TOKEN);
    readonly isLoading = inject(LOADING).state;

    ngOnInit(): void {
        // const currentPath = this._location.path();
        // this._appLocation.set(currentPath);
    }
}
