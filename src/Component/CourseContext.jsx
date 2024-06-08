// CoursesContext.js
import React, { createContext, useState, useContext } from "react";

const CoursesContext = createContext();

export const useCourses = () => useContext(CoursesContext);

export const CoursesProvider = ({ children }) => {
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: "Introduction to Programming",
      description:
        "Learn the basics of programming using Python. This course covers basic concepts, syntax, and logic.",
      progress: 0,
      lessons: [
        { title: "Getting Started with Python", completed: false },
        { title: "Variables and Data Types", completed: false },
        { title: "Control Structures", completed: false },
        { title: "Functions and Modules", completed: false },
      ],
      materials: [
        "Introduction to Python.pdf",
        "Variables and Data Types.pdf",
        "Control Structures.pdf",
        "Functions and Modules.pdf",
      ],
    },
    {
      id: 2,
      title: "Web Development Fundamentals",
      description:
        "An introductory course on web development. Learn how to build web pages using HTML, CSS, and JavaScript.",
      progress: 0,
      lessons: [
        { title: "Introduction to HTML", completed: false },
        { title: "Styling with CSS", completed: false },
        { title: "JavaScript Basics", completed: false },
        { title: "Building a Web Page", completed: false },
      ],
      materials: [
        "HTML Basics.pdf",
        "CSS Styling.pdf",
        "JavaScript Basics.pdf",
        "Building a Web Page.pdf",
      ],
    },
    {
      id: 3,
      title: "Data Science with Python",
      description:
        "Learn the fundamentals of data science using Python. This course includes data analysis, visualization, and machine learning basics.",
      progress: 0,
      lessons: [
        { title: "Data Analysis with Pandas", completed: false },
        { title: "Data Visualization with Matplotlib", completed: false },
        { title: "Introduction to Machine Learning", completed: false },
        { title: "Working with Data in Python", completed: false },
      ],
      materials: [
        "Pandas Data Analysis.pdf",
        "Matplotlib Visualization.pdf",
        "Intro to Machine Learning.pdf",
        "Working with Data.pdf",
      ],
    },
    // Add more initial courses as needed
  ]);

  const addCourse = (course) => {
    setCourses([...courses, course]);
  };

  const updateCourseProgress = (updatedCourse) => {
    setCourses((prevCourses) =>
      prevCourses.map((course) =>
        course.id === updatedCourse.id ? updatedCourse : course
      )
    );
  };

  return (
    <CoursesContext.Provider
      value={{ courses, addCourse, updateCourseProgress }}
    >
      {children}
    </CoursesContext.Provider>
  );
};
