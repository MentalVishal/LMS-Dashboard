// CourseListing.js
import React from "react";
import { Box, Text, VStack, Button, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useCourses } from "../Component/CourseContext";

const CourseListing = () => {
  const navigate = useNavigate();
  const { courses } = useCourses();

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
              mb="6"
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

      <Box maxW="7xl" mx="auto" p={5}>
        <Text fontSize="2xl" fontWeight="bold" mb={5}>
          Available Courses
        </Text>
        <VStack spacing={5} align="stretch">
          {courses.map((course) => (
            <Box key={course.id} p={5} shadow="md" borderWidth="1px">
              <Text fontSize="xl" fontWeight="bold">
                {course.title}
              </Text>
              <Text mt={2}>{course.description}</Text>
              <Flex justify="space-between" align="center" mt={4}>
                <Button
                  colorScheme="teal"
                  onClick={() => navigate(`/course/${course.id}`)}
                >
                  View Course
                </Button>
                <Text>Progress: {course.progress.toFixed(2)}%</Text>
              </Flex>
            </Box>
          ))}
        </VStack>
      </Box>
    </>
  );
};

export default CourseListing;
