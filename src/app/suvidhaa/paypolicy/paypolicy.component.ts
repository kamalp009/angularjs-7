import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute }              from '@angular/router';

import { Address }            from '../../data/formData.model';
import { FormDataService }     from '../../data/formData.service';

@Component({
  selector: 'app-paypolicy',
  templateUrl: './paypolicy.component.html',
  styleUrls: ['./paypolicy.component.css']
})
export class PaypolicyComponent implements OnInit {

  title = 'Where do you live?';
    address: Address;
    form: any;
    
    constructor(private router: Router, private formDataService: FormDataService,private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.address = this.formDataService.getAddress();
        console.log('Address feature loaded!');
    }

    save(form: any): boolean {
        if (!form.valid) {
            return false;
        }
            
        this.formDataService.setAddress(this.address);
        return true;
    }

    goToPrevious(form: any) {
        if (form.valid) { 
          this.formDataService.setAddress(this.address);
        }
        
        this.router.navigate([{ outlets: { sidebar: ['policydetails'] }}],{relativeTo:this.route.parent});
        
    }

    goToNext(form: any) {
        if (this.save(form)) {
            // Navigate to the result page
            this.router.navigate([{ outlets: { sidebar: ['getpolicy'] }}],{relativeTo:this.route.parent});
        }
    }

}
