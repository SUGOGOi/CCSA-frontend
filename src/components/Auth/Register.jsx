import { Container, VStack, Heading, FormLabel, Input, Box, Button, Avatar } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { Link } from "react-router-dom"

export const fileUploadCss = {
    cursor: "pointer", marginLeft: "-5%", width: "110%", border: "none", height: "100%", color: "#ECC94B",
    backgroundColor: "white"
};

const fileUploadStyle = {
    "&::file-selector-button": fileUploadCss,

}

const Register = () => {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [imagePrev, setImagePrev] = useState("");
    const [image, setImage] = useState("");

    const changeImageHandler = e => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onloadend = () => {
            setImagePrev(reader.result);
            setImage(file);
        }
    }

    return <Container h={"110vh"} >
        <VStack h={"full"} justifyContent="center" spacing={"10"}>
            <Heading children={"Registration"} textTransform={"uppercase"} />
            <form style={{ width: "100%" }}>
                <Box display={'flex'} justifyContent={"center"}>
                    <Avatar size={'xl'} src={imagePrev} />

                </Box>
                <Box my={'2'}>
                    <FormLabel htmlFor="name" children="Name" />
                    <Input required id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder={"example"} type={"text"} focusBorderColor="yellow.500" />
                </Box>
                <Box my={'2'}>
                    <FormLabel htmlFor="email" children="Email Address" />
                    <Input required id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={"example@gmail.com"} type={"email"} focusBorderColor="yellow.500" />
                </Box>
                <Box my={'2'} >
                    <FormLabel htmlFor="chooseAvatar" children="Choose Avatar" />
                    <Input css={fileUploadStyle}
                        accept='image/*' required id="chooseAvatar" type={"file"} focusBorderColor="yellow.500"
                        onChange={changeImageHandler} />
                </Box>
                <Box my={'2'}>
                    <FormLabel htmlFor="password" children="Password" />
                    <Input required id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder={"Enter Your Password"} type={"password"} focusBorderColor="yellow.500" />
                </Box>

                <Button my="2" colorScheme={"yellow"} type="submit">Sign Up</Button>
                <Box my="2" >
                    Already sign up?{" "} <Link to="/login" >
                        <Button colorScheme={"yellow"} variant="link">
                            Login
                        </Button>{" "}
                    </Link>
                    here
                </Box>
            </form>


        </VStack>

    </Container>
}

export default Register