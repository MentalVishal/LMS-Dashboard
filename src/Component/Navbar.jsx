import React from "react";
import {
  Flex,
  Box,
  Spacer,
  Button,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  VStack,
  Text,
  Avatar,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navigate = useNavigate();

  let isAuth = JSON.parse(localStorage.getItem("loginUser"));

  const handelLogout = async () => {
    localStorage.removeItem("loginUser");
    toast.success("Logout Successfull");
  };

  return (
    <div style={{ position: "sticky" }}>
      <>
        <Flex bg="blue.500" p={4} align="center">
          <Box p="2">
            <Text
              color="white"
              fontSize="xl"
              fontWeight="bold"
              onClick={() => {
                navigate("/");
              }}
              cursor={"pointer"}
            >
              Learning Management System
            </Text>
          </Box>
          <Spacer />

          <Box display={{ base: "none", md: "block" }}>
            <Button
              mr={2}
              colorScheme="whiteAlpha"
              onClick={() => {
                navigate("/dashboard");
              }}
            >
              Dashboard
            </Button>

            <Button
              mr={2}
              colorScheme="whiteAlpha"
              onClick={() => {
                navigate("/upload");
              }}
            >
              Upload Course
            </Button>
            <Button
              mr={2}
              colorScheme="whiteAlpha"
              onClick={() => {
                navigate("/profile");
              }}
            >
              Profile
            </Button>
            {isAuth ? (
              <Button mr={2} colorScheme="whiteAlpha" onClick={handelLogout}>
                Logout
              </Button>
            ) : (
              <Button
                mr={2}
                colorScheme="whiteAlpha"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </Button>
            )}
            {isAuth === true ? (
              <>
                <Avatar
                  size="md"
                  mr={2}
                  name={isAuth.name}
                  src={`url_to_avatar_image/${isAuth.name}`}
                />
                <Text color="white">{isAuth.name}</Text>
              </>
            ) : null}
          </Box>
          <Box display={{ base: "block", md: "none" }}>
            <IconButton
              icon={<HamburgerIcon />}
              variant="outline"
              colorScheme="whiteAlpha"
              onClick={onOpen}
            />
          </Box>
        </Flex>
        <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay>
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Learning Management System</DrawerHeader>
              <DrawerBody>
                <VStack spacing={4}>
                  <Button
                    colorScheme="teal"
                    w="full"
                    onClick={() => {
                      navigate("/dashboard");
                      onClose();
                    }}
                  >
                    Dashboard
                  </Button>
                  <Button
                    colorScheme="teal"
                    w="full"
                    onClick={() => {
                      navigate("/upload");
                      onClose();
                    }}
                  >
                    Upload Course
                  </Button>
                  <Button
                    colorScheme="teal"
                    w="full"
                    onClick={() => {
                      navigate("/profile");
                      onClose();
                    }}
                  >
                    Profile
                  </Button>
                  {isAuth ? (
                    <Button
                      colorScheme="teal"
                      w="full"
                      onClick={() => {
                        handelLogout();
                        onClose();
                      }}
                    >
                      Logout
                    </Button>
                  ) : (
                    <Button
                      colorScheme="teal"
                      w="full"
                      onClick={() => {
                        navigate("/login");
                        onClose();
                      }}
                    >
                      Login
                    </Button>
                  )}
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </>
    </div>
  );
};
