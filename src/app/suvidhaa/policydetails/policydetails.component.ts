import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute }              from '@angular/router';

import { Personal }            from '../../data/formData.model';
import { FormDataService }     from '../../data/formData.service';

@Component({
  selector: 'app-policydetails',
  templateUrl: './policydetails.component.html',
  styleUrls: ['./policydetails.component.css']
})
export class PolicydetailsComponent implements OnInit {

    title = 'What do you do?';
    workType: string;
    form: any;
    
    constructor(private router: Router, private formDataService: FormDataService,private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.workType = this.formDataService.getWork();
        console.log('Work feature loaded!');
    }

    save(form: any): boolean {
        if (!form.valid) {
            return false;
        }
        
        this.formDataService.setWork(this.workType);
        return true;
    }

    goToPrevious(form: any) {
        if (form.valid) {
            this.formDataService.setWork(this.workType);
        }
          
        this.router.navigate([{ outlets: { sidebar: ['basicinfo'] }}],{relativeTo:this.route.parent});
    }

    goToNext(form: any) {
        if (this.save(form)) {
            // Navigate to the address page
            //this.router.navigate(['/address']);
            this.router.navigate([{ outlets: { sidebar: ['paypolicy'] }}],{relativeTo:this.route.parent});
        }
    }

}
