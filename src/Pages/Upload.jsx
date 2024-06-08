// TeacherCourseUpload.js
import React, { useState } from "react";
import {
  Box,
  Text,
  VStack,
  Input,
  Button,
  Textarea,
  FormControl,
  Flex,
  FormLabel,
} from "@chakra-ui/react";
import { useCourses } from "../Component/CourseContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const TeacherCourseUpload = () => {
  const { addCourse } = useCourses();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [lessons, setLessons] = useState("");
  const [materials, setMaterials] = useState("");
  const navigate = useNavigate();

  const handleUpload = () => {
    const newCourse = {
      id: Date.now(),
      title,
      description,
      lessons: lessons
        .split("\n")
        .map((lesson) => ({ title: lesson, completed: false })),
      materials: materials.split("\n"),
      progress: 0,
    };
    addCourse(newCourse);
    toast.success("Course Added Successfully");
    navigate("/dashboard");
  };

  return (
    <>
      <Box bg="teal.500">
        <Flex
          maxW="7xl"
          mx="auto"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box m={"auto"}>
            <Text
              color="white"
              fontSize={{ base: "3xl", lg: "5xl" }}
              fontWeight="bold"
              mb="1"
            >
              Learning Made Easy
            </Text>
            <Text color="white" fontSize={{ base: "lg", lg: "xl" }} mb="8">
              Access your courses securely and effortlessly with our intuitive
              platform.
            </Text>
          </Box>
        </Flex>
      </Box>

      <Box maxW="7xl" mx="auto" p={3}>
        <Text fontSize="2xl" fontWeight="bold" mb={5}>
          Upload New Course
        </Text>
        <VStack spacing={5} align="stretch">
          <FormControl>
            <FormLabel>Course Title</FormLabel>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter course title"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Course Description</FormLabel>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter course description"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Lessons (one per line)</FormLabel>
            <Textarea
              value={lessons}
              onChange={(e) => setLessons(e.target.value)}
              placeholder="Enter lessons"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Materials (one per line)</FormLabel>
            <Textarea
              value={materials}
              onChange={(e) => setMaterials(e.target.value)}
              placeholder="Enter materials"
            />
          </FormControl>
          <Button colorScheme="teal" onClick={handleUpload}>
            Upload Course
          </Button>
        </VStack>
      </Box>
    </>
  );
};

export default TeacherCourseUpload;
