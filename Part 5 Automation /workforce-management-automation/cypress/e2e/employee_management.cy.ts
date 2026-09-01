import { employeePage } from '../pages/employee.page';

describe('Employee Management', () => {
  beforeEach(() => {
    employeePage.visit();
  });

  it('should create a new employee successfully', function () {
    cy.fixture('employee').then((data) => {
      employeePage.addEmployee(data.validEmployee);
      employeePage.verifySuccess();
    });
  });

  it('should show error when creating employee with duplicate email', function () {
    cy.fixture('employee').then((data) => {
      // First, create the employee to ensure the email exists
      employeePage.addEmployee(data.validEmployee);

      // Now attempt to create another with the same email
      employeePage.addEmployee(data.duplicateEmployee);
      employeePage.verifyError('Email already exists');
    });
  });
});
