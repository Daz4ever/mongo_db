var Python = {
"Language": "Python",
"Inventors": "Guido van Rossum",
"First appeared": "1991",
"Paradigm(s)":
[
  "object-oriented", "imperative", "functional", "procedural", "reflective"
],
"Typing discipline":
[
  "duck", "dynamic", "strong", "gradual"
]

};

var Javascript = {
"Language": "Javascript",
"Inventors": "Brandon Eich",
"First appeared": "1995",
"Paradigm(s)":
[
  "scripting", "object-oriented (prototype-based)", "imperative", "functional", "event-driven"
],
"Typing discipline":
[
  "duck", "dynamic"
]

};

var Java = {
"Language": "Java",
"Inventors": "James Gosling",
"First appeared": "1995",
"Paradigm(s)":
[
  "Object-oriented (class-based)", "structured", "imperative", "generic", "reflective", "concurrent"
],
"Typing discipline":
[
  "discipline Static", "strong", "safe", "nominative", "manifest"
]

};

var Haskell = {
"Language": "Haskell",
"Inventors": "James Gosling"
};


var Closure = {
"Language": "Closure",
"Inventors": "Rich Hickey",
"Paradigm(s)": "functional",
"Typing discipline":
[
  "dynamic", "strong"
]
};


db.practice_db.insert(Python);
db.practice_db.insert(Javascript);
db.practice_db.insert(Java);
db.practice_db.insert(Closure);
db.practice_db.insert(Haskell);

// finding______________________________________________________________________

// Find a programming language by its object ID.
db.practice_db.find({
  _id: ObjectId("584ed1eadb0ea67327b7c31c")
}).pretty();
//
// Find all object-oriented programming languages.

db.practice_db.find({
  "Paradigm(s)": /obj.*/i
}).pretty();
  //the i is optional case insensitivity flag
  //it will find anything in paradigm with obj



// Find all functional programming languages.
db.practice_db.find({
  "Paradigm(s)": /func.*/i
}).pretty();

// Find all programming languages that have "duck-typing".

db.practice_db.find({
  "Typing discipline": /duck.*/i
}).pretty();

// Find all programming languages that have static-typing.

db.practice_db.find({
  "Typing discipline": /static.*/i
}).pretty();

// Find all programming languages with strong-typing.

db.practice_db.find({
  "Typing discipline": /strong.*/i
}).pretty();

// Find programming languages that are more that are more than 12 years old.

db.practice_db.find({
  "First appeared": { $lt: "1994" }
}).pretty();

// Find a programming language by name.

db.practice_db.find({
  "Language": /javascript.*/i
}).pretty();


// Find all programming languages invented by Guido Van Rossum Jones.

db.practice_db.find({
  "Inventors": /Guido.*/i
}).pretty();


// Find all object-oriented programming languages created in the 90s.


db.practice_db.find({
  $and: [
    {
  "First appeared": { $lt: "2000" }
},
{
  "First appeared": { $gt: "1989"}
}
]
}).pretty();


// Find all object-oriented programming languages that use duck-typing.


db.practice_db.find({
  $and: [
    {
  "Paradigm(s)": /object.*/i
},
{
  "Typing discipline": /duck.*/i
}
]
}).pretty();

//another way to do it

db.practice_db.find({"Paradigm(s)": /object-oriented.*/i, "Typing discipline": /duck.*/i}).pretty();


// Find all functional programming languages that are also object-oriented.

db.practice_db.find({
  $and: [
    {
  "Paradigm(s)": /object.*/i
},
{
  "Paradigm(s)": /func.*/i
}
]
}).pretty();



// updating __________________________________________________________

// The information for Haskell is missing some data, it should actually be:
//
// Language: Haskell Inventor(s): Lennart Augustsson, Dave Barton, Brian Boutel, Warren Burton, Joseph Fasel, Kevin Hammond, Ralf Hinze, Paul Hudak, John Hughes, Thomas Johnsson, Mark Jones, Simon Peyton Jones, John Launchbury, Erik Meijer, John Peterson, Alastair Reid, Colin Runciman, Philip Wadler First appeared: 1990 Paradigm(s): functional, imperative, lazy/non-strict, modular Typing discipline: static, strong, inferred

var Haskell = {
"Language": "Haskell",
"Inventors":
[
  "Lennart Augustsson", "Dave Barton", "Brian Boutel", "Warren Burton", "Joseph Fasel", "Kevin Hammond", "Ralf Hinze", "Paul Hudak", "John Hughes", "Thomas Johnsson", "Mark Jones", "Simon Peyton Jones", "John Launchbury", "Erik Meijer", "John Peterson", "Alastair Reid", "Colin Runciman", "Philip Wadler"
],
"First appeared": "1990",
"Paradigm(s)":
[
  "functional", "imperative", "lazy/non-strict", "modular"
],
"Typing discipline":
[
  "discipline Static", "strong", "inferred", "static"
]

};

db.practice_db.update({
  "Language": "Haskell"
}, Haskell);

// The above data actually had a couple of factual mistakes. Write an update statement with the $set statement to fix them:
//
// Brandon Eich is actually spelled "Brendan Eich".

var Javascript = {
  "Inventors": "Brendan Eich"
};

db.practice_db.update({
  "Language": "Javascript"
}, {
  $set: Javascript
});

// also can be found by id

var Javascript = {
  "Inventors": "Brendan Eich"
};

db.practice_db.update({
  _id: ObjectId("584ed1eadb0ea67327b7c31b")
}, {
  $set: Javascript
});


// The Closure programming language is actually spelled "Clojure".

var Closure = {
  "Language": "Clojure"
};

db.practice_db.update({
  "Language": "Closure"
}, {
  $set: Closure
});

// You want to insert a programming language, but you don't want to accidentally insert a duplicate. Write an update statement with the upsert flag, so that this document will be created if it doesn't already exist, but re-running this statement won't create a duplicate (another with the same name). The programming language is:
//
// Language: Elm Inventor(s): Evan Czaplicki First appeared: 2012 Typing discipline: static, strong, inferred

var Elm = {
"Language": "Elm",
"Inventors": "Evan Czaplicki",
"First appeared": "2012",
"Typing discipline":
[
  "static", "strong", "inferred"
]
};

db.practice_db.update({
  "Language": "Elm",
  "Inventors": "Evan Czaplicki",
}, {
  $set: Elm
}, {
  upsert: true
});
