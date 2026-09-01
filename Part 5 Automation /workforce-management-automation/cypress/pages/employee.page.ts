export class EmployeePage {
  // Elements
  get addEmployeeBtn() { return cy.getByTestId('add-employee-btn'); }
  get firstNameInput() { return cy.getByTestId('first-name-input'); }
  get lastNameInput() { return cy.getByTestId('last-name-input'); }
  get emailInput() { return cy.getByTestId('email-input'); }
  get positionInput() { return cy.getByTestId('position-input'); }
  get departmentInput() { return cy.getByTestId('department-input'); }
  get submitBtn() { return cy.getByTestId('submit-employee-btn'); }
  get successMessage() { return cy.getByTestId('success-message'); }
  get errorMessage() { return cy.getByTestId('error-message'); }

  // Methods
  visit() {
    cy.visit('/employees');
    return this;
  }

  addEmployee(employee) {
    this.addEmployeeBtn.click();
    this.firstNameInput.type(employee.firstName);
    this.lastNameInput.type(employee.lastName);
    this.emailInput.type(employee.email);
    this.positionInput.type(employee.position);
    this.departmentInput.type(employee.department);
    this.submitBtn.click();
    return this;
  }

  verifyError(message: string) {
    this.errorMessage.should('be.visible').and('contain.text', message);
    return this;
  }

  verifySuccess() {
    this.successMessage.should('be.visible');
    return this;
  }
}

export const employeePage = new EmployeePage();
