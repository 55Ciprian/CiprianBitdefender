import TestData from "./testdata"
import Buttons from "./buttons"
import Dropdowns from "./dropdowns"
import Fields from "./fields"
import { Selector, t } from 'testcafe';

const testdata = new TestData;
const buttons = new Buttons;
const dropdowns = new Dropdowns;
const fields = new Fields;

export default class Methods {
	async createReport(name, typeOption, companyOption, buttonOption) {
		await t
			.click(buttons.createReport)
			.click(dropdowns.reportType)
			.click(dropdowns.reportTypeOption.withText(typeOption))
			.click(dropdowns.reportSelectCompany)
			.click(dropdowns.reportSelectCompanyOption.withText(companyOption))
			.typeText(fields.name, name)
			.click(buttons.footerButton.withText(buttonOption));
	}
}