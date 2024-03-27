import React from 'react'
import { BiSolidQuoteSingleLeft } from "react-icons/bi";

export function About(props) {
    

    return (
        <>
        {/* About Us */}
        <div className='md:py-24'>
        
        <div className='overflow-hidden relative mix-blend-overlay'>
         <div className=' bg-green-500 '>
            <h1 className=' text-center py-10 text-3xl font-bold text-blue-950 '>About Us</h1>
         </div>
          
         
        {/* About Transconst */}
        
        <div className='max-h-max w-full bg-white'>
            <div className=' grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4 py-5'>
                <div className=' max-h-max w-full  px-5 py-5'>
                    <h1 className='pb-5 text-4xl font-bold text-blue-950'>About <span className='text-green-600'> TransConst</span></h1>
                  <p className=' text-lg text-justify'>"We are One Stop Company, based out of Mumbai, India, offering services and solutions aimed to secure, safeguard, protect and manage your Digital Landscape and Business Enablers - People, Process, Technology, Data and Things, but enabled and empowered you to Build Digital Trust among your Customers. Within in short span of 2 and half years, we have been able carve out our own niche and has been able to serve customers across multiple industry verticals and geographies with quality conscious and innovative services best suited to them.</p>
                </div>

                <div className='flex max-h-max w-full  px-10'>
 
                   <div className='top-10 hover:scale-x-110 hover:scale-y-110 transition duration-300'>
                     <img src="image/attack.jpeg" className=' pt-3 max-h-lvh w-72 float-left rounded-bl-3xl' alt="" />
                   </div>
                   <div className='hover:scale-x-110 hover:scale-y-110 transition duration-300'>
                     <img src="image/security.jpg" className=' max-h-lvh w-96 float-right rounded-br-3xl' alt="" />
                    </div>
                   
                </div>

            </div>
            </div> 

        </div> 

        {/* Vision Mission */}

        <div className=' max-h-max w-full bg-blue-100 mx-auto my-4'>
            <div className=' grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-1 py-10 px-5 mx-auto'>
             <div className='max-h-max w-full  px-2 py-2'>
                <img src="image/v-m-v.png" alt="" className=' mx-auto h-96 w-96' />
             </div>
             <div className='max-h-max w-full  px-0 py-2'>
                <h1 className='text-4xl font-semibold text-blue-950 ps-0 py-4'>Vision</h1>
                <p className='ps-0text-lg'>To be among the top and the most trusted companies in the cyber security space</p>
                <h1 className='text-4xl font-semibold text-blue-950 ps-0 py-4'>Mission</h1>
                <p className='ps-0 text-lg'>To provide best suited, quality and innovative solutions to people and organizations in their journey towards sustainable maturity of security posture.</p>
                <h1 className='text-4xl font-semibold text-blue-950 ps-0 py-4'>Value</h1>
                <ul className='px-6 list-disc text-lg'>
                    <li>Transparent</li>
                    <li>Customer Focus</li>
                    <li>Innovative</li>
                    <li>Quality Conscious</li>
                    <li>Empower and Enable</li>
                </ul>
             </div>

            </div>
        </div>
         
        {/* Our Approach */}
        <div className=' max-h-max w-full bg-white py-5 px-5'>
             <div className=' grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-4'>
                <div className='w-full h-full'>
                  <img src="image/d.jpg" alt="" />
                </div>
                <div className='w-full h-full col-span-2 '>
                    <h1 className='text-4xl text-blue-950 font-bold py-5 px-5 ps-0'>Our Approach</h1>
                    <p className='text-lg  text-justify'>Our solutions and services are customised as per customer needs and requirements and <span>1.)</span> Broadly comprises of a comprehensive Deep Dive consultation to help us Discover the gaps and opportunities in their technology stack, <span>2.)</span> A comprehensive Design plan that includes a project plan with timelines and milestones, a cost analysis, and a schedule to deliver on our promises. <span>3.)</span>We not only Deliver our solutions and services, but also partner and support with our customers to secure and optimize their digital landscape, thereby enabling them to Derive benefits from the Secured Technology landscape. That’s how we ensure your success.</p>
                </div>

             </div>
        </div>

        {/* Founders Message */}

        <div className=' max-h-max w-full bg-blue-100 mx-auto my-4'>
            <div className=' grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-4 py-10 px-5 mx-auto'>
                <div className='w-full h-full px-2 py-6'>
                    <img src="image/sk.jpg" className=' h-96 w-96' alt="" />
                    <h1 className='text-4xl text-blue-950 font-bold text-center tracking-wider italic text-nowrap'>Jatinkumar Modh</h1>
                    <h1 className='text-lg font-bold text-center '>Founder & Principal Consultant</h1>
                </div>
                <div className='w-full h-full px-2 py-0 col-span-2'>
                 <p className=' uppercase text-lg text-green-600'>founders Message</p>   
                <div className='text-3xl'><BiSolidQuoteSingleLeft /></div>
                    <ul className='px-6 list-disc text-justify text-lg space-y-3'>
                        <li>Believes that Security and Trust are 2 key CONSTANT FACTORS behind any successful business ventures and relationships over the millennial of years.</li>
                        <li>This belief has empowered and driven his professional career over the last 2 decades, with one hand on building Digital Trust in the Digital Landscape through Customer Services, User Experiences and Behaviour and other hand on Securing the Digital Landscape to further Fortify the Digital Trust.</li>
                        <li>During the journey, he was rewarded by many awards for his efforts both internally by organization and externally. The prominent one was “Next 100 CIO”.</li>
                        <li>Knowledge requires to be nurtured and that has led Our Founder to share and spread his learning on Data Security and Privacy at Professional Forums – like ISACA, Private and Professional Learning Channels and Educational Institutes.</li>
                    </ul>
                    <div className='text-3xl'><BiSolidQuoteSingleLeft /></div>
                </div>
                
             
            </div>
        </div>

        {/* Our Partners */}

        <div className='max-h-max w-full bg-white px-6 py-6'>
                 <h1 className='text-4xl text-blue-950 text-center font-semibold '>Our Partners</h1>
            <div className='flex items-center space-x-4 py-10'>
                <div className='w-full h-28'>
                    <img className='mx-auto' src="image/customer-logo-5.png" alt="" />
                </div>
                <div className='w-full h-28'>
                    <img className='mx-auto' src="image/customer-logo-10.png" alt="" />
                </div>
                <div className='w-full h-28'>
                    <img className='mx-auto' src="image/customer-logo-5.png" alt="" />
                </div>
                <div className='w-full h-28'>
                    <img className='mx-auto' src="image/customer-logo-10.png" alt="" />
                </div>
            </div>
            
        </div>
        </div>

        </>
    )
}
