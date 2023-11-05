# Interactive Bookshelf - README

Interactive Bookshelf is a web application built using Next.js and Tailwind CSS, allowing users to search for books, add them to their bookshelf, and view book details. This README provides instructions for setting up the project, explains the design decisions, and provides instructions for running the application.

## Table of Contents
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Structure](#project-structure)
- [Design Decisions](#design-decisions)
- [Running the Application](#running-the-application)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites
Before you can run the Interactive Bookshelf application, you need to have the following software installed on your system:

- [Node.js](https://nodejs.org/) (v14.17.3 or higher)
- [npm](https://www.npmjs.com/) (Node Package Manager)

### Installation
Follow these steps to set up the Interactive Bookshelf project:

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/shounaksarker/Interactive-Bookshelf
   ```

2. Navigate to the project directory:
   ```bash
   cd interactive-bookshelf
   ```

3. Install project dependencies using npm:
   ```bash
   npm install
   ```

## Project Structure

The project structure is organized as follows:

- `components`: Contains React components used to build the application.
- `app`: Defines the application's main page and layout.
- `README.md`: The project's documentation.

## Design Decisions

Interactive Bookshelf was designed with simplicity and user-friendliness in mind. Here are some key design decisions:

- **Front-end Framework**: Next.js was chosen for its server-side rendering capabilities, making the application fast and SEO-friendly.

- **UI Styling**: Tailwind CSS was used for quick and responsive UI development. It allows for easy customization and styling.

- **External API**: The Google Books API is used to fetch book data. It enables users to search for books and view book details.

- **User Interaction**: Users can search for books using keywords. They can add books to their bookshelf, and book details are displayed on a modal.

- **Toasts**: Toast notifications are used to provide feedback to users on search results, errors, and other interactions.

## Running the Application

To run Interactive Bookshelf locally, follow these steps:

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open your web browser and go to [http://localhost:3000](http://localhost:3000).

## Usage

1. **Search for Books**: On the homepage, enter keywords in the search bar and click the "Search" button. The results will be displayed in the main section.

2. **Add Books to Bookshelf**: Click the "Add to Bookshelf" button on a book card to add it to your bookshelf. The bookshelf on the right side of the app will show the added books.

3. **View Book Details**: Click on a book card to view its details. You can see the book's cover, title, author, and other information.

4. **Notifications**: The application provides toast notifications for different scenarios, such as no search results, network errors, and more.