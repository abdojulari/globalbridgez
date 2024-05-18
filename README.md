This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

### Step-by-Step Instructions

To build and run your Docker containers for different environments, use the following commands:

#### Development Environment

```docker
docker-compose up dev
```
This will start the development server on `http://localhost:3000`.

#### QA Environment

```docker
docker-compose up qa
```
This will start the QA server on `http://localhost:3001`.

#### Production Environment
```docker
docker-compose up production
```
This will start the production server on `http://localhost:3002`.


### Push Docker Image to Docker Hub
#### Login to Docker Hub:

```docker
docker login
```

#### Build the Docker Image:
```docker
docker build -t your-dockerhub-username/globalbridgez:latest .

```
#### Tag the Docker Image:

```docker
docker tag your-dockerhub-username/globalbridgez:latest your-dockerhub-username/globalbridgez:v0.1.0
```

#### Push the Docker Image:
```docker
docker push your-dockerhub-username/globalbridgez:latest
docker push your-dockerhub-username/globalbridgez:v0.1.0
```

#### Using the Docker Image

You can use the pushed Docker image on any server or cloud service that supports Docker. For example, to run your production environment directly from Docker Hub:

```docker
docker run -d -p 3002:3000 your-dockerhub-username/globalbridgez:latest
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
