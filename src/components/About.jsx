import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Sai Kumar, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>As a 3rd-year student pursuing Computer Science and Engineering from VIT Bhopal, I am deeply passionate about building exceptional
                 software solutions that enhance the lives of those around me. With a strong foundation in programming and a keen eye for detail, 
                 I am constantly seeking opportunities to apply my skills and contribute to the field of software development. I am currently exploring
                job opportunities where I can utilize my knowledge and creativity to create meaningful software products that make a difference.
                </p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;