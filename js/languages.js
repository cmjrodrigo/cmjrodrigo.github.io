const doc = {
    about : {
        title : document.querySelector("#about h2"),
        text : document.querySelector("#about p"),
    },
    skills : {
        title : document.querySelector("#skills h2"),
        hard : {
            title : document.querySelector("#skills").getElementsByTagName("h3")[0],
            list : [...document.querySelector("#skills").getElementsByTagName("ul")[0].getElementsByTagName("li")]
        },
        soft : {
            title : document.querySelector("#skills").getElementsByTagName("h3")[1],
            list : [...document.querySelector("#skills").getElementsByTagName("ul")[1].getElementsByTagName("li")]
        }
    },
    career : {
        title : document.querySelector("#career h2"),
        list : [...document.querySelector("#career ul").getElementsByTagName("li")]
    },
    education : {
        title : document.querySelector("#education h2"),
        list : [...document.querySelector("#education ul").getElementsByTagName("li")]
    },
    projects : {
        title: document.querySelector("#projects h2"),
        list : [...document.querySelectorAll("#big-project-container div p")]
    }
};

const lan = {
    es : {
        about : {
            title : "Acerca de mi",
            text : "Soy un estudiante de tecnologías computacionales con conocimientos de desarrollo web básico, así como manejo de lenguajes de programación de bajo y alto nivel. Me encanta leer libros, cómics, manga y webtoons, y también tengo interés por la divulgación científica y la astrofísica. Soy trilingüe (sin contar ningún lenguaje de programación), y me gusta aprender e interactuar con diferentes culturas de todo el mundo; su música, su comida, su historia, etc. También me gusta escuchar música y sé tocar la guitarra y el bajo.",
        },
        skills : {
            title : "Habilidades",
            hard : {
                title : "Habilidades duras",
                list : ["HTML & CSS", "JS", "Git & GitHub", "Conocimientos avanzados del lenguaje C", "Conocimientos básicos de Python y C++", "Español(nativo)", "Inglés C1", "Alemán B1"]
            },
            soft : {
                title : "Habilidades blandas",
                list : ["Paciencia", "Hablar en público", "Buenas habilidades de comunicación", "Rápido aprendizaje", "Pensamiento crítico"]
            }
        },
        career : {
            title : "Carrera profesional",
            list : ["2023: Desarrollo de páginas web para grupos estudiantiles"]
        },
        education : {
            title : "Educación",
            list : ["2023 - Actualidad: Tecnologías Computacionales. Instituto Tecnológico y de Estudios Superiores de Monterrey"]
        },
        projects : {
            title: "Proyectos",
            list : ["Portafolio de desarrollador", "Página web de AIRams", "Aplicación de C en la terminal: Banco.Co"]
        }
    },
    en : {
        about : {
            title : "About me",
            text : "I am a computational technologies student with knowledge of basic web development, as well as management of both low and high level programming languages. I love to read books, comics, manga, and webtoons, and I also have an interest for scientific divulgation and astrophysics. I'm trilingual (without counting any programming languages), and like to learn and interact with different cultures from all around the world; their music, their food, story, etc. I also like to listen to music and can play both guitar and bass.",
        },
        skills : {
            title : "Skills",
            hard : {
                title : "Hard skills",
                list : ["HTML & CSS", "JS", "Git & GitHub", "Advanced C language knowledge", "Basic Python and C++", "Spanish(native)", "English C1", "German B1"]
            },
            soft : {
                title : "Soft skills",
                list : ["Patience", "Public speaking", "Good communication skills", "Fast learner", "Critical Thinking"]
            }
        },
        career : {
            title : "Career",
            list : ["2023: Development of student group websites"]
        },
        education : {
            title : "Education",
            list : ["2023 - Present date: Computational Technologies. Instituto Tecnológico y de Estudios Superiores de Monterrey"]
        },
        projects : {
            title: "Projects",
            list : ["Developer Portfolio", "AIRams website", "C terminal app: Banco.Co"]
        }
    },
    de : {
        about : {
            title : "Über mich",
            text : "Ich bin Student der Computertechnologien und verfüge über Grundkenntnisse in der Webentwicklung sowie in der Beherrschung von Programmiersprachen auf niedriger und hoher Ebene. Ich lese gerne Bücher, Comics, Mangas und Webtoons und interessiere mich auch für wissenschaftliche Erkenntnisse und Astrophysik. Ich bin dreisprachig (ohne Programmiersprachen mitzuzählen) und lerne gerne verschiedene Kulturen aus der ganzen Welt kennen; ihre Musik, ihr Essen, ihre Geschichten usw. Ich höre auch gerne Musik und kann sowohl Gitarre als auch Bass spielen.",
        },
        skills : {
            title : "Fähigkeiten",
            hard : {
                title : "Hard Skills",
                list : ["HTML & CSS", "JS", "Git & GitHub", "Fortgeschrittene C-Sprachkenntnisse", "Grundkenntnisse in Python und C++", "Spanisch(Muttersprache)", "Englisch C1", "Deutsch B1"]
            },
            soft : {
                title : "Soft Skills",
                list : ["Geduld", "Öffentliches Reden", "Gute Kommunikationsfähigkeiten", "Schnelle Auffassungsgabe", "Kritisches Denken"]
            }
        },
        career : {
            title : "Karriere",
            list : ["2023: Entwicklung von Websites für Studentengruppen"]
        },
        education : {
            title : "Bildung",
            list : ["2023 - heute: Computertechnologien. Instituto Tecnológico y de Estudios Superiores de Monterrey"]
        },
        projects : {
            title: "Projekte",
            list : ["Entwickler-Portfolio", "AIRams website", "C Terminal App: Banco.co"]
        }
    }
};

