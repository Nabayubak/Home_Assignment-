export class EmployeeTrainingPage {
  // Elements
  get myTrainingList() { return cy.getByTestId('my-training-list'); }
  get completeCourseBtn() { return cy.getByTestId('complete-course-btn'); }
  get completionConfirmBtn() { return cy.getByTestId('confirm-completion-btn'); }

  // Methods
  visit() {
    cy.visit('/my-training');
    return this;
  }

  markCourseAsComplete(courseName: string) {
    this.myTrainingList.contains(courseName).parents('tr').find('[data-testid="complete-course-btn"]').click();
    this.completionConfirmBtn.click();
    return this;
  }
}

export const employeeTrainingPage = new EmployeeTrainingPage();
