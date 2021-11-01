import TestData from "./utils/testdata"
import Buttons from "./utils/buttons"
import Dropdowns from "./utils/dropdowns"
import Fields from "./utils/fields"
import Methods from "./utils/methods"
import { Selector, t, ClientFunction } from 'testcafe';

const testdata = new TestData;
const buttons = new Buttons;
const dropdowns = new Dropdowns;
const fields = new Fields;
const methods = new Methods;

fixture ` Tests`
.page(testdata.environment)
.beforeEach( async t => {
});


test('Create report' , async t => {
	//create a new report using only Details information
	await methods.createReport(testdata.reportName, testdata.typeOption, testdata.companyOption, testdata.save);
	//make an assertion to check that report was successfully created 
	await t.expect(fields.saveMessage.withText(testdata.savedMessage).exists).ok();
});