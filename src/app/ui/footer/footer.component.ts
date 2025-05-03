import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    standalone: true,
    templateUrl: 'footer.template.html',
    styleUrl: 'footer.style.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {}
