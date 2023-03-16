import { Container, Heading, Input, Button } from '@chakra-ui/react'
import React, { useState } from 'react'

const ChangePassword = () => {

    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    return <Container py="16" minH="90vh">
        <form>
            <Heading textTransform={"uppercase"} children="Change Password" my="16" textAlign={["center", "left"]} />
            <Input required id="password" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} placeholder={" Old Password"} type={"password"} focusBorderColor="yellow.500" />

            <Input mt="8" mb="8" required id="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder={" New Password"} type={"password"} focusBorderColor="yellow.500" />

            <Button w="full" colorScheme={"yellow"} type="submit" > Change</Button>
        </form>

    </Container>
}

export default ChangePassword