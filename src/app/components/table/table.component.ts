import { Component,  } from '@angular/core';

interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  first: number = 0;
  checked: boolean = false;
  rows: number = 10;

  onPageChange(event: any) {
      this.first = event.first;
      this.rows = event.rows;
  }
value=""
  constructor() {

  
}
users:any[]=[
  {
    id: '1',
  
    name: 'أحمد محمود',
   
    ticketNumber: 'C-101',
    price: 25,
    
    cinimas: '...سينما مصر , مول العرب , برج الأطنان , سرايا القبة ',
    numOfPersons: 1,
    timesOfPay: 1,
    personImage:'onyamalimba.png'
 
},
{
  id: '2',
  
  name: 'محمد الغريب',
 
  ticketNumber: 'C-102',
  price: 30,
  
  cinimas: '...سينما مصر , مول العرب , برج الأطنان , سرايا القبة ',
  numOfPersons: 1,
  timesOfPay: 1,
  personImage:'onyamalimba.png'
},
{
  id: '3',
  
  name: 'محمد الغريب',
 
  ticketNumber: 'C-103',
  price: 45,
  
  cinimas: '...سينما مصر , مول العرب , برج الأطنان , سرايا القبة ',
  numOfPersons: 1,
  timesOfPay: 1,
  label:'ma'

},
{
  id: '4',
  
  name: 'محمد الغريب',
 
  ticketNumber: 'C-103',
  price: 45,
  
  cinimas: '...سينما مصر , مول العرب , برج الأطنان , سرايا القبة ',
  numOfPersons: 1,
  timesOfPay: 1,
   label:'ma'
  
}

]


}
