import { Grid, Box, Heading, TableContainer, Table, TableCaption, Thead, Th, Tr, Button, Td, Tbody, Image, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { RiDeleteBin7Fill } from 'react-icons/ri'
import cursor from "../../../assets/images/cursor.png"
import Sidebar from "../Sidebar"
import CourseModal from './CourseModal'


const AdminCourse = () => {

    const { isOpen, onClose, onOpen } = useDisclosure()

    const courseDetailHandler = (userId) => {
        onOpen();
    }

    const deleteButtonhandler = (userId) => {
        console.log(userId)
    }

    const deleteLectureHandler = (courseId, lectureId) => {
        console.log(courseId);
        console.log(lectureId)

    }

    const addLecturehandler = (e, courseId, title, description, video) => {
        e.preventDefault();

    }

    const courses = [{
        _id: "adadad",
        title: "web dev",
        poster: {
            url: "https://images.pexels.com/photos/1925536/pexels-photo-1925536.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        category: "web dev",
        createdBy: "Sumsum",
        views: 222,
        numOfVideos: 23,

    }]



    return <Grid css={{ cursor: `url(${cursor}), default` }} minH={"100vh"} templateColumns={["1fr", "5fr 1fr"]} >
        <Box
            padding={["0", "16"]}
            overflow="auto"
        >
            <Heading
                textTransform={'uppercase'}
                children="All Courses"
                my={"16"}
                textAlign={["center", "left"]}
            />
            <TableContainer w={["100vw", "full"]}  >
                <Table variant={"simple"} size="lg" >
                    <TableCaption>All available courses in database</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Id</Th>
                            <Th>Poster</Th>
                            <Th>Title</Th>
                            <Th>Category</Th>
                            <Th>Created By</Th>
                            <Th isNumeric >Views</Th>
                            <Th isNumeric >Lectures</Th>
                            <Th isNumeric >Action</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            courses.map(item => (
                                <Row deleteButtonhandler={deleteButtonhandler} courseDetailHandler={courseDetailHandler} key={item._id} item={item} />

                            ))
                        }
                    </Tbody>
                </Table>
            </TableContainer>
            <CourseModal isOpen={isOpen}
                onClose={onClose}
                id={"fsdfjsfd"}
                courseTitle="React Course"
                deleteLectureHandler={deleteLectureHandler}
                addLecturehandler={addLecturehandler}
            />
        </Box>
        <Sidebar />

    </Grid>
}
export default AdminCourse

function Row({ item, courseDetailHandler, deleteButtonhandler }) {
    return (
        <Tr>
            <Td>#{item._id}</Td>
            <Td>
                <Image src={item.poster.url} />
            </Td>
            <Td>{item.title}</Td>
            <Td textTransform={'uppercase'} >{item.category}</Td>
            <Td>{item.createdBy}</Td>
            <Td isNumeric >{item.views}</Td>
            <Td isNumeric >{item.numOfVideos}</Td>
            <Td isNumeric>
                <Button varient={"outline"} color={"purple.500"} onClick={() => courseDetailHandler(item._id)} >View Lectures</Button>
                <Button color={"red"} onClick={() => deleteButtonhandler(item._id)} ><RiDeleteBin7Fill /> </Button>
            </Td>
        </Tr>
    )
}

