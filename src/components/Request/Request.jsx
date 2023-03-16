import { Box, Container, Heading, FormLabel, Input, Button, Textarea, VStack } from '@chakra-ui/react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import React from 'react'

const Request = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [course, setCourse] = useState("");

    return <Container h="90vh" >
        <VStack h="full" justifyContent={"center"} spacing={"16"}>
            <Heading children="Request New Course" />
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
                    <FormLabel htmlFor="course" children="Course" />
                    <Textarea required id="course" value={course} onChange={(e) => setCourse(e.target.value)} placeholder={"Explain the cousre"} focusBorderColor="yellow.500" />
                </Box>

                <Button my="4" colorScheme={"yellow"} type="submit">Send Mail</Button>
                <Box my="4" >
                    See available course!{" "} <Link to="/courses" >
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


export default Request