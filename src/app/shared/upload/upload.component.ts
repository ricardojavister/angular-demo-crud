import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { HttpEventType, HttpClient } from "@angular/common/http";
import { IconsRoutingModule } from "src/app/icons/icons-routing.module";

@Component({
  selector: "app-upload",
  templateUrl: "./upload.component.html",
  styleUrls: ["./upload.component.css"],
})
export class UploadComponent {
  public progress!: number;
  public message!: string;
  @Input() public urlFile!: string;
  @Output() uploadFinished = new EventEmitter<any>();

  constructor(private http: HttpClient) {}

  public uploadFile = (files: any) => {
    if (files.length === 0) {
      return;
    }

    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append("file", fileToUpload, fileToUpload.name);

    this.http
      .post("http://localhost:41067/api/upload", formData, {
        reportProgress: true,
        observe: "events",
      })
      .subscribe((event: any) => {
        if (event.type === HttpEventType.UploadProgress)
          this.progress = Math.round((100 * event.loaded) / event.total);
        else if (event.type === HttpEventType.Response) {
          this.message = "Upload success.";
          console.log(event);
          this.urlFile = event.body.urlFile;
          this.uploadFinished.emit(event.body.urlFile);
        }
      });
  };
}
