import { Injectable } from '@angular/core';
import {
    CanActivate, Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    CanLoad, Route,ActivatedRoute
} from '@angular/router';

import { WorkflowService } from './workflow.service';

@Injectable()
export class WorkflowGuard implements CanActivate {
    constructor(private router: Router, private workflowService: WorkflowService,private route: ActivatedRoute) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let path: string = route.routeConfig.path;

        return this.verifyWorkFlow(path);
    }

    verifyWorkFlow(path) : boolean {
        console.log("Entered '" + path + "' path.");

        // If any of the previous steps is invalid, go back to the first invalid step
        let firstPath = this.workflowService.getFirstInvalidStep(path);
        if (firstPath.length > 0) {
            console.log("Redirected to '" + firstPath + "' path which it is the first invalid step.");
            //let url = `/${firstPath}`;
            this.router.navigate([{ outlets: { sidebar: [firstPath] }}],{relativeTo:this.route.parent});
            //this.router.navigate([{outlets:{sidebar:[firstPath]}}]);
            return false;
        };

        return true;
    }
}


