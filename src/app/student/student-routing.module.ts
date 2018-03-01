import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListPaintCategoryItemsComponent } from './list-paint-category-items/list-paint-category-items.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ProductsRangeComponent } from './products-range/products-range.component';

@NgModule({
    imports: [RouterModule.forChild([
        {
            path: '',
            component: ProductsRangeComponent
        }, {
            path: 'aboutus',
            component: AboutusComponent
        }, {
            path: 'paintcategorylist',
            component: ListPaintCategoryItemsComponent
        }, {
            path: 'productsrange',
            component: ProductsRangeComponent
        }
    ])],
    exports: [RouterModule],
    declarations: [],
    providers: []
})

export class StudentRoutingModule { }
