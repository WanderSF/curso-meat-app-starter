import { ABOUT_ROUTER } from './about.routes';
import { AboutComponent } from './about.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [ AboutComponent ],
    imports: [ RouterModule.forChild(ABOUT_ROUTER) ]
})
export class AboutModule { }
