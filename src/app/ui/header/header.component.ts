import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [RouterLink, NgOptimizedImage],
    templateUrl: 'header.template.html',
    styleUrl: 'header.style.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}
