import {Component, OnInit, OnDestroy} from '@angular/core';
import {Vendor} from "../shared/models/vendor.model";
import {Observable, Subscription} from "rxjs";
import {VendorService} from "../shared/api-service/vendor/vendor.service";
import {DataCountryService} from '../shared/ng2-service/ng2-country/country.service';
import {DataStateService} from '../shared/ng2-service/ng2-country/state.service';
import {Country} from '../shared/ng2-service/ng2-country/country';
import {State} from '../shared/ng2-service/ng2-country/state';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ImageUpload, ImageResult, ResizeOptions} from '../shared/ng2-service/ng2-imageupload/index';


@Component({
    moduleId: module.id,
    selector: 'sd-vendor',
    templateUrl: 'templates/vendor-profile.component.html',
    styleUrls: ['styles/vendor-profile.component.css'],
})

export class VendorProfileComponent implements OnInit, OnDestroy {

    errorMessage: string;
    developer: Vendor[];
    vendor_profile: Vendor[];
    vendor_profile$: Observable<any>;
    sub: Subscription;

    vendor_organization: Vendor[];
    vendor_organization$: Observable<any>;
    sub_organization: Subscription;

    loading_profile: boolean = true;
    loading_organization: boolean = false;

    myForm: FormGroup;

    countries: Country[];
    states: State[];
    citys: State[];

    countrySelected: boolean = false;
    citytype: boolean = false;
    statetype: boolean = false;
    empty: string;
    disabled: boolean = true;

    src: string = "";
    resizeOptions: ResizeOptions = {
        resizeMaxHeight: 160,
        resizeMaxWidth: 160
    };

    myFormLogo:string = '';
    fileChosen:boolean = true;


    public options: any = {
        organizations: ['Government', 'Startup', 'University', 'Registered Business', 'Group'],
        year_founded: []
    };

    constructor(private router: Router,
                private _fb: FormBuilder,
                private _vendorService: VendorService,
                private _countryService: DataCountryService,
                private _stateService: DataStateService) {

        this.myForm = this._fb.group({
            name: [''],
            position: [''],
            department: [''],
            countrycode: [''],
            phonenumber: [''],
            linkedin: [''],
            organization_type: [''],
            suite: [''],
            numberstreet: [''],
            city: [''],
            state: [''],
            country: [''],
            zip: [''],
            company_name: [''],
            url: [''],
            logo: [''],
            year: [''],
            mission: [''],
            founded: [''],
            size: [''],
            affiliation: [''],
            companyphone: [''],
            taxid: [''],
            facebook: [''],
            twitter: [''],
            line: ['']
        });


        this.myPasswordForm= this._fb.group({
            currentpassword:[''],
            newpassword:[''],
            newpassword_confirmation:['']
        });

        this.countries = this._countryService.getCountries();

    }

    ngOnInit() {
        this.getDeveloperProfile();
        this.getOrganizationProfile();
        this.createYears();
    }

    ngOnDestroy() {
        if (this.sub)this.sub.unsubscribe();
        if (this.sub_organization)this.sub_organization.unsubscribe();
    }

    createYears() {
        let year = new Date().getFullYear();
        for (let i = year; i >= 1950; i--) this.options['year_founded'].push(i);
    }


    getDeveloperProfile() {
        this.vendor_profile$ = this._vendorService.getVendorProfile();
        this.sub = this.vendor_profile$
            .subscribe(
                vendor => {
                    this.vendor_profile = vendor;
                    this.loading_profile = false;
                },
                error => this.errorMessage = <any>error
            );
    }

    getOrganizationProfile() {
        this.vendor_organization$ = this._vendorService.getOrganizationProfile();
        this.sub = this.vendor_organization$.subscribe(
            vendor => {
                this.vendor_organization = vendor;
                this.myFormLogo = vendor[0].logo;
                this.onSelectCountry(vendor.country);
                this.loading_organization = false;
            },
            error => this.errorMessage = <any>error
        );
    }

    onSelectCountry(country_name: string) {
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


    onSubmit(value: Object) {
        const vendor = new Vendor(
            this.myForm.value.name,
            this.myForm.value.position,
            this.myForm.value.department,
            this.myForm.value.countrycode,
            this.myForm.value.phonenumber,
            this.myForm.value.linkedin,
            this.myForm.value.organization_type,
            this.myForm.value.suite,
            this.myForm.value.numberstreet,
            this.myForm.value.city,
            this.myForm.value.state,
            this.myForm.value.country,
            this.myForm.value.zip,
            this.myForm.value.company_name,
            this.myForm.value.url,
            this.myFormLogo,
            this.myForm.value.year,
            this.myForm.value.mission,
            this.myForm.value.founded,
            this.myForm.value.size,
            this.myForm.value.affiliation,
            this.myForm.value.companyphone,
            this.myForm.value.taxid,
            this.myForm.value.facebook,
            this.myForm.value.twitter,
            this.myForm.value.line
        );

        this._vendorService.updateVendorProfile(vendor)
            .subscribe((res) => {
                    this.editMode = false;
                },
                error => this.errorMessage = <any>error);
    }

    fileChangeLogo(imageResult: ImageResult) {
        this.myFormLogo = imageResult.resized.dataURL;
        this.fileChosen = true;
    }

    //Reset Password
    myPasswordForm: FormGroup;
    resetPassword:boolean = false;
    onSubmitPassword(value: Object) {

        this.resetPassword = false;

        this._vendorService.resetPasswordAccount(value)
            .subscribe((res) => {
                    this.resetPassword = true;
                },
                error => this.errorMessage = <any>error);
    }


    editMode: boolean = false;

    onEdit() {
        this.editMode = true;
    }

    Cancle() {
        this.editMode = false;
    }


    goToEdit() {
        this.router.navigate(['/vendor/profile/edit']);
    }
}
