import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restablecercon',
  templateUrl: './restablecercon.page.html',
  styleUrls: ['./restablecercon.page.scss'],
})
export class RestablecerconPage implements OnInit {
  router: any;

  constructor() { }
  irARestablecerCon(){
    this.router.navigateByUrl('/restablecercon');
  }

  ngOnInit() {
  }

}
