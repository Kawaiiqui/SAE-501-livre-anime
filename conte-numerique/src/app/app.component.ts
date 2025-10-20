import { Component } from '@angular/core';
import { ConteViewerComponent } from './components/conte-viewer/conte-viewer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ConteViewerComponent],
  template: '<app-conte-viewer></app-conte-viewer>'
})
export class AppComponent {}