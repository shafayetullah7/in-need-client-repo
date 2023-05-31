import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useForm } from "react-hook-form";
import useSectors from "../../hooks/useSectors";
import { DevTool } from "@hookform/devtools";

const Post = () => {
    AOS.init();

      const {register,handleSubmit,control,setValue,watch,formState:{errors}} = useForm();
      const onSubmit = (data)=>{
        console.log(data);
      }



    const {data:sectors} = useSectors();
    const sector = watch('sector');
    const [subs,setSubs] = useState([]);

    useEffect(()=>{
        const category = sectors.find(sec=>{
            if(sec.name===sector)return sec;
        })
        let subcategories = category && category.subcategories.map(cat=>cat.name);
        setSubs(subcategories);
        setValue('subsector','');
    },[sector,sectors])
    
    useEffect(()=>{
        console.log('subs: ',subs);
    },[subs])
    
    return (
        <div className="grid grid-cols-2 gap-20 border-4 border-[#30df61] p-20 rounded-2xl">
            <div 
            data-aos="fade-right" 
            data-aos-offset="-200"
            data-aos-delay="0" 
            data-aos-duration="700" 
            data-aos-easing="ease-in-out" 
            data-aos-anchor-placement="top-center" 
            className="flex flex-col gap-10 items-center justify-center">
                <h1 className="text-7xl text-[#30df61] font-bold text-center">Ask for Volunteers</h1>
                <div className="text-gray-600">
                    <p className="md:w-[70%] w-full mx-auto text-center mt-5 tracking-widest">Do you have a project or an event that could benefit from the support of dedicated volunteers? We're here to help make it happen! Whether you're organizing a community initiative, a charity event, or a social project, our platform connects you with passionate volunteers ready to lend a hand.</p>
                    <p className="md:w-[70%] w-full mx-auto text-center mt-5 tracking-widest">Simply fill out the form below to submit your volunteer request. Describe your project, specify the skills needed, and let us know how volunteers can contribute. Together, we can achieve extraordinary things and make a lasting impact in our community.</p>
                </div>
            </div>

            <div data-aos="fade-left"  data-aos-delay="50" data-aos-duration="700" data-aos-easing="ease-in-out" data-aos-anchor-placement="top-center">
                <form className="space-y-4" onSubmit={handleSubmit(onSubmit)} noValidate>
                    <div className="grid grid-cols-2 gap-5">
                        <div>
                            <label className="block mb-2">
                            Sector:
                            <select name="sector" {...register('sector',{
                                required:{
                                    value:true,
                                    message:'Must provide sector'
                                }
                            })}  className="w-full border border-gray-300 rounded px-3 py-2 mt-1">
                                <option value="">Select Sector</option>
                                {
                                    sectors.map(sector=>{
                                        return <option key={sector._id} value={sector.name}>{sector.name}</option>
                                    })
                                }
                            </select>
                            </label>
                            <p className="text-xs text-red-600">{errors.sector?.message}</p>
                        </div>
                        <div>
                            <label className="block mb-2">
                            Subsector:
                            <select name="subsector" {...register('subsector',{
                                required:{
                                    value:true,
                                    message:'Must provide subsector'
                                }
                            })}  className="w-full border border-gray-300 rounded px-3 py-2 mt-1">
                                <option value="">Select Subsector</option>
                                {
                                    subs && subs.map((sub,index)=>{
                                        return <option key={index} value={sub}>{sub}</option>
                                    })
                                }
                            </select>
                            </label>
                            <p className="text-xs text-red-600">{errors.subsector?.message}</p>
                        </div>
                    </div>
                    <div>
                        <label className="block mb-2">
                        Title:
                        <input type="text" name="title" {...register('title',{
                            required:{
                                value:true,
                                message:'title required'
                            }
                        })}  className="w-full border border-gray-300 rounded px-3 py-2 mt-1"/>
                        </label>
                        <p className="text-xs text-red-600">{errors.title?.message}</p>
                    </div>

                    <div>
                        <label className="block mb-2">
                        Description:
                        <textarea name="description"  className="w-full border border-gray-300 rounded px-3 py-2 mt-1" {...register('description',{
                            required:{
                                value:true,
                                message:'Description required'
                            }
                        })}></textarea>
                        </label>
                        <p className="text-xs text-red-600">{errors.description?.message}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-5">
                        <div>
                            <label className="block mb-2">
                            Address:
                            <input type="text" name="address" {...register('address',{
                                required:{
                                    value:true,
                                    message:'Address required'
                                }
                            })}  className="w-full border border-gray-300 rounded px-3 py-2 mt-1"/>
                            </label>
                            <p className="text-xs text-red-600">{errors.address?.message}</p>
                        </div>
                        <div>
                            <label className="block mb-2">
                            Volunteers Needed:
                            <input type="number" min={'1'} name="volunteersNeeded" {...register('requiredVolunteer',{
                                required:{
                                    value:true,
                                    message:'Volunteer number required'
                                }
                            })} className="w-full border border-gray-300 rounded px-3 py-2 mt-1"/>
                            </label>
                            <p className="text-xs text-red-600">{errors.volunteersNeeded?.message}</p>
                        </div>
                    </div>
                    <div>
                        <label className="block mb-2">
                        <span>Date (From - To): </span>
                        <input type="date" name="dateFrom" {...register('dateFrom',{
                            required:{
                                value:true,
                                message:'From required'
                            }
                        })} className=" border border-gray-300 inline-block rounded px-3 py-2 mt-1"/>
                        <span className="mx-2">-</span>
                        <input type="date" name="dateTo" {...register('dateTo',{
                            required:{
                                value:true,
                                message:'To required'
                            }
                        })} className=" border border-gray-300 inline-block rounded px-3 py-2 mt-1"/>
                        </label>
                        <p className="text-xs text-red-600">{errors.dateFrom?.message}</p>
                        <p className="text-xs text-red-600">{errors.dateTo?.message}</p>
                    </div>
                    
                    {/* <div>
                        <label className="block mb-2">
                        Image:
                        <input type="file" accept="image/*" name="image" {...register('image')} multiple  className="mt-2"/>
                        </label>
                    </div> */}
                    <div>
                        <button type="submit" className=" bg-[#30df61] hover:bg-[#219542] text-white font-bold py-2 px-4 rounded">Upload request</button>
                    </div>
                </form>
                
            </div>
            {/* <DevTool control={control}></DevTool> */}
        </div>
    );
};

export default Post;