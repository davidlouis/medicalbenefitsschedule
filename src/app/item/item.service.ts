import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';


import 'rxjs/add/operator/toPromise';


@Injectable()
export class ItemService {

    items: any;
    xmlurl = "/app/data/201702-XML.xml"
    jsonurl = "/app/data/201702-JSON.json"
    constructor(private http: Http) {  }

    cacheItems() {
        this.getItems().then(items => this.items = items);
    }

    getItems(): Promise<any> {

        return this.http.get(this.jsonurl)
            .toPromise()
            .then(response => response.json().data as any)
            .catch(this.handleError);

    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }


}