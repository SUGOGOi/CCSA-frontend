import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Grid, Box, Heading, Stack, Text, Button, VStack, Input, ModalFooter } from '@chakra-ui/react'
import { RiDeleteBin7Fill } from 'react-icons/ri'
import React, { useState } from 'react'
import { fileUploadCss } from '../../Auth/Register'

const CourseModal = ({ isOpen, onClose, id, deleteLectureHandler, courseTitle, lecturse = [1, 2, 3, 4, 5, 6, 7, 8],

    addLectureHandler
}) => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [video, setVideo] = useState("");
    const [videoPrev, setVideoPrev] = useState("");

    const changeVideoHandler = e => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onloadend = () => {
            setVideoPrev(reader.result);
            setVideo(file);
        }
    }

    const handleClose = () => {
        setTitle("");
        setDescription("");
        setVideo("");
        setVideoPrev("");
        onClose();
    }


    return (
        <Modal

            isOpen={isOpen}
            size="full"
            onClose={handleClose}
            scrollBehavior='outline'

        >

            <ModalOverlay>
                <ModalContent>
                    <ModalHeader>
                        {courseTitle}
                    </ModalHeader>
                    <ModalCloseButton onClick={onClose} />
                    <ModalBody p="16" >
                        <Grid templateColumns={["1fr", "3fr 1fr"]} >
                            <Box px={["0", "16"]} >
                                <Box my="5" >
                                    <Heading>{courseTitle}</Heading>
                                    <Heading size="sm"
                                        opacity={0.4}
                                    >
                                        {`#${id}`}
                                    </Heading>
                                </Box>
                                <Heading size="lg" >
                                    Lectures
                                </Heading>
                                {
                                    lecturse.map((item, i) => (
                                        <VideoCard
                                            key={i}
                                            title="React Intro"
                                            description="why react?"
                                            num={i + 1}
                                            lectureId="dfsfgs"
                                            courseId={id}
                                            deleteLectureHandler={deleteLectureHandler}
                                        />
                                    ))
                                }
                            </Box>

                            <Box>
                                <form onSubmit={e => addLectureHandler(e, id, title, description, video)}>
                                    <VStack spacing="4" >
                                        <Heading size="md"
                                            textTransform="uppercase "
                                        >Add Lecture</Heading>

                                        <Input focusBorderColor='purple.300' placeholder='Title' value={title} onChange={e => setTitle(e.target.value)} />

                                        <Input focusBorderColor='purple.300' placeholder='Description' value={description} onChange={e => setDescription(e.target.value)} />

                                        <Input
                                            accept='video/mp4'
                                            required
                                            type={'file'}
                                            focusBorderColor='purple.300'
                                            css={{
                                                '&::file-selector-button':
                                                {
                                                    ...fileUploadCss,
                                                    color: "purple",
                                                }
                                            }}

                                            onChange={changeVideoHandler}
                                        />

                                        {
                                            videoPrev && (
                                                <video controlsList='nodownload' controls src={videoPrev} ></video>
                                            )
                                        }

                                        <Button w="full" colorScheme='purple' type="submit" >
                                            Upload Lecture
                                        </Button>

                                    </VStack>
                                </form>
                            </Box>
                        </Grid>

                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={handleClose}  >
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>

            </ModalOverlay>

        </Modal>
    )


}

export default CourseModal

function VideoCard({ title, description, num, lecturId, courseId, deleteLectureHandler, }) {

    return <Stack direction={["column", "row"]} my="8" boxShadow={"0 0 10px rgba(107, 70, 193, 0.5 )"} justifyContent={["flex=start", "space-between"]} p={["4", "8"]} >
        <Box  >
            <Heading>{`#${num}  ${title}`}</Heading>
            <Text children={description} ></Text>

        </Box>
        <Button color={'red'} onClick={() => deleteLectureHandler(courseId, lecturId)} >
            <RiDeleteBin7Fill />
        </Button>

    </Stack>

}