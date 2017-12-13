import { FileService } from './../file.service';
import { Component, OnInit } from '@angular/core';
import { NgForOf} from '@angular/common';
import { DragDropModule } from 'primeng/primeng';
import { FileUploadModule } from 'primeng/primeng';
import { FolderService, Folder } from '../folder.service';
import { TreeNode } from 'primeng/components/common/treenode';

@Component({
  selector: 'app-filemanager',
  templateUrl: './filemanager.component.html',
  styleUrls: ['./filemanager.component.css'],
  providers: [FolderService, FileService, NgForOf],

})
export class FilemanagerComponent implements OnInit {
  files: File[] = [];
  draggedFile: File;
  folders: Folder[];
  treeNodes: TreeNode[];

  showSettings: boolean = false;
  propertiesSaved: boolean = false;
  constructor(private folderService: FolderService, private fileService: FileService) {
    // dummy nodes
    this.treeNodes = [<TreeNode>{
      label: "Health Plan Market",
      children: [<TreeNode>{ label: "Blue Cross Blue Sheild" }, <TreeNode>{ label: "Commercial" }, <TreeNode>{ label: "Managed Medicaid" }],
    }]

    this.files = this.fileService.getFiles();
  }

  ngOnInit() {
    this.folders = this.folderService.getFolders();
  }

  uploadFile(files:File[]) {
    // upload the files
    this.fileService.uploadFiles(files);
    // add in files variables to update it on UI
    for (let file of files) {
      this.files.push(file);
    }
  }
  dragStart(event:Event, file: File) {
    // on drag start set the dragged file
    this.draggedFile = file;
  }

  drop(event:Event, folder: Folder) {
    // add the dragged file inside folder
    if (this.draggedFile) {
      this.files = this.files.filter(t => t.name != this.draggedFile.name);
      folder.isExpanded = true;
      this.folderService.addFileInFolder(folder.id, this.draggedFile);
    }
  }

  dragEnd() {
    this.draggedFile = null;
  }

  onSave() {
    this.showSettings = false;
    this.propertiesSaved = true;
  }
}
