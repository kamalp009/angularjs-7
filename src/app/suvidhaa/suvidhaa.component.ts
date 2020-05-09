import { Component, OnInit,Input } from '@angular/core';
import { FormDataService } from '../data/formData.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-suvidhaa',
  templateUrl: './suvidhaa.component.html',
  styleUrls: ['./suvidhaa.component.css']
})
export class SuvidhaaComponent implements OnInit {

  title = 'Multi-Step Wizard';
  @Input() formData;

  constructor(private formDataService: FormDataService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
      this.formData = this.formDataService.getFormData();
      console.log(this.title + ' loaded!');
      this.router.navigate([{ outlets: { sidebar: ['basicinfo'] }}],{relativeTo:this.route.parent});
  }

}
