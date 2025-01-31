Event Algomax

Overview

Event Algomax is a Flutter-based event management system that enables users to create, manage, and participate in events. The system is powered by a Node.js backend and uses phpMyAdmin for MySQL database management. It is designed to streamline event organization with features like role-based authentication, event registration, and an intuitive user interface.

Features
	•	User Authentication: Secure login and signup functionality.
	•	Role-Based Access Control: Different access levels for admins, organizers, and participants.
	•	Event Management: Users can create, edit, and delete events.
	•	Event Registration: Participants can register for events.
	•	Database Management: Uses MySQL and phpMyAdmin for efficient data handling.
	•	Real-Time Updates: Event changes are reflected in real time.
	•	API Integration: Node.js backend serves as the API provider.

Tech Stack

Component	Technology Used
Frontend	Flutter (Dart)
Backend	Node.js (Express.js)
Database	MySQL (Managed via phpMyAdmin)
Authentication	JWT (JSON Web Tokens)

Deployment	macOS Environment
Frontend:netlify.com
Backend:render.com
Mysql:cloudSql

Installation & Setup

Prerequisites

Before running the project, ensure you have the following installed:
	•	Flutter SDK (Latest version)
	•	Node.js & npm (For backend API)
	•	MySQL & phpMyAdmin (For database management)
	•	Git (For version control)

Steps to Set Up the Project

1. Clone the Repository

Open a terminal and run:

git clone https://github.com/amitthomasgeorge/Event_Algomax.git
cd Event_Algomax

2. Set Up the Flutter Project

Inside the root folder, fetch the dependencies:

flutter pub get

3. Set Up the Backend (Node.js API Server)

Move to the backend folder and install required dependencies:

cd backend
npm install

Start the backend server:

node server.js

4. Configure the Database
	•	Open phpMyAdmin and create a new MySQL database.
	•	Import the provided database schema (SQL file) from the repository.
	•	Update the database credentials in the backend configuration file (e.g., .env or config.js).

5. Run the Flutter Application

Ensure the backend is running, then launch the Flutter app:

flutter run

Project Structure

Event_Algomax

│── lib/                      # Flutter frontend code  
│── backend/                  # Node.js backend code  
│── assets/                   # Images, icons, and other static files  
│── database/                 # Database schema and SQL files  
│── README.md                 # Documentation  
│── pubspec.yaml              # Flutter dependencies  
│── package.json              # Node.js dependencies  

Usage Guide

	1.	User Registration & Login
	•	New users can sign up with an Type,email and password.
	•	Authentication is handled using JWT (JSON Web Tokens).
	2.	Event Creation & Management
	•	Admins and authorized users can create and manage events.
	•	Events can be edited or deleted by the organizer.
	3.	Event Participation
	•	Users can browse available events and register for participation.
	4.	Admin Panel
	•	Admins have access to all events and can moderate them.

Contributing

We welcome contributions to improve Event Algomax!
To contribute:

	1.	Fork the repository.
	2.	Create a new branch (feature-new-feature).
	3.	Commit your changes and push to your fork.
	4.	Submit a Pull Request (PR) for review.

License

This project is licensed under the MIT License.
