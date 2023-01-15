import React from 'react';
import { Text, Box, Flex, Divider, Image, Button, Link } from '@chakra-ui/react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  return (
    <Box
      id="projects"
      flexDirection="column"
      w={{ base: '80%', sm: '80%', md: '80%', lg: '80%', xl: '80%', '2xl': '1440px' }}
      margin={'0 auto'}
    >
      <Flex flexDirection={'row'} alignItems="center" mb={'5rem'} gap="2rem">
        <Divider
          display={{ base: 'none', sm: 'none', md: 'none', lg: 'flex', xl: 'flex', '2xl': 'flex' }}
          data-aos="fade-right"
          data-aos-delay="400"
        />
        <Text
          fontSize={{
            base: '1.5rem',
            sm: '1.5rem',
            md: '1.5rem',
            lg: '2rem',
            xl: '2rem',
            '2xl': '1.99rem',
          }}
          fontWeight="bold"
          width={{ lg: '63rem', xl: '63rem', '2xl': '63rem' }}
          margin={'0 auto'}
          color="#8c9095"
          data-aos="fade-down"
          data-aos-delay="400"
        >
          Some Recent Projects
        </Text>
        <Divider
          display={{ base: 'none', sm: 'none', md: 'none', lg: 'flex', xl: 'flex', '2xl': 'flex' }}
          data-aos="fade-left"
          data-aos-delay="400"
        />
      </Flex>
      <Box mb={{ base: '5rem', sm: '5rem', md: '10rem', lg: '10rem', xl: '10rem', '2xl': '10rem' }}>
        <Flex
          flexDirection={{
            base: 'column',
            sm: 'column',
            md: 'column',
            lg: 'row',
            xl: 'row',
            '2xl': 'row',
          }}
          alignItems="center"
          gap="5rem"
        >
          <Box>
            <Text
              fontSize="1.5rem"
              fontWeight="bold"
              color="#8c9095"
              mb={'1rem'}
              data-aos="fade-down-right"
              data-aos-delay="500"
            >
              Terraform Project
            </Text>
            <Text data-aos="fade-down-right" data-aos-delay="500">
            Deploying AWS infrastructure with terraform.
            </Text>
            <Text data-aos="fade-down-right" data-aos-delay="500" mt={'1rem'}>
            Creating a Virtual Private Cloud (VPC) with public and private subnets is a great way to isolate your applications and resources away from the public internet. This project provides step-by-step instructions on how to create a VPC with public and private subnets, a NAT gateway, and an Internet gateway in the Amazon Web Services (AWS) environment using terraform.
            </Text>
            <Flex
              mt={'2rem'}
              gap="2rem"
              flexDirection={{
                base: 'column',
                sm: 'column',
                md: 'row',
                lg: 'row',
                xl: 'row',
                '2xl': 'row',
              }}
              data-aos="fade-down-right"
              data-aos-delay="500"
            >
              <Button
                className="project-btn"
                leftIcon={<FaGithub />}
                as="a"
                href="https://github.com/Bukola-Testimony/Deploying-AWS-VPC-and-webservers-with-Terraform"
                target="_blank"
                outline="solid"
                background="none"
                py={'1.5rem'}
                px={'1.2rem'}
                borderRadius={5}
              >
                View GitHub Repo
              </Button>
              <Button
                className="project-btn"
                leftIcon={<FaExternalLinkAlt />}
                as="a"
                href="https://raw.githubusercontent.com/Bukola-Testimony/Deploying-AWS-VPC-and-webservers-with-Terraform/main/project-architecture.png"
                target="_blank"
                outline="solid"
                background="none"
                py={'1.5rem'}
                px={'1.2rem'}
              >
                View Live Site
              </Button>
            </Flex>
          </Box>
          <Image
            src="/project-architecture.png"
            alt="Countries Project Preview"
            width={'40rem'}
            borderRadius="8px"
            data-aos="fade-down-left"
            data-aos-delay="500"
          />
        </Flex>
      </Box>

      <Box mb={{ base: '5rem', sm: '5rem', md: '10rem', lg: '10rem', xl: '10rem', '2xl': '10rem' }}>
        <Flex
          flexDirection={{
            base: 'column-reverse',
            sm: 'column-reverse',
            md: 'column-reverse',
            lg: 'row',
            xl: 'row',
            '2xl': 'row',
          }}
          alignItems="center"
          gap="5rem"
        >
          <Image
            src="/laravel.png"
            alt="DevFinder Project Preview"
            width={'40rem'}
            borderRadius="8px"
            data-aos="fade-right"
            data-aos-delay="600"
          />

          <Box>
            <Text
              fontSize="1.5rem"
              fontWeight="bold"
              color="#8c9095"
              mb={'1rem'}
              data-aos="fade-left"
              data-aos-delay="600"
            >
              Deploying a Laravel Real world application
            </Text>
            <Text data-aos="fade-left" data-aos-delay="700">
              Deploying a Laravel Real world application using Debian 11 virtual machine instance with Amazon Web Services (AWS) as the cloud provider.
            </Text>
            <Text mt={'1rem'} data-aos="fade-left" data-aos-delay="800">
              Setup Apache2 with every dependency the application needs to run.
              clone the project with Git and deploy with apache.
              Setup MySQL with credentials and a database for the application to use.
            </Text>
            <Flex
              mt={'2rem'}
              gap="2rem"
              flexDirection={{
                base: 'column',
                sm: 'column',
                md: 'row',
                lg: 'row',
                xl: 'row',
                '2xl': 'row',
              }}
              data-aos="fade-left"
              data-aos-delay="900"
            >
              <Button
                className="project-btn"
                leftIcon={<FaGithub />}
                as="a"
                href="https://github.com/Bukola-Testimony/LARAVEL-REAL-LIFE-APPLICATION"
                target="_blank"
                outline="solid"
                background="none"
                py={'1.5rem'}
                px={'1.2rem'}
              >
                View GitHub Repo
              </Button>
              <Button
                className="project-btn"
                leftIcon={<FaExternalLinkAlt />}
                as="a"
                href="https://raw.githubusercontent.com/Bukola-Testimony/LARAVEL-REAL-LIFE-APPLICATION/main/images/ccc.png"
                target="_blank"
                outline="solid"
                background="none"
                py={'1.5rem'}
                px={'1.2rem'}
              >
                View Live Site
              </Button>
            </Flex>
          </Box>
        </Flex>
      </Box>

      <Box mb={{ base: '5rem', sm: '5rem', md: '10rem', lg: '10rem', xl: '10rem', '2xl': '10rem' }}>
        <Flex
          flexDirection={{
            base: 'column',
            sm: 'column',
            md: 'column',
            lg: 'row',
            xl: 'row',
            '2xl': 'row',
          }}
          alignItems="center"
          gap="5rem"
        >
          <Box>
            <Text
              fontSize="1.5rem"
              fontWeight="bold"
              color="#8c9095"
              mb={'1rem'}
              data-aos="fade-up-right"
              data-aos-delay="600"
            >
              Setting up Apache and PHP on AWS Ubuntu 22.04 AMI with Ansible
            </Text>
            <Text data-aos="fade-up-right" data-aos-delay="700">
            ⚡ Setting up Apache and PHP on AWS with Ansible Playbook Using Ubuntu 22.04 AMI. Ansible is a simple and powerful automation engine. It is used to help with configuration management, application deployment, and task automation. It makes your applications and systems easier to deploy and maintain .
            </Text>
            <Flex
              mt={'2rem'}
              gap="2rem"
              flexDirection={{
                base: 'column',
                sm: 'column',
                md: 'row',
                lg: 'row',
                xl: 'row',
                '2xl': 'row',
              }}
              data-aos="fade-up-right"
              data-aos-delay="900"
            >
              <Button
                className="project-btn"
                leftIcon={<FaGithub />}
                as="a"
                href="https://github.com/Bukola-Testimony/Setting-up-Apache-and-PHP-on-AWS-with-Ansible-Using-Ubuntu-22.04-AMI"
                target="_blank"
                outline="solid"
                background="none"
                py={'1.5rem'}
                px={'1.2rem'}
              >
                View GitHub Repo
              </Button>
              <Button
                className="project-btn"
                leftIcon={<FaExternalLinkAlt />}
                as="a"
                href="https://raw.githubusercontent.com/Bukola-Testimony/Setting-up-Apache-and-PHP-on-AWS-with-Ansible-Using-Ubuntu-22.04-AMI/main/images/ansible.png"
                target="_blank"
                outline="solid"
                background="none"
                py={'1.5rem'}
                px={'1.2rem'}
              >
                View Live Site
              </Button>
            </Flex>
          </Box>
          <Image
            src="/ansible-aws.png"
            alt="Countries Project Preview"
            width={'40rem'}
            borderRadius="8px"
            data-aos="fade-up-left"
            data-aos-delay="600"
          />
        </Flex>
      </Box>
    </Box>
  );
};

export default Projects;
