# 🍔 Food Delivery Platform

A full-stack food delivery platform built using **React** on the frontend and **Spring Boot** on the backend. This application allows users to browse restaurants, view food items, place orders, and track their deliveries in real time.


![food_delivery2](https://github.com/user-attachments/assets/a6b119b8-b53b-431b-8e69-7be931c72687)

---

## 🧰 Tech Stack

### 🖥️ Frontend
- Typescript
- React
- React Query
- Tailwind CSS
- Redux Toolkit

### ⚙️ Backend
- Java 17
- Spring Boot
- MongoDB (for user and order data)
- PostgreSQL (for structured relational data like restaurants, menu items)
- Kafka (optional - for asynchronous order processing and event-driven architecture)
- Redis (optional - for caching and session management)

### 🔐 Authentication
- JWT (JSON Web Token)
- OAuth2 (Google, GitHub login support)

### ☁️ Deployment
- AWS / Azure (EC2, S3, RDS, etc.) (optional)
- Docker (for containerization)
- Kubernetes (for orchestration)
- Nginx (for reverse proxy)
- Terraform (for infrastructure as code)
- Git (for version control)
- Docker Compose (for local development)
- Postman (for API testing)
```
# Optional tools and libraries
- GraphQL (optional - for flexible API queries)
- Apollo Client (optional - for GraphQL queries)
- Swagger (for API documentation)
- ESLint (for code linting)
- Prettier (for code formatting)
- Jest (for unit testing)
- Cypress (for end-to-end testing)
- SonarQube (for code quality analysis)
- Sentry (for error tracking)
- Redis (for caching)
- RabbitMQ (for message brokering)
- Stripe (for payment processing)
- Twilio (for SMS notifications)
- Google Maps API (for location services)
- Cloudinary (for image hosting)
- Webpack (for module bundling)
- Babel (for JavaScript transpilation)
- Axios (for API requests)
- React Router (for routing)
- Redux (for state management)
- GitHub Actions (CI/CD)
- Vercel (for frontend hosting)
```
---

## 🚀 Getting Started

### 🔧 Prerequisites
- Node.js (v18+)
- Java 17 or higher
- PostgreSQL (for local development)
- MongoDB (for local development)
- Docker (for MongoDB, PostgreSQL)
- Maven

---

## 🖥️ Frontend Setup

```bash
cd UI
npm install
npm run dev
```

## ✅ TODO Items

### 🧑‍🍳 Frontend (React + Tailwind CSS + Redux Toolkit)

- [X] Set up project with Vite + Tailwind CSS + Redux Toolkit
- [X] Create responsive layout (header, footer, main content)
- [X] Restaurant listing page with filters and categories
- [X] Food item detail page with add to cart functionality
- [X] Shopping cart component (persist in localStorage)
- [X] Checkout page and address form
- [X] Order summary and payment simulation
- [X] Order Tracking page
- [ ] User authentication (JWT + OAuth2)
- [ ] Profile page (past orders, addresses)
- [ ] Admin dashboard UI
- [ ] Restaurant management UI
- [ ] Real-time order status updates using polling/websockets
- [ ] Integrate React Query for all API interactions

---

### ☕ Backend (Spring Boot + MongoDB + PostgreSQL)

- [ ] Project setup with layered architecture (controller, service, repo)
- [ ] Configure MongoDB (for users/orders) and PostgreSQL (for structured data)
- [ ] Implement JWT-based authentication
- [ ] Implement OAuth2 (Google, GitHub)
- [ ] User roles: Customer, Admin, Restaurant Owner
- [ ] Restaurant CRUD APIs
- [ ] Food item CRUD APIs
- [ ] Cart and checkout API endpoints
- [ ] Order management with status flow
- [ ] Kafka integration for event-driven order processing (optional)
- [ ] Redis for caching frequently accessed data (optional)
- [ ] API documentation with Swagger/OpenAPI
- [ ] Unit and Integration tests using JUnit + Mockito

---

### ☁️ DevOps & Deployment (Optional)
- [ ] Dockerize backend and databases (Docker Compose)
- [ ] Environment setup scripts for dev/staging
- [ ] GitHub Actions for CI/CD (backend and frontend)
- [ ] Deployment to AWS or Azure (EC2, S3, RDS)
- [ ] Deploy frontend to Vercel or S3 static hosting
- [ ] Setup monitoring (e.g., Prometheus + Grafana)
- [ ] Logging (Spring Boot with ELK or Loki stack)

```plaintext
food-delivery-platform/
├── UI/                   # React Frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── store/features/           # Redux Toolkit slices
│   │   ├── api/              # React Query API definitions
│   │   ├── utils/
│   │   └── App.jsx
│   └── tailwind.config.js
├── backend/                   # Spring Boot Backend
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/fooddelivery/
│   │   │   │   ├── controller/
│   │   │   │   ├── dto/
│   │   │   │   ├── model/
│   │   │   │   ├── repository/
│   │   │   │   ├── service/
│   │   │   │   └── config/
│   │   └── resources/
│   │       └── application.yml
├── docker-compose.yml
├── README.md
└── .github/workflows/        # CI/CD configurations
```

🙌 Maintainers
The CodeReveal – YouTube Channel
- [YouTube](https://www.youtube.com/@TheCodeReveal)
- [GitHub](https://github.com/pardeep16/)
- [LinkedIn](https://www.linkedin.com/in/pardeep16/)
- [Instagram](https://www.instagram.com/pradeepK.dev/)

# Support the Creator
If you find this project helpful, consider supporting the creator by:
- Subscribing to the YouTube channel
- Liking and sharing the videos

- Your support helps in creating more content and maintaining this project.
- [Buy Me A Coffee](https://buymeacoffee.com/thecodereveal) - Support the creator with a coffee ☕


<a href="https://buymeacoffee.com/thecodereveal" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>

- Thank you for your support!
