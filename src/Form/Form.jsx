import {Formik, Form, Field, ErrorMessage} from 'formik';
import './Form.css';
import Validate from './Validate';
import axios from 'axios';

function Formulario() {

    const onSubmit = (values, {resetForm}) => {
      axios.post(`${process.env.REACT_APP_MY_API_URL}/users`, {
        username:values.username,
        email:values.email,
        password:values.password
      })
      .then(function(response) {
        alert('Registered Succesfully')
        console.log(response)
        resetForm();
        window.location.href = window.location.href;
      })
      .catch(function(err) {alert(err.response.data)}); 
    }
  
    return (
      <div className='det1'>
        <div className='det2'>

          <div className="FormContainer">
            <Formik
            initialValues={{
              username: '',
              email: '',
              password: ''
            }}
            
            validate={Validate}
      
            onSubmit={onSubmit}
            >
              {({errors}) => (
                <Form>
                  <div className='inputCont'>
                    <label htmlFor='username'>USERNAME</label>
                    <Field
                    type='text'
                    id='username'
                    name='username'      
                    placeholder='example123'        
                    />
                    <ErrorMessage name='username' component={() => (<div className='errorPC'> {errors.username} </div>)}/>
                  </div>
      
                  <div className='inputCont'>
                    <label htmlFor='email'>EMAIL</label>
                    <Field
                    type='text'
                    id='email'
                    name='email'
                    placeholder='example@example.com'   
                    />
                    <ErrorMessage name='email' component={() => (<div className='errorPC'> {errors.email} </div>)}/>
                  </div>
      
                  <div className='inputCont'>
                    <label htmlFor='password'>PASSWORD</label>
                    <Field
                    type='password'
                    id='password'
                    name='password'
                    placeholder='Example123%'   
                    />
                    <ErrorMessage name='password' component={() => (<div className='errorPC'> {errors.password} </div>)}/>
                  </div>
                  <button type='submit'>SEND</button>
                  <ErrorMessage name='username' component={() => (<div className='errorMOB'> {errors.username} </div>)}/>
                  <ErrorMessage name='email' component={() => (<div className='errorMOB'> {errors.email} </div>)}/>
                  <ErrorMessage name='password' component={() => (<div className='errorMOB'> {errors.password} </div>)}/>
      
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    );
  }
  
  export default Formulario;