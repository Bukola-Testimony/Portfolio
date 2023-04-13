import React from 'react';

import { Flex, Text, Link } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Flex justifyContent={'center'} mb={'2rem'} data-aos="fade-down" data-aos-delay="200">
      <Text
        color="#8c9095"
        fontSize={{
          base: '0.75rem',
          sm: '0.75rem',
          md: '1rem',
          lg: '1rem',
          xl: '1rem',
          '2xl': '1rem',
        }}
      >
        Designed and Developed with 💙 
      </Text>
    </Flex>
  );
};

export default Footer;
