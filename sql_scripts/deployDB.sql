CREATE TYPE job AS ENUM(
  'dev', 'pm', 'devops', 'qa'
);

CREATE TABLE employee (
  id serial,
  username varchar(255) UNIQUE,
  firstname varchar(255),
  lastname varchar(255),
  hiredate date,
  job job,
  PRIMARY KEY(id)
);

CREATE TABLE employeeJobsHistory (
  id serial,
  userid integer,
  previousJobs varchar[],
  previousJobsTitles varchar[]
)
