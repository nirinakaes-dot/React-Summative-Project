# React-Summative-Project
## Personal Project Showcase App

A Single Page Application (SPA) built with React and styled with Tailwind CSS. Users can add, display, and search through their personal projects in a clean and responsive portfolio interface.


## Features

- Add projects with a name and description
- Live search filtering with a no-results message
- Form validation — prevents empty submissions
- Inputs clear automatically after submission
- Responsive layout with a static navbar
- Contact section for inquiries


## Tech Stack

- **React**
- **Vite** 
- **Tailwind CSS** 
- **JavaScript**


## Project Structure

```
src/
├── App.jsx
├── main.jsx
├── index.css
└── Additions/
    ├── NavBar.jsx
    ├── ProjectForm.jsx
    ├── BarSearch.jsx
    ├── CardProjects.jsx
    └── Contact.jsx
```


## Components

### `App.jsx`
The root component. Manages global state for the projects list, search query, and form visibility. Passes props down to child components.

### `NavBar.jsx`
Top navigation bar displaying the portfolio title.

### `ProjectForm.jsx`
Controlled form component with its own local state for inputs. Handles validation, submission, and clearing of fields. Calls `onSubmission` prop to pass new project data up to `App.jsx`.

### `BarSearch.jsx`
Search input that calls `onSearch` on every keystroke, triggering live filtering in `App.jsx`.

### `CardProjects.jsx`
Displays a single project card with the project name and description. Receives a `project` prop from `App.jsx`.

### `Contact.jsx`
A simple contact section at the bottom of the page with a mailto link.


## Usage

1. Fill in the project form with a name and description
3. Click **+ Add Project** to save it
4. Use the search bar to filter projects by name or description
5. Scroll down to the contact section to get in touch

---

## Author

Made by **Nina Adora** as part of the Moringa School Module 3 Summative Project.

## License
Licensed by MIT


