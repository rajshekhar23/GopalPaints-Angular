import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListPaintCategoryItemsComponent } from './list-paint-category-items/list-paint-category-items.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ProductsRangeComponent } from './products-range/products-range.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PolicyComponent } from '../policy/policy.component';

@NgModule({
    imports: [RouterModule.forChild([
        {
            path: '',
            component: AboutusComponent
        }, {
            path: 'aboutus',
            component: AboutusComponent
        }, {
            path: 'paintcategorylist',
            component: ListPaintCategoryItemsComponent
        }, {
            path: 'productsrange',
            component: ProductsRangeComponent
        }, {
            path: 'contactus',
            component: ContactusComponent
        },
        {
            path: 'policy',
            component: PolicyComponent
        }
    ])],
    exports: [RouterModule],
    declarations: [],
    providers: []
})

export class StudentRoutingModule { }
