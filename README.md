# 🚀 CodeZen – Competitive Coding Platform

CodeZen is a **full-stack competitive coding platform** inspired by LeetCode, built to provide an engaging environment for problem-solving, learning, and competition.  
It supports **real-time code execution** and is being developed with features like **AI-powered assistance, subscription tiers, and 1v1 coding battles**.

---

## ✨ Features

### ✅ Current Features
- **Real-time Code Execution** – Integrated with a self-hosted [Judge0](https://judge0.com/) API for instant compilation and output.
- **Problem Management System** – Admin panel to create, update, and delete problems with difficulty levels and tags.
- **Problem Visibility Control** – Public and premium-only problems.
- **Clean & Responsive UI** – Built with modern frontend design principles for smooth user experience.

### 🛠 In Development
- **AI-powered Problem Assistant** – GPT-powered hints and explanations.
- **Subscription System** – Premium & free-tier separation with feature restrictions.
- **1v1 Coding Battles** – Challenge other users in real-time.
- **Dashboard & Analytics** – Personalized statistics and activity tracking.
- **Streak System** – Daily coding streak rewards to boost engagement.

---

## 🛠 Tech Stack

**Frontend:** React.js, TailwindCSS  
**Backend:** Node.js, Express.js  
**Database:** PostgreSQL (via Prisma ORM)  
**Code Execution:** Self-hosted Judge0 API  
**Other Tools:** Socket.io, Neon DB, GPT API (planned)  

---

## 📦 Installation & Setup

```bash
# Clone the repository
git clone https://github.com/Heet-Patel-5304/CodeZen.git
cd CodeZen

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Fill in DB credentials, Judge0 API URL, etc.

# Start the backend
npm run server

# Start the frontend
npm run client
