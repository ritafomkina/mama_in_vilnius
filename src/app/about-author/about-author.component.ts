import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-about-author',
    standalone: true,
    templateUrl: 'about-author.template.html',
    styleUrl: 'about-author.style.scss',
    imports: [
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        NgOptimizedImage,
        RouterLink,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AboutMeComponent {}
