import { Selector } from 'testcafe';

export default class Elements {
 constructor() {
 	this.createReport = Selector('a > span.mat-button-wrapper');
 	this.footerButton = Selector('footer button .mat-button-wrapper');
 }
}