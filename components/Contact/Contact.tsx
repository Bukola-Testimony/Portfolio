import React from 'react';
import { Box, Flex, Text, Link, Image } from '@chakra-ui/react';

import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { FaThreads } from 'react-icons/fa6';

const Contact = () => {
  return (
    <Box
      id="contact"
      w={{ base: '80%', sm: '80%', md: '80%', lg: '80%', xl: '80%', '2xl': '1440px' }}
      margin={'0 auto'}
      display="flex"
      flexDirection="column"
      alignItems="center"
      pb={20}
    >
      <Flex
        flexDirection="row"
        alignItems="center"
        mb={5}
        gap={3}
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <Text fontSize="2rem" fontWeight="bold" pt={3} color="#8c9095">
          Get in Touch
        </Text>
        <Image src="reach-out.png" alt="Reach Out" w={'50px'} height={'50px'} />
      </Flex>
      <Text
        fontSize={{
          base: '1rem',
          sm: '1rem',
          md: '1.2rem',
          lg: '1.2rem',
          xl: '1.2rem',
          '2xl': '1.2rem',
        }}
        textAlign="center"
        mb={5}
        data-aos="fade-up"
        data-aos-delay="300"
      >
        You can reach out to me through any of these medium, be it to ask some questions, discuss
        opportunities for work and collaborations or just to catch up and chat. I will definitely
        get back to you.
      </Text>
      <Flex
        fontSize={{
          base: '1.8rem',
          sm: '1.8rem',
          md: '2.2rem',
          lg: '2.2rem',
          xl: '2.2rem',
          '2xl': '2.2rem',
        }}
        gap="2rem"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <Link href="https://github.com/Bukola-Testimony" target="_blank" className="logo">
          <FaGithub cursor="pointer" />
        </Link>

        <Link href="https://linkedin.com/in/bukola-testimony" target="_blank" className="logo">
          <FaLinkedin />
        </Link>

        <Link href="mailto:bukolatestimony1@gmail.com" target="_blank" className="logo">
          <FaEnvelope />
        </Link>

        <Link href="https://x.com/BukolaTestimony" target="_blank" className="logo">
          <FaTwitter />
        </Link>

        <Link href="https://www.threads.com/@bukola_testimony" target="_blank" className="logo">
          <FaThreads />
        </Link>
      </Flex>
    </Box>
  );
};

export default Contact;
