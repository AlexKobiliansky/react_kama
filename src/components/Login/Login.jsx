import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    name={"login"}
                    placeholder="login"
                    component={Input}
                    validate={[required]}/>
            </div>
            <div>
                <Field
                    name={"password"}
                    placeholder="password"
                    component={Input}
                    validate={[required]}/>
            </div>

            <div>
                <Field name={"remember me"} type="checkbox" component={Input}/> remember me
            </div>

            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }

    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

export default Login