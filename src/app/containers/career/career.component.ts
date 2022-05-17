import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent implements OnInit {

  user: CvModel = new CvModel();
  showSendButton: boolean = true;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
  }

  FileChange(evt: any) {
    const file = evt.target.files[0];
    this.user.fileName = file.name.replace(/ /g, '');
    this.user.fileContentType = file.type;

    if (file) {
      const reader = new FileReader();

      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }

  handleReaderLoaded(e) {
    var base64textString = [];
    base64textString.push('data:image/png;base64,' + btoa(e.target.result));
    this.user.file = base64textString[0];
  }

  async onSend() {
    if (this.user.phone == undefined || this.user.email == undefined) {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Tüm alanları doldurunuz.',
        showConfirmButton: false,
        timer: 1500
      });
    }else{
      this.showSendButton = false;
      await this.httpClient.post<boolean>(environment.APIEndpoint + "Site/SendCv", this.user).subscribe((response) => {
        this.showSendButton = true;
        if (response) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Mailiniz iletilmiştir, teşekkür ederiz.',
            showConfirmButton: false,
            timer: 1500
          }).then(x=> window.location.reload())
        } else {
          Swal.fire({
            icon: 'error',
            // title: 'Oops...',
            text: 'Bir hata oluştu, lütfen daha sonra tekrar deneyin.',
          })
        }
      });
    }
  }

}
export class CvModel {
  phone: string;
  email: string;
  sendToMails: string;
  file: string;
  fileContentType: string;
  fileName: string;
}