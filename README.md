# Daily News Management System

A responsive **Daily News Management System** built using **React.js** and **Bootstrap 5** that allows users to manage daily news records with complete CRUD functionality.

## Features

* Add News
* Edit News
* Delete News
* Search News by Title
* Filter News by Status (Active/Inactive)
* Manual Pagination
* Responsive Dashboard UI
* File Upload Support for Images and Videos
* File Validation (Maximum 5 MB)
* Required Field Validation
* LocalStorage Data Persistence
* CreatedOn and UpdatedOn Tracking
* CreatedBy and UpdatedBy Tracking
* No Page Reload CRUD Operations

## Technologies Used

* React.js
* Bootstrap 5
* JavaScript (ES6+)
* HTML5
* CSS3
* LocalStorage API

## Project Structure

```text
src/
│
├── components/
│   ├── NewsForm.jsx
│   └── NewsTable.jsx
│
├── pages/
│   └── Dashboard.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

## Fields Included

* News Title
* News Description
* Category
* News Date
* Region
* Status
* Language
* City
* Country
* Banner Image
* News Video
* Created On
* Created By
* Updated On
* Updated By

## Validation Implemented

### Required Fields

* News Title
* News Description
* Category
* News Date

### File Validation

* Image files only for Banner Image
* Video files only for News Video
* Maximum file size: **5 MB**

## Local Storage

News records are stored in browser LocalStorage using:

```text
NewsDetails
```

This allows data to remain available after page refresh.

## Future Enhancements

* Backend Integration using PHP and MySQL
* AJAX API Integration
* Authentication and Authorization
* Image Preview
* Export to Excel/PDF
* Advanced Filters

