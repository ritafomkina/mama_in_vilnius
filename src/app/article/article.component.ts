import { Component, inject, input } from '@angular/core';
import { NgOptimizedImage, Location } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {
    MatSnackBar,
    MatSnackBarConfig,
    MatSnackBarModule,
    MatSnackBarRef,
    SimpleSnackBar,
} from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

import { Clipboard } from '@angular/cdk/clipboard';

import markdownit from 'markdown-it';

import { Article } from '../models/article.interface';

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
    // full options list (defaults)
    public md = markdownit({
        // Enable HTML tags in source
        html: false,

        // Use '/' to close single tags (<br />).
        // This is only for full CommonMark compatibility.
        xhtmlOut: false,

        // Convert '\n' in paragraphs into <br>
        breaks: false,

        // CSS language prefix for fenced blocks. Can be
        // useful for external highlighters.
        langPrefix: 'language-',

        // Autoconvert URL-like text to links
        linkify: false,

        // Enable some language-neutral replacement + quotes beautification
        // For the full list of replacements, see https://github.com/markdown-it/markdown-it/blob/master/lib/rules_core/replacements.mjs
        typographer: false,

        // Double + single quotes replacement pairs, when typographer enabled,
        // and smartquotes on. Could be either a String or an Array.
        //
        // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
        // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
        quotes: '“”‘’',

        // Highlighter function. Should return escaped HTML,
        // or '' if the source string is not changed and should be escaped externally.
        // If result starts with <pre... internal wrapper is skipped.
        highlight: function (/*str, lang*/) {
            return '';
        },
    });

    private readonly _location: Location = inject(Location);
    private readonly _clipboard: Clipboard = inject(Clipboard);
    private readonly _snackbar: MatSnackBar = inject(MatSnackBar);
    private readonly _config: MatSnackBarConfig = new MatSnackBarConfig();

    readonly article = input<Article>();

    constructor() {
        this._config.duration = 2000;
        this._config.horizontalPosition = 'end';
        this._config.verticalPosition = 'top';

        const defaultRender =
            this.md.renderer.rules['link_open'] ||
            function (tokens, idx, options, env, self) {
                return self.renderToken(tokens, idx, options);
            };

        this.md.renderer.rules['link_open'] = function (
            tokens,
            idx,
            options,
            env,
            self,
        ) {
            // Add a new `target` attribute, or replace the value of the existing one.
            tokens[idx].attrSet('target', '_blank');

            // Pass the token to the default renderer.
            return defaultRender(tokens, idx, options, env, self);
        };
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
