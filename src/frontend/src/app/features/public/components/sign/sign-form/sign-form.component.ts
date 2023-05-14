import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {IpGeolocationService} from "../../../../../api/services/ip-geolocation";

@Component({
  selector: 'iar-sign-form',
  templateUrl: './sign-form.component.html',
  styleUrls: ['./sign-form.component.scss']
})
export class SignFormComponent implements OnInit {

  formGroup = new FormGroup({
    phone: new FormControl<string | null>(null),
    email: new FormControl<string | null>(null, [Validators.required, Validators.email]),
    name: new FormControl<string | null>(null),
    country: new FormControl<string | null>(null),
    birthdate: new FormControl<Date | null>(null),
    level: new FormControl<number>(5),
  });

  constructor() {
  }

  ngOnInit(): void {
  }
}
