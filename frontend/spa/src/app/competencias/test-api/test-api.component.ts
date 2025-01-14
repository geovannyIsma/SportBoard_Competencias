import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-test-api',
  templateUrl: './test-api.component.html',
  styleUrls: ['./test-api.component.scss']
})
export class TestApiComponent implements OnInit {
  localities: any[] = [];
  plannings: any[] = [];
  newLocality = { stadium_name: '', street_one: '', street_two: '', reference: '' };
  newPlanning = { start_date: '', end_date: '' };

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getLocalities().subscribe(data => {
      this.localities = data;
    });

    this.apiService.getPlannings().subscribe(data => {
      this.plannings = data;
    });
  }

  createLocality(): void {
    this.apiService.createLocality(this.newLocality).subscribe(data => {
      this.localities.push(data);
      this.newLocality = { stadium_name: '', street_one: '', street_two: '', reference: '' };
      alert('Locality saved successfully!');
      console.log('Locality saved successfully!', data);
    }, error => {
      alert('Error saving locality');
      console.error('Error saving locality', error);
    });
  }

  createPlanning(): void {
    this.apiService.createPlanning(this.newPlanning).subscribe(data => {
      this.plannings.push(data);
      this.newPlanning = { start_date: '', end_date: '' };
      alert('Planning saved successfully!');
      console.log('Planning saved successfully!', data);
    }, error => {
      alert('Error saving planning');
      console.error('Error saving planning', error);
    });
  }
}