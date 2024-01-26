import React from "react";
import { FormGroup, Input, Label, Button, Form } from "reactstrap";
import "./form_email.css";

export default function Form_email() {
        return (
                <div className="form-email">
                        <h4 className="title-email">NEWSLETTER</h4>
                        <p className="subtitle-email">Risus viverra adipiscing at in tellus.</p>
                        <Form>
                                <FormGroup>
                                        <Label for="exampleName" hidden>
                                                Your Name
                                        </Label>
                                        <Input id="exampleName" name="name" placeholder="Name" type="name" />
                                </FormGroup>
                                <FormGroup>
                                        <Label for="exampleEmail" hidden>
                                                Your Email
                                        </Label>
                                        <Input id="exampleEmail" name="email" placeholder="Email" type="email" />
                                </FormGroup>
                                <Button>
                                        SEND MESSAGE{" "}
                                        <span className="icon-btn">
                                                <i class="fa-solid fa-angle-right"></i>
                                        </span>
                                </Button>
                        </Form>
                </div>
        );
}
