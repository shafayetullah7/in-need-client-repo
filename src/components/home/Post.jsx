import { useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Post = () => {
    AOS.init();
    const [formData, setFormData] = useState({
        sector: "",
        subsector: "",
        title: "",
        description: "",
        address: "",
        dateFrom: "",
        dateTo: "",
        volunteersNeeded: "",
        image: null,
      });
    
      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      };
    
      const handleImageChange = (event) => {
        const file = event.target.files[0];
        setFormData((prevState) => ({
          ...prevState,
          image: file,
        }));
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic
        console.log(formData);
      };
    
    return (
        <div className="grid grid-cols-2 gap-20 border-4 border-[#30df61] p-20 rounded-2xl">
            <div data-aos="fade-right" data-aos-delay="50" data-aos-duration="700" data-aos-easing="ease-in-out" data-aos-anchor-placement="top-center" className="flex flex-col gap-10 items-center justify-center">
                <h1 className="text-7xl text-[#30df61] font-bold text-center">Ask for Volunteers</h1>
                <div className="text-gray-600">
                    <p className="md:w-[70%] w-full mx-auto text-center mt-5 tracking-widest">Do you have a project or an event that could benefit from the support of dedicated volunteers? We're here to help make it happen! Whether you're organizing a community initiative, a charity event, or a social project, our platform connects you with passionate volunteers ready to lend a hand.</p>
                    <p className="md:w-[70%] w-full mx-auto text-center mt-5 tracking-widest">Simply fill out the form below to submit your volunteer request. Describe your project, specify the skills needed, and let us know how volunteers can contribute. Together, we can achieve extraordinary things and make a lasting impact in our community.</p>
                </div>
            </div>
            <div data-aos="fade-left"  data-aos-delay="50" data-aos-duration="700" data-aos-easing="ease-in-out" data-aos-anchor-placement="top-center">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-5">
                        <div>
                            <label className="block mb-2">
                            Sector:
                            <select name="sector" value={formData.sector} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2 mt-1">
                                <option value="">Select Sector</option>
                                {/* Add your sector options here */}
                            </select>
                            </label>
                        </div>
                        <div>
                            <label className="block mb-2">
                            Subsector:
                            <select name="subsector" value={formData.subsector} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2 mt-1">
                                <option value="">Select Subsector</option>
                                {/* Add your subsector options here */}
                            </select>
                            </label>
                        </div>
                    </div>
                    <div>
                        <label className="block mb-2">
                        Title:
                        <input type="text" name="title" value={formData.title} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2 mt-1"/>
                        </label>
                    </div>
                    <div>
                        <label className="block mb-2">
                        Description:
                        <textarea name="description" value={formData.description} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2 mt-1"></textarea>
                        </label>
                    </div>
                    <div className="grid grid-cols-2 gap-5">
                        <div>
                            <label className="block mb-2">
                            Address:
                            <input type="text" name="address" value={formData.address} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2 mt-1"/>
                            </label>
                        </div>
                        <div>
                            <label className="block mb-2">
                            Volunteers Needed:
                            <input type="number" min={'1'} name="volunteersNeeded" value={formData.volunteersNeeded} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2 mt-1"/>
                            </label>
                        </div>
                    </div>
                    <div>
                        <label className="block mb-2">
                        <span>Date (From - To): </span>
                        <input type="date" name="dateFrom" value={formData.dateFrom} onChange={handleChange} className=" border border-gray-300 inline-block rounded px-3 py-2 mt-1"/>
                        <span className="mx-2">-</span>
                        <input type="date" name="dateTo" value={formData.dateTo} onChange={handleChange} className=" border border-gray-300 inline-block rounded px-3 py-2 mt-1"/>
                        </label>
                    </div>
                    
                    <div>
                        <label className="block mb-2">
                        Image:
                        <input type="file" accept="image/*" name="image" onChange={handleImageChange} className="mt-2"/>
                        </label>
                    </div>
                    <div>
                        <button type="submit" className=" bg-[#30df61] hover:bg-[#219542] text-white font-bold py-2 px-4 rounded">Upload request</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Post;