import { Box, Container, Flex, Text, VStack, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="nav" bg="blue.500" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Text fontSize="xl" fontWeight="bold">My Website</Text>
        <Flex>
          <Link as={RouterLink} to="/" p={2} color="white" _hover={{ textDecoration: "underline" }}>Home</Link>
          <Link as={RouterLink} to="/about" p={2} color="white" _hover={{ textDecoration: "underline" }}>About</Link>
          <Link as={RouterLink} to="/contact" p={2} color="white" _hover={{ textDecoration: "underline" }}>Contact</Link>
        </Flex>
      </Flex>

      <Box as="main" flex="1" p={4}>
        <VStack spacing={4}>
          <Text fontSize="2xl">Welcome to My Website</Text>
          <Text>This is the main content area. Start adding your content here.</Text>
        </VStack>
      </Box>

      <Box as="footer" bg="gray.700" color="white" p={4} textAlign="center">
        <Text>&copy; {new Date().getFullYear()} My Website. All rights reserved.</Text>
      </Box>
    </Container>
  );
};

export default Index;