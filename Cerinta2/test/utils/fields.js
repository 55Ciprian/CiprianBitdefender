import { Selector } from 'testcafe';

export default class Elements {
 constructor() {
 	this.name = Selector('div:nth-child(4) > input[type="text"]');
   this.saveMessage = Selector('.toast-message');
 }
}