import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';

import { toSignal } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { map } from 'rxjs';

import { Topic } from '@models';

@Component({
    selector: 'app-page',
    standalone: true,
    imports: [RouterOutlet, RouterLink, MatButtonModule, MatIconModule],
    templateUrl: './page.component.html',
    styleUrl: './page.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageComponent {
    private activatedRoute = inject(ActivatedRoute);

    public topic = toSignal(
        this.activatedRoute.data.pipe(map(({ topic }) => topic as Topic)),
    );
}
