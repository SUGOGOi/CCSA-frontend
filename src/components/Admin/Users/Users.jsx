import { Grid, Box, Heading, TableContainer, Table, TableCaption, Thead, Th, Tr, Button, Td, Tbody } from '@chakra-ui/react'
import React from 'react'
import { RiDeleteBin7Fill } from 'react-icons/ri'
import cursor from "../../../assets/images/cursor.png"
import Sidebar from "../Sidebar"


const Users = () => {

    const updateHandler = (userId) => {
        console.log(userId)
    }

    const deleteButtonhandler = (userId) => {
        console.log(userId)
    }

    const users = [{
        _id: "adadad",
        name: "Sumsum",
        email: "sumsumgogoi51@gmail.com",
        role: "Admin",
        subscription: {
            status: "active"
        }

    }]
    return <Grid css={{ cursor: `url(${cursor}), default` }} minH={"100vh"} templateColumns={["1fr", "5fr 1fr"]} >
        <Box
            padding={["0", "16"]}
            overflow="auto"
        >
            <Heading
                textTransform={'uppercase'}
                children="All Users"
                my={"16"}
                textAlign={["center", "left"]}
            />
            <TableContainer w={["100vw", "full"]}  >
                <Table variant={"simple"} size="lg" >
                    <TableCaption>All available users in database</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Id</Th>
                            <Th>Name</Th>
                            <Th>Email</Th>
                            <Th>Role</Th>
                            <Th>Subscription</Th>
                            <Th isNumeric >Action</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            users.map(item => (
                                <Row deleteButtonhandler={deleteButtonhandler} updateHandler={updateHandler} key={item._id} item={item} />

                            ))
                        }
                    </Tbody>
                </Table>
            </TableContainer>
        </Box>
        <Sidebar />

    </Grid>
}

export default Users

function Row({ item, updateHandler, deleteButtonhandler }) {
    return (
        <Tr>
            <Td>#{item._id}</Td>
            <Td>{item.name}</Td>
            <Td>{item.email}</Td>
            <Td>{item.role}</Td>
            <Td>{item.subscription.status === "active" ? "Active" : "Not Active"}</Td>
            <Td isNumeric>
                <Button varient={"outline"} color={"purple.500"} onClick={() => updateHandler(item._id)} >Change Role</Button>
                <Button color={"red"} onClick={() => deleteButtonhandler(item._id)} ><RiDeleteBin7Fill /> </Button>
            </Td>
        </Tr>
    )
}