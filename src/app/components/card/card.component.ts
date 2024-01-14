import { Component } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  public myAngularxQrCode: string = "";
  public qrCodeDownloadLink: SafeUrl = "";
  constructor (private _ToastrService:ToastrService) {
    this.myAngularxQrCode = 'Your QR code data string';
  }

  onChangeURL(url: SafeUrl) {
    this.qrCodeDownloadLink = url;
  }
  value1: string ="www.tazkty.com/47384711sss"
  copyText(){
 navigator.clipboard.writeText(this.value1)
 this._ToastrService.success("code copied successfully")
  }
}