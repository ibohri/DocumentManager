import { FileSettings, FilesettingsService } from './../filesettings.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-file-settings',
  templateUrl: './file-settings.component.html',
  styleUrls: ['./file-settings.component.css'],
  providers: [FilesettingsService]
})
export class FileSettingsComponent implements OnInit {

  propertiesSaved: boolean;
  settings: FileSettings;
  constructor(private _fileSettingsService: FilesettingsService, private router: Router) { }

  ngOnInit() {
    this.settings = this._fileSettingsService.getSettings();
    this.propertiesSaved = false;
  }

  saveSettings(maxHistoricalToDisplay: number) {
    // need to find better way
    this.settings.maxHistoricalToDisplay = maxHistoricalToDisplay;
    this._fileSettingsService.updateSettings(this.settings);
    this.propertiesSaved = true;
  }

  onConfirmationDialogClose() {
    this.propertiesSaved = false;
    this.router.navigate(["/clientreports"])
  }

  onCancel() {
    this.router.navigate([""])
  }

  addNewFileExtension(extension: string) {
    if (this.settings.acceptableFileExtensions.some(t => t === extension) == false) {
      this.settings.acceptableFileExtensions.push(extension)
    }
  }

}
