import { useEffect, useState } from "react";
import { RiErrorWarningLine } from "react-icons/ri";


import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

const Sectors = () => {
    const [sectors,setSectors] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/sectors')
        .then(res=>res.json())
        .then(data=>{
            setSectors(data);
            console.log(data);
        })
    },[])

    return (
        <div className="bg-[#ffeeee] p-10 py-20 rounded-2xl">
            <div>
            <h1 className="text-5xl font-bold text-center">Find Your Purpose, Join as a VOLUNTEER</h1>
            <p className="md:w-[70%] w-full mx-auto text-center mt-5 tracking-wider">Ready to make a difference? Explore our inspiring volunteer sectors and discover where your passion meets impact. Join forces with like-minded individuals and contribute to causes that matter.</p>
            </div>

            <div className="mt-20">
                {
                    <Accordion className="rounded-xl">
                        {sectors.map(sector => (
                            <AccordionItem key={sector._id} className="rounded-xl overflow-hidden my-2 border cursor-pointer border-[#FF6D60]">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <p className="inline-block font-bold">{sector.name}<span className="inline-block mx-10 text-xs border px-2 rounded-lg font-normal">In-Need</span></p>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-5">
                                        {
                                            sector.subcategories.map((cat,index)=><div key={index} className="w-[270px] h-[200px] rounded-xl overflow-hidden relative hover:-translate-y-2 duration-200">
                                                <img src={cat.imgLink} className="w-full h-full object-cover object-center" alt="" />
                                                <div className="absolute inset-0 bg-black bg-opacity-70 duration-150 hover:bg-opacity-30">
                                                    <p className="text-[#FF6D60] text-2xl font-bold p-5">{cat.name}</p>
                                                    <p className="text-[#f9e6ac] text-sm p-5 absolute bottom-0">{cat.description}</p>
                                                </div>
                                                
                                            </div>
                                            )
                                        }
                                    </div>
                                </AccordionItemPanel>
                            </AccordionItem>
                        ))}
                    </Accordion>
                }
            
                
            </div>
            
        </div>
    );
};

export default Sectors;