import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  planetDetails$: Observable<any> = this.router.paramMap.pipe(
    switchMap((params: ParamMap) => {
      const planetId = params.get('id');
      return this.http.get(`/api/planets/${planetId}`)
    }),
  );
  constructor(
    private readonly router: ActivatedRoute,
    private readonly http: HttpClient,
  ) { }

  ngOnInit(): void {
  }

}
