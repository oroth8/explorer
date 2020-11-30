const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb+srv://Project3:nasaGame@cluster0.8myrz.mongodb.net/nasagame?retryWrites=true&w=majority"
);

const questionSeed = [
  {
    level: "North America",
    questionText: "What is the largest city in North America?",
    answerChoices: [
      { answerText: "New York", isCorrect: false },
      { answerText: "Toronto", isCorrect: false },
      { answerText: "Los Angeles", isCorrect: false },
      { answerText: "Mexico City", isCorrect: true },
    ],
  },
  {
    level: "North America",
    questionText:
      "The tallest mountain in North America, Denali (pictured below), can be found in what US state?",
    answerChoices: [
      { answerText: "Colorado", isCorrect: false },
      { answerText: "Alaska", isCorrect: true },
      { answerText: "Washington", isCorrect: false },
      { answerText: "Montana", isCorrect: false },
    ],
    questionImg: "../img/questions/denali.jpg",
  },
  {
    level: "North America",
    questionText: "What body of water borders North America to the West?",
    answerChoices: [
      { answerText: "Atlantic Ocean", isCorrect: false },
      { answerText: "Gulf of Mexico", isCorrect: false },
      { answerText: "Pacific Ocean", isCorrect: true },
      { AnswerText: "Indian Ocean", isCorrect: false },
    ],
    questionImg: "../img/questions/NA.jpg",
  },
  {
    level: "North America",
    questionText: "Which is the largest lake of the North American continent?",
    answerChoices: [
      { answerText: "Lake Michigan", isCorrect: false },
      { answerText: "Lake Superior", isCorrect: true },
      { answerText: "Lake Tahoe", isCorrect: false },
      { answerText: "Lake Huron", isCorrect: false }
    ],
    questionImg: "../img/questions/Great_Lakes.jpg"
  },
  {
    level: "North America",
    questionText: "What is the longest mountain range in North America?",
    answerChoices: [
      { answerText: "Appalachian Mountains", isCorrect: false },
      { answerText: "Canadian Rockies", isCorrect: false },
      { answerText: "Sierra Nevada", isCorrect: false },
      { answerText: "Rocky Mountains", isCorrect: true },
    ],
    questionImg: "../img/questions/Rocky.jpg"
  },
  {
    level: "South America",
    questionText: "The largest river basin in the world can be found in South America, to which river does it belong?",
    answerChoices: [
      { answerText: "Amazon River", isCorrect: true },
      { answerText: "Madeira River", isCorrect: false },
      { answerText: "River Paraguay", isCorrect: false},
      { answerText: "Rio Tocantins", isCorrect: false},
    ],
    questionImg: "../img/questions/amazon_river.jpg"
  },
  {
    level: "South America",
    questionText: "Which of the below South American countries border both the Atlantic and Pacific Oceans?",
    answerChoices: [
      { answerText: "Brazil", isCorrect: false},
      { answerText: "Argentina", isCorrect: false},
      { answerText: "Chile", isCorrect: true },
      { answerText: "Bolivia", isCorrect: false },
    ],
    questionImg: "../img/questions/map_SA.png"
  },
  {
    level: "South America",
    questionText: "Which of the below South American countries is landlocked (not touching an ocean)?",
    answerChoices: [
      { answerText: "Paraguay", isCorrect: true },
      { answerText: "Brazil", isCorrect: false },
      { answerText: "Argentina", isCorrect: false },
      { answerText: "Venezuela", isCorrect: false },
    ],
    questionImg: "../img/questions/map_SA.png"
  },
  {
    level: "South America",
    questionText: "The tallest waterfall in the world can be found in South America. What is it's name?",
    answerChoices: [
      { answerText: "Iguazu Falls", isCorrect: false },
      { answerText: "Angel Falls", isCorrect: true },
      { answerText: "Salto Grande", isCorrect: false },
      { answerText: "Tequendama Falls", isCorrect: false },
    ],
    questionImg: "../img/questions/angel_falls.png"
  },
  {
    level: "South America",
    questionText: "What is the most spoken language in South America?",
    answerChoices: [
      { answerText: "Spanish", isCorrect: true },
      { answerText: "Portuguese", isCorrect: false },
      { answerText: "English", isCorrect:  false },
      { answerText: "French", isCorrect: false },
    ],
    questionImg: "../img/questions/Santiago_Skyline.jpg"
  },
  {
    level: "Europe",
    questionText: "What is Europe's largest country?",
    answerChoices: [
      { answerText: "Sweden", isCorrect: false },
      { answerText: "Turkey", isCorrect: false },
      { answerText: "France", isCorrect: false },
      { answerText: "Russia", isCorrect: true },
    ],
    questionImg: "../img/questions/europe_map.jpg"
  },
  {
    level: "Europe",
    questionText: "Which of the following is the most populous European capital city?",
    answerChoices: [
      { answerText: "London", isCorrect: false },
      { answerText: "Paris", isCorrect: false },
      { answerText: "Moscow", isCorrect: true },
      { answerText: "Berlin", isCorrect: false },
    ],
    questionImg: "../img/questions/St_Basils.jpg"
  },
  {
    level: "Europe",
    questionText: "Which is the longest mountain range found in Europe alone?",
    answerChoices: [
      { answerText: "Balkan Mountains", isCorrect: false },
      { answerText: "Alps", isCorrect: true },
      { answerText: "Pyrenees", isCorrect: false },
      { answerText: "Apennines", isCorrect: false },
    ],
    questionImg: "../img/questions/alps.jpg"
  },
  {
    level: "Europe",
    questionText: "What is the tallest mountain in Europe?",
    answerChoices: [
      { answerText: "Mont Blanc", isCorrect: false },
      { answerText: "Shkhara", isCorrect: false },
      { answerText: "Mount Elbrus", isCorrect: true },
      { answerText: "Tetnuldi", isCorrect: false },
    ],
    questionImg: "../img/questions/mount_elbrus.jpg"
  },
  {
    level: "Europe",
    questionText: "What building ranks as the tallest in Europe?",
    answerChoices: [
      { answerText: "OKO Tower", isCorrect: false },
      { answerText: "Eurasia Tower", isCorrect: false },
      { answerText: "Eiffel Tower", isCorrect: false },
      { answerText: "Federation Tower", isCorrect: true },
    ],
    questionImg: "../img/question/eiffel.jpg"
  },
 
  
];

