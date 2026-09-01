# Workforce Management Automation - E2E Test Suite

This project provides a comprehensive End-to-End (E2E) automation suite for the Workforce Management system using **Cypress** and **TypeScript**.

## 🚀 Tech Stack
- **Framework**: [Cypress](https://www.cypress.io/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Pattern**: Page Object Model (POM)
- **Environment**: Node.js

## 📋 Features Automated
The suite covers four critical business workflows:

### 1. Employee Management
- **Create Employee**: Validates the successful creation of a new employee record.
- **Duplicate Email Restriction**: Ensures the system prevents multiple employees from using the same email address.

### 2. Training Workflow
- **Assign Training**: Validates that a course can be assigned to a specific employee.
- **Record Verification**: Confirms that the assigned training appears correctly in the employee's profile.

### 3. OJT (On-the-Job Training) Completion
- **Employee Completion**: Simulates an employee marking their training as complete.
- **Supervisor Approval**: Simulates a supervisor reviewing and approving the training completion.
- **Status Update**: Verifies the final status transitions to "Approved".

### 4. Certification Tracking
- **Expiring Alerts**: Verifies that "Expiring Soon" warnings appear for certifications nearing their end date.
- **Expired Alerts**: Verifies that "Critical" alerts appear for certifications that have already expired.
- **Valid Certificates**: Ensures no false alerts are triggered for active certifications.

## 🛠️ Installation & Setup

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher) installed on your machine.

### Setup Steps
1. **Clone the repository** to your local machine.
2. **Install dependencies**:
   ```bash
   npm install
   ```

## 🏃 Running the Tests

### 1. Start the Application
Ensure your Workforce Management application is running at `http://localhost:3000`.

### 2. Execute Tests
You can run the tests in two modes:

**A. Headless Mode (Fast, for CI/CD):**
```bash
npx cypress run
```

**B. Interactive Mode (UI, for debugging):**
```bash
npx cypress open
```

## 📂 Project Structure
```text
├── cypress/
│   ├── e2e/              # Test specifications (Business workflows)
│   ├── fixtures/          # Static test data (JSON)
│   ├── pages/            # Page Object Model classes (UI logic)
│   └── support/           # Global configuration and custom commands
├── cypress.config.ts     # Cypress framework configuration
├── tsconfig.json         # TypeScript compiler settings
└── package.json          # Project dependencies and scripts
```

## 🛡️ Quality Assurance Standards
- **Resilient Selectors**: Uses `data-testid` attributes to prevent tests from breaking during UI redesigns.
- **Maintainability**: Logic is abstracted into Page Objects to avoid code duplication.
- **Data Driven**: Test data is decoupled from test scripts using fixture files.
