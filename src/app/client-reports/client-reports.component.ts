import { FolderService } from './../folder.service';
import { TreeNode } from 'primeng/primeng';
import { Component, OnInit } from '@angular/core';
import { Folder } from '../folder.service';

@Component({
  selector: 'app-client-reports',
  templateUrl: './client-reports.component.html',
  styleUrls: ['./client-reports.component.css'],
  providers: [FolderService]
})
export class ClientReportsComponent implements OnInit {

  folders: Folder[];
  nodes: TreeNode[];
  constructor(private _folderService: FolderService) { }

  ngOnInit() {
    this.folders = this._folderService.getClientReports();
    this.nodes = this.folders.map(folder => <TreeNode>{
      label: folder.label,
      children: (folder.files || []).map(file => <TreeNode>{ label: file.name })
    })
  } 

}
