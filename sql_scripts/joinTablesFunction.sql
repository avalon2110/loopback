CREATE FUNCTION my_func()
RETURNS TABLE(id integer, username varchar, firstname varchar, lastname varchar, hiredate date, job job, previousJobs varchar[], previousJobsTitles varchar[] )
AS $$
  SELECT (e.id, e.username, e.firstname, e.lastname, e.hiredate, e.job, h.previousJobs[], h.previousJobsTitles[])
  FROM employee e
  INNER JOIN employeeJobsHistory h on (e.id = h.userid)
$$ LANGUAGE sql;
