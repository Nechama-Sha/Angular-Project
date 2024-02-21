import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { Appcomponent } from "./app.component";
import { StudentsModule } from "./students/students.module";
import { Route,RouterModule } from "@angular/router";
import { UsersComponent } from "./users/users.component";
import { SecondComponent } from "./students/second/second.component";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const APP_ROUTES:Route[]=[
    {path: "",component:HomeComponent,pathMatch:"full"},
    {path: "users",component:UsersComponent},
    {path: "students",component:SecondComponent},
    {path: "**",component:PageNotFoundComponent},
];
@NgModule({
    declarations:[Appcomponent, PageNotFoundComponent,HomeComponent,UsersComponent],
    providers:[],
    imports:[BrowserModule,StudentsModule,RouterModule.forRoot(APP_ROUTES)],
    bootstrap:[Appcomponent]
})

export class AppModule {

}