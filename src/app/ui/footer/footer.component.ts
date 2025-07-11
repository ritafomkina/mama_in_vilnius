import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-footer',
    standalone: true,
    templateUrl: 'footer.template.html',
    styleUrl: 'footer.style.scss',
    imports: [RouterLink],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {}
