import { Component } from "@angular/core";
import { customersService } from "../services/customers.service";
import { countriesService } from "../services/countries.service";
import { Observable } from "rxjs-compat";
import "rxjs/Rx";
import { HttpErrorResponse } from "@angular/common/http";
@Component({
    selector:"parallel",
    templateUrl:"./parallel.component.html"
})
export class parallelComponent{
    private result_one:any;
    private result_two:any;
    constructor(private _service1:customersService,
                private _service2:countriesService){}
    ngOnInit(){
        Observable.forkJoin([
            this._service1.getCustomers(),
            this._service2.getCountries()
        ]).subscribe((posRes)=>{
            this.result_one = posRes[0];
            this.result_two = posRes[1];
        },(err:HttpErrorResponse)=>{
            if(err.error instanceof Error){
                console.log("Client Side Error !!!");
            }else{
                console.log("Server Side Error !!!");
            }
        });       
    }
};






