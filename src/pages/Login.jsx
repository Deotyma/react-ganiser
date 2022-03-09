import { useFormik } from 'formik';
const Login = () => {
  const formik = useFormik({
    initialValues:{
      email: '',
      password:''
    },
    onSubmit: values =>{
      alert(JSON.stringify(values, null,2))
      console.log(JSON.stringify(values))
    },
  });
    return (
      <div className="container">
          <h1> Login to our app</h1>
          <form onSubmit={formik.handleSubmit}>
       <label htmlFor="email">Email</label>
       <input
         id="email"
         name="email"
         type="email"
         onChange={formik.handleChange}
         value={formik.values.email}
       />
       <label htmlFor="password">Password</label>
      <input
         id="password"
         name="password"
         type="password"
         onChange={formik.handleChange}
         value={formik.values.password}
       />
 
       <button className='primary_button' type="submit">Submit</button>
     </form>
          
      </div>
    );
  }
  
  export default Login;