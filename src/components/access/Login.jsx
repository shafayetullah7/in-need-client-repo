import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import { Helmet } from 'react-helmet-async';
// import { toast } from 'react-toastify';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const {signIn} = useContext(AuthContext);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in all fields');
    } else {
      console.log(email,password);

      signIn(email,password)
      .then(result=>{
        console.log(result);
        navigate('/');

      })
      .catch(err=>{
        setError('failed to login');
        console.log(err.message);
      })

      setEmail('');
      setPassword('');
      setError('');
    }
  };

  return (
    <div className="flex justify-center mt-40">
      <Helmet>
        <title>In-need | Login</title>
      </Helmet>
      <div className="w-[350px] p-10 bg-white rounded shadow-xl">
        <h1 className="text-2xl font-bold mb-6 text-[#FF6D60]">Login</h1>
        
        <form onSubmit={handleSubmit}>

            <div className="mb-4">
                <label htmlFor="email" className="block text-sm mb-1">Enter your email</label>
                <input type="email" id="email" placeholder="Type here" className="w-full px-3 py-2 border rounded" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>

            <div className="mb-4">
                <label htmlFor="password" className="block text-sm mb-1">Enter password</label>
                <input type="password" id="password" placeholder="Type here" className="w-full px-3 py-2 border rounded" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>

          {error && <p className="text-red-600 text-xs mb-4">{error}</p>}
          <div>
            <input type="submit" value="Login" className="outline-none border border-[#FF6D60] px-4 py-2 rounded-md font-bold text text-[#FF6D60] active:scale-95 duration-150 cursor-pointer hover:text-white hover:bg-[#FF6D60]" />
          </div>

        </form>


        <p className='mt-7 text-sm text-center'>Do not have an account? <Link className='text-[#FF6D60] font-bold underline' to={'/register'}>Register</Link></p>
      </div>
    </div>
  );
};

export default Login;
