import { Box, Container, Heading, FormLabel, Input, Button, Textarea, VStack } from '@chakra-ui/react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import React from 'react'

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    return <Container h="90vh" >
        <VStack h="full" justifyContent={"center"} spacing={"16"}>
            <Heading children="Contact Us" />
            <form style={{ width: "100%" }}>
                <Box my={'4'}>
                    <FormLabel htmlFor="name" children="Name" />
                    <Input required id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder={"example"} type={"text"} focusBorderColor="yellow.500" />
                </Box>
                <Box my={'4'}>
                    <FormLabel htmlFor="email" children="Email Address" />
                    <Input required id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={"example@gmail.com"} type={"email"} focusBorderColor="yellow.500" />
                </Box>
                <Box my={'4'}>
                    <FormLabel htmlFor="message" children="Message" />
                    <Textarea required id="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder={"Your message"} focusBorderColor="yellow.500" />
                </Box>

                <Button my="4" colorScheme={"yellow"} type="submit">Send Mail</Button>
                <Box my="4" >
                    Request For a course?{" "} <Link to="/request" >
                        <Button colorScheme={"yellow"} variant="link">
                            Click
                        </Button>{" "}
                    </Link>
                    here
                </Box>
            </form>
        </VStack>

    </Container>
}

export default Contact