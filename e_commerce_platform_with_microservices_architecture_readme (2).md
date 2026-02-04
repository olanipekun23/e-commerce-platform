# 🛒 E-Commerce Platform with Microservices Architecture

## 📌 Project Title
**E-Commerce Platform with Microservices Architecture**

---

## 📖 Overview
This project demonstrates how to design, build, and deploy a modern **e-commerce platform** using a **microservices-based architecture**. Each core business capability is implemented as an independent microservice, containerized with Docker, and deployed to a Kubernetes cluster using **ArgoCD (GitOps)**.

The platform is exposed via an **API Gateway**, and optionally enhanced with **monitoring and logging** tools to reflect real-world DevOps best practices.

---

## 🎯 Hypothetical Use Case
You are tasked with developing an e-commerce system that must be:
- Scalable
- Loosely coupled
- Cloud-native
- Easy to deploy and manage using GitOps principles

---

## 🧩 Microservices Architecture
The platform consists of the following microservices:

### 1️⃣ Product Service
- Manages product information
- APIs:
  - List all products
  - View a single product

### 2️⃣ Cart Service
- Manages user shopping carts
- APIs:
  - Add item to cart
  - Remove item from cart

### 3️⃣ Order Service
- Manages order processing
- APIs:
  - Create an order
  - View orders

Each service is:
- Independently deployable
- Independently scalable
- Containerized using Docker

---

## 🏗️ Project Structure
```text
e-commerce-platform/
├── product-service/
│   ├── app.js
│   ├── package.json
│   └── Dockerfile
├── cart-service/
│   ├── app.js
│   ├── package.json
│   └── Dockerfile
├── order-service/
│   ├── app.js
│   ├── package.json
│   └── Dockerfile
├── k8s/
│   ├── product/
│   │   ├── deployment.yaml
│   │   └── service.yaml
│   ├── cart/
│   │   ├── deployment.yaml
│   │   └── service.yaml
│   ├── order/
│   │   ├── deployment.yaml
│   │   └── service.yaml
│   ├── kustomization.yaml
│   └── argocd-app.yaml
└── README.md
```

---

## 🧪 Technology Stack
- **Node.js (Express)** – Application framework
- **Docker** – Containerization
- **Docker Hub** – Image registry
- **Kubernetes** – Container orchestration
- **ArgoCD** – GitOps continuous deployment
- **API Gateway** – Kong / Ambassador (Ingress-based)
- **Monitoring (Optional)** – Prometheus & Grafana
- **Logging (Optional)** – EFK Stack (Elasticsearch, Fluentd, Kibana)

---

## 🛠️ Step-by-Step Implementation Guide

### 🔹 Task 1: Project Setup
```bash
mkdir e-commerce-platform
cd e-commerce-platform
mkdir product-service cart-service order-service k8s
```

---

### 🔹 Task 2: Initialize Git Repository
```bash
git init
git branch -M main
```

---

### 🔹 Task 3: Version Control
```bash
git add .
git commit -m "Initial project structure"
```

---

### 🔹 Task 4: Dockerize Microservices
- Implement Express APIs for each service
- Create a `Dockerfile` for each microservice

Example Dockerfile:
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "app.js"]
```

---

### 🔹 Task 5: Push Images to Docker Hub
```bash
docker login
docker build -t <username>/product-service .
docker push <username>/product-service
```
(Repeat for cart and order services)

---

### 🔹 Task 6: Set Up ArgoCD
```bash
kubectl create namespace argocd
kubectl apply -n argocd \
  -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml
```

---

### 🔹 Task 7: Kubernetes Deployments
Create deployment YAML files for each service and commit them to Git.

ArgoCD Application:
```yaml
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: ecommerce-platform
  namespace: argocd
spec:
  project: default
  source:
    repoURL: https://github.com/<username>/e-commerce-platform
    targetRevision: main
    path: k8s
  destination:
    server: https://kubernetes.default.svc
    namespace: default
  syncPolicy:
    automated:
      prune: true
      selfHeal: true
