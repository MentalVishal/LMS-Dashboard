import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Text, Divider, VStack, Checkbox, Flex } from "@chakra-ui/react";
import { useCourses } from "../Component/CourseContext";

const CourseDetails = () => {
  const { id } = useParams();
  const { courses, updateCourseProgress } = useCourses();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const foundCourse = courses.find((c) => c.id === parseInt(id));
    setCourse(foundCourse);
  }, [id, courses]);

  const handleLessonCompletion = (lessonIndex) => {
    const updatedLessons = course.lessons.map((lesson, index) =>
      index === lessonIndex
        ? { ...lesson, completed: !lesson.completed }
        : lesson
    );

    const completedLessons = updatedLessons.filter(
      (lesson) => lesson.completed
    ).length;
    const progress = (completedLessons / updatedLessons.length) * 100;

    const updatedCourse = { ...course, lessons: updatedLessons, progress };

    updateCourseProgress(updatedCourse);
    setCourse(updatedCourse);
  };

  if (!course) {
    return <Text>Loading...</Text>;
  }

  return (
    <Box maxW="5xl" mx="auto" p={5}>
      <Text fontSize="3xl" fontWeight="bold" mb={5}>
        {course.title}
      </Text>
      <Text fontSize="lg" mb={5}>
        {course.description}
      </Text>
      <Text fontSize="lg" mb={5}>
        Progress: {course.progress.toFixed(2)}%
      </Text>
      <VStack spacing={3} align="stretch">
        {course.lessons.map((lesson, index) => (
          <Flex
            key={index}
            align="center"
            justify="space-between"
            bg={lesson.completed ? "green.100" : "white"}
            borderRadius="md"
            p={3}
          >
            <Text>{lesson.title}</Text>
            <Checkbox
              isChecked={lesson.completed}
              onChange={() => handleLessonCompletion(index)}
            >
              Completed
            </Checkbox>
          </Flex>
        ))}
      </VStack>
      <Divider my={5} />
      <Text fontSize="xl" fontWeight="bold" mb={3}>
        Materials
      </Text>
      <VStack spacing={3} align="stretch">
        {course.materials.map((material, index) => (
          <Box key={index} bg="gray.100" borderRadius="md" p={3} boxShadow="md">
            <Text>{material}</Text>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default CourseDetails;
