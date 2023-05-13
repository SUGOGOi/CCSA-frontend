import React from 'react'
import { ColorModeSwitcher } from "../../../ColorModeSwitcher"
import { Button, Drawer, DrawerContent, DrawerOverlay, DrawerBody, DrawerHeader, useDisclosure, VStack, HStack } from '@chakra-ui/react'
import { RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill } from "react-icons/ri"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../../redux/action/userAction'







const Header = ({isAuthenticated = false,user}) => {

    const { isOpen, onClose, onOpen } = useDisclosure()

    const dispatch = useDispatch();
  
    const logoutHandler = () => {
        onClose()
        dispatch(logout())
    }

    return (<>
        <ColorModeSwitcher />
        <Button onClick={onOpen} colorScheme={'yellow'} width="12" height="12" rounded="full" position="fixed" top="6" left="6">
            <RiMenu5Fill />
        </Button>



        <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay backdropFilter={"blur(2px)"} />
            <DrawerContent>
                <DrawerHeader borderBottomWidth={"1px"}>CCSA</DrawerHeader>
                <DrawerBody>
                    <VStack spacing={"2"} alignItems="flex-start">


                        <Link to={"/"} onClick={onClose}>
                            <Button varient={'ghost'}>{"Home"}</Button>
                        </Link>
                        <Link to={"/courses"} onClick={onClose}>
                            <Button varient={'ghost'}>{"All Courses"}</Button>
                        </Link>
                        <Link to={"/notes"} onClick={onClose}>
                            <Button varient={'ghost'}>{"Notes"}</Button>
                        </Link>
                        <Link to={"/jobs"} onClick={onClose}>
                            <Button varient={'ghost'}>{"Jobs"}</Button>
                        </Link>
                        <Link to={"/request"} onClick={onClose}>
                            <Button varient={'ghost'}>{"Request a Course"}</Button>
                        </Link>
                        <Link to={"/contact"} onClick={onClose}>
                            <Button varient={'ghost'}>{"Contact Us"}</Button>
                        </Link>
                        <Link to={"/about"} onClick={onClose}>
                            <Button varient={'ghost'}>{"About "}</Button>
                        </Link>

                        <HStack justifyContent={"space-evenly"} position="absolute" bottom={"2rem"} width="80%">
                            {
                                isAuthenticated ? (<>
                                    <VStack>
                                        <HStack>
                                            <Link to="/profile" onClick={onClose}>
                                                <Button variant={'ghost'} colorScheme={"yellow"}>Profile</Button>
                                            </Link>
                                            <Button variant={'ghost'} onClick={logoutHandler}>
                                                <RiLogoutBoxLine style={{ margin: "2px" }} />
                                                Logout
                                            </Button>
                                        </HStack>

                                        {
                                            user && user.role === "admin" && <Link to="/admin/dashboard" onClick={onClose}>
                                                <Button colorScheme={"purple"} variant="ghost">
                                                    <RiDashboardFill style={{ margin: "4px" }} />
                                                    Dashboard
                                                </Button>
                                            </Link>
                                        }
                                    </VStack>


                                </>) : (<>
                                    <Link to="/login" onClick={onClose}>
                                        <Button colorScheme={"yellow"}>Login</Button>
                                    </Link>
                                    <p>OR</p>
                                    <Link to="/register" onClick={onClose}>
                                        <Button colorScheme={"yellow"}>Sign Up</Button>
                                    </Link>
                                </>)}

                        </HStack>


                    </VStack>

                </DrawerBody>
            </DrawerContent>
        </Drawer>
    </>)
}

export default Header

