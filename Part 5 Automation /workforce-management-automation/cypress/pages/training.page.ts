export class TrainingPage {
  // Elements
  get assignTrainingBtn() { return cy.getByTestId('assign-training-btn'); }
  get courseDropdown() { return cy.getByTestId('course-dropdown'); }
  get employeeDropdown() { return cy.getByTestId('employee-dropdown'); }
  get submitAssignmentBtn() { return cy.getByTestId('submit-assignment-btn'); }
  get successMessage() { return cy.getByTestId('assignment-success-message'); }

  // Methods
  visit() {
    cy.visit('/training');
    return this;
  }

  assignCourseToEmployee(employeeName: string, courseName: string) {
    this.assignTrainingBtn.click();
    this.employeeDropdown.select(employeeName);
    this.courseDropdown.select(courseName);
    this.submitAssignmentBtn.click();
    return this;
  }

  verifySuccess() {
    this.successMessage.should('be.visible');
    return this;
  }
}

export const trainingPage = new TrainingPage();
