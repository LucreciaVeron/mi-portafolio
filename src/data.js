import apv from './assets/img/apv.PNG';
import flappyBirdVegano from './assets/img/flappyBirdVegano.PNG';
import cotizador from './assets/img/cotizador.PNG';

export const myData = {
  name: "Lucrecia Verón",
  role: "FullStack Developer",
  resume: "/CV_LucreciaVeron.pdf", 
  socials: {
    github: "https://github.com/lucreciaveron",
    linkedin: "https://www.linkedin.com/in/lucreciaveron/",
    email: "mailto:lucreciaveron.99@gmail.com"
  },
  projects: [
    {
      title: "Administrador de Pacientes Veterinarios",
      description: "Aplicación para la gestión de pacientes de una clínica veterinaria.",
      tech: ["React", "Node.js", "Tailwind", "MongoDB", "JavaScript"],
      demo: "https://stunning-daifuku-239d48.netlify.app/",
      github: "https://github.com/LucreciaVeron/apv_frontend_deploy",
      image: apv
    },
    {
      title: "Flappy Bird Vegano",
      description: " Juego de escritorio desarrollado en Java, está inspirado en el clásico Flappy Bird.",
      tech: ["Java"],
      github: "https://github.com/LucreciaVeron/Vegan-Flappy-Bird",
      image: flappyBirdVegano
    },
    {
      title: "Cotizador de Préstamos",
      description: "Aplicación que simula un sistema de cotización de préstamos.",
      tech: ["Node.js", "React", "Tailwind", "JavaScript"],
      demo: "https://classy-maamoul-276e23.netlify.app/",
      github: "https://github.com/LucreciaVeron/cotizador-prestamos-react",
      image: cotizador
    }
  ]
};
