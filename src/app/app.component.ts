import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
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
export class AppComponent {
    readonly isLoading = inject(LOADING).state;
}
