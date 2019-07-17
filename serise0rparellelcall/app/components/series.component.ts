import { Component } from "@angular/core";
import { customersService } from "../services/customers.service";
import { countriesService } from "../services/countries.service";
import { HttpErrorResponse } from "@angular/common/http";
@Component({
    selector:"series",
    templateUrl:"./series.component.html"
}) 
export class seriesComponent{
    private result_one:any;
    private result_two:any;
    constructor(private _service1:customersService,
                private _service2:countriesService){} 
    ngOnInit(){
        this._service1.getCustomers().subscribe((posRes)=>{
            this.result_one = posRes;
        /***************************************/
        this._service2.getCountries().subscribe((res)=>{
            this.result_two = res;
        },this._errorCallBack);
        /***************************************/   
        },this._errorCallBack);
    };
    _errorCallBack = (err:HttpErrorResponse)=>{
        if(err.error instanceof Error){
            console.log("Client Side Error !!!");
        }else{
            console.log("Server Side Error !!!");
        }
    };
};






