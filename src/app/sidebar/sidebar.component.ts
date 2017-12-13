import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/components/common/treenode';
import { Router } from "@angular/router"
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  items: TreeNode[] = [];
  constructor(private router: Router) { }

  ngOnInit() {
    this.items = [
      { label: "OEM DEV1" },
      { label: "OEM DEV2" },
      { label: "OEM DEV3" },
      { label: "Ad Hoc Reporting" },
      {
        label: "Customer Care Metrics",
        children: [
          { label: "Client Reports", data: { link: ["/clientreports"] } },
          { label: "Client Reports Admin" },
          { label: "New Files Found", data: { link: [""] } }
        ],
        expanded: true,
      },
      { label: "Serivce Level" },
      { label: "ROCC" },
      { label: "Drug Vendor Reporting" },
    ]
  }

  onClick(node: TreeNode) {
    if (node.data["link"]) {
      this.router.navigate(node.data["link"])
    }
  }
}
