import { SelectionModel } from "@angular/cdk/collections";
import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatTableDataSource } from "@angular/material/table";


  export interface TimeSlot {
    position: number;
    day: string;
    fromTime: string;
    toTime: string;
  }

  const ELEMENT_DATA: TimeSlot[] = [
    {position: 1,day: 'Monday', fromTime: '09:00:00', toTime: '09:15:00'},
    {position: 2,day: 'Monday', fromTime: '09:15:00', toTime: '09:30:00'},
    {position: 3,day: 'Monday', fromTime: '09:30:00', toTime: '09:45:00'},
    {position: 4,day: 'Monday', fromTime: '09:45:00', toTime: '10:00:00'},
    {position: 5,day: 'Monday', fromTime: '10:00:00', toTime: '10:15:00'},
    {position: 6,day: 'Monday', fromTime: '10:15:00', toTime: '10:30:00'},
    {position: 7,day: 'Monday', fromTime: '10:30:00', toTime: '10:45:00'},
    {position: 8,day: 'Monday', fromTime: '10:45:00', toTime: '11:00:00'}

  ]

  
@Component({
    selector: 'app-new-practioner',
    templateUrl: './new-practioner.component.html',
    styleUrls: ['./new-practioner.component.css']
})

export class NewPractionerComponent implements OnInit, AfterViewInit {
  practionerForm!:FormGroup;
    isRowSelected!:boolean;
    displayedColumns: string[] = ['select', 'position', 'day', 'fromTime', 'toTime'];
    data = Object.assign( ELEMENT_DATA);
  dataSource = new MatTableDataSource<TimeSlot>(ELEMENT_DATA);
  selection = new SelectionModel<TimeSlot>(true, []);

  days = [
    {value:'sunday',viewValue:'Sunday'},
    {value:'monday',viewValue:'Monday'},
    {value:'tuesday',viewValue:'Tuesday'},
    {value:'wednesday',viewValue:'Wednesday'},
    {value:'thursday',viewValue:'Thursday'},
    {value:'friday',viewValue:'Friday'},
    {value:'satuarday',viewValue:'Satuarday'}
  ]

  constructor(private _cd:ChangeDetectorRef){
  }

   ngOnInit(): void {
     this.practionerForm = new FormGroup({
      practioner: new FormGroup({
        scheduleName: new FormControl('',Validators.required),
        disabled: new FormControl(''),
        videoConferencing: new FormControl('')
      })
     })
   }

  ngAfterViewInit(): void {
      this._cd.detectChanges();
  }
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  removeSelectedRows() {
    this.selection.selected.forEach(item => {
     let index: number = this.data.findIndex((d: TimeSlot) => d === item);
     console.log(this.data.findIndex((d: TimeSlot) => d === item));
     this.dataSource.data.splice(index,1);

     this.dataSource = new MatTableDataSource<TimeSlot>(this.dataSource.data);
   });
   this.selection = new SelectionModel<TimeSlot>(true, []);
 }
 
 getScheduleNameError(){
   return this.practionerForm.controls['practioner'];
 }
 

 onSubmit(){
    console.log(this.practionerForm.value);
 }
}