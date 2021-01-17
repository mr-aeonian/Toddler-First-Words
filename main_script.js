var changeImage = document.querySelector("html");
var img = document.getElementById("images");
var title = document.getElementById("title");
var info = document.getElementById("info");
var bodyID = document.querySelector("body");
var temp, n;
if(bodyID.id === "animals"){
    temp = "animals";
    n = 28;
}else if(bodyID.id === "birds"){
    temp = "birds";
    n = 24;
}else if(bodyID.id === "shapes"){
    temp = "shapes";
    n = 11;
}else if(bodyID.id === "fruits"){
    temp = "fruits";
    n = 24;
}else if(bodyID.id === "vegetables"){
    temp = "vegetables";
    n = 21;
}else{
    temp = "vehicles";
    n = 25;
}
var array = [];
for(i=1;i<n+1; i++){
    array.push("./"+temp+"/image ("+i+").jpg");
};
function animation(){
    img.classList.toggle("fade");
    info.classList.toggle("anim");
};
changeImage.addEventListener("click", function () {
    var randomNumber = Math.floor(Math.random() * n);
    img.innerHTML = "<img src=\"" + array[randomNumber] + "\"/>"; 
    console.log(randomNumber);
    switch(temp){
        case "animals":
            useAnimals(randomNumber);
            break;
        case "birds":
            useBirds(randomNumber);
            break;
        case "shapes":
            useShapes(randomNumber);
            break;
        case "vegetables":
            useVegetables(randomNumber);
            break;
        case "vehicles":
            useVehicles(randomNumber);
            break;
        case "fruits":
            useFruits(randomNumber);
            break;
        default:
            title.innerText = "Its working";
            info.innerText = "Some random info";
    }
});
function useAnimals(n){
    switch(n){
        case 0:
            title.innerText = "CAT";
            info.innerText = "They live for 2-16 years. Cats love to lick themselves and keep themselves clean. Cats love fish. Cats are one of the most popular pets.";
            animation();
            break;
        case 1:
            title.innerText = "COW";
            info.innerText = "They live for 18-22 years. Cows love to eat grass. Cows give us milk. A cow has 32 teeth, which is same as a human.";
            animation();
            break;
        case 2:
            title.innerText = "DEER";
            info.innerText = " They live for 15-25 years. Deers also like to eat grass and fruits and plants. Some deers have beautiful and big horns. Deers are very shy animal by nature.";
            animation();
            break;
        case 3:
            title.innerText = "DOGS";
            info.innerText = "They live for 10-13 years. Dogs are very loyal to their masters. They love to play. We all should love dogs.";
            animation();
            break;
        case 4:
            title.innerText = "GOATS";
            info.innerText = "They live for 15-18 years. Goats and deers are brothers and sisters. They are very related to each other. Many people keep goats in their house.";
            animation();
            break;
        case 5:
            title.innerText = "HORSES";
            info.innerText = "They live for 25-30 years. Horses loves to eat grass. People often ride on them in specific places to have fun. Horses can sleep both standing up and lying down.";
            animation();
            break;
        case 6:
            title.innerText = "LIONS";
            info.innerText = "They live for 10-14 years. Lions are the king of jungle. They are very dangerous animals. They have very sharp teeth and jaws.";
            animation();
            break;
        case 7:
            title.innerText = "MONKEYS";
            info.innerText = "They live for 20-27 years. Monkeys are the most naughtiest animals. They travel in groups. They eat fruits, biscuits, vegetables. Monkeys love to eat banana.";
            animation();
            break;
        case 8:
            title.innerText = "RABBIT";
            info.innerText = "They live for 1 - 2 years. Rabbits are the loveliest and cutest of animals. They love to eat carrots. They have very big ears.";
            animation();
            break;
        case 9:
            title.innerText = "TIGER";
            info.innerText = "They live for 10-15 years. Tigers are very strong, powerful and dangerous animals. They are the relatives of cats. Tigers love to swim and play in the water.";
            animation();
            break;
        case 10:
            title.innerText = "SHARK";
            info.innerText = "They live for 20-30 years. Sharks do not have bones. Shark skin feels similar to sandpaper. Sharks are afraid of killer whales or orcas.";
            animation();
            break;
        case 11:
            title.innerText = "WHALE";
            info.innerText = "Whales are the largest animals on our planet. They live for an average of 80 years. There are various types of whales such as Blue whale, Killer Whale, Sperm whale, Beluga whale. The one in this photograph is Blue whale.";
            animation();
            break;
        case 12:
            title.innerText = "SNAKE";
            info.innerText = "Snakes live for around 9 years. They don’t have eyelids. Snakes do not bite their food like we do, they swallow it completely. Snakes are found on every continent of the world except Antarctica.";
            animation();
            break;
        case 13:
            title.innerText = "JELLYFISH";
            info.innerText = "Jellyfish have no brain, no eyes, or bones or heart. Their mouth is found in the centre of its body. Some kind of jellyfish can kill a fully grown human beings. They have poison in their tentacles.";
            animation();
            break;
        case 14:
            title.innerText = "CRAB";
            info.innerText = "Crabs can walk in all directions, but mostly they walk and run sideways. Crabs life for 3-4 years. Crabs are also known as “spiders of the sea”. All crabs have claws on their two front legs.";
            animation();
            break;
        case 15:
            title.innerText = "CROCODILE";
            info.innerText = "Crocodiles are the biggest reptile on Earth. They are closely related to dinosaurs and birds. A crocodile has 80 teeth and they are able to replace each of their 80 teeth up to 50 times in their 35- to 75-year lifespan.";
            animation();
            break;
        case 16:
            title.innerText = "TORTOISE";
            info.innerText = "Tortoises generally have one of the longest lifespans of any animal, and some individuals are known to have lived longer than 150 years. They can live almost anywhere. Their shell is very tough.";
            animation();
            break;
        case 17:
            title.innerText = "BEAR";
            info.innerText = "The brown bear is a large bear species found across Eurasia and North America. In North America, the populations of brown bears are called grizzly bears. They eat fish, berries, roots, mammals, insects. They have 42 teeth.";
            animation();
            break;
        case 18:
            title.innerText = "CHAMELEON";
            info.innerText = "These organism can change their body colour. They mainly change colour in order to communicate or maintain body temperature. Chameleons are from the family of lizards. Unlike lizards, they cannot regrow their tail.";
            animation();
            break;
        case 19:
            title.innerText = "FOX";
            info.innerText = "A male is called a 'dog fox' while a female is called a 'vixen'. The fox is a member of the dog family. A group of foxes is called a skulk or leash.";
            animation();
            break;
        case 20:
            title.innerText = "SQUIRREL";
            info.innerText = "A new born squirrel is about an inch long. Most squirrels have large eyes and short fur. A squirrel's front teeth never stop growing.";
            animation();
            break;
        case 21:
            title.innerText = "HAMSTER";
            info.innerText = "Hamsters have thick silky fur, short tails, small ears, short legs, wide feet and large eyes. The best-known species of hamster is the golden or Syrian hamster, which is the type most commonly kept as pets.";
            animation();
            break;
        case 22:
            title.innerText = "ZEBRA";
            info.innerText = "Zebras are African animals with distinctive black-and-white striped coats. They have a lifespan of around 25 years. A group of zebras is called ‘Dazzle’.";
            animation();
            break;
        case 23:
            title.innerText = "ELEPHANT";
            info.innerText = "Elephants are exceptionally smart creatures. They have the largest brain of any land animal. The largest elephant was an African elephant, weighed around 10886.217 kilogram and was 13 feet tall. An elephant is the only mammal who can't jump.";
            animation();
            break;
        case 24:
            title.innerText = "RHINO";
            info.innerText = "A rhino’s horn and our finger nails are made of the same material. Endangered one-horned rhino is found in Assam, India. In Africa, two horned Rhino is found. Rhinos have poor vision.";
            animation();
            break;
        case 25:
            title.innerText = "FROG";
            info.innerText = "Frog lives for 10-12 years. They typically lay their eggs in the water. A group of frogs is called an army. Frogs are found all over the world.";
            animation();
            break;
        case 26:
            title.innerText = "GIRAFFE";
            info.innerText = "Giraffes live up to 26 years. They are well known for their long necks. Giraffes are the world’s tallest living land animals. A giraffe has three hearts.";
            animation();
            break;
        case 27:
            title.innerText = "DOLPHIN";
            info.innerText = "Dolphins are meat eaters. Bottlenose dolphins are the most common and well known type of dolphin. Compared to other animals, dolphins are believed to be very intelligent.";
            animation();
            break;
        default:
            title.innerText = "It is working";
            info.innerText = "SOME EXTRA INFO";
    }
};
function useBirds(n){
switch(n){
    case 0:
        title.innerText = "PEACOCK";
        info.innerText = "Peacock is the national bird of India. They love to dance when its raining. Peacocks are best known for their amazing eye-spotted tail feathers.";
        animation();
        break;
    case 1:
        title.innerText = "PIGEON";
        info.innerText = "Pigeons are also known as \"rock doves\". Baby pigeons eat food that their parents eat. Pigeons build nests around farms, warehouses, mills and grain storage. In ancient times, pigeons were used to send letters.";
        animation();
        break;
    case 2:
        title.innerText = "SPARROW";
        info.innerText = "They are usually brown and gray. They have short tails and small, strong beaks. Most sparrows eat seeds or small insects.";
        animation();
        break;
    case 3:
        title.innerText = "DUCK";
        info.innerText = "Ducks are mostly aquatic birds living in both fresh water and sea water and found on every continent except for Antarctica. A male duck is called a drake, a female duck a hen, and a baby duck a duckling. Ducks are omnivores.";
        animation();
        break;
    case 4:
        title.innerText = "EAGLE";
        info.innerText = "Eagles are large, powerful birds of prey. Eagles have large, hooked beaks. Eagles have excellent eyesight. They build their nests on high cliffs or in tall trees.";
        animation();
        break;
    case 5:
        title.innerText = "FLAMINGO";
        info.innerText = "Flamingo has a very long neck, long pink legs and webbed pink feet with three toes. There are six species of flamingo in the world. They live up to 40-60 years.";
        animation();
        break;
    case 6:
        title.innerText = "HEN";
        info.innerText = "Hens are the most common birds on earth. Hen gives us eggs. They'll eat seeds and insects but also larger prey like small mice and lizards.";
        animation();
        break;
    case 7:
        title.innerText = "OWL";
        info.innerText = "Owls are active at night (nocturnal). A group of owls is called a parliament. Owls have large eyes and a flat face.";
        animation();
        break;
    case 8:
        title.innerText = "PARROT";
        info.innerText = "Parrots have curved bills (beaks), strong legs and clawed feet. Parrots are believed to be one of the most intelligent bird species. Some parrots are known for imitating human voices.";
        animation();
        break;
    case 9:
        title.innerText = "CROW";
        info.innerText = "Crows are large birds with shiny black feathers. They often live together in large families. They are known for their loud voices and their intelligence. These clever, curious birds have a reputation as thieves and pranksters.";
        animation();
        break;
    case 10:
        title.innerText = "GREAT EGRET";
        info.innerText = "This bird has a white body, white feathers, long black legs and a yellow beak. It uses its long sharp beak to catch and eat fish. They also eat frogs and other small aquatic animals.";
        animation();
        break;
    case 11:
        title.innerText = "ALBATROSSES";
        info.innerText = "Albatrosses are very large seabirds. They have very big wings. Albatrosses live up to 40 years. Albatrosses eat squid.";
        animation();
        break;
    case 12:
        title.innerText = "RED AND GREEN MACAW";
        info.innerText = "They live for 50-70years. These birds love to eat nuts and seeds. They look similar to Parrot but are bigger in size. There are various colours of a macaw.";
        animation();
        break;
    case 13:
        title.innerText = "TURKEY";
        info.innerText = "A turkey is a large bird native to North America. They are mostly domesticated but also live in the wild. Adult turkeys have around 3,500 feathers.  Turkeys can run up to 25 miles per hour.";
        animation();
        break;
    case 14:
        title.innerText = "KINGFISHER";
        info.innerText = "Kingfishers are generally brightly coloured birds that often fish for their food. There are about 90 kinds of kingfisher throughout the world. Most of these live in warm regions near rivers or lakes.";
        animation();
        break;
    case 15:
        title.innerText = "PELICAN";
        info.innerText = "Pelicans are among the largest flying birds. They are famous for their huge throat pouches. A pelican uses its pouch and its very long bill to scoop up fish. Pelicans live around lakes, rivers, and seacoasts in many parts of the world.";
        animation();
        break;
    case 16:
        title.innerText = "HORNBILL";
        info.innerText = "Hornbills are found in certain areas of Africa, Asia and  Melanesia. They use their bill to pluck fruits from trees. They also eat insects and other small animals.";
        animation();
        break;
    case 17:
        title.innerText = "VULTURE";
        info.innerText = "Vultures are large birds that do not hunt for food. Instead, they feed on the remains of dead animals, called carrion. Vultures use their broad wings to soar high in the sky, searching for food. They use their excellent vision to scan over a big area of ground.";
        animation();
        break;
    case 18:
        title.innerText = "PENGUIN";
        info.innerText = "Penguins have flippers not wings. These flippers help them swim in the water. Penguins live for 15-20 years. They eat krill.";
        animation();
        break;
    case 19:
        title.innerText = "WOODPECKER";
        info.innerText = "Woodpeckers are small bird. They have a very strong beak and they use their beak to hammer into trees to get their food. They eat small insects or worms that live inside a tree trunk.";
        animation();
        break;
    case 20:
        title.innerText = "HUMMINGBIRD";
        info.innerText = "Humming bird are the smallest flying bird. Hummingbirds are the only birds that can fly backwards. These birds have no sense of smell.";
        animation();
        break;
    case 21:
        title.innerText = "OSTRICH";
        info.innerText = "Ostriches are the largest bird in the word. Ostrich is a kind of bird which cannot fly. They have three stomachs. Ostriches have very small brain and large eye.";
        animation();
        break;
    case 22:
        title.innerText = "EMU";
        info.innerText = "Emus are the second largest bird in the world. They can live between 10 and 20 years. They have two sets of eyelids, one for blinking and the other for keeping the dust out.";
        animation();
        break;
    case 23:
        title.innerText = "KOEL";
        info.innerText = "Koel or Cuckoo, there are 54 different types of these birds. The one in the photograph is Asian Koel. It has a smooth sweet voice which it uses to sing from mid-April to mid-July. This bird always lay its egg on the nest of crow.";
        animation();
        break;
    default:
        title.innerText = "It is working";
        info.innerText = "SOME EXTRA INFO";
}
};
function useShapes(n){
switch(n){
    case 0:
        title.innerText = "CIRCLE";
        info.innerText = "A circle has a perfect round shape. It is similar to the shape of a ball. Circle has no sides.";
        animation();
        break;
    case 1:
        title.innerText = "OVAL";
        info.innerText = "An oval is a shape. It is round but a bit longer in one direction. An oval can look like an egg or an ellipse.";
        animation();
        break;
    case 2:
        title.innerText = "RECTANGLE";
        info.innerText = "A rectangle is a quadrilateral. The opposite sides are parallel and equal to each other. Both the diagonals have the same length. TV, books and note are the few examples of rectangle shape.";
        animation();
        break;
    case 3:
        title.innerText = "RHOMBUS";
        info.innerText = "Rhombus has 4 sides. A rhombus is also called Parallelogram because opposite sides are parallel, and opposite angles are equal. Kite has the rhombus shape.";
        animation();
        break;
    case 4:
        title.innerText = "SQUARE";
        info.innerText = "Square has 4 sides. And all the sides of a square are equal. The opposite sides of the square are parallel to each other. Carrom board, bread has the square shape.";
        animation();
        break;
    case 5:
        title.innerText = "TRIANGLE";
        info.innerText = "A triangle has three sides, three vertices, and three angles and hence the word 'tri'. The sum of the three interior angles of a triangle is always 180°. An ice-cream cone can be seen as a triangle from the side, a sandwich has a triangle shape.";
        animation();
        break;
    case 6:
        title.innerText = "PENTAGON";
        info.innerText = "A pentagon has 5 sides. The sum of the internal angles in a simple pentagon is 540°.";
        animation();
        break;
    case 7:
        title.innerText = "HEXAGON";
        info.innerText = "A hexagon has 6 sides. It got its name from the Greek word ‘Hex’ which means six.";
        animation();
        break;
    case 8:
        title.innerText = "HEPTAGON";
        info.innerText = "A heptagon has 7 sides. Sometimes heptagon is also known as ‘septagon’.";
        animation();
        break;
    case 9:
        title.innerText = "OCTAGON";
        info.innerText = "It is a eight-sided polygon. Each angle of a regular octagon is 135°.";
        animation();
        break;
    case 10:
        title.innerText = "STAR SHAPE";
        info.innerText = "A regular star shape has 5 corners and 10 sides.";
        animation();
        break;
    default:
        title.innerText = "It is working";
        info.innerText = "SOME EXTRA INFO";
}
};
function useVegetables(n){
switch(n){
    case 0:
        title.innerText = "CARROT";
        info.innerText = "The carrot is usually orange in colour. It is a root vegetable. Carrot is the favourite food of rabbits.";
        animation();
        break;
    case 1:
        title.innerText = "GARLIC";
        info.innerText = "Garlic is available all the year to eat. Garlic grows underground. Garlic has the property to kill off bacteria.";
        animation();
        break;
    case 2:
        title.innerText = "ONION";
        info.innerText = "Onion is also known as bulb onion. No Indian dish is complete without an onion. It is round in shape and it makes you cry when you cut it.";
        animation();
        break;
    case 3:
        title.innerText = "POTATO";
        info.innerText = "Potato is also a root vegetable. It is also an important component of many Indian dishes, without which the dish would not be complete. It is brownish-yellow in colour and almost round or oval in shape.";
        animation();
        break;
    case 4:
        title.innerText = "PUMPKIN";
        info.innerText = "Pumpkin is deep yellow or orange in colour. They are sweet in taste. They have a thick shell.";
        animation();
        break;
    case 5:
        title.innerText = "RADISH";
        info.innerText = "Radish is also a root vegetable. Radish has pink and white colour on its body. It is available in winter period.";
        animation();
        break;
    case 6:
        title.innerText = "SPINACH";
        info.innerText = "Spinach is a green leafy vegetable. It is healthy for your bones, skin and hair. Spinach is used in different curry or also in various medicines.";
        animation();
        break;
    case 7:
        title.innerText = "TOMATO";
        info.innerText = "Tomatoes are bright red colour and round in shape. It is usually used in salad. Tomatoes are grown in the summer.";
        animation();
        break;
    case 8:
        title.innerText = "BROCOLI";
        info.innerText = "Broccoli is a part of the Cabbage family. It has a flower-like head. And people eat its stem, body and the leaves.";
        animation();
        break;
    case 9:
        title.innerText = "CABBAGE";
        info.innerText = "Cabbage is a leafy green, and white vegetable. Cabbages are available to eat in the spring season. Cabbages are round in structure.";
        animation();
        break;
    case 10:
        title.innerText = "PARSLEY";
        info.innerText = "Parsley is one of the most commonly used herbs in American Cuisine, used in soups, stocks, sauces and as a garnish. There are two types of parsley curley and flat leaf or Italian.";
        animation();
        break;
    case 11:
        title.innerText = "CELERY";
        info.innerText = "This vegetable is generally eaten raw. Celery has high water content. Celery leaves are very flavourful.";
        animation();
        break;
    case 12:
        title.innerText = "MUSHROOM";
        info.innerText = "Mushrooms are made up of around 90% water. The mushroom is used in many cuisines throughout the world and it is known as the \"meat\" of the vegetable world.";
        animation();
        break;
    case 13:
        title.innerText = "KALE";
        info.innerText = "Kale belongs to the same family as of cabbage and broccoli. Kale is used in salads and snacks.";
        animation();
        break;
    case 14:
        title.innerText = "ARTICHOKE";
        info.innerText = "The artichoke is technically a flower bud that has not yet bloomed. The eatable portion of the plant consists of the flower buds before the flowers come into bloom.";
        animation();
        break;
    case 15:
        title.innerText = "CUCUMBER";
        info.innerText = "Cucumbers have lots of water in them. 96% of them is water. Cucumber is used in salad. The smell of cucumbers helps people relax.";
        animation();
        break;
    case 16:
        title.innerText = "SWEET POTATO";
        info.innerText = "Sweet potatoes can be long and thin or fat. These are one of the most popular vegetables. Sweet potato can be eaten on their own on with soups, stew and other dishes.";
        animation();
        break;
    case 17:
        title.innerText = "GINGER";
        info.innerText = "Ginger is used in many cuisines to add to its flavour. It is commonly used as a cooking spice worldwide. The ginger plant is a herb.";
        animation();
        break;
    case 18:
        title.innerText = "LETTUCE";
        info.innerText = "Lettuce are very healthy for the human body. They are full in water content. Around 95%. Most lettuce leaves taste bitter. Some kinds of lettuce grow in a head shape like cabbage.";
        animation();
        break;
    case 19:
        title.innerText = "BEETS/BEETROOT";
        info.innerText = "Beets are a root vegetable, and they are quite adaptable too. For instance, they can be boiled, fried, roasted, mashed, or you can even buy pickled beets. These have a strong red colour when you cut them.";
        animation();
        break;
    case 20:
        title.innerText = "ASPARAGUS";
        info.innerText = "It is one of the tastiest vegetable. You can eat is raw or cooked. As you like it.";
        animation();
        break;
    default:
        title.innerText = "It is working";
        info.innerText = "SOME EXTRA INFO";
}
};
function useVehicles(n){
    switch(n){
        case 0:
        title.innerText = "CAR";
        info.innerText = "A car has four tires and usually four seats. Car is the most recycled product in the world.";
        animation();
        break;
    case 1:
        title.innerText = "CYCLE";
        info.innerText = "Also known as bicycle. A cycle has one seat, two wheels and two pedals. It does not have a engine. There are over one billion bicycles found throughout the world.";
        animation();
        break;
    case 2:
        title.innerText = "E-RICKSHAW";
        info.innerText = "E-rickshaws run on electricity. These do not need any petrol or diesel. These have generally 3 wheels.";
        animation();
        break;
    case 3:
        title.innerText = "HELICOPTERS";
        info.innerText = "Helicopters are also called chopper or heli. These have wings or rotors above them which help them to fly up and down.";
        animation();
        break;
    case 4:
        title.innerText = "SHIP";
        info.innerText = "A ship is a large boat that can carry passengers or cargo for long distances over water. People have been using ships for transportation, exploration, and war since ancient times.";
        animation();
        break;
    case 5:
        title.innerText = "TRAIN";
        info.innerText = "Trains can be powered by a variety of energy sources including steam, diesel and electricity. Trains are built to transport passengers or cargo along rail tracks. Train was invented by Richard Trevithick.";
        animation();
        break;
    case 6:
        title.innerText = "TRUCK";
        info.innerText = "Trucks have tires ranging from 8 to 12 or even more. Trucks are very heavy. Trucks are always used for transportation of heavy things over long distances.";
        animation();
        break;
    case 7:
        title.innerText = "AEROPLANE";
        info.innerText = "Aeroplane or Airplanes are fixed-wing aircraft that are propelled through the air by engines. Airplanes were first used for military purposes during World War I. Aeroplane makes a lot of sound.";
        animation();
        break;
    case 8:
        title.innerText = "AUTO RICKSHAW";
        info.innerText = "Auto Rickshaw or generally called as Auto are the common means of transportation in many parts of India. These have three wheels and run on an petrol or diesel engine or on CNG.";
        animation();
        break;
    case 9:
        title.innerText = "MOTORCYCLE";
        info.innerText = "A motorcycle is also called as bike. A motorcycle is a two-wheeled vehicle with an engine. Motorcycles are a common form of transportation throughout the world.";
        animation();
        break;
    case 10:
        title.innerText = "BUS";
        info.innerText = "A bus is a road vehicle designed to carry many passengers. Buses can have a capacity as high as 300 passengers. The most common type is the single-deck bus.";
        animation();
        break;
    case 11:
        title.innerText = "CARRIAGE";
        info.innerText = "A carriage is a private four-wheeled vehicle for people and is most commonly horse-drawn. Second-hand private carriages were common public transport, same as modern cars used as taxis.";
        animation();
        break;
    case 12:
        title.innerText = "SKATEBOARD";
        info.innerText = "A skateboard has four plastic wheels fixed to the underside of a thin wooden board, called a deck. The first skateboards were made in the 1940s. Since then, skateboarding has become one of the world's most popular street sports.";
        animation();
        break;
    case 13:
        title.innerText = "CRANE";
        info.innerText = "A crane is used to lift heavy objects which is usually impossible for people to lift on their own. A crane can be seen generally near a construction site.";
        animation();
        break;
    case 14:
        title.innerText = "STROLLER";
        info.innerText = "A stroller is a hand-pushed vehicle. It is used to carry babies and young infants.";
        animation();
        break;
    case 15:
        title.innerText = "SUBWAY";
        info.innerText = "Subway trains are used to transport large numbers of passengers within urban and suburban areas. They are usually built under city streets, but they may take shortcuts and often must pass under rivers.";
        animation();
        break;
    case 16:
        title.innerText = "SUBMARINE";
        info.innerText = "Submarine is a vehicle or kind of a ship that can travel underwater. Scientists and militaries use submarine to travel deep under the ocean.";
        animation();
        break;
    case 17:
        title.innerText = "BOAT";
        info.innerText = "A boat is a vehicle used to travel on water. It is smaller than a ship and can be lifted out of the water and carried on a ship. Some boats have sails, some are powered by rowing with oars, and some use motors.";
        animation();
        break;
    case 18:
        title.innerText = "BULLDOZER";
        info.innerText = "Bulldozers are crawling machines which have blades. These machines are used for pushing large amounts of dirt or rubble during demolition or construction. They have claw-like devices in the rear to loosen materials which are densely compacted.";
        animation();
        break;
    case 19:
        title.innerText = "SEAPLANE";
        info.innerText = "A seaplane is an aircraft equipped with floats so that it can take off from, and land on, water. Many people use it for travelling purposes.";
        animation();
        break;
    case 20:
        title.innerText = "HOT AIR BALLOON";
        info.innerText = "A hot air balloon is a type of aircraft. It is lifted by heating the air inside the balloon, usually with fire. The first hot air balloon was invented by the Montgolfer brothers in 1783. They used animals as their first passengers and not humans.";
        animation();
        break;
    case 21:
        title.innerText = "TRAM";
        info.innerText = "A tram (tramcar, trolley, or streetcar) is a passenger vehicle that is like a light train. It carries people to places within a city. Because a single tram can carry many people at the same time, riding on a tram instead of driving a car is a good way to help prevent pollution and stop the roads getting too busy.";
        animation();
        break;
    case 22:
        title.innerText = "FORKLIFT";
        info.innerText = "A forklift is a type of truck with a large fork, used for carrying and raising things. It is commonly used in large warehouses.";
        animation();
        break;
    case 23:
        title.innerText = "CAMPERVAN";
        info.innerText = "This vehicle is used by those who goes out for camping with their friends or family. This vehicle has beds, table and other things of accommodation inside it.";
        animation();
        break;
    case 24:
        title.innerText = "AMBULANCE";
        info.innerText = "An ambulance is a vehicle used to transport people who are sick or injured to the hospital. Most ambulances are either trucks with space for patients or cargo vans with raised roofs.";
        animation();
        break;
    default:
        title.innerText = "It is working";
        info.innerText = "SOME EXTRA INFO";
    }
};
function useFruits(n){
    switch(n){
        case 0:
        title.innerText = "APPLE";
        info.innerText = "Apples are red in colour. An apple a day keeps the doctor away. Because it keeps us healthy. Apple floats on water because they are 25% air. Apple are available from July to November.";
        animation();
        break;
    case 1:
        title.innerText = "BANANA";
        info.innerText = "Banana plants are not trees, they are a type of herb. Banana are available all year round.";
        animation();
        break;
    case 2:
        title.innerText = "GRAPES";
        info.innerText = "Grapes can be eaten raw or used to make juice or jam. Grapes come in different colours; red, purple, white, and green are some examples. Grapes are available almost all the months.";
        animation();
        break;
    case 3:
        title.innerText = "KIWIFRUIT";
        info.innerText = "Kiwifruit is also called Chinese Gooseberry. They have a little bit of sourness in their taste and also sweetness. Kiwifruit is oval in shape and they are about the size of a large hen egg.";
        animation();
        break;
    case 4:
        title.innerText = "MANGO";
        info.innerText = " Mango fruit can come in various shapes, size and colour including yellow, orange, red and green. The mango tree can grow as long as 35-40m. The flowers of a mango tree are small and white with five petals, and the fruit takes between three and six months to ripen.";
        animation();
        break;
    case 5:
        title.innerText = "ORANGE";
        info.innerText = "Oranges are round orange-coloured fruit that grow on a tree which can reach 10 metres high. Orange juice is the most popular fruit juice in America. There are over 600 varieties of oranges.";
        animation();
        break;
    case 6:
        title.innerText = "PEACH";
        info.innerText = "Peaches are also called stone fruits because they have a shell of hard wood around their seed, called a stone or a pit. The skin of a peach is an orange or yellow color, and it is covered in small hairs called peach fuzz. The inside of a peach is a golden color.";
        animation();
        break;
    case 7:
        title.innerText = "PINEAPPLE";
        info.innerText = "Pineapples do not grow on a tree, they grow on a plant close to the ground. Pineapples takes about 24 months to grow.";
        animation();
        break;
    case 8:
        title.innerText = "STRAWBERRIES";
        info.innerText = "Strawberries are bright red in colour and they are sweet in taste. Strawberries are eaten in a number of different ways including fresh, dried, as a jam, in a drink or even in a muesli bar.";
        animation();
        break;
    case 9:
        title.innerText = "WATERMELON";
        info.innerText = "The watermelon can be classed as both a fruit and a vegetable. Swallowing a watermelon seed will not cause a watermelon to grow in your stomach. They are very good for our health.";
        animation();
        break;
    case 10:
        title.innerText = "CHERRY";
        info.innerText = "Amazingly delicious, cherry fruit is packed with full of health-benefiting nutrients. Cheery is a red – pinkish small fruit which has a tough seed inside. It tastes sweet and sour. Cherries are a seasonal fruit.";
        animation();
        break;
    case 11:
        title.innerText = "RASPBERRY";
        info.innerText = "It is one of the most commonly grown fruit. Raspberries grow on raspberry bushes and the fruit itself is composed of dozens of small drupelets. The raspberry has a soft flesh with a slightly sweet and juicy taste.";
        animation();
        break;
    case 12:
        title.innerText = "POMEGRANATE";
        info.innerText = "Pomegranate has a thick and hard red colour skin on the outside and on the inner side there are lots of juicy red seeds which we eat. These seeds are known as arils.";
        animation();
        break;
    case 13:
        title.innerText = "PAPAYA";
        info.innerText = "Papaya is a tropical fruit. That means it grows in hot and humid regions. Papayas have a smooth green coloured outer skin and a soft and tasty orange flesh inside. Inside the papaya there are many black coloured seeds.";
        animation();
        break;
    case 14:
        title.innerText = "BLUEBERRY";
        info.innerText = "Blueberries are a fruit which everyone considers healthy. As the name suggests, they are blue in appearance. It grows in a type of woody plant called a shrub. Many types of blueberries grow in North America and eastern Asia. Blueberries are full of vitamin C.";
        animation();
        break;
    case 15:
        title.innerText = "BLACKBERRY";
        info.innerText = "Blackberries can be eaten raw, dried, or cooked in jams, pies, and muffins. They are a small edible fruit with a big taste, and botanically they are a kind of berry that grow on brambles.";
        animation();
        break;
    case 16:
        title.innerText = "AVOCADO";
        info.innerText = "Avocado is a fruit produced by the avocado tree (Persea americana). Avocados are also known as avocado pears and alligator pears. Avocados have a dark green skin and starts to turn brown after its been harvested.";
        animation();
        break;
    case 17:
        title.innerText = "PEAR";
        info.innerText = "Pears do not ripen well on trees. They can be soft in the centre.. They can be baked, canned, frozen, or eaten fresh. They can be made into jams, jellies or juice. Pears have 83% water. It has a green, red, yellow, or brown skin.";
        animation();
        break;
    case 18:
        title.innerText = "LYCHEE";
        info.innerText = "Lychee or Litchi, both means the same. This fruit is very juicy sweet in taste. It has a red dry outer peel and on the inside it has juicy white flesh which we can eat and inner to that it has the seed.";
        animation();
        break;
    case 19:
        title.innerText = "LONGAN FRUIT";
        info.innerText = "Longans are a brilliant white, with a big black seed, surrounded by an olive-brown skin. Longan fruits have a soft and smooth texture inside their skin, and they are extremely juicy. The taste is very sweet, and the fruit plays a culinary role in many Asian dishes.";
        animation();
        break;
    case 20:
        title.innerText = "JACKFRUIT";
        info.innerText = "Jackfruit has a unique name, and the fruit has an interesting appearance too. It looks somewhat like a giant version of an avocado and it is the largest tree fruit in the world. In fact, one fruit can weigh as much as 35kg.";
        animation();
        break;
    case 21:
        title.innerText = "GUAVA";
        info.innerText = "Guava has a light green outer skin and inner flesh has pink colour with seeds on it. The colour of the inner flesh may also be pale yellow or white depending on how much ripe the fruit is.";
        animation();
        break;
    case 22:
        title.innerText = "DURIAN";
        info.innerText = "Known for its peculiar scent, the durian is a giant-sized tropical fruit that’s native to South-East Asia. This fruit looks very similar to jackfruit but a bit larger than that.";
        animation();
        break;
    case 23:
        title.innerText = "DATE PALM";
        info.innerText = "This fruit is often simply called as ‘date’. It is a sweet oval shaped fruit which is eaten dried. This fruit is believed to be originated in the Middle East region.";
        animation();
        break;
    default:
        title.innerText = "It is working";
        info.innerText = "SOME EXTRA INFO";
    }
};