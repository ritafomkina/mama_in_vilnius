import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { RouterLink } from '@angular/router';
import {
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogRef,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
    standalone: true,
    templateUrl: 'start-dialog.template.html',
    styleUrl: 'start-dialog.style.scss',
    imports: [
        RouterLink,
        MatDialogContent,
        MatDialogActions,
        MatDialogClose,
        MatButtonModule,
    ],

    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StartDialogComponent {
    readonly dialogRef = inject(MatDialogRef<StartDialogComponent>);

    constructor() {
        this.dialogRef.afterClosed().subscribe(() => {
            localStorage.setItem('startDialogClosed', 'true');
        });
    }

    onClose(): void {
        this.dialogRef.close();
    }
}
