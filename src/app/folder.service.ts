import { Injectable } from '@angular/core';

@Injectable()
export class FolderService {
  folders: Folder[] = [];
  constructor() { }
  getFolders(): Folder[] {
    // dummy folders
    this.folders = [{
      id: "1",
      label: "PeopleSafe Log/Activity Reports"
    }, {
      id: "2",
      label: "Aetna"
    },
    {
      id: "3",
      label: "Network Help Desk Dashboards"
    },
    {
      id: "4",
      label: "CMS Medicore D Dashboard"
    }
    ]

    return this.folders;
  }

  addFileInFolder(folderId: string, file: File) {
    // add file inside the folder
    let folder = this.folders.find(t => t.id == folderId);
    if (folder) {
      if (!folder.files)
        folder.files = [];
      folder.files.push(file);
    }
  }

  getClientReports(): Folder[] {
    // need to call api here
    return [
      { label: "Call Stat Reports", id: "1" },
      { label: "PeopleSafe Log/Activity Reports", id: "2" },
      { label: "Aetna", id: "3" },
      {
        label: "Network Help Desk Dashboards",
        id: "4",
        files: [
         <File>{name:"Arcadian Health Plan_Inbound Log Activities - Top 5 - LFM"},
         <File>{name:"Arcadian Health Plan_Inbound Log Activities - Top 5 - LFM"},
         <File>{name:"Arcadian Health Plan_Inbound Log Activities - Top 5 - LFM"},
         <File>{name:"Arcadian Health Plan_Inbound Log Activities - Top 5 - LFM"}
        
        ]
      },
    ]
  }
}

export interface Folder {
  id: string;
  label: string;
  files?: File[];
  isExpanded?: boolean;
}