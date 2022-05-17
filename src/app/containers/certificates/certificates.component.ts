import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss']
})
export class CertificatesComponent implements OnInit {

  certificateList : Array<Certificate> = new Array<Certificate>(); 

  constructor() { 
    this.certificateList.push({link: '../../../assets/images/certificates/3N Aydınlatma 9001 TR 2020.png', photo: '../../../assets/images/certificates/3N Aydınlatma 9001 TR 2020.png', name : '3N Aydınlatma 9001 TR 2020'});
    this.certificateList.push({link: '../../../assets/images/certificates/3N Aydınlatma 9001 ENG 2020.png', photo: '../../../assets/images/certificates/3N Aydınlatma 9001 ENG 2020.png', name : '3N Aydınlatma 9001 ENG 2020'});
    this.certificateList.push({link: '../../../assets/images/certificates/3N Aydınlatma 14001 TR 2020.png', photo: '../../../assets/images/certificates/3N Aydınlatma 14001 TR 2020.png',name : '3N Aydınlatma 14001 TR 2020'});
    this.certificateList.push({link: '../../../assets/images/certificates/3N Aydınlatma 14001 ENG 2020.png',photo: '../../../assets/images/certificates/3N Aydınlatma 14001 ENG 2020.png', name : '3N Aydınlatma 14001 ENG 2020'});
    this.certificateList.push({link: '../../../assets/images/certificates/3N Aydınlatma 45001 TR 2020.png', photo: '../../../assets/images/certificates/3N Aydınlatma 45001 TR 2020.png',name : '3N Aydınlatma 45001 TR 2020'});
    this.certificateList.push({link: '../../../assets/images/certificates/3N Aydınlatma 45001 ENG 2020.png',photo: '../../../assets/images/certificates/3N Aydınlatma 45001 ENG 2020.png', name : '3N Aydınlatma 45001 ENG 2020'});
    this.certificateList.push({link: '../../../assets/images/certificates/TSE 60598-2-1.PDF', photo: '../../../assets/images/certificates/3N Aydınlatma TSE 60598.png',name : 'TSE 60598-2-1'});
    this.certificateList.push({link: '../../../assets/images/certificates/TSE 60598-2-2.PDF', photo: '../../../assets/images/certificates/3N Aydınlatma TSE 60598-2.png',name : 'TSE 60598-2-2'});
  }

  ngOnInit(): void {
    
  }

}


export class Certificate{
  link: string;
  name: string;
  photo: string;
}