import { Component, inject, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {
    MatSnackBar,
    MatSnackBarConfig,
    MatSnackBarModule,
    MatSnackBarRef,
    SimpleSnackBar,
} from '@angular/material/snack-bar';
import { NgOptimizedImage } from '@angular/common';
import { Article } from '../models/article.interface';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Location } from '@angular/common';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
    selector: 'app-article',
    standalone: true,
    imports: [
        MatCardModule,
        MatButtonModule,
        MatSnackBarModule,
        NgOptimizedImage,
        MatIconModule,
        MatTooltipModule,
    ],
    templateUrl: 'article.template.html',
    styleUrl: 'article.style.scss',
})
export class ArticleComponent {
    private readonly _location: Location = inject(Location);
    private readonly _clipboard: Clipboard = inject(Clipboard);
    private readonly _snackbar: MatSnackBar = inject(MatSnackBar);
    private readonly _config: MatSnackBarConfig = new MatSnackBarConfig();

    readonly article = input<Article>();

    constructor() {
        this._config.duration = 2000;
        this._config.horizontalPosition = 'end';
        this._config.verticalPosition = 'top';
    }

    copyLink() {
        const link = `https://vilniusmama.vercel.app${this._location.path()}`;

        const message = `Ссылка ${link} скопирована в буфер обмена`;

        this._clipboard.copy(link);

        this.openSnackBar(message);
    }

    private openSnackBar(message: string): MatSnackBarRef<SimpleSnackBar> {
        return this._snackbar.open(message, undefined, this._config);
    }
}
