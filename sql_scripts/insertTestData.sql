INSERT INTO employee (username, firstname,lastname, hiredate, job) VALUES
('john123', 'John', 'Doe', '05-05-2005', 'pm'),
('smitty', 'Will', 'Smith', '05-09-2005', 'qa'),
('ed', 'Ed', 'Stark', '12-05-2005', 'devops'),
('tyrion', 'Tyrion', 'Lannister', '11-25-2015', 'dev'),
('dayenerys', 'Dayenerys', 'Targarian', '05-05-2010', 'pm');

INSERT INTO employeeJobsHistory (userid, previousJobs,previousJobsTitles) VALUES
('1', Array['company11', 'company12', 'company13'], Array['junior', 'junior', 'middle']),
('2', Array['company21', 'company22', 'company23'], Array['junior', 'junior', 'middle']),
('3', Array['company31', 'company32', 'company33'], Array['junior', 'junior', 'middle']),
('4', Array['company41', 'company42', 'company43'], Array['junior', 'junior', 'middle']),
('5', Array['company51', 'company52', 'company53'], Array['junior', 'junior', 'middle']);
