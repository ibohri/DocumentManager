import { Injectable } from '@angular/core';

@Injectable()
export class FileService {

  constructor() { }

  getFiles(): File[] {
    // for now getting dummy files
    return [<File>{ name: "LFM 12/15/2016 05:44:22 CST" },
    <File>{ name: "A2E AD 2013 Q4" },
    <File>{ name: "CPhA Dashboard 2017 10" },
    <File>{ name: "CPhA 780 Dashboard 2017 07" },
    <File>{ name: "Tony's Awesome Bonus Report" },
    <File>{ name: "Aetna Dashboard 2017 03" }]
  }

  uploadFiles(files: File[]) {
    // we will upload the files to server
  }
}