function copyArr(a, b){
    for(let i = 0; i < a.length; i++){
        a[i].innerHTML = b[i];
    }
}

function changeLanguage(docObj, lanObj){
    switch(lanObj){
        case lan.en:
            localStorage.setItem("Language", "en");
            break;
        case lan.es:
            localStorage.setItem("Language", "es");
            break;
        case lan.de: 
            localStorage.setItem("Language", "de");
            break;
        default:
            localStorage.setItem("Language", "en");
    }
    //about
    docObj.about.title.innerHTML = lanObj.about.title;
    docObj.about.text.innerHTML = lanObj.about.text;

    //skills
    docObj.skills.title.innerHTML = lanObj.skills.title;
        //hard
    docObj.skills.hard.title.innerHTML = lanObj.skills.hard.title;
    copyArr(docObj.skills.hard.list, lanObj.skills.hard.list);
        //soft
    docObj.skills.soft.title.innerHTML = lanObj.skills.soft.title;
    copyArr(docObj.skills.soft.list, lanObj.skills.soft.list);

    //career
    docObj.career.title.innerHTML = lanObj.career.title;
    copyArr(docObj.career.list, lanObj.career.list);

    //education
    docObj.education.title.innerHTML = lanObj.education.title;
    copyArr(docObj.education.list, lanObj.education.list);

    //projects
    docObj.projects.title.innerHTML = lanObj.projects.title;
    copyArr(docObj.projects.list, lanObj.projects.list);
}

let pastLan = localStorage.getItem("Language");

switch(pastLan){
    case "en":
        changeLanguage(doc, lan.en);
        break;
    case "es":
        changeLanguage(doc, lan.es);
        break;
    case "de":
        changeLanguage(doc, lan.de);
        break;
}

let de = document.getElementById("deutsch");
let en = document.getElementById("english");
let es = document.getElementById("español");

de.addEventListener("click", function() {
   changeLanguage(doc, lan.de); 
});

en.addEventListener("click", function(){
    changeLanguage(doc, lan.en);
});

es.addEventListener("click", function(){
    changeLanguage(doc, lan.es);
});