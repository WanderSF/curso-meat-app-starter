import { ABOUT_ROUTES } from './about.routes';
import { AboutComponent } from './about.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [ AboutComponent ],
    imports: [ RouterModule.forChild(ABOUT_ROUTES) ]
})
export class AboutModule { }
