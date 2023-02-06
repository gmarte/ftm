# Scrum backlog for the project

## User authentication:

- Implement Google OAuth authentication
- Create a user model to store user details
- Add registration and login pages
- Integrate the authentication system with the rest of the application

## Chores management:

- Create a chore model to store chore details (task description, reward points, etc.)
- Create a view to display all the available chores
- Add a feature for parents to add new chores for their children
- Create a view for children to see their assigned chores and track their progress

## Rewards management:

- Create a reward model to store reward details (item description, cost, etc.)
- Create a view to display all available rewards
- Implement a reward redemption system that allows children to redeem their reward points for rewards
- Add a feature for parents to add new rewards

## Children management:

- Create a child model to store child details
- Create a view for parents to add new children
- Display a dashboard for parents to view the progress of all their children and track their chore completion

## Badges management:

- Create a badge model to store badge details
- Create a view to display all available badges
- Add a feature for parents to add new badges
- Implement a system that assigns badges to children based on their chore completion and other criteria

## Gamification:

- Implement a point system for children to earn points for completing chores
- Add a feature for parents to set up weekly bonuses for their children
- Integrate the point system with the reward redemption system
- Display children's progress in a fun and engaging way, using charts, progress bars, etc.

## User interface and design:

- Create a responsive and user-friendly interface using Bootstrap and Material UI
- Use appropriate colors and visual elements to make the website appealing to children
- Add fun animations and illustrations to make the experience more engaging

## Deployment and testing:

- Deploy the application on a suitable hosting platform
- Conduct thorough testing to ensure the application is functional and bug-free
- Continuously monitor the application for performance and security issues
- Address any issues that arise during testing and deployment.


# Sprint 1:

- Set up the project environment and install necessary dependencies
- Design the database models for Users, Children, Chores, Rewards, and Badges
- Implement the authentication using Google OAuth

# Sprint 2:

- Create the views and templates for the index/dashboard page
- Add the functionality to create, update, and delete Children, Chores, Rewards, and Badges
- Implement the gamification system and calculate the score for each child

# Sprint 3:

- Create the view for displaying the children's progress
- Implement the reward system and calculate the bonus points for completing all tasks
- Add the functionality to manage recurring tasks and track the progress

# Sprint 4:

- Create the views for displaying the badges and rewards earned by children
- Add the functionality to assign tasks to children and track their progress
- Design and implement the admin interface to manage the data

# Sprint 5:

- Add the functionality to send notifications to parents and children
- Implement the functionality to redeem rewards and claim badges
- Implement security features such as password encryption, CSRF protection, and user permissions