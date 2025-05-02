import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterOutlet } from '@angular/router';
import { LOADING } from '@core/tokens';
import { FooterComponent, HeaderComponent } from '@ui';

@Component({
    selector: 'app-main',
    standalone: true,
    templateUrl: 'main.template.html',
    styleUrl: 'main.style.scss',
    imports: [
        RouterOutlet,
        MatProgressSpinnerModule,
        HeaderComponent,
        FooterComponent,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {
    readonly isLoading = inject(LOADING).state;
}
