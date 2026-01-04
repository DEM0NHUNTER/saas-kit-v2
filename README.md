# Enterprise SaaS Boilerplate (v2)

![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![Docker](https://img.shields.io/badge/Docker-Enabled-2496ED?style=for-the-badge&logo=docker)
![Prisma](https://img.shields.io/badge/Prisma-ORM-2d3748?style=for-the-badge&logo=prisma)

A production-ready, highly opinionated boilerplate designed for **scalability**, **maintainability**, and **developer experience**.

This repository is not just a "starter kit"; it is an architectural reference for building reliable Node.js applications using Domain-Driven Design (DDD) principles.

---

## 🚀 Key Features

* **🏗 Domain-Driven Structure:** Business logic is organized by feature (`modules/users`, `modules/billing`) rather than technical layer, preventing "spaghetti code" as the app scales.
* **🐳 Dockerized Infrastructure:** One-command setup for PostgreSQL and Redis. No local installations required.
* **🛡 Type-Safe Database:** Full integration with **Prisma ORM** (v5 stable) for auto-generated type definitions.
* **⚙️ Robust DevOps Scripts:**
    * Automated environment setup (`setup-env.sh`).
    * Pre-commit build verification (`verify-build.sh`).
* **🔍 Observability:**
    * **Structured Logging:** JSON-formatted logs using Winston (Production) and colorized output (Development).
    * **Deep Health Checks:** API endpoint (`/api/health`) that verifies database connectivity, not just server uptime.
* **🔒 Security First:**
    * **Global Error Handling:** Middleware that sanitizes error responses to prevent leaking stack traces to clients.
    * **Secrets Management:** Strict `.env` handling and git-ignoring patterns.

---

## 🛠 Tech Stack

* **Framework:** Next.js 14 (App Router)
* **Language:** TypeScript (Strict Mode)
* **Database:** PostgreSQL 15
* **ORM:** Prisma
* **Caching:** Redis 7
* **Validation:** Zod
* **Containerization:** Docker & Docker Compose

---

## 📂 Architecture & Folder Structure

We follow a **Modular Monolith** approach.

```text
src/
├── app/                  # Next.js App Router (Routes Only)
│   └── api/              # API Route Handlers (Calls Services)
├── modules/              # THE CORE LOGIC (Domain Driven)
│   └── users/
│       ├── users.service.ts  # Business Logic (Database interaction)
│       └── users.types.ts    # Domain specific types
├── server/
│   └── middleware/       # Global Middleware (Error Handling, Auth)
├── shared/               # Reusable Utilities
│   ├── lib/              # Infrastructure Clients (Logger, Prisma)
│   └── utils/            # Helper classes (AppError)