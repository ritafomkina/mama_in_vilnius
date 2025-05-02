import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-start-info',
    standalone: true,
    templateUrl: 'start-info.template.html',
    styleUrl: 'start-info.style.scss',
    imports: [RouterLink, MatButtonModule, MatIconModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StartInfoComponent {}
