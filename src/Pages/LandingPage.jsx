import React from "react";
import { Box, Flex, Text, Button, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import about from "../assest/about.png";
import hero from "../assest/hero.png";
import kids from "../assest/kids.png";
import pic from "../assest/pic.png";
import test from "../assest/test.png";
import web from "../assest/web.png";

export const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <Box>
      {/* Hero Section */}
      <Box bg="teal.500" py="20" px="4">
        <Flex
          maxW="7xl"
          mx="auto"
          alignItems="center"
          justifyContent="space-between"
          flexDir={{ base: "column", lg: "row" }}
        >
          <Box maxW={{ base: "lg", lg: "xl" }} mr={{ base: 0, lg: "12" }}>
            <Text
              color="white"
              fontSize={{ base: "3xl", lg: "5xl" }}
              fontWeight="bold"
              mb="6"
            >
              Welcome to Our Learning Management System
            </Text>
            <Text color="white" fontSize={{ base: "lg", lg: "xl" }} mb="8">
              Access and manage your courses with ease through our intuitive
              platform.
            </Text>
            <Button
              colorScheme="whiteAlpha"
              color="blue.500"
              background={"white"}
              px="8"
              py="4"
              fontSize="lg"
              onClick={() => {
                navigate("/login");
              }}
            >
              Get Started
            </Button>
          </Box>
          <Image
            src={hero}
            alt="Learning Management System"
            borderRadius="lg"
            boxShadow="lg"
            maxW={{ base: "full", lg: "md" }}
            m={2}
          />
        </Flex>
      </Box>

      {/* Features Section */}
      <Box bg="gray.100" py="20" px="4">
        <Flex
          maxW="7xl"
          mx="auto"
          justifyContent="center"
          flexWrap="wrap"
          alignItems="center"
        >
          <Box
            maxW={{ base: "lg", lg: "xl" }}
            textAlign="center"
            mb={{ base: "12", lg: 0 }}
          >
            <Text
              color="blue.500"
              fontSize={{ base: "2xl", lg: "4xl" }}
              fontWeight="bold"
              mb="6"
            >
              Features That Simplify Learning
            </Text>
            <Text fontSize={{ base: "lg", lg: "xl" }} color="gray.600" mb="8">
              Our platform offers a range of features designed to enhance your
              learning experience.
            </Text>
          </Box>
          <Flex
            flexDir="column"
            maxW={{ base: "sm", lg: "xs" }}
            mx={{ base: "auto", lg: "0" }}
            mb={{ base: "8", lg: 0 }}
          >
            <Image
              src={about}
              alt="Feature 1"
              borderRadius="lg"
              m="2"
              boxShadow="md"
            />
            <Image
              src={kids}
              alt="Feature 2"
              borderRadius="lg"
              m="2"
              boxShadow="md"
            />
          </Flex>
          <Flex
            flexDir="column"
            maxW={{ base: "sm", lg: "xs" }}
            mx={{ base: "auto", lg: "0" }}
            mb={{ base: "8", lg: 0 }}
          >
            <Image
              src={pic}
              alt="Feature 3"
              borderRadius="lg"
              m="2"
              boxShadow="md"
            />
            <Image
              src={test}
              alt="Feature 4"
              borderRadius="lg"
              m="2"
              boxShadow="md"
            />
          </Flex>
        </Flex>
      </Box>

      {/* Call to Action */}
      <Box bg="blue.500" py="20" px="4">
        <Flex
          maxW="7xl"
          mx="auto"
          alignItems="center"
          justifyContent="center"
          flexDir={{ base: "column", lg: "row" }}
        >
          <Box
            maxW={{ base: "lg", lg: "xl" }}
            textAlign="center"
            mb={{ base: "12", lg: 0 }}
          >
            <Text
              color="white"
              fontSize={{ base: "3xl", lg: "5xl" }}
              fontWeight="bold"
              mb="6"
            >
              Start Learning Today
            </Text>
            <Text color="white" fontSize={{ base: "lg", lg: "xl" }} mb="8">
              Join us and take your learning journey to the next level.
            </Text>
            <Button
              colorScheme="whiteAlpha"
              color="blue.500"
              background={"white"}
              px="8"
              py="4"
              fontSize="lg"
              onClick={() => {
                navigate("/signup");
              }}
            >
              Sign Up
            </Button>
          </Box>
          <Image
            src={web}
            alt="Call to Action"
            borderRadius="lg"
            m={3}
            boxShadow="lg"
            maxW={{ base: "full", lg: "md" }}
          />
        </Flex>
      </Box>
    </Box>
  );
};
