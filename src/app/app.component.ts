import { Component } from '@angular/core';
const dataJson = require('../../jsonviewer.json') ;

@Component({
    selector: 'my-app',
    templateUrl: `./app.html`,
    styleUrls: ['./app.sass']
})
export class AppComponent {
    name = 'User';
    dataJson = dataJson;
}