```

---

### 🔹 Task 8: Kubernetes Services
- Create `ClusterIP` services for each microservice
- Apply automatically via ArgoCD

---

### 🔹 Task 9: API Gateway (Advanced)
- Install Kong or Ambassador as an Ingress Controller
- Define Ingress rules to route:
  - `/products` → product-service
  - `/cart` → cart-service
  - `/orders` → order-service
- Manage Ingress via ArgoCD

---

### 🔹 Task 10: Monitoring & Logging (Optional)
- **Monitoring**: Prometheus + Grafana
- **Logging**: Elasticsearch, Fluentd, Kibana (EFK)

---


### Steps In Project

1. project Dir

![project DIR](image.png)

2. git init, commit

![git init](image-1.png)

3. microservices product-service app.js

![product-service](image-2.png)

4. product-sercice docker file

![docker file](image-3.png)

5. product-service dir

![dir](image-4.png)

6. microdervices cart-service app.js

![app.js](image-5.png)

7. cart-service dockerfile

![dockerfile](image-6.png)

8. cart-service dir

![dir](image-7.png)

9. microservices order-service app.js

![order-service](image-8.png)

10. order service dockerfile

![order-service](image-9.png)

11. order-service dir

![dir](image-10.png)

12. dockerhub login

![login](image-11.png)

13. docker info grep username

![docker info](image-12.png)

14. docker build -t

![docker build](image-13.png)

15. npm init -y

![init -y](image-14.png)

16. Docker push product-service

![docker push](image-15.png)

17. docker images | grep product-service

![docker images](image-16.png)

18. npm init -y, npm install express

![npm init](image-17.png)

19. docker build -t awodeyitobi cart-service

![docker build](image-18.png)

20. docker push cart-service

![docker push](image-19.png)

21. npm init -y, npm install express

![npm init](image-20.png)

22. docker build -t awodeyitobi order-service

![order service](image-21.png)

23. docker push order service

![docker push](image-22.png)

24. deployment.yaml product-service

![deployment.yaml](image-23.png)

25. service.yaml product service

![service.yaml](image-24.png)

26. kustomization.yaml product-service

![kustomization.yaml](image-25.png)

27. product-service deployment.yaml dir

![dir](image-26.png)

28. deployment.yaml cart-service

![deployment.yaml](image-27.png)

29. service.yaml cart-service

![service.yaml](image-28.png)

30. kustomization.yaml cart-service

![kustomization.yaml](image-29.png)

31. deployment.yaml order-service

![deployment.yaml](image-30.png)

32. service.yaml order-service

![service.yaml](image-31.png)

33. kustomization.yaml order-service

![kustomization.yaml](image-32.png)

34. kubectl create argocd namespace

![namespace](image-33.png)

35. ArgoCD app.yaml file

![app.yaml](image-34.png)

36. kubectl get pods -n argocd

![kubectl get pods](image-35.png)

37. kubectl get application -n argocd

![kubectl get](image-36.png)

38. kubectl describe application ecommerce-platform -n argocd

![describe](image-37.png)

39. second describe file

![describe](image-38.png)

40. k8s kustomization.yaml

![k8s](image-39.png)

41. k8s yaml dir

![dir](image-40.png)

42. kind create cluster

![cluster](image-41.png)

43. kubectl get nodes pods

![nodes](image-42.png)

44. kubectl create namespace ecommerce-platform, argocd

![namespace](image-43.png)

45. Argocd login page

![login page](image-44.png)

46. argocd dashboard

![dashboard](image-45.png)

47. kubectl apply -f argocd app.yaml

![app.yaml](image-46.png)

48. ecommerce-platform

![app](image-47.png)

49. kubectl get and describe application

![get](image-48.png)

50. kustomize build .


![kustomize build](image-49.png)

51. kustomize build .

![kustomize build](image-50.png)

52. application synchronize and healthy

![healthy](image-51.png)

53. Argocd cli login and app sync

![app sync and login](image-52.png)

54. ArgoCD ecommerce-platform

![ecommerce-platform](image-53.png)

55. microservice prot-forward product-service

![port-forward](image-54.png)

56. Product-service 

![product-service](image-55.png)

57. cart-service

![cart service](image-56.png)

58. microservice port-forward cart-service

![cart-service](image-57.png)

59. order-service

![order-service](image-58.png)

60. port-forward order-service

![port-forward](image-59.png)

61. k8s ingress.yaml file

![k8s ingress](image-60.png)

62. kong installation

![kong](image-61.png)

63. kubectl get pods & svc -n kong

![svc](image-62.png)

64. kubectl appy-f k8s ecommerce-platform

![kubectl apply -f](image-63.png)


65. kubectl get pods and svc

![pods & svc](image-64.png)





## 🎓 Capstone Goals
By completing this project, you will:
- Gain hands-on experience with Docker, Kubernetes, and ArgoCD
- Understand real-world microservices architecture
- Implement GitOps-based continuous deployment
- Learn API Gateway integration
- Apply DevOps monitoring and logging best practices

---

## 🚀 Final Notes
This project simulates a **real-world production workflow** and prepares you for roles in:
- DevOps Engineering
- Platform Engineering
- Cloud-Native Application Development

Happy building 🚀

