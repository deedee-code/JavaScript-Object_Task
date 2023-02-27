//Question 1

const InstagramPost = new Object();

InstagramPost.author = "Dhoriz";
InstagramPost.content = "Beginner's Guide to Learn JavaScript";
InstagramPost.image = "https://dhoriz.jpeg.com";
InstagramPost.views = 200357;
InstagramPost.likes = 150003;

console.log(InstagramPost)


//Question 2

- console.log("Author of the Instagram Post is " + InstagramPost.author);

- console.log("Content of the Author Instagram Post is " + InstagramPost.content)

//Question 3

function createPerson(name, age, location) {
    return {
        name: name,
        age: age,
        location: location,
    };
}

const Musa = createPerson("Musa Dawodu", 19, "Lekki, Lagos State");
console.log(Musa)

function JambScores (eng, govt, lit, crk) {
    return {
        ENG: eng,
        GOVT: govt,
        LIT: lit,
        CRK: crk,
    }
}

Musa.Scores = JambScores (70, 85, 82, 94),

console.log(Musa.Scores)


//Question 4
//There are various ways to clone an object and they include: Using Object.assign(), Using Spread Syntax, Using JavaScript Object Notation(JSON).

//Object.assign()
const phone = {
    brand: "Iphone",
    storage: "128GB",
    battery: "4000mAH",
}

const tablet = Object.assign ({}, phone);
console.log(phone);
console.log(tablet);

tablet.brand = "Mac Book";
console.log("Changing Phone brand to tablet brand")

console.log(phone);
console.log(tablet);


//Using Spread Syntax
const laptop = {...phone};
laptop.brand = "HP";
console.log({phone});
console.log({laptop});

//Using Json
const bluetooth = JSON.parse;
bluetooth.brand = "Sony";
console.log({phone});
console.log({bluetooth});

//Question 5

const presidentialCandidates = {
    AAC: 'Omoyele Sowore',
    ACCORD: 'Christopher Imumolen',
    APC: 'Bola Ahmed Tinubu',
    LP: 'Peter Obi',
    NNPP: 'Rabiu Kwankwaso',
    PDP: 'Atiku Abubakar',
 }

//for..in loops

for (const key in presidentialCandidates) {
    //console.log(key);
    console.log(presidentialCandidates[key] + " is the presidential candidate of " + key)
}