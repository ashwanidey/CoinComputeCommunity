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



function LoginForms() {
  const { Formik } = formik;

  const schema = yup.object().shape({
    name: yup.string().required(),
   
    username: yup.string().required(),
    email : yup.string().email().required(),
    password : yup.string().required(),
    terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
  });

  return (
    <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        name: '',
        
        username: '',
        email : '',
        terms: false,
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Form noValidate onSubmit={handleSubmit}>
          
           
          
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
                placeholder="State"
                name="state"
                value={values.state}
                onChange={handleChange}
                isInvalid={!!errors.state}
                style={inputStyle}
              />
              <Form.Control.Feedback type="invalid">
                {errors.state}
              </Form.Control.Feedback>
            </Form.Group>
            
         
          <Button type="submit" className='bg-[#3861FB] w-full min-h-[3rem] mt-3'>Sign Up</Button>
        </Form>
      )}
    </Formik>
  );
}

export default LoginForms;