import Head from 'next/head'
import { BsFillMoonStarsFill } from "react-icons/bs";
import Image from 'next/image';

import miguel from './MiguelRB.png';
import design from './design.png';
import code from './code.png';
import consulting from './consulting.png';
import weather from './WeatherApp.PNG';
import techP from './TechPhoneApp.PNG';





import{AiFillTwitterCircle, AiFillLinkedin,AiFillYoutube,} from "react-icons/ai";
export default function Home() {
  
  return (
    <div >
      <Head>
        <title> Miguel Angler Rincon Portafolio</title>
        <meta name="description" content="Generated by miguel "></meta>
        <link rel="icon" href='/favicon.icon'></link>
      </Head>
    
      <main className='bg-white px-10 font-black text-black md:px-20 lg:px-40 '>
        <section className=" min-h-screen">
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-bold'>developedbyMIGUEL</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill className='cursor-pointer text-2xl'/>
              </li>
              <li><a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 border-node py-2 rounded-md ml-8' href="https://drive.google.com/file/d/1DRxN5KXLfmB5fexkHgUvu4nkRopdnMVE/view?usp=share_link">Resume</a></li>
            </ul>

          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl' >Miguel Angel Rincon</h2>
            <h3 className='text-2xl py-2 md:text-3xl'>Full Stack developer and designer</h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto'>
            I am proactive, resourceful, innovative and focused on continuous learning. I have a strong work ethic and ability to learn independently. My goal is to add value to your team with my analytical and technological skills.
            </p>


          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
            <AiFillTwitterCircle/>
            <AiFillLinkedin/>
            <AiFillYoutube/>
          </div>
          <div className=' relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96 '>
            <Image src={miguel} />
          </div>



        </section>
        <section>
          <div>
            <h3 className='text-3xl py-1'>Servicces i Offer</h3>
            <p className='text-md py-2 leading-8 text-gray-800'>
              Theoretical knowledge of <span className='text-teal-500'>Machine Learning </span> (decision trees, NLP, image processing).<br></br>
              Hands-on experience with exploratory data analysis and feature engineering.<br></br>
              Basic understanding of statistics and statistical inference.<br></br>
              Knowledge of linear algebra, optimization and time series modeling.<br></br>
              Programming in <span className='text-teal-500'>Python with analytical libraries</span> such as pandas, scikit-learn, PySpark and plotly.<br></br>
              Basic knowledge of <span className='text-teal-500'>Deep Learning architectures</span> (CNN, RNN) and tools such as TensorFlow and PyTorch.<br></br>
              Experience with Jupyter Notebook/Lab environments and frameworks such as PyCharm.<br></br>
              Use of versioning with <span className='text-teal-500'> GIT and GitHub.</span><br></br>
              Basic understanding of relational databases and ability to query large databases (SQL, Hue, Spark).<br></br>
            </p>
          </div>
          <div className='md:flex gap-10'>
            <div className='items-center  text-center shadow-2xl pt-10 rounded-xl my-10'>
              <Image className='mx-auto' src={design} width={100} height={100}/>
              <h3 className='text-lg  pt-8 pb-2'>Beautiful Designs</h3>
              <p className='py-2 font-medium'> Creating elegant desings suited for your needs following core design theory.</p>
              <h4 className='py-4 text-teal-600'>Designs tools i use:</h4>  
              <p className='text-gray-800 py-1'>Photoshop</p>
              <p className='text-gray-800 py-1'>Ilustrator</p>
              <p className='text-gray-800 py-1'>Figma</p>

            </div>
            <div className='items-center  text-center shadow-2xl pt-10 rounded-xl my-10'>
              <Image className='mx-auto' src={code} width={100} height={100}/>
              <h3 className='text-lg  pt-8 pb-2'>Beautiful Designs</h3>
              <p className='py-2 font-medium'> Creating elegant desings suited for your needs following core design theory.</p>
              <h4 className='py-4 text-teal-600'>Designs tools i use:</h4>  
              <p className='text-gray-800 py-1'>Photoshop</p>
              <p className='text-gray-800 py-1'>Ilustrator</p>
              <p className='text-gray-800 py-1'>Figma</p>

            </div>
            <div className='items-center  text-center shadow-2xl pt-10 rounded-xl my-10'>
              <Image className='mx-auto' src={consulting} width={100} height={100}/>
              <h3 className='text-lg  pt-8 pb-2'>Beautiful Designs</h3>
              
              <p className='py-2 font-medium'> Creating elegant desings suited for your needs following core design theory.</p>
              <h4 className='py-4 text-teal-600'>Designs tools i use:</h4>  
              <p className='text-gray-800 py-1'>Photoshop</p>
              <p className='text-gray-800 py-1'>Ilustrator</p>
              <p className='text-gray-800 py-1'>Figma</p>

            </div>
          </div>
        </section>
        <section >
          <div>
            <h3 className='text-3xl py-1'>Portafolio</h3>
            <p className='text-md py-2 leadning-8 text-gray-700'>Welcome to my portfolio as a Web Developer specializing in cutting-edge technologies like React and Next.js. 
              In this space, I invite you to explore a sample of my work and discover how my passion for programming has translated into innovative,
               high-quality web solutions.
               My focus lies in creating modern, highly efficient web applications that not only excel in performance but also deliver an exceptional user experience.
                Using the powerful capabilities of React and Next.js, I have built projects ranging from corporate websites to interactive web applications,
                 providing customized solutions that cater to the specific needs of my clients.</p>
          </div>
          <div  className='md:flex gap-10'>
            <a href='https://weather-14k748ota-rincon3s-projects.vercel.app/'>
            <div className='items-center  text-center shadow-2xl pt-10 rounded-xl my-10'>
              <h3 className='text-lg  pt-8 pb-2'>Weather App</h3>
              <Image src={weather}/>
              
              
              <p className='py-2 font-medium'> Web application for managing climate data consuming the OpenWatherMap API and implementing dynamic icons.</p>
              
            </div></a>
            <a href='https://techphone.vercel.app/'>
            <div className='items-center  text-center shadow-2xl pt-10 rounded-xl my-10'>
              <h3 className='text-lg  pt-8 pb-2'>TechPhoneApp</h3>
              <Image src={techP}/>
              
              
              <p className='py-2 font-medium'> It is a mobile phone recommendation application with a user management module and suggested content powered by web scraping.</p>
              
            </div></a>

          </div>
        </section>
      </main>
    
    </div>
  )
}
