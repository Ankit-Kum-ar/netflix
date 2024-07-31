# Netflix 🎬✨

Welcome to **Netflix**, an immersive and fully functional movie streaming application. This project leverages modern web technologies to provide a seamless and engaging user experience.

## Tech Stack 🛠️

- **React**: A JavaScript library for building user interfaces.
- **Redux**: A state management library for JavaScript apps.
- **Firebase**: Platform for user authentication and database management.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **TMDB API**: Source of movie data.
- **Gemini API**: Provides movie data related to specific genres.

## Description 📖

### Overview

This Netflix project replicates the core features of the popular streaming service, providing users with an intuitive interface to browse, search, and watch movie trailers. It incorporates advanced user authentication, dynamic content fetching, and state management to create a robust and scalable application.

### Features 🌟

- **User Authentication** 🔐: The application includes a sign-in and sign-out page powered by Google Firebase. This ensures secure and reliable user authentication. Each user's credentials are stored using Firebase, providing persistent authentication across sessions.
- **Protected Routes** 🛡️: Implementing route protection ensures that authenticated users cannot access the login page again until they sign out. Similarly, non-authenticated users cannot access the main browsing features of the app.
- **Dynamic Content Fetching** 📡: The application fetches movie data dynamically from the TMDB API. This includes a featured movie trailer at the top of the browsing page, which is embedded using the YouTube API. The trailer's description and name are also sourced from the TMDB API.
- **Movie Categories** 🎥: Below the featured trailer, the app displays various categories of movies and TV shows. These categories include popular movies, now-playing movies, and top-rated movies. Custom hooks are used to fetch data for each category, ensuring efficient and reusable code.
- **Genre-Based Search** 🔍: An integrated search function allows users to find movies by genre or name. This feature utilizes the TMDB API for general searches and the Gemini API for genre-specific searches, providing comprehensive and relevant results.
- **State Management** 📊: Redux Toolkit is used to manage the state of the application. This includes storing user information, movie data, and search results, ensuring a smooth and consistent user experience.

### Components 🛠️

#### 1. `Login` 🔑

- **Description**: This component handles user authentication. It includes forms for sign-in and sign-up, both integrated with Firebase.
- **Purpose**: Securely manages user login and registration, protecting routes based on authentication status.

#### 2. `Browser` 🎥

- **Description**: This component is the main interface for browsing movies. It features a movie trailer section, multiple categories of movies and TV shows, and a search bar for finding movies by name or genre.
- **Purpose**: Provides a dynamic and engaging interface for users to explore and search for movies.

## Screenshots 📸

Here are some screenshots of the application across different screens and functionalities:

### Sign-In & Sign-Up Pages 🔑

#### Laptop Screen
![Sign-In Page - Laptop](https://github.com/user-attachments/assets/9c4c8131-a844-4915-a4dd-84daa1daab14)

![Sign-Up Page - Laptop](https://github.com/user-attachments/assets/2508bc9c-11ab-4b6c-8bb3-e9da88c2d141)

#### Mobile Screen
![Sign-In Page - Mobile](https://github.com/user-attachments/assets/cc0acb9a-561b-447b-acbb-f5dcda5cad1a)

![Sign-Up Page - Mobile](https://github.com/user-attachments/assets/7b7f919c-0b99-4255-8ec2-b4ff81308bb9)

### Browser Page 🎥

#### Laptop Screen
![Browser Page - Laptop](https://github.com/user-attachments/assets/03d754bd-2c38-454b-92c0-ca113d2626ee)
![Browser Page - Laptop](https://github.com/user-attachments/assets/c72953b4-9503-4993-8c82-af7825834f7f)

#### Mobile Screen
![Browser Page - Mobile](https://github.com/user-attachments/assets/c78840a3-93a1-4fa9-893e-4644bd0ac7ef)

### Search Page 🔍

#### Laptop Screen
![Search Page - Laptop](https://github.com/user-attachments/assets/6447b063-c0d6-4b99-ad52-d2c29094f75d)

#### Mobile Screen
![Search Page - Mobile](https://github.com/user-attachments/assets/8b7f64dc-7f1b-4e4b-be44-ab254f0ad77a)



## Installation 📥

To set up the project locally, follow these steps:

1. **Clone the repository**:

    ```bash
    git clone https://github.com/Ankit-Kum-ar/netflix.git
    ```

2. **Navigate to the project directory**:

    ```bash
    cd netflix
    ```

3. **Install the dependencies**:

    ```bash
    npm install
    ```

4. **Create a `.env` file** with your Firebase and API credentials:

    ```plaintext
    REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
    REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
    REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
    REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
    REACT_APP_FIREBASE_APP_ID=your_firebase_app_id
    REACT_APP_TMDB_API_KEY=your_tmdb_api_key
    REACT_APP_GEMINI_API_KEY=your_gemini_api_key
    ```

5. **Start the development server**:

    ```bash
    npm start
    ```

## Usage 🖥️

1. Open your browser and navigate to `http://localhost:3000`.
2. Sign in using your Google account.
3. Browse movies, search by genre, and enjoy the seamless streaming experience.

## Contributing 🤝

We welcome contributions to enhance Netflix! To contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a pull request.

## License 📄

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Thank you for checking out Netflix! I hope you enjoy using it as much as I enjoyed building it. 🎉🍿
