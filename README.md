
# Dynamic Form Generator

A dynamic form generator built with React and React Hook Form. This application allows you to define forms by providing a JSON schema, and it renders forms based on that schema.

## Setup Instructions

To run the application locally, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/dynamic-form-generator.git
```
### 2. Install Dependencies
Navigate to the project directory and install the required dependencies:
```bash
cd dynamic-form-generator
npm install
```
### 3. Start the Development Server
After the dependencies are installed, start the local development server:
```
npm start
```
The application will be available at http://localhost:3000.

### Example JSON Schemas
Here are some example JSON schemas that you can use to test the dynamic form generation:

#### Example 1: Basic Form with Required Fields
```{
  "formTitle": "User Information",
  "fields": [
    {
      "id": "name",
      "type": "text",
      "label": "Full Name",
      "required": true,
      "placeholder": "Enter your full name"
    },
    {
      "id": "email",
      "type": "email",
      "label": "Email Address",
      "required": true,
      "placeholder": "you@example.com",
      "validation": {
        "pattern": "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$",
        "message": "Please enter a valid email address"
      }
    }
  ]
}
```
#### Example 2: Form with Optional and Pattern Validation Fields

```
{
  "formTitle": "Project Feedback",
  "fields": [
    {
      "id": "feedback",
      "type": "textarea",
      "label": "Feedback",
      "required": true,
      "placeholder": "Enter your feedback"
    },
    {
      "id": "rating",
      "type": "number",
      "label": "Rating",
      "required": false,
      "min": 1,
      "max": 5
    }
  ]
}
```

