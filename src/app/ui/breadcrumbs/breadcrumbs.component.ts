import {
    ChangeDetectionStrategy,
    Component,
    inject,
    Input,
} from '@angular/core';
import { RouterLink } from '@angular/router';

import { toSignal } from '@angular/core/rxjs-interop';
import { MatIconModule } from '@angular/material/icon';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

import { map } from 'rxjs';

import { Breadcrumb } from '@models';
@Component({
    selector: 'app-breadcrumbs',
    standalone: true,
    imports: [MatIconModule, RouterLink],
    templateUrl: 'breadcrumbs.template.html',
    styleUrl: 'breadcrumbs.style.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbsComponent {
    @Input() breadcrumbs?: Breadcrumb[];
    @Input() currentTopicTitle?: string;

    readonly isSmallScreen = toSignal(
        inject(BreakpointObserver)
            .observe(['(max-width: 1260px)'])
            .pipe(map(({ matches }: BreakpointState) => matches)),
    );
}
