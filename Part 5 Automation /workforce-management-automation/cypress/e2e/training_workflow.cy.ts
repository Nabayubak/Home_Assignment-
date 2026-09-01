import { trainingPage } from '../pages/training.page';
import { employeeProfilePage } from '../pages/employee_profile.page';

describe('Training Workflow', () => {
  beforeEach(() => {
    // We assume the app is logged in and base URL is set
  });

  it('should assign training and verify it appears in employee record', function () {
    cy.fixture('training').then((data) => {
      const { employeeName, courseName } = data.assignment;

      // 1. Assign Training
      trainingPage.visit();
      trainingPage.assignCourseToEmployee(employeeName, courseName);
      trainingPage.verifySuccess();

      // 2. Verify in Employee Record
      // For this test, we assume we can navigate to the profile using the name or a known ID
      // In a real app, we might search for the employee first.
      const employeeId = 'emp123'; // Mock ID for the example
      employeeProfilePage.visit(employeeId);
      employeeProfilePage.verifyCourseAssigned(courseName);
    });
  });
});
