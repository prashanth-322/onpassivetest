import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CommonserviceService } from '../../commonservice.service';
import { DatePipe } from '@angular/common';



@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.css']
})
export class AuditComponent implements OnInit {
  audit_list = [
    {
        'name':'Prashanth',
        'Role' : 'MEAN Stack developer',
        'rating': '4',
        'Date':'09/01/2021 13:08:23'
    },
    {
        'name':'Ravi',
        'Role' : 'Angular',
        'rating': '3',
        'Date':'06/01/2021 10:08:23'
    },
    {
        'name':'Test1',
        'Role' : 'HR',
        'rating': '4',
        'Date':'03/12/2020 03:08:23'
    },
    {
        'name':'Test2',
        'Role' : 'Java Developer',
        'rating': '2',
        'Date':'09/01/2021 13:08:23'
    },
    {
        'name':'Test3',
        'Role' : 'Digital Marketing',
        'rating': '1',
        'Date':'09/01/2021 04:08:23'
    },
    ]
    date_format : any;
    page = 1;
    pageSize = 2;
    totalItems : any;
    public pageLimitAndIndex = {limit: 20, index: 0};
// p: Number = 1;
totalMemberCount: Number = 0;
p: number[] = [];

  constructor(private route:Router, private cms :CommonserviceService, private date_pipe:DatePipe) { }

  ngOnInit() {
    // console.log(this.audit_list)
    this.totalItems = this.audit_list.length;
    this.date_format = '12';
  }

  back(){
    this.route.navigate(['/dashboard']);
  }


  dateFilter(){    
    console.log("dateFilter")
    console.log(this.date_format)
    let format = 'DD/MM/YYYY hh:mm:ss';
    if(this.date_format == '24'){
      format = 'DD/MM/YYYY HH:MM:SS'
    }
    this.audit_list.map(item => {
      item.Date = this.date_pipe.transform(new Date(item.Date),format);
      return item;
    });
  }


  pageChanged (page) {
    console.log("page", page);
    this.pageLimitAndIndex.index = (page - 1);
    // this.paginationLoader = true;
    // this.getPaidMemberDetail(this.pageLimitAndIndex);
  }

}
