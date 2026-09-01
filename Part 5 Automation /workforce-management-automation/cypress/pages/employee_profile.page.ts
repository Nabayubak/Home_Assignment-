export class EmployeeProfilePage {
  // Elements
  get trainingSection() { return cy.getByTestId('employee-training-section'); }
  get assignedCoursesList() { return cy.getByTestId('assigned-courses-list'); }

  // Methods
  visit(employeeId: string) {
    cy.visit(`/employees/${employeeId}`);
    return this;
  }

  verifyCourseAssigned(courseName: string) {
    this.trainingSection.should('be.visible');
    this.assignedCoursesList.should('contain.text', courseName);
    return this;
  }
}

export const employeeProfilePage = new EmployeeProfilePage();
