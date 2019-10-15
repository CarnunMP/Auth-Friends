import React from "react";
import { Formik, Form, Field } from "formik";

export default function NewFriendForm(props) {
    const initialValues = {
        name: "",
        age: "",
        email: "",
    };

    const { addNewFriend } = props;

    return (
        <div className="new-friend-form">
            <Formik 
                initialValues={initialValues}
                onSubmit={addNewFriend}
                render={props => {
                    return(
                        <Form>
                            <div>
                                <Field name="name" type="text" placeholder="Name" />
                            </div>
                            <div>
                                <Field name="age" type="number" placeholder="Age" />
                            </div>
                            <div>
                                <Field name="email" type="text" placeholder="Email" />
                            </div>
                            <div>
                                <button type="submit">Add Friend</button>
                            </div>
                        </Form>
                    )
                }}
            />
        </div>
    )
}