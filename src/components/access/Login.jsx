import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in all fields');
    } else {
      console.log(email,password);


      setEmail('');
      setPassword('');
      setError('');
    }
  };

  return (
    <div className="flex justify-center mt-40">
      <div className="w-[350px] p-10 bg-white rounded shadow-xl">
        <h1 className="text-2xl font-bold mb-6 text-[#003F5C]">Login</h1>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm mb-1">
              Enter your email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Type here"
              className="w-full px-3 py-2 border rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm mb-1">
              Enter password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Type here"
              className="w-full px-3 py-2 border rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="text-red-600 text-xs mb-4">{error}</p>}
          <div>
            <input type="submit" value="Login" className="outline-none border border-[#003F5C] px-4 py-2 rounded-md font-bold text text-[#003F5C] active:scale-95 duration-150 cursor-pointer hover:text-white hover:bg-[#003F5C]" />
          </div>
        </form>
        <p className='mt-7 text-sm text-center'>Do not have an account? <Link className='text-[#003F5C] font-bold underline' to={'/register'}>Register</Link></p>
      </div>
    </div>
  );
};

export default Login;
