import React from 'react'
import img3 from '../assets/img3.jpg';
function About() {
    return (
        <div>
           <div className='flex justify-center items-center my-20'>
            <div>
                <img src={img3} className='w-[900px] h-[300px] mx-10 rounded-sm shadow-md'/>
            </div>
            <div className='mx-24'>
                <p className='font-sans font-bold text-3xl mb-5'>React Development is Carried out by passionate developers</p>
                <p className='mb-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum repellat earum eos odit soluta ipsa nesciunt a blanditiis natus, minus doloremque quis veniam suscipit non nihil, rem consectetur quo tenetur!</p>
                <p className='mb-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi voluptates, deleniti similique omnis totam adipisci aut asperiores accusamus porro quod!</p>
            </div>
           </div>
        </div>
    )
}

export default About
