import React from "react";
import { Formik, Form, Field } from "formik";
import axios from "axios";

export default function Login(props) {
    const { loginFormValues } = props;

    const onSubmit = formValues => {
        axios.post("http:///localhost:5000/api/login", formValues)
            .then(res => {
                localStorage.setItem("token", res.data.payload);
                props.history.push("/friends");
            })
            .catch(err => {
                alert(err.response.data.error);
            })
    };

    return (
        <div className="login-form">
            <Formik 
                initialValues={loginFormValues}
                onSubmit={onSubmit}
                render={props => {
                    return (
                        <Form>
                            <div>
                                <Field name="username" type="text" placeholder="Username" />
                            </div>
                            <div>
                                <Field name="password" type="password" placeholder="Password" />
                            </div>
                            <div>
                                <button type="submit">Login</button>
                            </div>
                        </Form>
                    )
                }}
            
            />
        </div>
    )
}