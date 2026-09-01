export class CertificationPage {
  // Elements
  get certList() { return cy.getByTestId('certification-list'); }
  get warningAlert() { return cy.getByTestId('cert-warning-alert'); }
  get criticalAlert() { return cy.getByTestId('cert-critical-alert'); }

  // Methods
  visit() {
    cy.visit('/certifications');
    return this;
  }

  verifyAlertVisible(certName: string, alertType: 'warning' | 'critical') {
    const alert = alertType === 'warning' ? this.warningAlert : this.criticalAlert;

    this.certList
      .contains(certName)
      .parents('tr')
      .find(`[data-testid="${alertType === 'warning' ? 'cert-warning-alert' : 'cert-critical-alert'}"]`)
      .should('be.visible');

    return this;
  }

  verifyNoAlert(certName: string) {
    this.certList
      .contains(certName)
      .parents('tr')
      .find('[data-testid="cert-warning-alert"]')
      .should('not.exist');

    this.certList
      .contains(certName)
      .parents('tr')
      .find('[data-testid="cert-critical-alert"]')
      .should('not.exist');

    return this;
  }
}

export const certificationPage = new CertificationPage();
