# Solution

## Architecture
The application consists of two parts the front-end and back-end. 

The frontend consisting of two pages:
1. Listing page: this is where all the recipes along with their ingredients are displayed. The user can then filter this list via recipe name search or ingredient filter.
2. More info page: this where the user can see more details of their recipe and even update these details.

The backend uses:
1. Dynamo DB to store data.
2. GraphQL Express API to allow CRUD behaviour.

## Infrastructure
The frontend is hosted on an s3 bucket behind AWS CloudFront and the GraphQL backend sits inside a lambda function that communicates with Dynamo DB for storage.

## CI/CD
Update any merge into the main branch a GitHub Action is triggerd that runs:
1. Unit tests on frontend and backend.
2. Builds and deploys website to S3/CloudFront and GraphQL Express Server to AWS Lambda.
3. E2E tests to validate the build and deploy.

# Recipe app
## Introduction
Feel free to [use this repository as a template](../../generate) (Please don't fork!) or start from scractch.

The requirement is to build and end to end application consisting of a Typescript, React webapp, a Typescript API and a data store of your choice.
The spec below defines 3 user stories all with acceptance criteria. Do your best to interpret them and implement them. If you feel you're missing context, drop an email to tech-test@sero.life.

Could you provide a GitHub repository link with your work when you feel you've completed the task to tech-test@sero.life?

## How to run the app

Open a terminal and run the following command to spin up the API and React UI

```
make install docker
```

_Navigate to http://localhost:3000 to view the UI_

## How to run the tests

Run the following command in a separate terminal (You must have your UI and API running)

```
make test
```

## Build an app for a chef to store their favorite recipes.
Ideal tech stack:
- Typescript
- React
- Cypress
- Docker

## Non-functional requirements
- Run the whole stack with `make install docker`
- Data is persisted when database is stopped and started
- End to end tests demonstrate acceptance criteria has been implemented


## Saving favorite recipes
### User story 1
As a chef
I want to save my favorite recipes\
So that I can cook them another time

### Acceptance criteria 1
Given I have a new recipe\
When I add the new recipe name\
And ingredients\
And measurements\
And cooking method\
Then the new recipe is saved for later
 
## Searching favorite recipes by name
### User story 2
As a chef\
I want to search for my favorite recipe\
So that I can cook it

### Acceptance criteria 2
Given I want to look for a recipe\
When I search by the name of the recipe\
Then I find the recipe\
And I can see the ingredients\
And I can see the cooking methods
 
## Searching favorite recipes by ingredients (Optional)
### User story 3
As a chef\
I want to search for my favorite recipe by ingredient\
So that I can cook it

### Acceptance criteria 3
Given I want to look for a recipe by ingredients\
When I search by the ingredient of the recipe\
Then I find the recipe\
And I can see the ingredients\
And I can see the cooking methods

## Bonus points (Optional)
1. Continuous integration
2. App deployment
