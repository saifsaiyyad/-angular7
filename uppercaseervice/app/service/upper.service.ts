import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
@Injectable()
export class upperServece{
constructor(private _http:HttpClient){}
public getUpper(obj:any):any{
    return this._http.post("http://test-routes.herokuapp.com/test/uppercase",obj);
};
};