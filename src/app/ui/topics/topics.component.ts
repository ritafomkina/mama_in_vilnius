import {
    ChangeDetectionStrategy,
    Component,
    inject,
    Input,
    viewChild,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { toSignal } from '@angular/core/rxjs-interop';

import {
    BreakpointObserver,
    Breakpoints,
    BreakpointState,
} from '@angular/cdk/layout';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';

import { map } from 'rxjs';

import { NavigationItem } from '@models';
import { TOPICS } from '@core/constants';

@Component({
    selector: 'app-topics',
    standalone: true,
    imports: [
        MatIconModule,
        MatCardModule,
        MatSidenavModule,
        RouterLink,
        RouterLinkActive,
    ],
    templateUrl: 'topics.template.html',
    styleUrl: 'topics.style.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopicsComponent {
    @Input() navigationItems?: NavigationItem[];
    @Input() currentTopicTitle?: string;
    @Input() isRootCurrentTopic?: boolean;

    readonly isXSmall = toSignal(
        inject(BreakpointObserver)
            .observe(Breakpoints.XSmall)
            .pipe(map(({ matches }: BreakpointState) => matches)),
    );
    readonly topics = TOPICS;

    readonly drawer = viewChild<MatDrawer>('drawer');

    openMenu(): void {
        this.drawer()?.open();
    }

    closeMenu(): void {
        this.drawer()?.close();
    }
}
