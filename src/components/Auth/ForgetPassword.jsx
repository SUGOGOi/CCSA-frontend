import React from 'react'
import { Container, Heading, Input, VStack, Button } from "@chakra-ui/react"
import { useState } from 'react'

const ForgetPassword = () => {
    const [email, setEmail] = useState("");
    return <Container py="16" h={"90vh"}>
        <from>
            <Heading children="Forget Password" my="16" textTransform={"uppercase"} textAlign={["center"]} />
            <VStack spacing={"8"}>
                <Input required id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={"example@gmail.com"} type={"email"} focusBorderColor="yellow.500" />
                <Button type="submit" colorScheme={"yellow"} w={"full"} >
                    Send Reset Link
                </Button>

            </VStack>
        </from>

    </Container>
}

export default ForgetPassword