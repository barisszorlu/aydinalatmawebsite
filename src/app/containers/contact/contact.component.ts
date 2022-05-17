import { NumberInput } from '@angular/cdk/coercion';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { environment } from '../../../environments/environment';


// declare var $: any;


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})


export class ContactComponent implements OnInit {

  subjectList: Array<Subject> = new Array<Subject>();
  showCv: boolean = false;
  showSendButton: boolean = true;

  user: MailModel = new MailModel();

  idLanguage : string = '1';

  // user = {
  //   name: '',
  //   company: '',
  //   email: '',
  //   message: '',
  //   phone: '',
  //   subject: '',
  //   idSubject: '',
  //   file: '',
  // };

  constructor(private httpClient: HttpClient, private translate: TranslateService) {

    this.idLanguage = localStorage.getItem('idLanguage');
    switch (this.idLanguage) {
      case '1':
        this.translate.use('tr');
        break;
      case '2':
        this.translate.use('en');
        break;

      default:
        this.translate.use('tr');
        break;
    }

    if (this.idLanguage == '1') {
      this.subjectList.push({ id: 1, name: 'Satış', idLanguage: 1, mails: ' info@3naydinlatma.com.tr' });
      this.subjectList.push({ id: 2, name: 'Satın Alma', idLanguage: 1, mails: 'satinalma@3naydinlatma.com.tr' });
      this.subjectList.push({ id: 3, name: 'Dış Ticaret', idLanguage: 1, mails: 'agunes@3naydinlatma.com.tr' });
      this.subjectList.push({ id: 4, name: 'İnsan Kaynakları', idLanguage: 1, mails: 'insankaynaklari@3naydinlatma.com.tr' });
    }else if (this.idLanguage == '2') {
      this.subjectList.push({ id: 1, name: 'Sales', idLanguage: 2, mails: ' info@3naydinlatma.com.tr' });
      this.subjectList.push({ id: 2, name: 'Buy', idLanguage: 2, mails: 'satinalma@3naydinlatma.com.tr' });
      this.subjectList.push({ id: 3, name: 'Foreign Trade', idLanguage: 2, mails: 'agunes@3naydinlatma.com.tr' });
      this.subjectList.push({ id: 4, name: 'Human Resources', idLanguage: 2, mails: 'insankaynaklari@3naydinlatma.com.tr' });
    }

  }

  ngOnInit(): void {

  }

  async onSend() {
    if (this.user.phone == undefined || this.user.message == undefined || this.user.email == undefined) {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Tüm alanları doldurunuz.',
        showConfirmButton: false,
        timer: 1500
      });
    }else{
      this.showSendButton = false;
      await this.httpClient.post<boolean>(environment.APIEndpoint + "Site/SendEmail", this.user).subscribe((response) => {
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

  changeSubject(changeSubject: any) {
    if (changeSubject.value == '4') {
      this.showCv = true
    } else {
      this.showCv = false;
      this.user.file = null;
    }
    this.user.sendToMails = this.subjectList.find(x=>x.id.toString() ==  changeSubject.value).mails;
    this.user.subject = this.subjectList.find(x=>x.id.toString() ==  changeSubject.value).name;
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
    // $('#outputImage').attr('src', this.user.file);
  }
}

export class Subject {
  id: number;
  name: string;
  idLanguage: number = 1;
  mails: string;
}

export class Mail {
  name: string;
}

export class MailModel {
  idSubject?: number;
  firmName: string;
  nameSurname: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
  sendToMails: string;
  file: string;
  fileContentType: string;
  fileName: string;
}