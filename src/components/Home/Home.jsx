import React from 'react'
import { Box, Button, Heading, HStack, Image, Stack, Text, VStack } from "@chakra-ui/react";
import "./Home.css";
import { Link } from "react-router-dom";
import vg from "../../assets/images/bg.png"
import { CgGoogle, CgYoutube } from "react-icons/cg"
import { SiCoursera, SiUdemy } from "react-icons/si"
import { DiAws } from "react-icons/di"
import introVideo from "../../assets/videos/intro.mkv"



const Home = () => {
    return (
        <section className='home'>
            <div className="container">
                <Stack
                    direction={["column", "row"]}
                    height="100%"
                    justifyContent={["center", "space-between"]}
                    alignItems="center"
                    space={["16", "56"]}
                >

                    <VStack width={"full"} alignItems={["center", "flex-end"]} spacing="8">
                        <Heading children="CCSA E-LEARNING PLATFORM" size={'2xl'} />
                        <Text textAlign={["center", "left"]} children="Learn from experts" fontSize={"2xl"} fontFamily="cursive" />
                        <Link to="/courses">
                            <Button size={"lg"} colorScheme={'yellow'}>
                                Explore Now!
                            </Button>
                        </Link>
                    </VStack>

                    <Image boxSize={"md"} src={vg} className="vector-graphics" objectFit="contain" />

                </Stack>
            </div>
            <Box padding={"8"} bg={"blackAlpha.800"}>
                <Heading textAlign={"center"} fontFamily="body" color={"yellow"} children="CCSA" />
                <HStack className='ccsaBanner' justifyContent={"space-evenly"} marginTop="4">
                    <CgGoogle />
                    <CgYoutube />
                    <SiCoursera />
                    <SiUdemy />
                    <DiAws />
                </HStack>
            </Box>

            <div className="container2">
                <video
                    // autoPlay
                    controls
                    controlsList="nodownload nofullscreen noremoteplayback"
                    disablePictureInPicture
                    disableRemotePlayback
                    src={introVideo}>

                </video>
            </div>
        </section>
    )
}

export default Home