import {Component} from "@angular/core";
import { HttpErrorResponse} from "@angular/common/http";
import { upperServece} from "../service/upper.service";
@Component({
    selector:"upper",
    templateUrl:"upper.component.html"
})
export class upperComponent{
    private result:any;
    constructor(private _service:upperServece){}
    public clickMe(obj:any):any{
        this._service.getUpper(obj).subscribe(
            (posRes)=>{this.result=posRes},
            (err:HttpErrorResponse)=>{
                if (err.error instanceof Error)
                {
                    console.log("client side error");
                }
                else{
                    console.log("server side error");
                }
            });
    };
};