db.Question.remove({})
  .then(() => db.Question.collection.insertMany(questionSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((error) => {
    console.error(error);
  });



// need to fill in our data
const locationSeed = [
  {
    name: "North America",
    description:
      "North America is a continent entirely within the Northern Hemisphere and almost all within the Western Hemisphere. It can also be described as a northern subcontinent of the Americas. It is bordered to the north by the Arctic Ocean, to the east by the Atlantic Ocean, to the southeast by South America and the Caribbean Sea, and to the west and south by the Pacific Ocean.  North America covers an area of about 24,709,000 square kilometers (9,540,000 square miles), about 16.5% of the Earth's land area and about 4.8% of its total surface. North America is the third-largest continent by area, following Asia and Africa, and the fourth by population after Asia, Africa, and Europe. In 2013, its population was estimated at nearly 579 million people in 23 independent states, or about 7.5% of the world's population, if nearby islands (most notably around the Caribbean) are included.  North America was reached by its first human populations during the last glacial period, via crossing the Bering land bridge approximately 40,000 to 17,000 years ago. The so-called Paleo-Indian period is taken to have lasted until about 10,000 years ago (the beginning of the Archaic or Meso-Indian period). The classic stage spans roughly the 6th to 13th centuries. The pre-Columbian era ended in 1492, with the beginning of the transatlantic migrations of European settlers during the Age of Discovery and the early modern period. Present-day cultural and ethnic patterns reflect interactions between European colonists, indigenous peoples, African slaves, immigrants, and the descendants of these groups.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Location_North_America.svg/330px-Location_North_America.svg.png",
  },
  {
    name: "Africa",
    description:
      "Africa is the world's second-largest and second-most populous continent, after Asia in both cases. At about 30.3 million km2 (11.7 million square miles) including adjacent islands, it covers 6% of Earth's total surface area and 20% of its land area. With 1.3 billion people as of 2018, it accounts for about 16% of the world's human population. Africa's population is the youngest amongst all the continents; the median age in 2012 was 19.7, when the worldwide median age was 30.4. Despite a wide range of natural resources, Africa is the least wealthy continent per capita, in part due to geographic impediments, legacies of European colonization in Africa and the Cold War, undemocratic rule and deleterious policies. Despite this low concentration of wealth, recent economic expansion and the large and young population make Africa an important economic market in the broader global context.  The continent is surrounded by the Mediterranean Sea to the north, the Isthmus of Suez and the Red Sea to the northeast, the Indian Ocean to the southeast and the Atlantic Ocean to the west. The continent includes Madagascar and various archipelagos. It contains 54 fully recognised sovereign states (countries), eight territories and two de facto independent states with limited or no recognition. Algeria is Africa's largest country by area, and Nigeria is its largest by population. African nations cooperate through the establishment of the African Union, which is headquartered in Addis Ababa.  Africa straddles the Equator and encompasses numerous climate areas; it is the only continent to stretch from the northern temperate to southern temperate zones. The majority of the continent and its countries are in the Northern Hemisphere, with a substantial portion and number of countries in the Southern Hemisphere. Africa is home to much biodiversity; it is the continent with the largest number of megafauna species, as it was least affected by the extinction of the Pleistocene megafauna. However, Africa also is heavily affected by a wide range of environmental issues, including desertification, deforestation, water scarcity, and other issues. These entrenched environmental concerns are expected to worsen as climate change impacts Africa. The UN Intergovernmental Panel on Climate Change has identified Africa as the continent most vulnerable to climate change.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Africa_%28orthographic_projection%29.svg/330px-Africa_%28orthographic_projection%29.svg.png",
  },
  {
    name: "South America",
    description:
      "South America is a continent in the Western Hemisphere, mostly in the Southern Hemisphere, with a relatively small portion in the Northern Hemisphere. It can also be described as a southern subcontinent of the Americas. The reference to South America instead of other regions (like Latin America or the Southern Cone) has increased in the last decades due to changing geopolitical dynamics (in particular, the rise of Brazil).  It is bordered on the west by the Pacific Ocean and on the north and east by the Atlantic Ocean; North America and the Caribbean Sea lie to the northwest. It includes twelve sovereign states: Argentina, Bolivia, Brazil, Chile, Colombia, Ecuador, Guyana, Paraguay, Peru, Suriname, Uruguay, and Venezuela; one overseas department and region of France: French Guiana; and one British Overseas Territory: the Falkland Islands. In addition, the ABC islands of the Kingdom of the Netherlands, Ascension Island (dependency of Saint Helena, Ascension and Tristan da Cunha, a British Overseas Territory), Bouvet Island (dependency of Norway), Panama, South Georgia and the South Sandwich Islands (a British Overseas Territory), and Trinidad and Tobago may also be considered part of South America.  South America has an area of 17,840,000 square kilometers (6,890,000 sq mi). Its population as of 2018 has been estimated at more than 423 million. South America ranks fourth in area (after Asia, Africa, and North America) and fifth in population (after Asia, Africa, Europe, and North America). Brazil is by far the most populous South American country, with more than half of the continent's population, followed by Colombia, Argentina, Venezuela and Peru. In recent decades, Brazil has also generated half of the continent's GDP and has become the first regional power.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/South_America_%28orthographic_projection%29.svg/330px-South_America_%28orthographic_projection%29.svg.png",
  },
  {
    name: "Europe",
    description:
      "Europe is a continent located entirely in the Northern Hemisphere and mostly in the Eastern Hemisphere. It comprises the westernmost part of Eurasia and is bordered by the Arctic Ocean to the north, the Atlantic Ocean to the west, the Mediterranean Sea to the south, and Asia to the east. Europe is commonly considered to be separated from Asia by the watershed of the Ural Mountains, the Ural River, the Caspian Sea, the Greater Caucasus, the Black Sea, and the waterways of the Turkish Straits. Although some of this border is over land, Europe is generally accorded the status of a full continent because of its great physical size and the weight of history and tradition.  Europe covers about 10,180,000 square kilometres (3,930,000 sq mi), or 2% of the Earth's surface (6.8% of land area), making it the second smallest continent. Politically, Europe is divided into about fifty sovereign states, of which Russia is the largest and most populous, spanning 39% of the continent and comprising 15% of its population. Europe had a total population of about 741 million (about 11% of the world population) as of 2018. The European climate is largely affected by warm Atlantic currents that temper winters and summers on much of the continent, even at latitudes along which the climate in Asia and North America is severe. Further from the sea, seasonal differences are more noticeable than close to the coast.  European culture is the root of Western civilization, which traces its lineage back to ancient Greece and ancient Rome. The fall of the Western Roman Empire in 476 AD and the subsequent Migration Period marked the end of Europe's ancient history and the beginning of the Middle Ages. Renaissance humanism, exploration, art and science led to the modern era. Since the Age of Discovery, started by Portugal and Spain, Europe played a predominant role in global affairs. Between the 16th and 20th centuries, European powers colonized at various times the Americas, almost all of Africa and Oceania, and the majority of Asia.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Europe_orthographic_Caucasus_Urals_boundary_%28with_borders%29.svg/330px-Europe_orthographic_Caucasus_Urals_boundary_%28with_borders%29.svg.png",
  },
  {
    name: "Asia",
    description:
      "Asia is Earth's largest and most populous continent, located primarily in the Eastern and Northern Hemispheres. It shares the continental landmass of Eurasia with the continent of Europe and the continental landmass of Afro-Eurasia with both Europe and Africa. Asia covers an area of 44,579,000 square kilometres (17,212,000 sq mi), about 30% of Earth's total land area and 8.7% of the Earth's total surface area. The continent, which has long been home to the majority of the human population,[5] was the site of many of the first civilizations. Asia is notable for not only its overall large size and population, but also dense and large settlements, as well as vast barely populated regions. Its 4.5 billion people (as of June 2019) constitute roughly 60% of the world's population.[6]   In general terms, Asia is bounded on the east by the Pacific Ocean, on the south by the Indian Ocean, and on the north by the Arctic Ocean. The border of Asia with Europe is a historical and cultural construct, as there is no clear physical and geographical separation between them. It is somewhat arbitrary and has moved since its first conception in classical antiquity. The division of Eurasia into two continents reflects East–West cultural, linguistic, and ethnic differences, some of which vary on a spectrum rather than with a sharp dividing line. The most commonly accepted boundaries place Asia to the east of the Suez Canal separating it from Africa; and to the east of the Turkish Straits, the Ural Mountains and Ural River, and to the south of the Caucasus Mountains and the Caspian and Black Seas, separating it from Europe.[7]",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Asia_%28orthographic_projection%29.svg/330px-Asia_%28orthographic_projection%29.svg.png",
  },
  {
    name: "Antartica",
    description:
      "Antarctica (/ænˈtɑːrtɪkə/ or /æntˈɑːrktɪkə/ (About this soundlisten)) is Earth's southernmost continent. It contains the geographic South Pole and is situated in the Antarctic region of the Southern Hemisphere, almost entirely south of the Antarctic Circle, and is surrounded by the Southern Ocean. At 14,200,000 square kilometres (5,500,000 square miles), it is the fifth-largest continent and nearly twice the size of Australia. At 0.00008 people per square kilometre, it is by far the least densely populated continent. About 98% of Antarctica is covered by ice that averages 1.9 km (1.2 mi; 6,200 ft) in thickness, which extends to all but the northernmost reaches of the Antarctic Peninsula.  Antarctica, on average, is the coldest, driest, and windiest continent, and has the highest average elevation of all the continents.[6] Most of Antarctica is a polar desert, with annual precipitation of 200 mm (7.9 in) along the coast and far less inland; there has been no rain there for almost 2 million years, yet 80% of the world freshwater reserves are stored there, enough to raise global sea levels by about 60 metres (200 ft) if all of it were to melt. The temperature in Antarctica has reached −89.2 °C (−128.6 °F) (or even −94.7 °C (−135.8 °F) as measured from space[8]), though the average for the third quarter (the coldest part of the year) is −63 °C (−81 °F). Anywhere from 1,000 to 5,000 people reside throughout the year at research stations scattered across the continent. Organisms native to Antarctica include many types of algae, bacteria, fungi, plants, protista, and certain animals, such as mites, nematodes, penguins, seals and tardigrades. Vegetation, where it occurs, is tundra.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Antarctica_%28orthographic_projection%29.svg/360px-Antarctica_%28orthographic_projection%29.svg.png",
  },
  {
    name: "Australia",
    description:
      "The continent of Australia, sometimes known in technical contexts by the names Sahul (/səˈhuːl/), Australinea, or Meganesia to distinguish it from the country of Australia, consists of the landmasses which sit on Australia's continental plate. The name Sahul takes its name from the Sahul Shelf, which is part of the continental shelf of the Australian continent. The continent includes mainland Australia, Tasmania, and the island of New Guinea, which consists of Papua New Guinea and Western New Guinea (a province of Indonesia). Situated in the geographical region of Oceania, Australia is the smallest of the seven traditional continents.  The continent includes a continental shelf overlain by shallow seas which divide it into several landmasses—the Arafura Sea and Torres Strait between mainland Australia and New Guinea, and Bass Strait between mainland Australia and Tasmania. When sea levels were lower during the Pleistocene ice age, including the Last Glacial Maximum about 18,000 BC, they were connected by dry land. During the past 18,000 to 10,000 years, rising sea levels overflowed the lowlands and separated the continent into today's low-lying arid to semi-arid mainland and the two mountainous islands of New Guinea and Tasmania.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Australia-New_Guinea_%28orthographic_projection%29.svg/300px-Australia-New_Guinea_%28orthographic_projection%29.svg.png",
  },
  {
    name: "Earth",
    description:
      "Earth is the third planet from the Sun and the only astronomical object known to harbor life. About 29% of Earth's surface is land consisting of continents and islands. The remaining 71% is covered with water, mostly by oceans but also lakes, rivers and other fresh water, which together constitute the hydrosphere. Much of Earth's polar regions are covered in ice. Earth's outer layer is divided into several rigid tectonic plates that migrate across the surface over many millions of years. Earth's interior remains active with a solid iron inner core, a liquid outer core that generates Earth's magnetic field, and a convecting mantle that drives plate tectonics.According to radiometric dating estimation and other evidence, Earth formed over 4.5 billion years ago. Within the first billion years of Earth's history, life appeared in the oceans and began to affect Earth's atmosphere and surface, leading to the proliferation of anaerobic and, later, aerobic organisms. Some geological evidence indicates that life may have arisen as early as 4.1 billion years ago. Since then, the combination of Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive. In the history of life on Earth, biodiversity has gone through long periods of expansion, occasionally punctuated by mass extinctions. Over 99% of all species that ever lived on Earth are extinct. Almost 8 billion humans live on Earth and depend on its biosphere and natural resources for their survival. Humans increasingly impact Earth's hydrology, atmospheric processes and other life.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/330px-The_Earth_seen_from_Apollo_17.jpg",
  },
  {
    name: "Sun",
    description:
      "The Sun is the star at the center of the Solar System. It is a nearly perfect sphere of hot plasma, heated to incandescence by nuclear fusion reactions in its core, radiating the energy mainly as light and infrared radiation. It is by far the most important source of energy for life on Earth. Its diameter is about 1.39 million kilometres (864,000 miles), or 109 times that of Earth, and its mass is about 330,000 times that of Earth. It accounts for about 99.86% of the total mass of the Solar System. Roughly three quarters of the Sun's mass consists of hydrogen (~73%); the rest is mostly helium (~25%), with much smaller quantities of heavier elements, including oxygen, carbon, neon, and iron.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg/330px-The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg",
  },
  {
    name: "Mercury",
    description:
      "Mercury is the smallest and innermost planet in the Solar System. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the planets in the Solar System. It is named after the Greek god Hermes (Ερμής), translated into Latin Mercurius Mercury, god of commerce, messenger of the gods, mediator between gods and mortals.  Like Venus, Mercury orbits the Sun within Earth's orbit as an inferior planet, and its apparent distance from the Sun as viewed from Earth never exceeds 28°. This proximity to the Sun means the planet can only be seen near the western horizon after sunset or eastern horizon before sunrise, usually in twilight. At this time, it may appear as a bright star-like object, but is often far more difficult to observe than Venus. The planet telescopically displays the complete range of phases, similar to Venus and the Moon, as it moves in its inner orbit relative to Earth, which recurs over its synodic period of approximately 116 days.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/330px-Mercury_in_color_-_Prockter07-edit1.jpg",
  },
  {
    name: "Venus",
    description:
      "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the second-brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasion, visible to the naked eye in broad daylight. Venus lies within Earth's orbit, and so never appears to venture far from the Sun, either setting in the west just after dusk or rising in the east a bit before dawn. Venus orbits the Sun every 224.7 Earth days. With a rotation period of 243 Earth days, it takes longer to rotate about its axis than any other planet in the Solar System by far, and does so in the opposite direction to all but Uranus (meaning the Sun rises in the west and sets in the east). Venus does not have any moons, a distinction it shares only with Mercury among the planets in the Solar System.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/PIA23791-Venus-NewlyProcessedView-20200608.jpg/330px-PIA23791-Venus-NewlyProcessedView-20200608.jpg",
  },
  {
    name: "Mars",
    description:
      "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the Red Planet. The latter refers to the effect of the iron oxide prevalent on Mars's surface, which gives it a reddish appearance distinctive among the astronomical bodies visible to the naked eye. Mars is a terrestrial planet with a thin atmosphere, with surface features reminiscent of the impact craters of the Moon and the valleys, deserts and polar ice caps of Earth.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/330px-OSIRIS_Mars_true_color.jpg",
  },
  {
    name: "Jupiter",
    description:
      "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun, but two-and-a-half times that of all the other planets in the Solar System combined. Jupiter is one of the brightest objects visible to the naked eye in the night sky, and has been known to ancient civilizations since before recorded history. It is named after the Roman god Jupiter. When viewed from Earth, Jupiter can be bright enough for its reflected light to cast visible shadows, and is on average the third-brightest natural object in the night sky after the Moon and Venus.  Jupiter is primarily composed of hydrogen with a quarter of its mass being helium, though helium comprises only about a tenth of the number of molecules. It may also have a rocky core of heavier elements, but like the other giant planets, Jupiter lacks a well-defined solid surface. Because of its rapid rotation, the planet's shape is that of an oblate spheroid (it has a slight but noticeable bulge around the equator). The outer atmosphere is visibly segregated into several bands at different latitudes, resulting in turbulence and storms along their interacting boundaries. A prominent result is the Great Red Spot, a giant storm that is known to have existed since at least the 17th century when it was first seen by telescope. Surrounding Jupiter is a faint planetary ring system and a powerful magnetosphere. Jupiter has 79 known moons, including the four large Galilean moons discovered by Galileo Galilei in 1610. Ganymede, the largest of these, has a diameter greater than that of the planet Mercury.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Jupiter_and_its_shrunken_Great_Red_Spot.jpg/330px-Jupiter_and_its_shrunken_Great_Red_Spot.jpg",
  },
  {
    name: "Saturn",
    description:
      "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine times that of Earth. It only has one-eighth the average density of Earth; however, with its larger volume, Saturn is over 95 times more massive. Saturn is named after the Roman god of wealth and agriculture; its astronomical symbol (♄) represents the god's sickle. The Romans named the seventh day of the week Saturday, Sāturni diēs (Saturn's Day) no later than the 2nd century for the planet Saturn.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Saturn_during_Equinox.jpg/450px-Saturn_during_Equinox.jpg",
  },
  {
    name: "Uranus",
    description:
      "Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus, who, according to Greek mythology, was the grandfather of Zeus (Jupiter) and father of Cronus (Saturn). It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System. Uranus is similar in composition to Neptune, and both have bulk chemical compositions which differ from that of the larger gas giants Jupiter and Saturn. For this reason, scientists often classify Uranus and Neptune as ice giants to distinguish them from the other gas giants. Uranus's atmosphere is similar to Jupiter's and Saturn's in its primary composition of hydrogen and helium, but it contains more ices such as water, ammonia, and methane, along with traces of other hydrocarbons. It has the coldest planetary atmosphere in the Solar System, with a minimum temperature of 49 K (−224 °C; −371 °F), and has a complex, layered cloud structure with water thought to make up the lowest clouds and methane the uppermost layer of clouds. The interior of Uranus is mainly composed of ices and rock.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Uranus2.jpg/330px-Uranus2.jpg",
  },
  {
    name: "Neptune",
    description:
      "Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, slightly more massive than its near-twin Uranus. Neptune is denser and physically smaller than Uranus because its greater mass causes more gravitational compression of its atmosphere. The planet orbits the Sun once every 164.8 years at an average distance of 30.1 AU (4.5 billion km; 2.8 billion mi). It is named after the Roman god of the sea and has the astronomical symbol ♆, a stylised version of the god Neptune's trident.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg/330px-Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg",
  },
];

db.Location.remove({})
  .then(() => db.Location.collection.insertMany(locationSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
