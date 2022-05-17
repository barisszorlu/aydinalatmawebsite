import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss']
})
export class ReferencesComponent implements OnInit {
  mobile : boolean = false;

  constructor(private httpClient: HttpClient,) {
    if (window.screen.width < 768) { // 768px portrait
      this.mobile = true;
    }
   }

  public references : Array<any>;

  ngOnInit(): void {
    this.httpClient.get<any>(environment.APIEndpoint + "Site/GetReferences" )
      .subscribe(async (response) => {
        this.references = response;
      })

  }

}
