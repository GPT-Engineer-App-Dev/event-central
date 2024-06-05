import { Box, Button, Container, FormControl, FormLabel, Heading, Input, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const EventDetails = () => {
  const { eventId } = useParams();
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [numTickets, setNumTickets] = useState(1);
  const [paymentDetails, setPaymentDetails] = useState("");
  const [confirmationMessage, setConfirmationMessage] = useState("");

  const handleBooking = (e) => {
    e.preventDefault();
    // Mock backend integration
    setConfirmationMessage(`Thank you, ${userName}! Your booking for ${numTickets} tickets has been confirmed.`);
  };

  return (
    <Container maxW="container.md" py={10}>
      <Heading as="h1" size="xl" mb={6} textAlign="center">Event Details</Heading>
      <Text fontSize="lg" mb={6}>Details for event ID: {eventId}</Text>
      <Box as="form" onSubmit={handleBooking} bg="white" p={6} borderRadius="md" boxShadow="md">
        <VStack spacing={4}>
          <FormControl id="user-name" isRequired>
            <FormLabel>Your Name</FormLabel>
            <Input 
              type="text" 
              value={userName} 
              onChange={(e) => setUserName(e.target.value)} 
              placeholder="Enter your name" 
            />
          </FormControl>
          <FormControl id="user-email" isRequired>
            <FormLabel>Your Email</FormLabel>
            <Input 
              type="email" 
              value={userEmail} 
              onChange={(e) => setUserEmail(e.target.value)} 
              placeholder="Enter your email" 
            />
          </FormControl>
          <FormControl id="num-tickets" isRequired>
            <FormLabel>Number of Tickets</FormLabel>
            <Input 
              type="number" 
              value={numTickets} 
              onChange={(e) => setNumTickets(e.target.value)} 
              min={1}
              placeholder="Enter number of tickets" 
            />
          </FormControl>
          <FormControl id="payment-details" isRequired>
            <FormLabel>Payment Details</FormLabel>
            <Input 
              type="text" 
              value={paymentDetails} 
              onChange={(e) => setPaymentDetails(e.target.value)} 
              placeholder="Enter payment details" 
            />
          </FormControl>
          <Button type="submit" colorScheme="blue" size="lg" width="full">Book Tickets</Button>
        </VStack>
      </Box>
      {confirmationMessage && (
        <Box mt={6} p={4} bg="green.100" borderRadius="md">
          <Text>{confirmationMessage}</Text>
        </Box>
      )}
    </Container>
  );
};

export default EventDetails;