import React from 'react'
import { Container, Heading, HStack, Input, Button, Text, Stack, VStack, Image } from "@chakra-ui/react"
import { useState } from 'react'
import { Link } from "react-router-dom"
// import "../Home/Home.css"

const Course = ({ views, title, imageSrc, id, addToPlaylistHandler, creator, description, lectureCount }) => {
    return (

        <VStack className="course" alignItems={["center", "flex-start"]}>
            <Image src={imageSrc} boxSize="60" objectFit={"contain"} />
            <Heading textAlign={["center", "left"]} maxW="200px" fontFamily={"sans-serif"} noOfLines={3} children={title}
                size={"sm"} />
            <Text children={description} noOfLines={2} />
            <HStack>
                <Text children={"Creator"} fontWeight={"bold"} textTransform={"uppercase"} />
                <Text children={creator} fontFamily={"body"} textTransform={"uppercase"} />
            </HStack>
            <Heading textAlign={"center"} size="xs" children={`Lecture - ${lectureCount}`} texttransform={"uppercase"} />
            <Heading size="xs" children={`Views - ${views}`} texttransform={"uppercase"} />
            <Stack direction={["column", "row"]} alignItems="center">
                <Link to={`/course/${id}`}>
                    <Button colorScheme={"yellow"}>Watch Now!</Button>
                </Link>
                <Button colorScheme={"yellow"} variant={"ghost"} onClick={() => addToPlaylistHandler(id)}>Add to Playlist</Button>

            </Stack>

        </VStack>

    )
}

const Courses = () => {

    const [keyword, setkeyword] = useState("");
    const [category, setCategory] = useState("");

    const addToPlaylistHandler = () => {
        console.log("Added to playlist")
    }

    const categories = [
        "Web Development", "Android Development", "Data Structures & Algorithems", "AI", "Data Science"
    ]

    return (
        <Container minH={"95vh"} maxW="container.lg" paddingY={"8"}>
            <Heading margin={"8"} >All Courses</Heading>
            <Input value={keyword} onChange={e => setkeyword(e.target.value)} placeholder="Search a course" type={"text"}
                focusBorderColor="yellow.500"
            />

            <HStack overflowX={"auto"} paddingY="8" css={{ "&::-webkit-scrollbar": { display: "none" } }}>
                {

                    categories.map((item, index) => (
                        <Button key={index} onClick={() => setCategory(item)} minW={"60"}>
                            <Text children={item} />
                        </Button>
                    ))
                }
            </HStack>
            <Stack
                direction={["column", "row"]}
                flexWrap="wrap"
                justifyContent={["flex-start", "space-evenly"]}
                alignItems={["center", "flex-start"]}
            >
                <Course
                    title={"Sample"}
                    description={"sample"}
                    views={23}
                    imageSrc='https://images.pexels.com/photos/1925536/pexels-photo-1925536.jpeg?auto=compress&cs=tinysrgb&w=600'
                    id={"sample"}
                    creator={"sample"}
                    lectureCount={10}
                    addToPlaylistHandler={addToPlaylistHandler}
                />

            </Stack>

        </Container >
    )
}

export default Courses