import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { SecondComponent } from './second/second.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { StudentService } from './student.service';



@NgModule({
  declarations: [SecondComponent,StudentDetailsComponent],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule
  ],
  exports:[SecondComponent],
  providers:[StudentService,]
})
export class StudentsModule { }
