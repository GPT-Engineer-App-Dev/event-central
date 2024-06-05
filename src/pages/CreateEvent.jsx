import { Box, Button, Container, FormControl, FormLabel, Heading, Input, Textarea, VStack } from "@chakra-ui/react";
import { useState } from "react";

const CreateEvent = () => {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventDescription, setEventDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Event Created:", { eventName, eventDate, eventDescription });
  };

  return (
    <Container maxW="container.md" py={10}>
      <Heading as="h1" size="xl" mb={6} textAlign="center">Create Event</Heading>
      <Box as="form" onSubmit={handleSubmit} bg="white" p={6} borderRadius="md" boxShadow="md">
        <VStack spacing={4}>
          <FormControl id="event-name" isRequired>
            <FormLabel>Event Name</FormLabel>
            <Input 
              type="text" 
              value={eventName} 
              onChange={(e) => setEventName(e.target.value)} 
              placeholder="Enter event name" 
            />
          </FormControl>
          <FormControl id="event-date" isRequired>
            <FormLabel>Event Date</FormLabel>
            <Input 
              type="date" 
              value={eventDate} 
              onChange={(e) => setEventDate(e.target.value)} 
            />
          </FormControl>
          <FormControl id="event-description" isRequired>
            <FormLabel>Event Description</FormLabel>
            <Textarea 
              value={eventDescription} 
              onChange={(e) => setEventDescription(e.target.value)} 
              placeholder="Enter event description" 
            />
          </FormControl>
          <Button type="submit" colorScheme="blue" size="lg" width="full">Create Event</Button>
        </VStack>
      </Box>
    </Container>
  );
};

export default CreateEvent;