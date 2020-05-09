import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute }              from '@angular/router';

import { Personal }            from '../../data/formData.model';
import { FormDataService }     from '../../data/formData.service';

@Component({
  selector: 'app-basicinfo',
  templateUrl: './basicinfo.component.html',
  styleUrls: ['./basicinfo.component.css']
})
export class BasicinfoComponent implements OnInit {

    title = 'Please tell us about yourself.';
    personal: Personal;
    form: any;
    
    constructor(private router: Router, private formDataService: FormDataService,private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.personal = this.formDataService.getPersonal();
        console.log('Personal feature loaded!');
    }

    save(form: any): boolean {
        if (!form.valid) {
            return false;
        }
            
        this.formDataService.setPersonal(this.personal);
        return true;
    }

    goToNext(form: any) {
        if (this.save(form)) {
            console.log("route--",this.route.parent)
            // Navigate to the work page
            this.router.navigate([{ outlets: { sidebar: ['policydetails'] }}],{relativeTo:this.route.parent});
            //this.router.navigate([{ outlets: {sidebar: ['basicinfo'] } }]);
            //this.router.navigate(['/work']);
        }
    }

}
