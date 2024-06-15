import { Component } from '@angular/core';
import { NavComponent } from '../../components/nav/nav.component';
import { TableComponent } from '../../components/table/table.component';

@Component({
  selector: 'app-tables',
  standalone: true,
  imports: [NavComponent, TableComponent],
  templateUrl: './tables.component.html',
  styleUrl: './tables.component.css'
})
export class TablesComponent {

}
