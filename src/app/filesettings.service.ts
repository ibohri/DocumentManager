import { Injectable } from '@angular/core';

@Injectable()
export class FilesettingsService {

  settings: FileSettings;
  constructor() {
    // dummy settings in future need to call api to get settings
    this.settings = <FileSettings>{
      maxHistoricalToDisplay: 5,
      acceptableFileExtensions: [".pdf", ".xls", ".xlsm"]
    }
  }

  getSettings() {
    return this.settings;

  }

  updateSettings(settings: FileSettings) {
    this.settings = settings;
  }
}
export interface FileSettings {
  maxHistoricalToDisplay: number;
  acceptableFileExtensions: string[];
}