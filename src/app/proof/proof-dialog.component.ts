import { Component, Inject } from '@angular/core';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { MatChipInputEvent,  MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';

import { ProofService } from './proof.service';

@Component({
  selector: 'app-proof-dialog',
  templateUrl: './proof-dialog.component.html',
  styleUrls: ['./proof-dialog.component.scss'],
  providers: [ ProofService ],
})
export class ProofDialogComponent {
  public separatorKeysCodes = [ENTER, COMMA];
  public name = new FormControl('', [Validators.required]);
  public description = '';
  public proofTag = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private proofService: ProofService) {}

  public getErrorMessage(): string {
    return this.name.hasError('required') ? 'Entrez un nom, svp.' : '';
  }

  public addTag(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    // Add a tag
    if ((value || '').trim()) {
      this.proofTag.push({ name: value.trim().toLowerCase() });
    }
    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  public removeTag(tag: any): void {
    const index = this.proofTag.indexOf(tag);
    if (index >= 0) {
      this.proofTag.splice(index, 1);
    }
  }

  public submit(): void {
    this.proofService.putProof({
      name: this.name.value,
      description: this.description,
      tags: this.proofTag.map((e) => e.name),
    });
  }
}
