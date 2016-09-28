import {Component, ChangeDetectionStrategy, OnInit, OnDestroy} from '@angular/core';
import {Vendor} from "../shared/models/vendor.model";
import {VendorCompany} from "../shared/models/vendor-company.model";

import {Observable, Subscription} from "rxjs";
import {VendorService} from "../shared/api-service/vendor/vendor.service";
import {DataCountryService} from '../shared/ng2-service/ng2-country/country.service';
import {DataStateService} from '../shared/ng2-service/ng2-country/state.service';
import {Country} from '../shared/ng2-service/ng2-country/country';
import {State} from '../shared/ng2-service/ng2-country/state';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ImageUpload, ImageResult, ResizeOptions} from '../shared/ng2-service/ng2-imageupload/index';
import {TabsetComponent} from 'ng2-bootstrap/ng2-bootstrap'

declare var $;

@Component({
    moduleId: module.id,
    selector: 'sd-vendor',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'templates/vendor-profile.component.html',
    styleUrls: ['styles/vendor-profile.component.css'],
    providers: [TabsetComponent]
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
    myFormVendorProfile: FormGroup;
    myFormCompanyProfile: FormGroup;

    countries: Country[];
    states: State[];
    citys: State[];

    countrySelected: boolean = false;
    citytype: boolean = false;
    statetype: boolean = false;
    empty: string;
    disabled_country :boolean = true;
    disabled: boolean = false;

    src: string = "";
    resizeOptions: ResizeOptions = {
        resizeMaxHeight: 160,
        resizeMaxWidth: 160
    };

    myFormLogo: string = '';
    fileChosen: boolean = true;


    public options: any = {
        organizations: ['Government', 'Startup', 'University', 'Registered Business', 'Group'],
        year_founded: []
    };

    public tabs: Array<any> = [
        {title: 'Account', content: 'Dynamic content 1', active: true, disabled: false}
    ];

    constructor(private router: Router,
                private _fb: FormBuilder,
                private _vendorService: VendorService,
                private _countryService: DataCountryService,
                private _stateService: DataStateService) {

        this.myFormVendorProfile = this._fb.group({
            name: [''],
            position: [''],
            department: [''],
            countrycode: [''],
            phonenumber: [''],
            linkedin: ['']
        });

        this.myFormCompanyProfile = this._fb.group({
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

        this.myPasswordForm = this._fb.group({
            currentpassword: [''],
            newpassword: [''],
            newpassword_confirmation: ['']
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

    ///////////// Alert /////////////
    alerted: boolean = false;
    messageAlert: string = '';
    typeAlert: string = 'success';

    onAlert(msg: string, type: string){
        this.messageAlert = msg;
        this.typeAlert = type;
        this.alerted = true;
        setTimeout(()=> {
            this.alerted = false;
            this.messageAlert = '';
        },2000);
    }

    onSubmitCompanyProfile(value:Object){

        const vendor_company = new VendorCompany(

            this.myFormCompanyProfile.value.organization_type,
            this.myFormCompanyProfile.value.suite,
            this.myFormCompanyProfile.value.numberstreet,
            this.myFormCompanyProfile.value.city,
            this.myFormCompanyProfile.value.state,
            this.myFormCompanyProfile.value.country,
            this.myFormCompanyProfile.value.zip,
            this.myFormCompanyProfile.value.company_name,
            this.myFormCompanyProfile.value.url,
            this.myFormLogo,
            this.myFormCompanyProfile.value.year,
            this.myFormCompanyProfile.value.mission,
            this.myFormCompanyProfile.value.founded,
            this.myFormCompanyProfile.value.size,
            this.myFormCompanyProfile.value.affiliation,
            this.myFormCompanyProfile.value.companyphone,
            this.myFormCompanyProfile.value.taxid,
            this.myFormCompanyProfile.value.facebook,
            this.myFormCompanyProfile.value.twitter,
            this.myFormCompanyProfile.value.line
        );

        console.log(vendor_company);
        this.onAlert('Update Vendor Company Successfully!', 'success');
        this.Cancle();

        // this._vendorService.updateVendorCompany(vendor_company)
        //     .subscribe((res) => {
        //             console.log(vendor_company);
        //             this.onAlert('Update Vendor Company Successfully!', 'success');
        //             this.Cancle();
        //         },
        //         error => {
        //             console.log(error);
        //             this.onAlert('Update Vendor Company Failed!', 'danger');
        //             this.Cancle();
        //         }
        //     );

    }


    onSubmitVendorProfile(value:Object){
        const vendor = new Vendor(
            this.myFormVendorProfile.value.name,
            this.myFormVendorProfile.value.position,
            this.myFormVendorProfile.value.department,
            this.myFormVendorProfile.value.countrycode,
            this.myFormVendorProfile.value.phonenumber,
            this.myFormVendorProfile.value.linkedin
        );

        this.onAlert('Update Vendor Profile  Successfully', 'success');
        this.Cancle();

        this._vendorService.updateVendorProfile(vendor)
            .subscribe((res) => {
                console.log(res);
                },
                error => this.errorMessage = <any>error);
    }


    fileChangeLogo(imageResult: ImageResult) {
        this.myFormLogo = imageResult.resized.dataURL;
        this.fileChosen = true;
    }

    //Reset Password
    myPasswordForm: FormGroup;
    resetPassword: boolean = false;

    onSubmitPassword(value: Object) {
        //console.log(value);
        this.resetPassword = false;
        this.myPasswordForm.reset();


        this.onAlert('Reset Password Account Successfully', 'success');
        // this._vendorService.resetPasswordAccount(value)
        //     .subscribe((res) => {
        //             this.resetPassword = true;
        //             this.onAlert('Reset Password Account Successfully', 'success');
        //         },
        //         error => {
        //             this.errorMessage = <any>error;
        //             this.onAlert('Reset Password Account Failed', 'danger');
        //         });
    }


    editMode: boolean = false;

    onEdit() {
        this.editMode = true;
        this.disabled = true;
    }

    Cancle() {
            this.editMode = false;
            this.disabled = false;

    }


    goToEdit() {
        this.router.navigate(['/vendor/profile/edit']);
    }



}
