import { Container, VStack, Text, Box, Heading, Button, Image, Link } from "@chakra-ui/react";
import { FaRocket } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={8}>
      <VStack spacing={10} align="stretch">
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
          <Heading fontSize="2xl">High Risk PFaaS (Payfac as a Service)</Heading>
          <Text mt={4}>Offering payfac services for SaaS/ISVs & ISOs in high-risk vertical markets, with a patent pending AI underwriting automation.</Text>
        </Box>

        <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
          <Heading fontSize="2xl">API-First Integration</Heading>
          <Text mt={4}>An easy-to-integrate payment processing solution designed to offer your customers a seamless experience.</Text>
        </Box>

        <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
          <Heading fontSize="2xl">Frictionless Underwriting</Heading>
          <Text mt={4}>Streamlined underwriting processes to ensure quick and efficient service delivery.</Text>
        </Box>

        <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
          <Heading fontSize="2xl">Dedicated Portals</Heading>
          <Text mt={4}>Dedicated portals for both you and your customers, enhancing transparency and ease of use.</Text>
        </Box>

        <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
          <Heading fontSize="2xl">High Revenue Share</Heading>
          <Text mt={4}>Benefit from a high revenue share model that ensures profitability while delivering value to your customers.</Text>
        </Box>

        <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
          <Heading fontSize="2xl">White-Label Solutions</Heading>
          <Text mt={4}>Our white-label solutions allow you to "own" the payments solution and sell it under your brand.</Text>
        </Box>

        <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
          <Heading fontSize="2xl">Support for Complex Verticals</Heading>
          <Text mt={4}>Capable of supporting complex verticals that are “clean”, established with low chargebacks.</Text>
        </Box>

        <VStack>
          <Button rightIcon={<FaRocket />} colorScheme="teal" variant="solid">
            Get Started
          </Button>
          <Text fontSize="sm">Experience the future of high-risk payment facilitation.</Text>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
