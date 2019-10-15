import React from "react";
import { Formik, Form, Field } from "formik";

export default function Login(props) {
    const { loginFormValues } = props;

    return (
        <div className="login-form">
            <Formik 
                initialValues={loginFormValues}
                onSubmit={(props) => console.log(props)}
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