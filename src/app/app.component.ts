import { Component } from '@angular/core';
import { MatChipInputEvent } from '@angular/material';
import { ENTER, COMMA } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public searchedTags = [];
  public preuvesForme = false;
  public separatorKeysCodes = [ENTER, COMMA];
  public preuves = [];

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
  }

  public toggleForme(event: any): void {
    this.preuvesForme = event.checked;
  }

  public openDialog(): void {
    console.log('open dialog for adding a proof');
  }

  public isImage(path: string) {
    return path.endsWith('jpg') || path.endsWith('png') || path.endsWith('png');
  }
}
