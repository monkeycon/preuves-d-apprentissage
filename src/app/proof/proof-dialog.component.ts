import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { MatChipInputEvent } from '@angular/material';
import { ENTER, COMMA } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-proof-dialog',
  templateUrl: './proof-dialog.component.html',
  styleUrls: ['./proof-dialog.component.scss'],
})
export class ProofDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
