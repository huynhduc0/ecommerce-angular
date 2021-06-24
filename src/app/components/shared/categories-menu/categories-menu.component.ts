import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Categories } from './categories.model';
import { CategoriesService } from  './categories.service'

@Component({
  selector: 'app-categories-menu',
  templateUrl: './categories-menu.component.html',
  styleUrls: ['./categories-menu.component.sass']
})
export class CategoriesMenuComponent implements OnInit {

 public categories: Categories[];
 constructor(private  categoriesService: CategoriesService) {
  // console.log("jjjj",this.baseMediaUrl)
 }
  ngOnInit() {
    // console.log("INIT` VIEW");
    this.categoriesService.getCategories().subscribe((cate) => {
      this.categories = cate

      // console.log("!@213123");
      // for (let i of this.categories){
      //   console.log(i.name);
      // }
    });

  }
}
