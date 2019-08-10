import { Component, OnInit } from '@angular/core';
import { DocumentUploadService } from '../document-upload.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
  selectedFile: File = null;
  uploadMessage = [];
  check: Boolean = false;

  constructor(private _documentUploadService: DocumentUploadService) { }

  ngOnInit() {
  }

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
    console.log(this.selectedFile);
  }

  onUpload() {
    console.log(this.selectedFile);
    this._documentUploadService.uploadDocument(this.selectedFile).subscribe(data => {
      // do something, if upload success
      this.check = true;
      this.uploadMessage.push(data);
      console.log(data)
      }, error => {
        console.log(error);
      });
  }

}
