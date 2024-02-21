import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student, Year } from '../students.model'
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent {
  msgNotValid: boolean = false;
  studentForm: FormGroup = new FormGroup({});
  currentYear = Year;
  private _student?: Student;

  public get student(): Student | undefined {
    return this._student;
  }

  @Input()
  public set student(value: Student | undefined) {
    this._student = value;
    if (value) {
      this.studentForm = new FormGroup({
        "id": new FormControl(this._student?.id),
        "name": new FormControl(this._student?.name, [Validators.minLength(3),Validators.required]),
        "tel": new FormControl(this._student?.tel, Validators.minLength(9)),
        "year": new FormControl(this._student?.year, Validators.required),
        "specialization": new FormControl(this._student?.specialization, Validators.required),
        "active": new FormControl(this._student?.active),
        "address": new FormControl(this._student?.adress),
        "leavingDate": new FormControl(this._student?.dateOfLive),
        "avgMarks": new FormControl(this._student?.avgMarks)
      });
    }
  }

  @Output()
  onSaveStudent: EventEmitter<Student> = new EventEmitter();

  //onSaveStudent: EventEmitter<Student>=new EventEmitter();


  saveNewStudent = () => {
    if (this.studentForm.valid) {
      this.onSaveStudent.emit(this.studentForm.value);
    }
    else {
      this.msgNotValid=true;
      setTimeout(() => {
        this.msgNotValid=false;

      }, 4000);
    }
  }

}
