import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Topic } from '@models';

@Component({
    selector: 'app-navigation-part',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './navigation-part.component.html',
    styleUrl: './navigation-part.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationPartComponent {
    public topic = input<Topic>();
}
