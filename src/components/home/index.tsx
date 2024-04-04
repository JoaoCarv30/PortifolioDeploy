import eu from '../../assets/eu.jpeg';
import eu2 from '../../assets/eu2.png';

export function Home () {
  return (
    <section className="container w-screen h-screen text-white flex flex-col  justify-center md:flex-row items-center md:justify-between ">
      <div className="w-full md:w-6/12 text-center md:text-left text-4xl font-bold ">
        <h1>Hi, I'm João Victor</h1>
        <span className='text-personal-color-rose'>Full Stack Web Developer!</span>
       
      </div>
      <div className='bg-personal-color-rose border-image'><img className='  md:block hidden' src={eu2} alt="eu" /></div>
    </section>
  );
}
