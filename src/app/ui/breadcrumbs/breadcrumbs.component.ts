import {
    ChangeDetectionStrategy,
    Component,
    effect,
    inject,
    model,
    output,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Breadcrumb } from '@models';
import { Router } from '@angular/router';
@Component({
    selector: 'app-breadcrumbs',
    standalone: true,
    imports: [MatIconModule],
    templateUrl: 'breadcrumbs.template.html',
    styleUrl: 'breadcrumbs.style.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbsComponent {
    private readonly _router = inject(Router);

    readonly isSmallScreen = toSignal(
        inject(BreakpointObserver)
            .observe(['(max-width: 1260px)'])
            .pipe(map(({ matches }: BreakpointState) => matches)),
    );

    readonly breadcrumbs = model<Breadcrumb[]>([]);
    readonly hideBackBtn = model<boolean>();
    readonly open = output<string | null>();

    constructor() {
        effect(
            () => {
                this.hideBackBtn.set(!this.breadcrumbs().length);
            },
            { allowSignalWrites: true },
        );
    }

    openPath(id: string): void {
        if (id === 'faq' || id === 'main') {
            this._resetState();
            if (id === 'main') {
                this._router.navigateByUrl('/');
                return;
            }
        }

        if (!this.breadcrumbs().length) {
            this._resetState();
            return;
        }

        this.open.emit(id);

        this.breadcrumbs.set(this.breadcrumbs().slice(0, -1));
    }

    private _resetState(): void {
        this.breadcrumbs.set([]);
        this.open.emit(null);
    }
}
