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
    // { name: 'javascript' },
    { name: 'angular' },
  ];

  // Enter, comma
  public separatorKeysCodes = [ENTER, COMMA];

  public add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our tag
    if ((value || '').trim()) {
      this.tags.push({ name: value.trim() });
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  public remove(tag: any): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  public onClickSearch(): void {
    console.log('search ' + this.tags.map((ele) => ele.name));
  }

  public openDialog(): void {
    console.log('open dialog for adding a proof');
  }
}
