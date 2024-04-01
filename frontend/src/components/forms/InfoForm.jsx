import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { setLogin } from '../../state';
import { useNavigate } from "react-router-dom";




const labelStyle = {
  fontWeight : "600",
  marginBotton : '20px',
}

const inputStyle = {
  border: '1px solid #cfd6e4',
  paddingX: '1rem',
  paddingY: '18px',
  height: '46px'
}



export const InfoForms = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login,setLogin] = useState(props.isLogin);
  const { Formik } = formik;
  const [isUsernameUnique,setIsUsernameUnique] = useState("true");
  const [isEmailUnique,setIsEmailUnique] = useState("true");
  const [show, setShow] = useState(false);
  const [loginErr,setLoginErr] = useState("");

  const isLogin = login;
  const isRegister = !login;

  const registerFunction = async (values, onSubmitProps) => {

    const existingUserResponse = await fetch("http://localhost:3001/verify/username", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: values.username }),
      });
      const   existingUserData = await existingUserResponse.json();
      
      if (!existingUserData.isUnique) {
        // Formik.setFieldError('username', 'Username must be unique');
        setIsUsernameUnique(existingUserData.isUnique)
        return;
      }
      setIsUsernameUnique(existingUserData.isUnique)

      const existingEmail = await fetch("http://localhost:3001/verify/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: values.email }),
      });
      const existingEmailData = await existingEmail.json();
      
      if (!existingEmailData.isUnique) {
        // Formik.setFieldError('username', 'Username must be unique');
        setIsEmailUnique(existingEmailData.isUnique)
        return;
      }
      setIsEmailUnique(existingEmailData.isUnique)
   
    
    const formData = new FormData();
    for (let value in values) {
      formData.append(value, values[value]);
    }
    
    // console.log(formData);
   

    const savedUserResponse = await fetch(
      // "https://coincomputecommunity.onrender.com/auth/register  "
      "http://localhost:3001/auth/register",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // body: formData,
        body: JSON.stringify(values),
      }
    );
    const savedUser = await savedUserResponse.json();
    onSubmitProps.resetForm();

    if (savedUser) {
      setLogin(!login);
      
    }
    
  };

  const loginFunction = async (values, onSubmitProps) => {
    const loggedInResponse = await fetch("http://localhost:3001/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    const loggedIn = await loggedInResponse.json();
    
    if (loggedIn && !loggedIn.msg) {
      onSubmitProps.resetForm();
      props.setModal(false);
     props.setToastName('login')
      props.setShow(true)
      
      navigate("/home");  
      dispatch(
        setLogin({
          user: loggedIn.user,
          token: loggedIn.token,
        })
      );
      
      
      
    }
    else{
      setLoginErr(loggedIn.msg)
    }
  };
  

  const handleFormSubmit = async (values,onSubmitProps) => {
    
   
    if (isLogin) await loginFunction(values, onSubmitProps);
    if (isRegister) await registerFunction(values, onSubmitProps);
  };

  const registerSchema = yup.object().shape({
    name: yup.string().required("Required Field"),
    username: yup.string().required("Required Field")
    // .test('is-unique', 'Username must be unique', async function(value) {
      
    //   try {
    //     const existingUser = await fetch("http://localhost:3001/verify/username", {
    //       method: "GET",
    //       headers: { "Content-Type": "application/json" },
    //       body: JSON.stringify({username : value}),
    //     });
    //     return !existingUser; // Return true if the username is unique, false otherwise
    //   } catch (error) {
    //     console.error(error);
    //     return false; // Return false if an error occurs during the validation process
    //   }
    // }),
    ,
    email : yup.string().email("Invalid Email").required("Required Field"),
    password : yup.string().required("Required Field"),
    
  });

  const loginSchema = yup.object().shape({
    email : yup.string().email().required(),
    password : yup.string().required(),
  });

  const initialValuesRegister = {  name: '',
  username: '',
  email : '',
  password : ''
}

  const initialValuesLogin = {
    username: '',
    email : '',
  }


  
  

  return (
    <Formik
      validationSchema={isLogin ? loginSchema : registerSchema}
      onSubmit={handleFormSubmit}
      initialValues={
        isLogin ? initialValuesLogin : initialValuesRegister
      }
    >
      {({ handleSubmit, handleChange, values, touched, errors ,resetForm}) => (
        <Form noValidate onSubmit={handleSubmit}>
            {isRegister ? 
            <>
            <Form.Group as={Col} className='mb-3' controlId="validationFormik01">
            <Form.Label style={labelStyle}>First name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              isInvalid={!!errors.name}
              isValid={touched.name && !errors.name}
              
              style={inputStyle}
            />
            <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>

          </Form.Group>
          <Form.Group as={Col} className='mb-3' controlId="validationFormikUsername">
            <Form.Label style={labelStyle}>Username</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Username"
                aria-describedby="inputGroupPrepend"
                name="username"
                value={values.username}
                onChange={handleChange}
                isInvalid={!!errors.username}
                style={inputStyle}
              />
              <Form.Control.Feedback type="invalid">
                {errors.username}
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group> </>: <></>}
          {isRegister && !isUsernameUnique ? <p className='text-[#E72929] mt-[-13px] text-[0.9rem] mb-3'>Not Unique Username</p> : <></>}
         
            
          
          
            <Form.Group as={Col} className='mb-3' controlId="validationFormik03">
              <Form.Label style={labelStyle}>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="xyz@email.com"
                name="email"
                value={values.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
                isValid={touched.email && !errors.email}
                style={inputStyle}
              />

              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
            
            {isRegister && !isEmailUnique ? <p className='text-[#E72929] mt-[-13px] text-[0.9rem] mb-3'>Not Unique Email</p> : <></>}

            <Form.Group as={Col} className='mb-3' controlId="validationFormik04">
              <Form.Label style={labelStyle}>Password</Form.Label>
              <Form.Control
                type="text"
                placeholder="Password"
                name="password"
                value={values.password}
                onChange={handleChange}
                isInvalid={!!errors.password}
                style={inputStyle}
              />
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>
            {isLogin && loginErr ? <p className='text-[#E72929] mt-[-13px] text-[0.9rem] '>{loginErr}</p> : <></>} 
            
         
          <Button type="submit" className='bg-[#3861FB] w-full min-h-[3rem] mt-3'>{isLogin ? "Login" : "Sign Up"}</Button>
          <p className=' text-center mt-3 font-[500]' onClick={() => {setLogin(!login);
          resetForm()}}>{isLogin
                ? "Don't have an account? Sign Up here."
                : "Already have an account? Login here."}</p>
        </Form>
      )}
    </Formik>
  );
}

