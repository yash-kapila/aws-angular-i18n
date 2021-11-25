import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  planets$ = this.http.get('/api/planets/').pipe(
    map((response: any) => response.results)
  );

  constructor(
    private readonly http: HttpClient,
    private readonly router: Router,
  ) {}

  getPlanetDetails(planetId: number) {
    this.router.navigate(['details', `${planetId}`]);
  }
}
