import {
    ChangeDetectionStrategy,
    Component,
    inject,
    signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { ArticleComponent } from '@ui';

import { MarkdownService } from '../markdown.service';
import { Article } from '@models';
import { JsonPipe } from '@angular/common';

@Component({
    selector: 'app-md-editor',
    standalone: true,
    imports: [
        MatGridListModule,
        MatTabsModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        ArticleComponent,
        JsonPipe,
    ],
    templateUrl: './md-editor.component.html',
    styleUrl: './md-editor.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MdEditorComponent {
    public markdownService = inject(MarkdownService);
    public userInput = {
        md: '',
        title: '',
    };
    readonly article = signal<Article>({ title: '' });

    public userInputChanged() {
        const { md, title } = this.userInput;
        this.article.set({
            title,
            md,
            html: this.markdownService.render(md),
        });
    }
}
