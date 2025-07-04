import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    inject,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { StartDialogComponent } from '@ui';
@Component({
    selector: 'app-start-info',
    standalone: true,
    templateUrl: 'start-info.template.html',
    styleUrl: 'start-info.style.scss',
    imports: [RouterLink, MatButtonModule, MatIconModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class StartInfoComponent implements AfterViewInit {
    readonly dialog = inject(MatDialog);

    ngAfterViewInit(): void {
        if (localStorage.getItem('startDialogClosed') === 'true') {
            return;
        }
        this.dialog.open(StartDialogComponent, {
            width: '500px',
            autoFocus: false,
        });
    }
}
