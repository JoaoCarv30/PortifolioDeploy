import { ProjectCard } from "../projectCard";

export function Projects() {
  return (
    <section className="container h-screen w-screen mt-10">
      <h1 className="text-personal-color-rose text-center text-4xl font-bold m-10">
        Projects
      </h1>

      <div className="h-5/6 w-full  flex items-center justify-center gap-10 flex-wrap">
        <ProjectCard
          title="My project 1"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, blanditiis esse aut explicabo quae, saepe quas aliquid officia soluta hic commodi autem quia. Asperiores itaque obcaecati dolor sit unde minus."
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZvy0qo1bsGuhXer7YlnSokjBFAcRZ8qEYkggq6Er7hQ&s"
          link="dsadasdasdasd"
          key={1}
        />

<ProjectCard
          title="My project 1"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, blanditiis esse aut explicabo quae, saepe quas aliquid officia soluta hic commodi autem quia. Asperiores itaque obcaecati dolor sit unde minus."
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZvy0qo1bsGuhXer7YlnSokjBFAcRZ8qEYkggq6Er7hQ&s/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U"
          link="dsadasdasdasd"
          key={1}
        />



<ProjectCard
          title="My project 1"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, blanditiis esse aut explicabo quae, saepe quas aliquid officia soluta hic commodi autem quia. Asperiores itaque obcaecati dolor sit unde minus."
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZvy0qo1bsGuhXer7YlnSokjBFAcRZ8qEYkggq6Er7hQ&s/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U"
          link="dsadasdasdasd"
          key={1}
        />


      

      </div>
    </section>
  );
}

