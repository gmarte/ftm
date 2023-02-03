# Backlog

### User stories:

As a parent, I want to be able to create a child profile so that I can manage their tasks and rewards.
As a parent, I want to be able to create a task and assign it to a child so that they can complete it and receive a reward.
As a parent, I want to be able to create a recurring task so that I don't have to create a new task every week.
As a parent, I want to be able to see a list of all the tasks assigned to a child so that I can keep track of their progress.
As a parent, I want to be able to mark a task as completed for a child so that they can receive a reward.
As a parent, I want to be able to see a list of all the rewards assigned to a child so that I can keep track of their earned rewards.
As a parent, I want to be able to redeem a reward for a child so that they can receive the reward.
As a parent, I want to be able to see a dashboard with the points earned by each child so that I can keep track of their progress.
As a parent, I want to be able to edit and delete a task or a reward so that I can keep the information up-to-date.

### Acceptance criteria:

The child profile must include the child's name and a points field that starts at 0.
The task creation form must include the task name, points, assigned child, and a checkbox to mark it as recurring.
The recurring task must be automatically created every week with the same information as the original task.
The list of tasks assigned to a child must include the task name, points, completion status, and a button to mark it as completed.
The completion of a task must increase the child's points by the task's points and add a completion record to the WeeklyTaskCompletion model.
The list of rewards assigned to a child must include the reward name, points, redemption status, and a button to redeem the reward.
The redemption of a reward must decrease the child's points by the reward's points and mark the reward as redeemed.
The dashboard must display the points earned by each child and a chart to visually represent the progress.
The edit and delete functionality must be available for both tasks and rewards.

### Tasks:

Create the models for Child, Task, WeeklyTaskCompletion, and Reward.
Implement the views and templates to create, edit, and delete a child profile.
Implement the views and templates to create, edit, delete, and list tasks assigned to a child.
Implement the views and templates to create, edit, delete, and list rewards assigned to a child.
Implement the logic to mark a task as completed and add the points to the child's profile.
Implement the logic to redeem a reward and subtract the points from the child's profile.
Implement the dashboard to display the points earned by each child and a chart to visually represent the progress.
Add test cases to verify the functionality.
Deploy the application.
