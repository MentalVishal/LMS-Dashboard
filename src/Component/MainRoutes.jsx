import React from "react";
import { Route, Routes } from "react-router-dom";
import { SignIn } from "../Pages/SignIn";
import { SignUpPage } from "../Pages/SignUp";
import { LandingPage } from "../Pages/LandingPage";
import { ErrorPage } from "../Pages/ErrorPage";
import { EditPage } from "../Pages/EditPage";
import { PrivateRoute } from "./PrivateRoutes";
import { Profile } from "../Pages/Profile";
import CourseDetails from "../Pages/CourseDetails";
import TeacherCourseUpload from "../Pages/Upload";
import { ChakraProvider } from "@chakra-ui/react";
import { CoursesProvider } from "./CourseContext";
import CourseListing from "../Pages/Dashboard";

export const MainRoutes = () => {
  return (
    <ChakraProvider>
      <CoursesProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <CourseListing />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route path="/edit/:id" element={<EditPage />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/course/:id" element={<CourseDetails />} />
          <Route
            path="/upload"
            element={
              <PrivateRoute>
                <TeacherCourseUpload />
              </PrivateRoute>
            }
          />
        </Routes>
      </CoursesProvider>
    </ChakraProvider>
  );
};
