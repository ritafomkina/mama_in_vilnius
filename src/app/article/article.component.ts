import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgOptimizedImage } from '@angular/common';
import { Article } from '../models/article.interface';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-article',
    standalone: true,
    imports: [
        MatCardModule,
        MatButtonModule,
        MatSnackBarModule,
        NgOptimizedImage,
        RouterLink,
    ],
    templateUrl: 'article.template.html',
    styleUrl: 'article.style.scss',
})
export class ArticleComponent {
    readonly article = input<Article>();
}
