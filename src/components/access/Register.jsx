import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const Register = () => {
  const { createUser,updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();


  const {register,control,formState:{errors},handleSubmit} = useForm();

  const onSubmit = (data) =>{
    console.log(data);
    const image = data.profileImage[0];
    console.log(image)
    const formData = new FormData();
    formData.append('image',image)

    const imgbburl = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KEY}`;
    console.log(imgbburl)


    // host image
    axios({
      method: 'post',
      url: imgbburl,
      data: formData
    })
    .then(imgbb=>{
      console.log(imgbb);

      // create user/register
      createUser(data.email,data.password)
      .then(result=>{
        console.log(result);

        updateUserProfile(data.fullName,imgbb.data.data.display_url)

        const userData = {
          ...data,profileImage:imgbb.data.data.display_url
        }
        delete userData.password;
        
        // store data to db
        axios.post('http://localhost:5000/users',userData)
        .then(res=>{
          console.log(res);
          toast.success('Register Successful')
          navigate('/');
        })

      })
      .catch(err=>{
        console.log(err);
      })
    })
    .catch(err=>{
      console.log(err);
    })
  }

  

  return (
    <div className="flex justify-center mt-24">
        <Helmet>
          <title>In-need | Register</title>
        </Helmet>
        <div className="w-[400px] p-6 bg-white rounded shadow-xl">
          <h1 className="text-2xl font-bold mb-6 text-[#FF6D60]">Create an account</h1>

          <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
              <div className="grid grid-cols-2 gap-4">

                  <div className="col-span-2">
                      <div>
                        <label htmlFor="fullName" className="block text-sm mb-1">Full Name<span className="text-red-500">*</span></label>
                        <input type="text" placeholder="First and Last Name" className="w-full px-3 py-2 border rounded" {...register('fullname',{
                          required:{
                            value:true,
                            message:'Name is required'
                          }
                        })}/>
                      </div>
                      <p className="text-xs text-red-600">{errors.fullName?.message}</p>
                  </div>

                  <div>
                      <div>
                        <label htmlFor="email" className="block text-sm mb-1">Email<span className="text-red-500">*</span></label>
                        <input type="email" placeholder="example@example.com" className="w-full px-3 py-2 border rounded" {...register('email',{
                          required:{
                            value:true,
                            message:'Email is required'
                          }
                        })}/>
                      </div>
                      <p className="text-xs text-red-600">{errors.email?.message}</p>
                  </div>

                  <div>
                      <div>
                        <label htmlFor="password" className="block text-sm mb-1">Password<span className="text-red-500">*</span></label>
                        <input type="password" placeholder="Password" className="w-full px-3 py-2 border rounded" {...register('password',{
                          required:{
                            value:true,
                            message:'Password is required'
                          }
                        })}/>
                      </div>
                      <p className="text-xs text-red-600">{errors.password?.message}</p>
                  </div>

                  <div>
                      <div>
                        <label htmlFor="phoneNumber" className="block text-sm mb-1">Phone Number<span className="text-red-500">*</span></label>
                        <input type="text" placeholder="Phone Number" className="w-full px-3 py-2 border rounded" {...register('phone',{
                          required:{
                            value:true,
                            message:'Phone number is required'
                          }
                        })}/>
                      </div>
                      <p className="text-xs text-red-600">{errors.password?.message}</p>
                  </div>

                  <div>
                      <div>
                        <label htmlFor="address" className="block text-sm mb-1">Address<span className="text-red-500">*</span></label>
                        <input type="text" placeholder="Address" className="w-full px-3 py-2 border rounded" {...register('address',{
                          required:{
                            value:true,
                            message:'Address is required'
                          }
                        })}/>
                      </div>
                      <p className="text-xs text-red-600">{errors.address?.message}</p>
                  </div>

                  <div>
                      <div>
                        <label htmlFor="dateOfBirth" className="block text-sm mb-1">Date of Birth<span className="text-red-500">*</span></label>
                        <input type="date" className="w-full px-3 py-2 border rounded" {...register('dateOfBirth',{
                          required:{
                            value:true,
                            message:'Date of Birth is required'
                          }
                        })}/>
                      </div>
                      <p className="text-xs text-red-600">{errors.address?.message}</p>
                  </div>
                  
                  <div>
                      <div>
                        <label htmlFor="emergencyContact" className="block text-sm mb-1">Emergency Contact</label>
                        <input type="text" placeholder="Emergency Contact" className="w-full px-3 py-2 border rounded" {...register('emergencyContact')}/>
                      </div>
                      <p className="text-xs text-red-600">{errors.emergencyContact?.message}</p>
                  </div>

                  <div>
                      <div>
                        <label htmlFor="profession" className="block text-sm mb-1">Profession</label>
                        <input type="text" placeholder="Profession" className="w-full px-3 py-2 border rounded" {...register('profession')}/>
                      </div>
                      <p className="text-xs text-red-600">{errors.profession?.message}</p>
                  </div>

                  <div>
                      <div>
                        <label htmlFor="profileImage" className="block text-sm mb-1">Profile Image</label>
                        <input type="file" className="w-full" accept="image/*" {...register('profileImage')}/>
                      </div>
                      <p className="text-xs text-red-600">{errors.profession?.message}</p>
                  </div>
                  
              </div>

              <div className="mt-4">
                  <input type="submit" value="Register"className="outline-none border border-[#FF6D60] px-4 py-2 rounded-md font-bold text text-[#FF6D60] active:scale-95 duration-150 cursor-pointer hover:text-white hover:bg-[#FF6D60]"/>
              </div>
          </form>
          <p className="mt-4 text-sm">Already have an account?{' '}<Link className="text-[#FF6D60] font-bold underline" to="/login">Login</Link></p>
        </div>
        <DevTool control={control}></DevTool>
    </div>
    );
  };
  
  export default Register;
  
