import React, { useEffect } from "react";
import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Grid,
  GridItem,
  Text,
  Select,
} from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

export const EditPage = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [gender, setGender] = useState("");
  const [course, setCourse] = useState("");
  const [dob, setDob] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    let ans = JSON.parse(localStorage.getItem("loginUser"));

    setName(ans.name);
    setemail(ans.email);
    setGender(ans.gender);
    setPassword(ans.password);
    setDob(ans.dob);
    setCourse(ans.course);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedData = {
      name: name,
      email: email,
      gender: gender,
      password: password,
      dob: dob,
      course: course,
    };
    localStorage.setItem("loginUser", JSON.stringify(updatedData));
    toast.success("User Data Updated.");
    navigate("/profile");
  };

  return (
    <div>
      <Box p={6} maxW="xl" mx="auto">
        <Text fontSize="2xl" fontWeight="bold" color="teal.600" mb={4}>
          Edit Your Details
        </Text>
        <form onSubmit={handleSubmit}>
          <Grid templateColumns="repeat(2, 1fr)" gap={4}>
            <GridItem colSpan={2}>
              <FormControl id="full_name" isRequired>
                <FormLabel>Full Name</FormLabel>
                <Input
                  type="text"
                  name="full_name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </FormControl>
            </GridItem>

            <GridItem>
              <FormControl id="gender" isRequired>
                <FormLabel>Gender</FormLabel>
                <Select
                  name="gender"
                  value={gender}
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </Select>
              </FormControl>
            </GridItem>

            <GridItem>
              <FormControl id="date_of_birth" isRequired>
                <FormLabel>Date of Birth</FormLabel>
                <Input
                  type="date"
                  name="date_of_birth"
                  value={dob}
                  onChange={(e) => {
                    setDob(e.target.value);
                  }}
                />
              </FormControl>
            </GridItem>

            <GridItem colSpan={2}>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                />
              </FormControl>
            </GridItem>

            <GridItem colSpan={2}>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <Input
                  type="text"
                  name="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <FormControl id="course" isRequired>
                <FormLabel>Course</FormLabel>
                <Input
                  type="text"
                  name="course"
                  value={course}
                  onChange={(e) => {
                    setCourse(e.target.value);
                  }}
                />
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <Button
                type="submit"
                colorScheme="teal"
                size="lg"
                fontWeight="bold"
                w="full"
              >
                Save Changes
              </Button>
            </GridItem>
          </Grid>
        </form>
      </Box>
    </div>
  );
};
