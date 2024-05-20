### AWS ECS Fargate nodejs and GitHub Actions CI/CD pipeline

This is a simple example of a CI/CD pipeline using GitHub Actions to deploy a nodejs application to AWS ECS Fargate. The pipeline is triggered by a push to the master branch. This application deploys a simple nodejs application that listens on port 3000. The application is deployed to an ECS Fargate cluster. The pipeline uses the AWS CLI to interact with AWS services.

The pipeline consists of the following steps:
1. Checkout the code
2. Install dependencies
3. Login to AWS ECR
4. Build the docker image
5. Push the docker image to AWS ECR
6. Update the Task Definition with the new image
7. Update the Service with the new Task Definition

## Prerequisites
- AWS account
- GitHub account
- Docker
- AWS CLI
- IAM user with the following permissions:
  - AdministratorAccess
- GitHub repository

## Steps
1. **Steps to create AWS Iam Users and access keys**
    - Go to ```AWS Console``` and login to your account. 
    - Go to ```IAM``` service.
    - Click on ```Users``` and then click on ```Add user```.
    - Enter the user name and select ```CommandLine Acess```.
    - Click on ```Attach existing policies directly``` and search for the following policies and attach them:
        - AdministratorAccess
    - Click on ```Next:Tags``` and then click on ```Next:Review```.
    - Click on ```Create user```.
    - Download the ```.csv``` file which contains the ```Access key ID``` and ```Secret access key```.
    - Click on ```Close```.
    - Now, you have created a user with the required permissions.
2. **Create a new Role called `ECS-Custiom-Role`**
    - Go to ```IAM``` service.
    - Click on ```Roles``` and then click on ```Create role```.
    - Select ```Elastic Container Service``` and then click on ```Next:Create Policy```.
    - Click on ```Create Policy``` and then click on ```JSON```.
    - Update the trust policy with the following JSON:
        ```
        {
            "Version": "2012-10-17",
            "Statement": [
                {
                    "Effect": "Allow",
                    "Principal": {
                        "Service": "ecs-tasks.amazonaws.com"
                    },
                    "Action": "sts:AssumeRole"
                }
            ]
        }
        ```
    - Click on update policy and then click on ```Next:Tags```.
    - Click on ```Next:Review```.
    - Enter the role name as ```ECS-Custiom-Role``` and then click on ```Create role```.
3. **Download the terraform as per your Opreating system**
    - Download the terraform from the below link:
        - https://www.terraform.io/downloads.html
    - Run the following commands to see is the terraform is installed or not:
        ```
        terraform --version
        ```
4. **Configure the AWS CLI**
    - Run the following command to configure the AWS CLI:
        ```
        aws configure
        ```
    - Enter the ```Access key ID``` and ```Secret access key``` which you have downloaded in the step 1.
    - Enter the ```Default region name``` and ```Default output format```.
5. **Clone the repository**
    - Run the following command to clone the repository:
        ```
        git clone https://github.com/Amul-Thantharate/terraform-ecs-node-github-actions.git
        ```
6. **Change the directory**
    - Run the following command to change the directory:
        ```
        cd terraform-ecs-node-github-actions
        ```
    - Change the directory to ```terraform```:
        ```
        cd terraform
        ```
    - Add the account id in the ecs.tf file
7. **Run the following commands to create the resources**
    - Run the following command to initialize the terraform:
        ```
        terraform init
        ```
    - Run the following command to see the plan:
        ```
        terraform plan
        ```
    - Run the following command to apply the plan:
        ```
        terraform apply
        ```
    - Enter ```yes``` to create the resources.
8. **Go to the AWS ECS console and check the resources**
    - Go to ```AWS Console``` and login to your account.
    - Go to ```ECS``` service.
    - Click on ```Clusters``` and then click on the cluster which you have created.
    - Click on ```Services``` and then click on the service which you have created.
    - Click on the ```Tasks``` and then click on the task which you have created.
    - Copy the Task Definition in the JSON format.
    - Click on the ```Task Definition``` and then click on the task definition which you have created.
    - Now, you have created the resources.
9. **Create the GitHub repository**
    - Go to ```GitHub``` and login to your account.
    - Click on ```New``` and then click on ```Repository```.
    - Enter the repository name and then click on ```Create repository```.
10. **Create the GitHub secrets**
    - Go to the repository which you have created.
    - Click on ```Settings``` and then click on ```Secrets```.
    - Click on ```New repository secret``` and then enter the following details:
        - Name: ```AWS_ACCESS_KEY_ID```
        - Value: Enter the ```Access key ID``` which you have downloaded in the step 1.
    - Click on ```Add secret```.
    - Click on ```New repository secret``` and then enter the following details:
        - Name: ```AWS_SECRET_ACCESS_KEY```
        - Value: Enter the ```Secret access key``` which you have downloaded in the step 1.
    - Click on ```Add secret```.
11. **Create the GitHub Actions**.
    - Go to the repository which you have created.
    - Click on ```.github``` and then click on ```workflows```.
    - Change the branch name to ```main``` in the ```.yml``` file.
    - Download the json file and store it in the .aws folder.
    - Create a new file called ```td.json``` in the ```.github/workflows``` folder.
    - In the `td.json` file in image section replace the image version with the latest version.
    - And remove the revision number from the image.
    - Now, you have created the GitHub Actions.
12. **Push the changes to the repository**
    - Run the following commands to push the changes to the repository:
        ```
        git add .
        git commit -m "Added the GitHub Actions"
        git push origin main
        ```
13. **Check the GitHub Actions**
    - Go to the repository which you have created.
    - Click on ```Actions``` and then click on the workflow which you have created.
    - Click on the job and then click on the step to see the logs.
    - Now, you have created the CI/CD pipeline using GitHub Actions.
14. **Update the code and push the changes**
    - Go to the repository changes the ```index.js``` file.
    - Run the following commands to push the changes to the repository:
        ```
        git add .
        git commit -m "Updated the index.js file"
        git push origin main
        ```
15. **Check the GitHub Actions**
    - Go to the repository which you have created.
    - Click on ```Actions``` and then click on the workflow which you have created.
    - Click on the job and then click on the step to see the logs.
    - Now, you have updated the code and pushed the changes to the repository.
16. **Clean up the resources**
    - Run the following command to destroy the resources:
        ```
        terraform destroy
        ```
    - Enter ```yes``` to destroy the resources.
17. **Conclusion**
    - In this way, you can create a CI/CD pipeline using GitHub Actions to deploy a nodejs application to AWS ECS Fargate.

## Reference
- https://docs.aws.amazon.com/AmazonECS/latest/developerguide/Welcome.html
- https://docs.github.com/en/actions
- https://www.terraform.io/docs/index.html
- https://docs.aws.amazon.com/cli/index.html
- https://docs.docker.com/get-started/

## Author
- Amul Thantharate - Cloud Engineer and DevOps Engineer
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/amul-thantharate/)
- GitHub: [GitHub](https://github.com/Amul-Thantharate)

## Acknowledgements
I would like to thank the GitHub and AWS team for providing such a great platform to learn and implement the CI/CD pipeline. I would also like to thank the Terraform team for providing such a great tool to create the infrastructure as a code.

Thank you! 😊👍👍👍👍🙌🙌