import { employeeTrainingPage } from '../pages/employee_training.page';
import { supervisorTrainingPage } from '../pages/supervisor_training.page';

describe('OJT Completion Workflow', () => {
  beforeEach(() => {
    // In a real scenario, we would implement a login() command
    // For now, we assume the session is handled or bypassed for testing
  });

  it('should allow employee to complete training and supervisor to approve it', function () {
    cy.fixture('ojt').then((data) => {
      const { employeeUser, supervisorUser, trainingCourse } = data;

      // --- Employee Phase ---
      // We simulate login by visiting the page (assuming auth is handled)
      employeeTrainingPage.visit();
      employeeTrainingPage.markCourseAsComplete(trainingCourse.name);

      // Assume logout happens here or we just switch to supervisor context
      cy.visit('/logout');

      // --- Supervisor Phase ---
      supervisorTrainingPage.visit();
      supervisorTrainingPage.approveTrainingCompletion(employeeUser.name, trainingCourse.name);
      supervisorTrainingPage.verifyStatus(employeeUser.name, trainingCourse.name, 'Approved');
    });
  });
});
