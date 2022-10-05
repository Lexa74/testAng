import { Component, OnInit } from '@angular/core';
const dataJson = require('../../jsonviewer.json') ;

@Component({
    selector: 'app-home',
    templateUrl: `./home.html`,
    
})
export class HomeComponent implements OnInit {
    dataJson = dataJson;
    income = 0;
    investments = 0;
    outcome = 0;
    loans = 0;
    ngOnInit() {
        dataJson.data.forEach(element => {
            if(element.type === "loan") {
                this.loans++; 
            }
            if(element.type === "income") {
                this.income++; 
            }
            if(element.type === "investment") {
                this.investments++; 
            }
            if(element.type === "outcome") {
                this.outcome++; 
            }
        });
    }
}