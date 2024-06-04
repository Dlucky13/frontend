import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '@authorized/models';
import { ApiService } from '@shared/services';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private apiService: ApiService
  ) { }

  getAll(): Observable<Category[]> {
    const url = 'category';
    return this.apiService.get(url)
  }
}
