import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';

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



function SignUpForm() {

  const handleFormSubmit = async (values,onSubmitProps) => {

  };

  const { Formik } = formik;

  const schema = yup.object().shape({
    name: yup.string().required("Required Field"),
    username: yup.string().required("Required Field"),
    email : yup.string().email("Invalid Email").required("Required Field"),
    password : yup.string().required("Required Field"),
    
  });

  return (
    <Formik
      validationSchema={schema}
      onSubmit={handleFormSubmit}
      initialValues={{
        name: '',
        username: '',
        email : '',
        password : ''
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Form noValidate onSubmit={handleSubmit}>
          
            <Form.Group as={Col} className='mb-3' controlId="validationFormik01">
              <Form.Label style={labelStyle}>First name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                isInvalid={!!errors.username}
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
            </Form.Group>
          
          
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
            
         
          <Button type="submit" className='bg-[#3861FB] w-full min-h-[3rem] mt-3'>Sign Up</Button>
        </Form>
      )}
    </Formik>
  );
}

export default SignUpForm;