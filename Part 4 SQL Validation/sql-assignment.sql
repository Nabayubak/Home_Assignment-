
-- Query 1: All employees and their departments
select e.employee_id, e.name, e.department
from employees e;

-- Explanation:
-- This query returns all employees along with their employee ID,
-- name, and department.
-- No JOIN is required because all required information is
-- available in the employees table.

-- Query 2: Employees with completed all assigned trainings
select e.name
from employees e
join employee_trainings et on e.employee_id = et.employee_id
group by e.employee_id, e.name
having COUNT(*) = COUNT(*) filter (
where et.status ='completed'

-- Explanation:
-- The JOIN connects employees with their assigned training records.
-- GROUP BY creates one group for each employee.
-- COUNT(*) counts all training records for each employee.
-- COUNT(*) FILTER counts only completed trainings.
-- If both counts are equal, the employee has completed all
-- of their assigned trainings.

-- Query 3: Count trainings per employee
select e.name, COUNT(*) as num_trainings
from employees e
join employee_trainings et on e.employee_id = et.employee_id
group by e.name

-- Explanation:
-- The JOIN connects each employee with their training records.
-- COUNT(*) counts the number of training records for each employee.
-- GROUP BY makes sure the count is calculated separately
-- for each employee.


-- Query 4: Certifications expiring within 30 days
select c.employee_id, c.certification_name, c.expiry_date
from certifications c
where CURRENT_DATE - c.expiry_date < 30;

-- Explanation:
-- CURRENT_DATE returns today's date.
-- The first condition excludes certifications that have already expired.
-- The second condition returns certifications that expire
-- within the next 30 days.

-- Query 5: Employees with overdue trainings
select e.employee_id, e.name, t.training_name, et.due_date
from employees e
join employee_trainings et on e.id = et.employee_id
join trainings t on et.training_id = t.id
where et.due_date < CURRENT_DATE
and et.status != 'completed';

-- Explanation:
-- The first JOIN connects employees with their training records.
-- The second JOIN gets the training name from the trainings table.
-- The due_date condition finds trainings whose deadline has passed.
-- The status condition excludes trainings that are already completed.

-- Note:
-- A due_date column was added to employee_trainings because the
-- original schema did not provide enough information to determine
-- whether a training was overdue.
-- The status column shows the training status, but it does not
-- tell us when the training was supposed to be completed.
-- The due_date allows us to compare the deadline with CURRENT_DATE.

-- Query 6: Top 5 employees by completed trainings
select e.name, COUNT(*) as completed_count
from employees e
join employee_trainings et on e.employee_id = et.employee_id
where et.status = 'completed'
group by e.name
order by completed_count desc
limit 5;

-- Explanation:
-- The JOIN connects employees with their training records.
-- The WHERE condition keeps only completed trainings.
-- COUNT(*) counts the completed trainings for each employee.
-- GROUP BY calculates the count separately for each employee.
-- ORDER BY sorts employees from the highest number of
-- completed trainings to the lowest.
-- LIMIT 5 returns only the top five employees.
