import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { fetchPlanet } from './state/timezone.actions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from './state/timezone.reducer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  selectedTimeZone: string = "";
  planet: Observable<any> = this.store.select(state => {
    return state.timeZone.planet;
  });

  constructor(private store: Store<State>) {}

  fetchPlanetForTimeZone() {
    if (this.selectedTimeZone) {
      this.store.dispatch(fetchPlanet({ timeZone: this.selectedTimeZone }));
    }
  }
}
