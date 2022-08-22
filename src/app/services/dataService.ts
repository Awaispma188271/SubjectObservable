import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { BehaviorSubject} from "rxjs/internal/BehaviorSubject";

@Injectable()
export class DataService{
    private $userNameSubject = new Subject<string>();

    public attachUserName(): Observable<string> {
        return this.$userNameSubject.asObservable();
    }
    

    public notifyUsernameChange(newValue: string){
        this.$userNameSubject.next(newValue);
    }

   
}