import { AsyncPipe, JsonPipe, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { Category } from '@authorized/models';
import { CategoryService } from '@authorized/services';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [MatListModule, AsyncPipe, NgFor],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss'
})
export class SideMenuComponent {

  categories$: Observable<Category[]> = this.categoryService.getAll()

  constructor(private categoryService: CategoryService) { }

}
