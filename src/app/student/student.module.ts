import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { AboutusComponent } from './aboutus/aboutus.component';
import { StudentRoutingModule } from './student-routing.module';
import { ListPaintCategoryItemsComponent } from './list-paint-category-items/list-paint-category-items.component';
import { StudentComponent } from './student.component';
import { ProductsRangeComponent } from './products-range/products-range.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    SharedModule,
    StudentRoutingModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBZib4Lvp0g1L8eskVBFJ0SEbnENB6cJ-g'
    })
  ],
  declarations: [AboutusComponent, ListPaintCategoryItemsComponent, ProductsRangeComponent, ContactusComponent],
  exports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class StudentModule { }
