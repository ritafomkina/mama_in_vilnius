import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [NgOptimizedImage],
    templateUrl: 'footer.template.html',
    styleUrl: 'footer.style.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {}
