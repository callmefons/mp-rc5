import {Component, OnInit, OnDestroy} from '@angular/core';
import {AuthService} from "../shared/api-service/auth/auth.service";
import {storage} from "../shared/helpers/storage";
import {Router} from "@angular/router";
import {User} from "../shared/models/user.model";
import {Validators, FormGroup, FormBuilder,FormControl} from "@angular/forms";
import {Country} from "../shared/ng2-service/ng2-country/country";
import {State} from "../shared/ng2-service/ng2-country/state";
import {emailValidator, passwordValidator} from "../shared/helpers/validators";
import {Subscription, Observable} from "rxjs";
import {DataCountryService} from "../shared/ng2-service/ng2-country/country.service";
import {DataStateService} from "../shared/ng2-service/ng2-country/state.service";
import {ValidationService} from '../shared/validation/validation.service';

@Component({
  moduleId: module.id,
  selector: 'sd-admin',
  templateUrl: 'templates/auth-register.component.html',
  styleUrls: ['styles/auth-register.component.css'],
})

export class AuthRegisterComponent implements OnInit, OnDestroy {

  sub:Subscription;
  auth$:Observable<any>;

  disabled:boolean = true;

  errorMessage:string;
  myForm:FormGroup;
  user:User;
  fCaptchaPassed:boolean = null;
  countries:Country[];
  states:State[];
  citys:State[];

  countrySelected:boolean = false;
  citytype:boolean = false;
  statetype:boolean = false;

  constructor(private _fb:FormBuilder,
              private _countryService:DataCountryService,
              private _stateService:DataStateService,
              private _authService:AuthService,
              private _router:Router) {

  }

  ngOnInit() {

    // let password = new FormControl('');

    this.getCountry();
    this.myForm = this._fb.group({
      personal_name: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, ValidationService.emailValidator])],
      password: ['', Validators.compose([Validators.required, ValidationService.passwordValidator])],
      password_confirmation: ['',Validators.compose([Validators.required, ValidationService.passwordValidator])],
      company_name: ['', Validators.required],
      country: [this.countries[0].name, Validators.required],
      state: [''],
      city: [''],
      role:['customer']
    });
  }

  ngOnDestroy(){
    if(this.sub)this.sub.unsubscribe();
  }

  getCountry() {
    this.countries = this._countryService.getCountries();
  }

  onSubmit(value:Object) {
    this.auth$ = this._authService.signup(value);
    this.sub = this.auth$.subscribe((res) => {
        },
        error => this.errorMessage = <any>error);
  }

  onSelectCountry(country_name:string) {
    this.countrySelected = true;

    if (country_name == 'Thailand') {
      this.citys = this._stateService.getStates().filter(item=> item.country_name == country_name)
      this.citytype = true;
      this.statetype = false;
    }
    if (country_name == 'United States') {
      this.states = this._stateService.getStates().filter(item=> item.country_name == country_name)
      this.statetype = true;
      this.citytype = false;
    }
    if (country_name !== 'United States' && country_name !== 'Thailand') {
      this.statetype = false;
      this.citytype = false;
    }

  }

  goToLogin() {
    this._router.navigate(['']);
  }


  handleCorrectCaptcha(event:any) {
    return this.fCaptchaPassed = true;
  }

}
