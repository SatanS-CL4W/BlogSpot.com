import React from 'react'
import {
    Card,
    CardBody,
    CardSubtitle,
    CardText,
    Button,
    Container
} from 'reactstrap';

import { toast } from 'react-toastify';

function Course({ course }) {

    const btnHandle2 = () => {
        toast.error("Something went wrong!", {
            position: "top-right"
        });
    }

    const btnHandle3 = () => {
        toast.dark("Sorry for inconvenience!", {
            position: "top-right"
        });
    }
    return (

        <>
            <Card>
                <CardBody className='text-center'>
                    <CardSubtitle><b>{ course.title }</b></CardSubtitle>
                    <CardText>{ course.description } </CardText>
                    <Container className='text-center'>
                        <Button className='mx-2 text-white bg-danger' onClick={btnHandle2}>Delete</Button>
                        <Button className='mx-2 text-white bg-warning' onClick={btnHandle3} outline>Update</Button>
                    </Container>
                </CardBody>
            </Card>
        
        
        
        </>
    );
}

export default Course;

