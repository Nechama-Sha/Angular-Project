import { Component } from '@angular/core';
import { Student } from '../students.model';
//import { promiseStudents } from '../promise.student.list.service';
import { Observable, Subscription, from } from 'rxjs';
import { map } from "rxjs/operators";
import { StudentService } from '../student.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent {

  studentList: Student[] = [];
  names$: Observable<string> | undefined;
  sub?: Subscription;
  names2$: Observable<string | undefined> | undefined;
  sub2?: Subscription;


  // constructor(private studentServise: promiseStudents) {
  //   studentServise.getAllStudentsAsync()
  //     .then((list: Student[]) => {
  //       this.studentList = list;
  //first way
  // this.names$ = new Observable((ob) => {
  //   this.studentList.forEach((s) => {
  //     ob.next(s.name);
  //   })

  //         this.names2$ = from(this.studentList).pipe(map(s => s.name));

  //         this.names2$.subscribe(val => {
  //           console.log(val);
  //         })
  //       })
  // //first way
  //       // this.sub = this.names$.subscribe((name) => {
  //       //   console.log(name);
  //       // })
  //       // })
  //       .catch((err: any) => { console.log(err); });

  //   };

  constructor(private studentService: StudentService) {

    studentService.getStudentFromServer().subscribe(data => { this.studentList = data });

  }
  selectedStudent?: Student;
  savedSuccessfully: boolean = false;

  editStudent = (studentToEdit: Student) => {
    this.selectedStudent = studentToEdit;
  }

  // deleteStudent = (id: number) => {
  //   const studentToDelete = this.studentList.find(x => x.id == id);
  //   if (studentToDelete) {
  //     const index = this.studentList.indexOf(studentToDelete);
  //     this.studentList.splice(index, 1);
  //   }
  // }
  deleteInServer=(id:number)=>{
    this.studentService.deleteFromServer(id);
    this.studentService.getStudentFromServer().subscribe(data => { this.studentList = data });

  }

  addNewStudent = () => {
    let id = this.studentList[this.studentList.length - 1].id + 1;
    this.selectedStudent = { id: id, name: "someone", adress: "Rashi 20", tel: "053-1472588", active: true, avgMarks: 100 };
  }

    saveStudentToList = (studentToSave: Student) => {
    // if (studentToSave.id == 0) {
    //   studentToSave.id = this.studentList.length + 1;
    //   this.studentList.push(studentToSave);
    // }

    let studentToUpdate = this.studentList.find(x => x.id == studentToSave.id);
    if (studentToUpdate) {
      const index = this.studentList.indexOf(studentToUpdate);
      //this.studentList[index] = studentToSave;
      
    }
    else {
      this.studentList.push(studentToSave);
    }

    this.selectedStudent = undefined;
    this.savedSuccessfully = true;
    setTimeout(() => {
      this.savedSuccessfully = false;
    }, 3000);
  }


}


