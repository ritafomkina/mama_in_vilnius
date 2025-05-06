import {
    ChangeDetectionStrategy,
    Component,
    inject,
    input,
    output,
    viewChild,
} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { Topic } from '@models';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import {
    BreakpointObserver,
    Breakpoints,
    BreakpointState,
} from '@angular/cdk/layout';
import { TOPICS } from '@core/constants';

@Component({
    selector: 'app-topics',
    standalone: true,
    imports: [MatIconModule, MatCardModule, MatSidenavModule],
    templateUrl: 'topics.template.html',
    styleUrl: 'topics.style.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopicsComponent {
    readonly isXSmall = toSignal(
        inject(BreakpointObserver)
            .observe(Breakpoints.XSmall)
            .pipe(map(({ matches }: BreakpointState) => matches)),
    );
    readonly topics = TOPICS;

    readonly drawer = viewChild<MatDrawer>('drawer');

    readonly activeTopics = input<Topic[]>();
    readonly activeTopic = input<Topic | null>();

    readonly open = output<string>();
    readonly isOpenMenuMode = output<boolean>();

    selectTopic(topicId: string): void {
        this.open.emit(topicId);
        this.closeMenu();
    }

    openMenu(): void {
        this.isOpenMenuMode.emit(true);
        this.drawer()?.open();
    }

    closeMenu(): void {
        this.isOpenMenuMode.emit(false);
        this.drawer()?.close();
    }
}
