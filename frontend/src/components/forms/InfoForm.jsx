import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';
import { useContext, useState } from 'react';


import { useNavigate } from "react-router-dom";
import { UserContext } from '../../context/UserContext';

// const host  = "45.55.195.4:3001"
// const host = "localhost:3001"
const host = "coincomputecommunity.onrender.com"




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
  const {setUser,setIsLoggedIn,saveUser,isloading,setIsLoading,isLogin,setIsLogin,host} = useContext(UserContext);
 
  const navigate = useNavigate();
  
  const { Formik } = formik;
  const [isUsernameUnique,setIsUsernameUnique] = useState("true");
  const [isEmailUnique,setIsEmailUnique] = useState("true");
  const [show, setShow] = useState(false);
  const [loginErr,setLoginErr] = useState("");

  
  const isRegister = !isLogin;

  const registerFunction = async (values, onSubmitProps) => {
    
    const existingUserResponse = await fetch(`${host}/verify/username`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: values.username }),
      });
      const existingUserData = await existingUserResponse.json();
      
      if (!existingUserData.isUnique) {
        // Formik.setFieldError('username', 'Username must be unique');
        setIsUsernameUnique(existingUserData.isUnique)
        return;
      }
      setIsUsernameUnique(existingUserData.isUnique)

      const existingEmail = await fetch(`${host}/verify/email`, {
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
   
setIsLoading(true);
    const savedUserResponse = await fetch(
      // "https://coincomputecommunity.onrender.com/auth/register  "
      `${host}/auth/register`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // body: formData,
        body: JSON.stringify(values),
      }
    );
    const savedUser = await savedUserResponse.json();
    onSubmitProps.resetForm();
    setIsLoading(false)

    if (savedUser) {
      setIsLogin(!isLogin);
      
    }
    
  };

  const loginFunction = async (values, onSubmitProps) => {
    setIsLoading(true);
    const loggedInResponse = await fetch(`${host}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    const loggedIn = await loggedInResponse.json();
    setIsLoading(false);
    
    if (loggedIn && !loggedIn.msg) {
      
      setIsLoggedIn(true);
      saveUser(loggedIn.user,loggedIn.token,true)
      onSubmitProps.resetForm();
      props.setModal(false);
      props.setToastName('login')
      props.setShow(true)
      
      navigate("/feeds");  
      

      
      
      
      
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
            
         
          {!isloading ? <Button type="submit" className='bg-[#3861FB] w-full min-h-[3rem] mt-3'>{isLogin ? "Login" : "Sign Up"}</Button> :
          <><button disabled type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full min-h-[3rem] mt-3 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center  justify-center">
          <svg aria-hidden="true" role="status" class="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
          </svg>
          Loading...
          </button></>}


          <p className=' text-center mt-3 font-[500]' onClick={() => {setIsLogin(!isLogin);
          resetForm()}}>{isLogin
                ? "Don't have an account? Sign Up here."
                : "Already have an account? Login here."}</p>
        </Form>
      )}
    </Formik>
  );
}

