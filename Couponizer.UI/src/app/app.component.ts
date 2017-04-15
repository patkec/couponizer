import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    public values: string[] = [];

    constructor(private _httpService: Http) { }

    public ngOnInit() {
        this._httpService.get('/api/values').subscribe(values => {
            this.values = values.json() as string[];
        });
    }
}
