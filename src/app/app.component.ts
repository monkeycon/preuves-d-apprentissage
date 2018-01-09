import { Component } from '@angular/core';
import { MatChipInputEvent } from '@angular/material';
import { ENTER, COMMA } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public tags = [
    { name: 'angular' },
  ];
  public preuvesForme = false;
  public separatorKeysCodes = [ENTER, COMMA];

  public addTag(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    // Add a tag
    if ((value || '').trim()) {
      this.tags.push({ name: value.trim() });
    }
    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  public removeTag(tag: any): void {
    const index = this.tags.indexOf(tag);
    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  public onClickSearch(): void {
    console.log('search ' + this.tags.map((ele) => ele.name));
  }

  public toggleForme(event: any): void {
    this.preuvesForme = event.checked;
  }

  public openDialog(): void {
    console.log('open dialog for adding a proof');
  }
}
