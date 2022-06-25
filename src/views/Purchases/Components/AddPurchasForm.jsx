import React, { useEffect, useState } from 'react';

import { useForm } from "react-hook-form";
import Form from 'react-bootstrap/Form'
const AddPurchaseForm = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
            </Form>

        </>
    )
}

export default AddPurchaseForm;