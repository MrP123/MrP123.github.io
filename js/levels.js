game.levels = [
    {
        "intro" : "Als erste Aufgabe was sehr simples.",
        "outro" : "Ok das war sogar für dich etwas zu leicht.",
        "name" : "cubed",

        "code" : [
            "box.cubed = function cubed (x) {",
            "    //return x cubed",
            "    ",
            "    ",
            "};"
        ].join("\n"),

        "cursor" : { "row" : 3, "column" : 4 },

        "tests" : [
            { "param" :  2,   "result" : 8    },
            { "param" :  4,   "result" : 64   },
            { "param" :  1.5, "result" : 3.375 },
            { "param" : -12,  "result" : -1728  },
            { "param" : -1.5, "result" : -3.375 }
        ]
    },
    {
        "intro" : "Die Spur schwieriger...",
        "outro" : "Also das hat doch relativ lange gedauert.",
        "name" : "reverseString",

        "code" : [
            "box.reverseString = function reverseString (x) {",
            "    // x is a string. return this string in reverse order.",
            "    ",
            "    ",
            "};"
        ].join("\n"),

        "cursor" : { "row" : 3, "column" : 4 },

        "tests" : [
            { "param" : "test string", "result" : "gnirts tset" },
            { "param" : "JavaScript",  "result" : "tpircSavaJ" },
            { "param" : "Tolle Rätsel",    "result" : "lestäR elloT" },
            { "param" : "", "result" : "" },
        ]
    },
    {
        "intro" : "Aufgabe 3.",
        "outro" : "Du hast noch nicht aufgegegben?",
        "name" : "sumArray",

        "code" : [
            "box.sumArray = function sumArray (x) {",
            "    //sum all the numbers in the array x",
            "    ",
            "    ",
            "};"
        ].join("\n"),

        "cursor" : { "row" : 3, "column" : 4 },

        "tests" : [
            { "param" : [0, 1, 2],     "result" : 3  },
            { "param" : [0, 2, 5, -1],   "result" : 6  },
            { "param" : [-5],  "result" : -5 },
            { "param" : [0],  "result" : 0  },
            { "param" : [-1, 0.5, 3.1415],   "result" : 2.6415  },
        ]
    },
    {
        "intro" : "Halbzeit. Als Belohnung eine simplere Aufgabe",
        "outro" : "Nur noch 4 weitere Aufgaben.",
        "name" : "isEven",

        "code" : [
            "box.isEven = function isEven (x) {",
            "    // x is a number, return true if it is even / false if it is uneven.",
            "    ",
            "    ",
            "};"
        ].join("\n"),

        "cursor" : { "row" : 3, "column" : 4 },

        "tests" : [
            { "param" : 2, "result" : true },
            { "param" : 37, "result" : false },
            { "param" : 0, "result" : true },
            {"param"  : -1, "result" : false }
        ]
    },
    {
        "intro" : "5. Aufgabe. Da du schon am verzeweifeln bist, ist dies die letzte Aufgabe",
        "outro" : "Du hast es geschafft.",
        "name" : "fizzBuzz",

        "code" : [
            "box.fizzBuzz = function fizzBuzz (x) {",
            "    // x is a integer 0 < x < 100",
            "    // if x is dividable by 3 return Fizz",
            "    // if x is dividable by 5 return Buzz",
            "    // if x is dividable by 3 and 5 return FizzBuzz, otherwise return x",
            "    ",
            "    ",
            "    ",
            "};"
        ].join("\n"),

        "cursor" : { "row" : 6, "column" : 4 },

        "tests" : [
            { "param" : 3, "result" : "Fizz" },
            { "param" : 5, "result" : "Buzz" },
            { "param" : 15, "result" : "FizzBuzz" },
            { "param" : 1, "result" : 1 },
            { "param" : 10, "result" : "Buzz" },
            { "param" : 33, "result" : "Fizz" },
            { "param" : 150, "result" : "FizzBuzz" },
            { "param" : 43, "result" : 43 }
        ]
    }
]