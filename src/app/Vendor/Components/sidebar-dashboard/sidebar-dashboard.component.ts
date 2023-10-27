import { Component, Input,OnChanges } from '@angular/core';

@Component({
  selector: 'app-sidebar-dashboard',
  templateUrl: './sidebar-dashboard.component.html',
  styleUrls: ['./sidebar-dashboard.component.css']
})
export class SidebarDashboardComponent implements OnChanges {
  @Input() isCollapse?: boolean;

  ngOnChanges() {
    console.log('object');
    console.log(this.isCollapse);
  }
logout(){

}
}
