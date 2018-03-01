import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { AboutusComponent } from './aboutus/aboutus.component';
import { StudentRoutingModule } from './student-routing.module';
import { ListPaintCategoryItemsComponent } from './list-paint-category-items/list-paint-category-items.component';
import { StudentComponent } from './student.component';
import { ProductsRangeComponent } from './products-range/products-range.component';

@NgModule({
  imports: [
    SharedModule,
    StudentRoutingModule,
    FormsModule
  ],
  declarations: [ AboutusComponent, ListPaintCategoryItemsComponent, ProductsRangeComponent],
  exports: []
})

export class StudentModule { }
