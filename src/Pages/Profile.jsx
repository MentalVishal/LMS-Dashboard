import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Text,
  Stack,
  Divider,
  Avatar,
  Flex,
  Spinner,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    setLoading(true);
    const storedUserData = JSON.parse(localStorage.getItem("loginUser"));
    setFormData(storedUserData);
    setLoading(false);
  }, []);

  return (
    <Box>
      <Box py={7} textAlign="center">
        <Flex direction="column" align="center">
          <Avatar size="2xl" name={formData?.name} src="/avatar.jpg" />
          <Text mt={4} color="teal.500" fontSize="3xl" fontWeight="bold">
            {formData?.name}
          </Text>
        </Flex>
      </Box>

      <Box maxW="xl" mx="auto" mt={2} p={6}>
        {loading ? (
          <Flex justify="center" align="center" direction="column">
            <Spinner size="xl" />
            <Text mt={4}>Loading...</Text>
          </Flex>
        ) : (
          <Stack spacing={6}>
            <Box
              borderWidth="1px"
              borderRadius="lg"
              p={6}
              boxShadow="lg"
              bg="white"
            >
              <Stack spacing={4}>
                <Text fontSize="xl" fontWeight="bold">
                  Personal Information
                </Text>
                <Divider />
                <Stack spacing={2}>
                  <Text fontSize="lg">
                    <strong>Email:</strong> {formData?.email}
                  </Text>
                  <Text fontSize="lg">
                    <strong>Password:</strong> {formData?.password}
                  </Text>
                  <Text fontSize="lg">
                    <strong>Date of Birth:</strong> {formData?.dob}
                  </Text>
                  <Text fontSize="lg">
                    <strong>Gender:</strong> {formData?.gender}
                  </Text>
                  <Text fontSize="lg">
                    <strong>Course:</strong> {formData?.course}
                  </Text>
                </Stack>
              </Stack>
            </Box>
            <Button
              colorScheme="teal"
              size="lg"
              fontWeight="bold"
              boxShadow="lg"
              _hover={{ bg: "teal.500" }}
              onClick={() => {
                navigate(`/edit/${formData._id}`);
              }}
            >
              Edit Details
            </Button>
          </Stack>
        )}
      </Box>
    </Box>
  );
};
