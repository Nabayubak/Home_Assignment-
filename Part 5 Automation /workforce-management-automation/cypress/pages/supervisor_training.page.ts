export class SupervisorTrainingPage {
  // Elements
  get pendingApprovalsList() { return cy.getByTestId('pending-approvals-list'); }
  get approveBtn() { return cy.getByTestId('approve-training-btn'); }
  get rejectionBtn() { return cy.getByTestId('reject-training-btn'); }

  // Methods
  visit() {
    cy.visit('/supervisor/approvals');
    return this;
  }

  approveTrainingCompletion(employeeName: string, courseName: string) {
    this.pendingApprovalsList
      .contains(employeeName)
      .parents('tr')
      .find('[data-testid="approve-training-btn"]')
      .click();

    // Assume there's a confirmation dialog
    cy.getByTestId('confirm-approval-btn').click();
    return this;
  }

  verifyStatus(employeeName: string, courseName: string, status: string) {
    this.pendingApprovalsList
      .contains(employeeName)
      .parents('tr')
      .should('contain.text', status);
    return this;
  }
}

export const supervisorTrainingPage = new SupervisorTrainingPage();
