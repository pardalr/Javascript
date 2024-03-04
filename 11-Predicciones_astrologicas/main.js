function astrologia(){

    let nombre = document.getElementById("nombre").value;
    let signo = document.getElementById("signo").value;
    astro = signo.toLowerCase();

    let inicio = "Hola " + nombre + ", según las predicciones de hoy, a los " + signo + " les espera lo siguiente: <br><br>";

    switch (astro){

        case "aries":
            document.getElementById("venderMoto").innerHTML = inicio + "Te puede estar esperando una gran oportunidad profesional, si respondes hoy adecuadamente a una situación que se producirá en el ámbito laboral. Es lo que tus superiores esperan de ti. Si conoces bien a quienes integran tu grupo a diario, no tendrás ningún problema pero es mejor que prestes atención a la forma de trabajar de otras personas. Quizá tengas algo que aprender.";
            document.getElementById("foto").src = "/img/Aries.png";
        break;

        case "tauro":
            document.getElementById("venderMoto").innerHTML = inicio + "Te espera un buen día. Después de pasar por un bajón anímico que te tenía un poco alejada de todo, incluso de tus amigas, hoy has empezado a ver la vida de una forma más positiva y alegre. Haz lo posible por mantener esta actitud a diario porque te ayudará a trabajar con más ánimo y te hará ver las obligaciones como algo necesario e incluso agradable.";
            document.getElementById("foto").src = "/img/Taurus.png";
        break;

        case "geminis":
            document.getElementById("venderMoto").innerHTML = inicio + "Estás necesitando de forma urgente una conexión con tu YO interior. A veces precisamos estar con nosotros mismos y eso es exactamente lo que puede ocurrirte hoy. Apaga el móvil y vete a un lugar donde te puedas concentrar, meditar, reflexionar, aunque sea por un ratito. Te está haciendo mucha falta hacer esta introspección. Analiza esto que te ha pasado recientemente, sobre todo si es un asunto sentimental.";
            document.getElementById("foto").src = "/img/Gemini.png";
        break;

        case "cancer":
            document.getElementById("venderMoto").innerHTML = inicio + "Si hoy, te ves invadida por ese espíritu rebelde, que aparece en ti a veces y al que siempre haces caso omiso, escucha a tu voz interior. Estás necesitando a diario poner un poco de aventura en tu vida. Por eso, si hoy, por ejemplo, te sale un plan de esos delirantes para después del trabajo, acepta y vive la vida.";
            document.getElementById("foto").src = "/img/Cancer.png";
        break;


        case "leo":
            document.getElementById("venderMoto").innerHTML = inicio + "Hoy te va a alegrar el día una noticia referente al dinerito. Puede que te salden una antigua deuda, que tengas suerte en un juego de azar o que alguien que te quiere te haga un regalo. Date algún capricho y guarda el resto, no lo derroches ni lo gastes porque sí, puede que a diario te haga falta.";
            document.getElementById("foto").src = "/img/Leo.png";
        break;

        case "virgo":
            document.getElementById("venderMoto").innerHTML = inicio + "Estás pensando hoy que necesitas con urgencia realizar cambios en tu estilo de vida. Has de incorporar el ejercicio en tus hábitos de diario y hacerlo muy en serio, como cualquier otra obligación. También has de mejorar tu sistema de alimentación. Te va en ello no sólo la parte física sino también la salud y la energía.";
            document.getElementById("foto").src = "/img/Virgo.png";
        break;

        case "libra":
            document.getElementById("venderMoto").innerHTML = inicio + "Entras hoy en un período de claridad mental excepcional, y has de aprovecharlo para adquirir a diario nuevos conocimientos que darán un gran impulso a tu carrera profesional. Hoy es muy buen día para ti porque empiezas a escuchar a tus sentimientos y esto es muy positivo. Si tu corazón te habla, atiéndele porque siempre te indica el camino adecuado para conseguir lo que quieres siendo feliz.";
            document.getElementById("foto").src = "/img/Libra.png";
        break;

        case "escorpio":
            document.getElementById("venderMoto").innerHTML = inicio + "Estás en un momento profesional al que puedes sacarle mucho provecho. Hoy te llegarán buenas noticias en el trabajo como consecuencia del esfuerzo personal que le has dedicado a diario durante mucho tiempo. Tu gente más querida recibirá con orgullo esta información y tú también debes sentirte muy satisfecha y no reaccionar con falsa modestia.";
            document.getElementById("foto").src = "/img/Scorpio.png";
        break;

        case "sagitario":
            document.getElementById("venderMoto").innerHTML = inicio + "Hoy es un día perfecto para una cita, que puede convertirse en un encuentro romántico y fructífero. Si habías tenido una experiencia desagradable en el pasado, es un buen momento para volver a amar. Acércate a la persona que te atrae en estos momentos, no te muestres tan fría y ajena, entre otras cosas porque no lo sientes.";
            document.getElementById("foto").src = "/img/Sagittarius.png";
        break;

        case "capricornio":
            document.getElementById("venderMoto").innerHTML = inicio + "Aleja hoy todos los complejos que te han invadido inexplicablemente  a diario desde hace un tiempo. Has de empezar desde hoy mismo a creer en lo que vales, en los talentos que posees. A lo largo de la jornada se presentará un problema que se resolverá gracias a tus habilidades. Si tú estás convencida de lo que eres profesionalmente, los demás también lo verán así.";
            document.getElementById("foto").src = "/img/Capricorn.png";
        break;
        
        case "acuario":
            document.getElementById("venderMoto").innerHTML = inicio + "Estás hoy un poco apalancada. Necesitas moverte y poner a diario más emociones en tu vida. Te iría bien conocer nueva gente, ver cosas nuevas, otros mundos, otras culturas, otras expresiones artísticas. No hace falta que viajes, si vives en una ciudad grande lo tienes al alcance de la mano. Ampliar tus perspectivas de este modo te ayudará tanto en tu relación social como en tu trabajo porque te aportará una dosis extra de creatividad.";
            document.getElementById("foto").src = "/img/Aquarius.png";
        break;

        case "piscis":
            document.getElementById("venderMoto").innerHTML = inicio + "Últimamente, tienes tendencia a querer resultados al instante en cualquier cosa que haces. Estás hoy bastante impaciente pero has de hacerte a la idea de que todo lo bueno se hace esperar y que a diario has tener paciencia para esperar a que llegue lo que tanto deseas. Es posible que el tema económico influya, porque necesitas que llegue ya más dinerito a tus bolsillos.";
            document.getElementById("foto").src = "/img/Pisces.png";
        break;   

        default:
            document.getElementById("venderMoto").innerHTML = "<h3>Introduce los datos correctamente.<h3>";
            document.getElementById("foto").src = "/img/Alert2.png";


    }























}