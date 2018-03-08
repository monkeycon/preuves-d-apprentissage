import { Component, Inject } from '@angular/core';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { MatChipInputEvent, MatDialog } from '@angular/material';

import { ProofService } from './proof.service';
import { ProofDialogComponent } from './proof-dialog.component';

@Component({
  selector: 'app-proof',
  templateUrl: './proof.component.html',
  styleUrls: ['./proof.component.scss'],
})
export class ProofComponent {
  public searchedTags = [];
  public proofForme = false;
  public separatorKeysCodes = [ENTER, COMMA];
  public proof: any = [];

  public constructor(private proofService: ProofService, public dialog: MatDialog) {
    this.proof = this.proofService.getProof();
  }

  public addTag(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    // Add a tag
    if ((value || '').trim()) {
      this.searchedTags.push({ name: value.trim().toLowerCase() });
    }
    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  public removeTag(tag: any): void {
    const index = this.searchedTags.indexOf(tag);
    if (index >= 0) {
      this.searchedTags.splice(index, 1);
    }
  }

  public onClickSearch(): void {
    const searched = this.searchedTags.map((ele) => ele.name);
    this.proof = this.proofService.getProofByTag(searched);
  }

  public toggleForme(event: any): void {
    this.proofForme = event.checked;
  }

  public openDialog(): void {
    const dialogRef = this.dialog.open(ProofDialogComponent, {
      data: {}
    });
  }

  public isImage(path: string) {
    return path ? path.endsWith('jpg') || path.endsWith('png') || path.endsWith('gif') : false;
  }

  public onClickDelete(proof: any) {
    const isConfirmed = confirm('Voulez-vous supprimer cette preuve "' + proof.name + '" ?');
    if (isConfirmed) {
      this.proofService.deleteProof(proof);
    }
  }
}
