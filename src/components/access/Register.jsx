import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',email: '',phoneNumber: '',address: '',dateOfBirth: '',availability: '',
    interests: '',skills: '',emergencyContact: '',profession: '',profileImage: null,password: '',
  });

  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, profileImage: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Check if required fields are empty
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phoneNumber ||
      !formData.address ||
      !formData.dateOfBirth ||
      !formData.password
    ) {
      setError('Please fill in all required fields');
      return;
    }

    // Check password length
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    // Perform form submission or data processing
    console.log(formData);
    createUser(formData.email, formData.password)
      .then((result) => {
        console.log(result);
        navigate('/');
      })
      .catch((err) => {
        console.log(err.message);
        setError('Some error Occured')
      });

    // Reset form and error state
    setFormData({
      fullName: '',email: '',phoneNumber: '',address: '',dateOfBirth: '',availability: '',
      interests: '',skills: '',emergencyContact: '',profession: '',profileImage: null,password: '',
    });
  };

  return (
    <div className="flex justify-center mt-24">
        <div className="w-[400px] p-6 bg-white rounded shadow-xl">
            <h1 className="text-2xl font-bold mb-6 text-[#FF6D60]">Create an account</h1>

            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="grid grid-cols-2 gap-4">

                    <div className="col-span-2">
                        <label htmlFor="fullName" className="block text-sm mb-1">Full Name<span className="text-red-500">*</span></label>
                        <input type="text" id="fullName" name="fullName" placeholder="First and Last Name" className="w-full px-3 py-2 border rounded" value={formData.fullName} onChange={handleInputChange}/>
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm mb-1">Email<span className="text-red-500">*</span></label>
                        <input type="email" id="email" name="email" placeholder="example@example.com" className="w-full px-3 py-2 border rounded"value={formData.email} onChange={handleInputChange}/>
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm mb-1">Password<span className="text-red-500">*</span></label>
                        <input type="password" id="password" name="password" placeholder="Password" className="w-full px-3 py-2 border rounded" value={formData.password}onChange={handleInputChange}/>
                    </div>

                    <div>
                        <label htmlFor="phoneNumber" className="block text-sm mb-1">Phone Number<span className="text-red-500">*</span></label>
                        <input type="text" id="phoneNumber" name="phoneNumber" placeholder="Phone Number" className="w-full px-3 py-2 border rounded" value={formData.phoneNumber} onChange={handleInputChange}/>
                    </div>

                    <div>
                        <label htmlFor="address" className="block text-sm mb-1">Address<span className="text-red-500">*</span></label>
                        <input type="text" id="address" name="address" placeholder="Address" className="w-full px-3 py-2 border rounded" value={formData.address}onChange={handleInputChange}/>
                    </div>

                    <div>
                        <label htmlFor="dateOfBirth" className="block text-sm mb-1">Date of Birth<span className="text-red-500">*</span></label>
                        <input type="date" id="dateOfBirth" name="dateOfBirth" className="w-full px-3 py-2 border rounded" value={formData.dateOfBirth} onChange={handleInputChange}/>
                    </div>
                    
                    <div>
                        <label htmlFor="emergencyContact" className="block text-sm mb-1">Emergency Contact</label>
                        <input type="text" id="emergencyContact" name="emergencyContact" placeholder="Emergency Contact" className="w-full px-3 py-2 border rounded" value={formData.emergencyContact} onChange={handleInputChange}/>
                    </div>

                    <div>
                        <label htmlFor="profession" className="block text-sm mb-1">Profession</label>
                        <input type="text" id="profession" name="profession" placeholder="Profession" className="w-full px-3 py-2 border rounded" value={formData.profession} onChange={handleInputChange}/>
                    </div>

                    <div>
                        <label htmlFor="profileImage" className="block text-sm mb-1">Profile Image</label>
                        <input type="file" id="profileImage" name="profileImage" className="w-full" accept="image/*" onChange={handleFileChange}/>
                    </div>
                    
                </div>

                {error && <p className="text-red-600 text-xs mt-2">{error}</p>}
                <div className="mt-4">
                    <input type="submit" value="Register"className="outline-none border border-[#FF6D60] px-4 py-2 rounded-md font-bold text text-[#FF6D60] active:scale-95 duration-150 cursor-pointer hover:text-white hover:bg-[#FF6D60]"/>
                </div>
            </form>
            <p className="mt-4 text-sm">Already have an account?{' '}<Link className="text-[#FF6D60] font-bold underline" to="/login">Login</Link></p>
        </div>
    </div>
    );
  };
  
  export default Register;
  
