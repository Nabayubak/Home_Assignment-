import { certificationPage } from '../pages/certification.page';

describe('Certification Tracking', () => {
  beforeEach(() => {
    certificationPage.visit();
  });

  it('should display correct alerts for expiring and expired certifications', function () {
    cy.fixture('certifications').then((data) => {
      // 1. Verify Expiring Soon alert
      certificationPage.verifyAlertVisible(data.expiringSoonCert.name, 'warning');

      // 2. Verify Expired alert
      certificationPage.verifyAlertVisible(data.expiredCert.name, 'critical');

      // 3. Verify no alert for valid certifications
      certificationPage.verifyNoAlert(data.validCert.name);
    });
  });
});
