import { Component, OnInit } from '@angular/core';

import { ExitGuard, OnExit } from 'src/app/guards/exit.guard';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnExit {

  constructor() { }

  onExit() {
    const rta = confirm('logica desde component, estas seguro de')
    return rta
  }

}
