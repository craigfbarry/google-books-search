const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/googlebooks", 
    { useNewUrlParser: true,
      useUnifiedTopology: true 
     }
  );

const bookSeed = [
{
    title: "The Dead Zone",
    authors: ["Stephen King"],
    description:
    "A number-one national best seller about a man who wakes up from a five-year coma able to see people's futures and the terrible fate awaiting mankind in The Dead Zone - a \"compulsive page-turner\" (The Atlanta Journal-Constitution). Johnny Smith awakens from a five-year coma after his car accident and discovers that he can see people's futures and pasts when he touches them. Many consider his talent a gift; Johnny feels cursed. His fiancée married another man during his coma, and people clamor for him to solve their problems. When Johnny has a disturbing vision after he shakes the hand of an ambitious and amoral politician, he must decide if he should take drastic action to change the future. The Dead Zone is a \"faultlessly paced...continuously engrossing\" (Los Angeles Times) novel of second sight.",
    image:"http://books.google.com/books/content?id=O53jCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    link:"http://books.google.com.au/books?id=O53jCwAAQBAJ&dq=the+dead+zone&hl=&source=gbs_api"
},
{
    title: "Lord of the Flies",
    authors: ["William Golding"],
    description:
    "The tale of a party of shipwrecked schoolboys, marooned on a coral island, who at first enjoy the freedom of the situation but soon divide into fearsome gangs which turn the paradise island into a nightmare of panic and death.",
    image:"http://books.google.com/books/content?id=DKU1EsmnpMQC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    link:"https://play.google.com/store/books/details?id=DKU1EsmnpMQC&source=gbs_api"
},
{
    title: "The Catcher in the Rye",
    authors: ["J.D. Salinger"],
    description:
    "The Catcher in the Rye is a 1951 novel by J. D. Salinger. A controversial novel originally published for adults, it has since become popular with adolescent readers for its themes of teenage angst and alienation. It has been translated into almost all of the world's major languages. Around 1 million copies are sold each year with total sales of more than 65 million books. The novel's protagonist Holden Caulfield has become an icon for teenage rebellion. The novel also deals with complex issues of innocence, identity, belonging, loss, and connection.",
    image:"http://books.google.com/books/content?id=ic6NhqIcWhQC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    link:"http://books.google.com.au/books?id=NwJIzQEACAAJ&dq=the+catcher+in+the+rye&hl=&source=gbs_api"
},
{
    title: "Harry Potter and the Sorcerer's Stone",
    authors: ["J.K. Rowling"],
    description:
    "Harry Potter has no idea how famous he is. That's because he's being raised by his miserable aunt and uncle who are terrified Harry will learn that he's really a wizard, just as his parents were. But everything changes when Harry is summoned to attend an infamous school for wizards, and he begins to discover some clues about his illustrious birthright. From the surprising way he is greeted by a lovable giant, to the unique curriculum and colorful faculty at his unusual school, Harry finds himself drawn deep inside a mystical world he never knew existed and closer to his own noble destiny.",
    image:"http://books.google.com/books/content?id=p0mLvgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    link: "http://books.google.com.au/books?id=gqX7rQEACAAJ&dq=Harry+Potter+and+the+Sorcerer%27s+Stone&hl=&source=gbs_api"
},
{
    title: "Code: The Hidden Language of Computer Hardware and Software",
    authors: ["Charles Petzold"],
    description:
    "What do flashlights, the British invasion, black cats, and seesaws have to do with computers? In CODE, they show us the ingenious ways we manipulate language and invent new means of communicating with each other. And through CODE, we see how this ingenuity and our very human compulsion to communicate have driven the technological innovations of the past two centuries. Using everyday objects and familiar language systems such as Braille and Morse code, author Charles Petzold weaves an illuminating narrative for anyone who’s ever wondered about the secret inner life of computers and other smart machines. It’s a cleverly illustrated and eminently comprehensible story—and along the way, you’ll discover you’ve gained a real context for understanding today’s world of PCs, digital media, and the Internet. No matter what your level of technical savvy, CODE will charm you—and perhaps even awaken the technophile within.",
    image:"http://books.google.com/books/content?id=iptCAwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    link:"https://play.google.com/store/books/details?id=iptCAwAAQBAJ&source=gbs_api"
},
{
    title: "The Everything Store: Jeff Bezos and the Age of Amazon",
    authors: ["Brad Stone"],
    description:
    "The definitive story of Amazon.com, one of the most successful companies in the world, and of its driven, brilliant founder, Jeff Bezos. Amazon.com started off delivering books through the mail. But its visionary founder, Jeff Bezos, wasn't content with being a bookseller. He wanted Amazon to become the everything store, offering limitless selection and seductive convenience at disruptively low prices. To do so, he developed a corporate culture of relentless ambition and secrecy that's never been cracked. Until now. Brad Stone enjoyed unprecedented access to current and former Amazon employees and Bezos family members, giving listeners the first in-depth, fly-on-the-wall account of life at Amazon. Compared to tech's other elite innovators - Jobs, Gates, Zuckerberg - Bezos is a private man. But he stands out for his restless pursuit of new markets, leading Amazon into risky new ventures like the Kindle and cloud computing, and transforming retail in the same way Henry Ford revolutionized manufacturing. The Everything Store will be the revealing, definitive biography of the company that placed one of the first and largest bets on the Internet and forever changed the way we shop and read.",
    image:"http://books.google.com/books/content?id=yG3PAK6ZOucC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    link:"https://play.google.com/store/books/details?id=yG3PAK6ZOucC&source=gbs_api"
},


];

db.Book
    .remove({})
    .then(()=>db.Book.collection.insertMany(bookSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err =>{
        console.log(err);
        process.exit(1);
    })