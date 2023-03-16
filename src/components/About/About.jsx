import React from 'react'
import { Container, Heading, VStack, Stack, Avatar, Text, Button, HStack, Box } from "@chakra-ui/react"
import { RiSecurePaymentFill } from "react-icons/ri"
import { Link } from "react-router-dom"
import introVideo from "../../assets/videos/intro.mkv"

// const TandC = (termsAndCondition) => {

// }

const Founder = () => (
    <Stack direction={["column", "row"]} spacing={["4", "16"]} padding={"8"}>
        <VStack>
            <Avatar src="https://avatars.githubusercontent.com/u/104547345?s=400&u=c3ff82d21c3f3f53f77b2ad72117077b546ccc78&v=4" boxSize={["40", "48"]} />
            <Text children={"Co-Founder"} opacity={0.7} />
        </VStack>
        <VStack justifyContent={"center"} alignItems={["center", "flex-start"]} >
            <Heading children="Sumsum Gogoi" size={["md", "xl"]} />
            <Text textAlign={["center", "left"]} children={"Hi, I am a full-stack developer. Our mission is to provide quality content at resonable price. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam id, mollitia eveniet natus, maiores repellat vitae tenetur ex officiis consectetur quod aut eos fuga culpa minima.  "} />
        </VStack>
    </Stack>
)
const VideoPlayer = () => (
    <video
        autoPlay
        loop
        muted
        controls
        controlsList="nodownload nofullscreen noremoteplayback"
        disablePictureInPicture
        disableRemotePlayback
        src={introVideo}>

    </video>
)

const About = () => {
    return <Container maxW={"container.lg"} padding="16" boxShadow={"lg"}>
        <Heading children="About Us" textAlign={["center", "left"]} />
        <Founder />
        <Stack m="8" direction={["column", "row"]} alignItems={'center'}>
            <Text fontFamily={"cursive"} m="8" textAlign={["center", "left"]}>
                We are a video streaming platform with some premium courses available only for subscribed members.
            </Text>
            <Link to="/subscribe" >
                <Button variant={"ghost"} colorScheme={"yellow"} >Checkout Our Plan</Button>
            </Link>
        </Stack>
        <VideoPlayer />
        <Box>
            <Heading size={"md"} children={"Terms and Conditions"} textAlign={["center", "left"]} my="4" />

            {/* terms and consition */}
            <Box h="sm" p="4" overflowY={"scroll"} >
                <Text textAlign={["center", "left"]} letterSpacing={"widest"} fontFamily={"heading"}  >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias recusandae earum, rem hic, vitae fuga soluta labore ducimus harum nobis architecto voluptate! Dolore quod impedit repellat aut animi accusamus, quo ipsam molestiae maiores quas vel distinctio temporibus illum officiis necessitatibus provident quis dicta eveniet ipsum earum porro laudantium, et repudiandae. Facere porro alias iusto, ut accusantium omnis illo cumque Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor ullam omnis necessitatibus debitis porro ad nobis assumenda, temporibus aperiam culpa possimus totam alias minus, fuga tempora est unde. Quasi necessitatibus corrupti id amet! Mollitia minus temporibus, beatae, minima labore at odit ipsa qui quaerat architecto ex iusto ipsum, possimus vitae.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quidem quisquam incidunt voluptatibus rem! Nulla aperiam quas obcaecati, asperiores autem fuga perferendis sit officia quibusdam praesentium pariatur deserunt ipsa neque voluptatem excepturi, nam id non, deleniti veniam recusandae! Nostrum veritatis doloremque adipisci aliquid quisquam reprehenderit ut ipsam magni eius, quod dignissimos. Ullam itaque aliquam dignissimos at, odit ea maiores inventore natus consectetur earum corporis deleniti perspiciatis modi similique tempora atque voluptatibus illum asperiores nam nostrum repudiandae vero magnam eligendi. Qui consequuntur in quos deleniti, soluta sed officia, maiores autem iste molestiae dolor molestias magnam unde dolore laborum dignissimos aut optio!
                </Text>
                <Heading my="4" size={"xs"} children="Refund only applicable for cancelation within 7 days" />

            </Box>

        </Box>
        <HStack my="4" padding="4">
            <RiSecurePaymentFill />
            <Heading sixze={"xs"} fontFamily="sans-serif" textTransform={"uppercase"} children={"Payment is secure by Razorpay"} />
        </HStack>


    </Container>
};

export default About