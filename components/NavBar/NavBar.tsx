import React from 'react';
import { useRef } from 'react';

import {
  Icon,
  Flex,
  Box,
  Link,
  Button,
  IconButton,
  useColorMode,
  useDisclosure,
  Drawer,
  Text,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';
import { FaCode, FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navRef = useRef<null | HTMLButtonElement>(null);

  return (
    <Flex
      position={'fixed'}
      top={0}
      width={'100%'}
      justifyContent="center"
      boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)"
      backdropFilter="blur(5px)"
      zIndex={10}
    >
      <Flex
        justifyContent="space-between"
        py={5}
        alignItems="center"
        width="90vw"
        w={{ base: '87vw', sm: '80vw', md: '80vw', lg: '88vw', xl: '87vw', '2xl': '75vw' }}
      >
        <Box>
          <Icon as={FaCode} fontSize="3xl" />
        </Box>

        <Flex gap={14} alignItems="center" textTransform="uppercase" fontWeight="bold">
          <Link
            className="nav-link"
            href="#about"
            display={{
              base: 'none',
              sm: 'none',
              md: 'none',
              lg: 'block',
              xl: 'block',
              '2xl': 'block',
            }}
          >
            About
          </Link>
          <Link
            className="nav-link"
            href="#projects"
            display={{
              base: 'none',
              sm: 'none',
              md: 'none',
              lg: 'block',
              xl: 'block',
              '2xl': 'block',
            }}
          >
            Projects
          </Link>
          <Link
            className="nav-link"
            href="#contact"
            display={{
              base: 'none',
              sm: 'none',
              md: 'none',
              lg: 'block',
              xl: 'block',
              '2xl': 'block',
            }}
          >
            Contact
          </Link>
          <IconButton
            display={{
              base: 'none',
              sm: 'none',
              md: 'none',
              lg: 'flex',
              xl: 'flex',
              '2xl': 'flex',
            }}
            background="none"
            aria-label="icon"
            icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
            onClick={toggleColorMode}
          />
          <Button
            display={{
              base: 'block',
              sm: 'block',
              md: 'block',
              lg: 'none',
              xl: 'none',
              '2xl': 'none',
            }}
            ref={navRef}
            onClick={onOpen}
          >
            <FaBars />
          </Button>

          <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={navRef}>
            <DrawerOverlay backdropFilter="blur(2px)" />
            <DrawerContent>
              <DrawerCloseButton />

              <DrawerBody
                display="flex"
                flexDirection="column"
                alignItems="center"
                gap={8}
                textTransform="uppercase"
                fontWeight="bold"
                marginTop={20}
              >
                <Text textTransform="capitalize" fontSize="large">
                  Bukola Testimony
                </Text>
                <Link href="#about">About</Link>
                <Link href="#projects">Projects</Link>
                <Link href="#contact">Contact</Link>
                <Link
                  href="/resume.pdf"
                  target="_blank"
                  outline="solid"
                  px={6}
                  py={2}
                  borderRadius={3}
                >
                  Resume
                </Link>
                <IconButton
                  aria-label="icon"
                  icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
                  onClick={toggleColorMode}
                />
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default NavBar;
