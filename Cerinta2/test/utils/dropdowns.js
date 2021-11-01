import { Selector } from 'testcafe';

export default class Elements {
 constructor() {
 	this.reportType = Selector('input#mat-input-0');
    this.reportTypeOption = Selector('mat-option#mat-option-0 > span');
    this.reportSelectCompany = Selector('input#mat-input-1');
    this.reportSelectCompanyOption = Selector('mat-option#mat-option-1 > span');
 }
}