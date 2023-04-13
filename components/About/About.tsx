import React from 'react';
import { Flex, Box, Image, Text, Divider, Link } from '@chakra-ui/react';

const About = () => {
  return (
    <Flex
      id="about"
      flexDirection={{
        base: 'column',
        sm: 'column',
        md: 'column',
        lg: 'row',
        xl: 'row',
        '2xl': 'row',
      }}
      mt={{ base: '8rem', sm: '8rem', md: '8rem', lg: '12rem', xl: '16rem', '2xl': '20rem' }}
      mb={{ base: '5rem', sm: '5rem', md: '5rem', lg: '12rem', xl: '12rem', '2xl': '12rem' }}
      gap={{ base: 20, sm: 20, md: 20, lg: 50, xl: '8rem', '2xl': '12rem' }}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Flex
        display={{ base: 'flex', sm: 'flex', md: 'flex', lg: 'none', xl: 'none', '2xl': 'none' }}
        flexDirection={'column'}
        alignItems="center"
        margin={'0 auto'}
        w={'85%'}
      >
        <Text
          fontSize="1.5rem"
          textAlign="center"
          fontWeight="bold"
          color="#8c9095"
          data-aos="fade-left"
          data-aos-delay="100"
        >
          About Me
        </Text>
        <Divider mt={'1rem'} />
      </Flex>

      <Box data-aos="fade-right" data-aos-delay="200">
        <Image
          className="img-overlay-control"
          w={{ base: '15rem', sm: '15rem', md: '15rem', lg: '30rem', xl: '30rem', '2xl': '30rem' }}
          src="portrait.jpg"
          alt="Bukola testimony's Official Portrait"
          borderRadius={10}
        />
      </Box>
      <Box
        fontSize={'1.2rem'}
        w={{ base: '85%', sm: '85%', md: '85%', lg: '30rem', xl: '33rem', '2xl': '47rem' }}
      >
        <Flex
          display={{ base: 'none', sm: 'none', md: 'none', lg: 'flex', xl: 'flex', '2xl': 'flex' }}
          flexDirection="column"
        >
          <Text
            fontSize="2.5rem"
            textAlign="center"
            fontWeight="bold"
            color={'#8c9095'}
            data-aos="fade-left"
            data-aos-delay="100"
          >
            About Me
          </Text>
          <Divider mt={'1rem'} mb={'2rem'} data-aos="fade-left" data-aos-delay="200" />
        </Flex>
        <Text
          mb={'2rem'}
          fontSize={{ base: 'md', sm: 'md', md: 'md', lg: 'lg', xl: 'lg', '2xl': 'lg' }}
          data-aos="fade-left"
          data-aos-delay="300"
        >
          Hello! My name is Bukola.  I am a Human-resource Consultant and a Cloud DevOps Engineer. I love problem-solving and collaborating with progressive minded individuals. I constantly engage in personal development. I hope to make a lot of money and travel the world.
        </Text>
        <Text
          mb={'2rem'}
          fontSize={{ base: 'md', sm: 'md', md: 'md', lg: 'lg', xl: 'lg', '2xl': 'lg' }}
          data-aos="fade-left"
          data-aos-delay="400"
        >
          I am a Tech enthusiast and spend most of my time creating solutions. I love to solve problems and also have fun while learning new things. I am an AWS Certified Cloud Practitioner(CLF-CO1). View my badge{' '}
          <Link color="#8c9095" href="https://www.credly.com/badges/40c68c84-ef41-4b91-be39-2cd9b8d06391/email" target="_blank">
            here.
          </Link>
        </Text>
        <Text
          mb={'2rem'}
          fontSize={{ base: 'md', sm: 'md', md: 'md', lg: 'lg', xl: 'lg', '2xl': 'lg' }}
          data-aos="fade-left"
          data-aos-delay="500"
        >
          I specialize in cloud infrastructure, systems engineering,software installation, automation, and CI/CD pipelines. I have experience with a wide range of technologies including AWS and GCP cloud platforms.
        </Text>
        <Text
          fontSize={{
            base: '1.3rem',
            sm: '1.3rem',
            md: '1.3rem',
            lg: '2rem',
            xl: '2rem',
            '2xl': '2rem',
          }}
          color="#8c9095"
          mb={'1rem'}
          data-aos="fade-left"
          data-aos-delay="600"
        >
          Here are a few technologies I use:
        </Text>
        <Flex
          gap={'15px'}
          alignItems="center"
          flexWrap={'wrap'}
          data-aos="fade-left"
          data-aos-delay="700"
        >
          <Box className="tools">
            <Image
              src="/aws.png"
              alt="aws logo"
              w={{ base: '2rem', sm: '2rem', md: '2rem', lg: '3rem', xl: '3rem', '2xl': '3rem' }}
            />
            <Text color="#8c9095" fontWeight="bold" fontSize="md">
              AWS Cloud
            </Text>
          </Box>
          <Box className="tools">
            <Image
              src="/gcp.png"
              alt="google cloud logo"
              w={{ base: '2rem', sm: '2rem', md: '2rem', lg: '3rem', xl: '3rem', '2xl': '3rem' }}
            />
            <Text color="#8c9095" fontWeight="bold" fontSize="md">
              Google Cloud
            </Text>
          </Box>
          <Box className="tools">
            <Image
              src="/git.png"
              alt="git logo"
              w={{ base: '2rem', sm: '2rem', md: '2rem', lg: '3rem', xl: '3rem', '2xl': '3rem' }}
            />
            <Text color="#8c9095" fontWeight="bold" fontSize="md">
              Git
            </Text>
          </Box>
          <Box className="tools">
            <Image
              src="/terraform.png"
              alt="terraform logo"
              w={{ base: '2rem', sm: '2rem', md: '2rem', lg: '3rem', xl: '3rem', '2xl': '3rem' }}
            />
            <Text color="#8c9095" fontWeight="bold" fontSize="md">
             Terraform
            </Text>
          </Box>
          <Box className="tools">
            <Image
              src="/kubectl.png"
              alt="kubernetes"
              w={{ base: '2rem', sm: '2rem', md: '2rem', lg: '3rem', xl: '3rem', '2xl': '3rem' }}
            />
            <Text color="#8c9095" fontWeight="bold" fontSize="md">
              Kubernetes
            </Text>
          </Box>
          <Box className="tools">
            <Image
              src="/docker.png"
              alt="docker logo"
              w={{ base: '2rem', sm: '2rem', md: '2rem', lg: '3rem', xl: '3rem', '2xl': '3rem' }}
            />
            <Text color="#8c9095" fontWeight="bold" fontSize="md">
              Docker
            </Text>
          </Box>
          <Box className="tools">
            <Image
              src="/ansible.png"
              alt="ansible logo"
              w={{ base: '2rem', sm: '2rem', md: '2rem', lg: '3rem', xl: '3rem', '2xl': '3rem' }}
            />
            <Text color="#8c9095" fontWeight="bold" fontSize="md">
              Ansible
            </Text>
          </Box>
          <Box className="tools">
            <Image
              src="/jenkins.png"
              alt="jenkins logo"
              w={{ base: '2rem', sm: '2rem', md: '2rem', lg: '3rem', xl: '3rem', '2xl': '3rem' }}
            />
            <Text color="#8c9095" fontWeight="bold" fontSize="md">
              Jenkins
            </Text>
          </Box>
          <Box className="tools">
            <Image
              src="/linux.png"
              alt="linux logo"
              w={{ base: '2rem', sm: '2rem', md: '2rem', lg: '3rem', xl: '3rem', '2xl': '3rem' }}
            />
            <Text color="#8c9095" fontWeight="bold" fontSize="md">
              Linux
            </Text>
          </Box>
          <Box className="tools">
            <Image
              src="/bash.png"
              alt="bash logo"
              w={{ base: '2rem', sm: '2rem', md: '2rem', lg: '3rem', xl: '3rem', '2xl': '3rem' }}
            />
            <Text color="#8c9095" fontWeight="bold" fontSize="md">
             Shell Script
            </Text>
          </Box>
          <Box className="tools">
            <Image
              src="/html-logo.png"
              alt="html 5 logo"
              w={{ base: '2rem', sm: '2rem', md: '2rem', lg: '3rem', xl: '3rem', '2xl': '3rem' }}
            />
            <Text color="#8c9095" fontWeight="bold" fontSize="sm">
              HTML 5
            </Text>
          </Box>
          <Box className="tools">
            <Image
              src="/css-logo.webp"
              alt="css3 logo"
              w={{ base: '2rem', sm: '2rem', md: '2rem', lg: '3rem', xl: '3rem', '2xl': '3rem' }}
            />
            <Text color="#8c9095" fontWeight="bold" fontSize="md">
              CSS 3
            </Text>
          </Box>
          <Box className="tools">
            <Image
              src="/python.png"
              alt="python logo"
              borderRadius={'10px'}
              w={{ base: '2rem', sm: '2rem', md: '2rem', lg: '3rem', xl: '3rem', '2xl': '3rem' }}
            />
            <Text color="#8c9095" fontWeight="bold" fontSize="md">
              Python
            </Text>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default About;
