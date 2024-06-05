import { Box, Button, Container, Flex, Heading, HStack, Link, Stack, Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Header = () => (
  <Box as="header" bg="brand.700" color="white" py={4}>
    <Container maxW="container.xl">
      <Flex justify="space-between" align="center">
        <Heading as="h1" size="lg">
          EventPlatform
        </Heading>
        <HStack spacing={8}>
          <Link as={RouterLink} to="/">Home</Link>
          <Link as={RouterLink} to="/events">Events</Link>
          <Link as={RouterLink} to="/create-event">Create Event</Link>
          <Link as={RouterLink} to="/profile">Profile</Link>
        </HStack>
      </Flex>
    </Container>
  </Box>
);

const HeroSection = () => (
  <Box as="section" bg="gray.100" py={20}>
    <Container maxW="container.xl" textAlign="center">
      <Heading as="h2" size="2xl" mb={4}>Welcome to EventPlatform</Heading>
      <Text fontSize="lg" mb={6}>Your one-stop solution for managing and creating events effortlessly.</Text>
      <Button as={RouterLink} to="/create-event" colorScheme="blue" size="lg">Create an Event</Button>
    </Container>
  </Box>
);

const EventCard = ({ name, date, description }) => (
  <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} bg="white">
    <Heading as="h3" size="md" mb={2}>{name}</Heading>
    <Text fontSize="sm" color="gray.500" mb={2}>{date}</Text>
    <Text>{description}</Text>
  </Box>
);

const UpcomingEvents = () => (
  <Box as="section" py={20}>
    <Container maxW="container.xl">
      <Heading as="h2" size="xl" mb={8}>Upcoming Events</Heading>
      <Stack spacing={8}>
        <EventCard name="Event One" date="2023-10-01" description="This is a brief description of Event One." />
        <EventCard name="Event Two" date="2023-11-15" description="This is a brief description of Event Two." />
        <EventCard name="Event Three" date="2023-12-05" description="This is a brief description of Event Three." />
      </Stack>
    </Container>
  </Box>
);

const Footer = () => (
  <Box as="footer" bg="gray.800" color="white" py={4}>
    <Container maxW="container.xl">
      <Flex justify="space-between" align="center">
        <Text>&copy; {new Date().getFullYear()} EventPlatform. All rights reserved.</Text>
        <HStack spacing={8}>
          <Link as={RouterLink} to="/about">About Us</Link>
          <Link as={RouterLink} to="/contact">Contact</Link>
          <Link as={RouterLink} to="/privacy">Privacy Policy</Link>
        </HStack>
      </Flex>
    </Container>
  </Box>
);

const Index = () => {
  return (
    <Box>
      <Header />
      <HeroSection />
      <UpcomingEvents />
      <Footer />
    </Box>
  );
};

export default Index;