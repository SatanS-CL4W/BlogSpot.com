import React, { useEffect } from 'react'
import { Button, Container, FormGroup } from 'reactstrap';
import { Form, Label, Input } from 'reactstrap';
import { toast } from 'react-toastify';


function AddBlog() {

    useEffect(() => {
        document.title = "Add-Blog || Blogspot By Raunak";
    }, []);

    const btnHandle2 = () => {
        toast.warn("Work Under progress!!!", {
            position: "top-right"
        });
    }
    return (
        <>
            <Container className='bg-light'>
                <h1 className='text-center my-2 mb-4 display-4'>Fill Blog Details</h1>
                <Form>
                    <FormGroup>
                        <Label for="blogid">
                            <b>BlogId</b>
                        </Label>
                        <Input
                            id="exampleEmail01"
                            name="BlogId"
                            placeholder="Enter here"
                            type="text"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="blogName">
                            <b>Blog Title</b>
                        </Label>
                        <Input
                            id="exampleEmail02"
                            name="BlogName"
                            placeholder="Enter title here"
                            type="text"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="blogdesc">
                            <b>Blog Description</b>
                        </Label>
                        <Input
                            id="exampleEmail03"
                            name="Blogdesc"
                            placeholder="Enter Description here"
                            type="textarea"
                        />
                    </FormGroup>
                    <Container className='text-center mb-4'>
                        <Button className='bg-warning' onClick={btnHandle2}>Add Blog</Button>
                        <Button className='bg-success mx-4' type='reset' onClick={btnHandle2}>Clear</Button>
                    </Container>
                </Form>
            </Container>
        </>
    );
}

export default AddBlog;