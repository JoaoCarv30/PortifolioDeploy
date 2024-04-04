
import macbook2 from '../../assets/macbook2.jpg';

export function About() {
    return (
        <>
            <section className="container h-screen w-screen ">
                <h1 className="text-personal-color-rose text-center text-4xl font-bold ">
                    About Me
                </h1>
                <div className="w-full h-5/6 flex items-center justify-center text-white md:gap-10">

                    <img src={macbook2} alt="imagem-perfil-ilustrativa" className='hidden sm:block md:h-5/6 rounded-md' />

                    <div className='p-5 text-xl leading-relaxed flex flex-col items-center justify-center md:gap-2  '>
                        <p>Hello! I'm João Victor, an enthusiastic programmer and aspiring web developer, excited to embark on this thrilling journey in the world of web development. At 22 years old, I'm full of energy and determination to dive headfirst into this exciting field.</p>
                        <p>My passion for programming is evident in every line of code I write. I'm constantly learning and striving to improve my skills in web development. I firmly believe in the importance of continuous learning and dedication to achieve my goals in this ever-evolving field.</p>
                        <p>
                            Though still in the early stages of my career, I'm eager to build a solid foundation of knowledge and experience in web development. I'm open to opportunities for learning, collaboration, and mentorship that can help me grow professionally.</p>
                    </div>
                </div>

            </section>
        </>
    )
}