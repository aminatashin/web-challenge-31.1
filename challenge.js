/* EXERCISE A
   Create a variable called test and assign a string value to it.
*/
let test = 'blue'
/* EXERCISE B
    Create a variable called sum and assign to it the result of the sum between the numbers 10 and 20.
*/
let sum = 10 + 20
console.log(sum)
/*const sum22 = function(a,b){
    let r = a + b
    return r
}
let sum = sum22(10,20)
console.log(sum)*/


/* EXERCISE C
    Create a variable called random and assign to it a random number between 0 and 20 (it should be randomly created at each execution).
*/
//for(i=0; i<=20; i++){
    //console.log(i)
//}
let random = Math.floor(Math.random() * 20)
console.log(random)



/* EXERCISE D
    Create a variable called me and assign to it an object containing the following information: name = your name, surname = your surname, age = your age.
*/
let me = {
    name: "Amin",
    surname: "Atashkhayer",
    age:29
}



/* EXERCISE E
    Write a piece of code for programmatically removing the age property from the previously create object.
*/

delete me.age
console.log(me)

/* EXERCISE F
   Write a piece of code for programmatically adding to the me object you defined before an array called skills, containing the programming languages you know right now.
*/
me['skills'] = ['coding']
console.log(me)
// me.skills = ['coding']


/* EXERCISE G
   Write a piece of code for programmatically removing the last skill from the skills array inside the me object.
*/
//???????????????????????????????????????????/


// JS Functions
/* EXERCISE 1
    Write a function called dice; it should randomize an integer number between 1 and 6.
*/
const dice = function(){
   let m = Math.floor(Math.random() * 6)
   return m
}
let y = dice()
console.log(y)


/* EXERCISE 2
    Write a function called whoIsBigger which receives 2 numbers as parameters and returns the biggest one.
*/

const whoIsBigger = function(a,b){
    if(a>b){
        let t = a
        return t
    }else if (b > a){
        let u = b
        return u
    }
    
}
let bigger = whoIsBigger(5,6)
console.log((bigger));






/* EXERCISE 3
    Write a function called splitMe which receives a string as a parameter and returns an array with every word in that string.
    Ex.: splitMe("I love coding") => returns ["I", "Love", "Coding"]
*/

/*const splitMe = function(string){
    let text = split(" ")
    return text
}
let words = splitMe('I loev coding')
console.log(words)*/


/* EXERCISE 4
    Write a function called deleteOne which receives a string and a boolean as parameters.
    If the boolean value is true it should return the string without the first letter, otherwise it should remove the last one from it.
*/






/* EXERCISE 5
   Write a function called onlyLetters which receives a string as a parameter and returns it removing all the digits.
   Ex.: onlyLetters("I have 4 dogs") => returns "I have  dogs"
*/




/* EXERCISE 6
   Write a function called isThisAnEmail which receives a string as a parameter and returns true if the string is a valid email address.
*/

const isThisEmail = function (emailaddress){
    if (emailaddress = 'string@gmail.com'){
        return true
    }else{
        return false
    }
  
}
let email222 = isThisEmail('amin@gmail.com')
console.log(email222)



/* EXERCISE 7
   Write a function called whatDayIsIt that should return the current day of the week.
*/

//??????????????????????/




/* EXERCISE 8
    Write a function called rollTheDices which receives a number as a parameter.
    It should invoke the dice() function defined in Ex1 the specified amount of times,
    and return an object containing a sum property holding the sum of all values extracted
    and a values array containing the single values of the dicerolls themselves.
    Example: RollTheDices(3) => returns {
        sum: 10
        values: [3, 3, 4]
    }
*/
//?????????????????????


/* EXERCISE 9
   Write a function called howManyDays which receives a date as a parameter and returns the number of days passed since that date.
*/
//???????????????????????????????????




/* EXERCISE 10
   Write a function called isTodayMyBirthday which should return true if today's your birthday, false otherwise.
*/

const isTodayMyBirthday = function(dd,mm,yyyy){
        if ((dd==07) && (mm===08) && (yyyy===1992)){
        return true
}else {
    return false
}

}
let today = isTodayMyBirthday(07,08,1992)
console.log(today)
let notBirthday = isTodayMyBirthday(05,09,1758)
console.log(notBirthday)




console.log('\n------------MOVIES-----------')

// JS Arrays & Objects
// NOTE: the movies array used in some exercises is defined at the end of this file





const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];
/* EXERCISE 11
   Write a function called deleteProp which receives an object and a string as parameters,
   and returns the given object after deleting its property named as the given string.
*/

/* EXERCISE 12
    Write a function called oldestMovie which finds the oldest movie in the provided movies array.
*/
const oldestMovie = function(){
    if(movies.Year === "1963"){
        console.log(movies[9].Title)
    }else{
      false
    }
   oldestMovie("1963")

}
/* EXERCISE 13
    Write a function called countMovies which returns the number of movies contained in the provided movies array.
*/

/* EXERCISE 14
    Write a function called onlyTheTitles which creates an array with just the titles of the movies contained in the provided movies array.
*/
console.log("\n------Titles-------")
const onlyTheTitles = function(string){
    for (let index = 0; index < movies.length ; index++) {
        console.log(movies[index].Title)
    }
}
onlyTheTitles()


/* EXERCISE 15
   Write a function called onlyInThisMillennium which returns only the movies produced in this millennium from the provided movies array.
*/

/* EXERCISE 16 
    Write a function called getMovieById which receives an id as a parameter and returns the movie with the given id from the provided movies array.
*/
console.log('\n-----HERE-----')


const getMovieById = function(aaaaaaaaa){
     if (aaaaaaaaa === movies[0].imdbID){
         let ss = movies[0] ;
         return ss
     }else if(aaaaaaaaa === movies[1].imdbID){
        let dd = movies[1] ;
        return dd;

     }else if(aaaaaaaaa === movies[2].imdbID){
        let cc = movies[2] ;
        return cc;

     }else if(aaaaaaaaa === movies[3].imdbID){
        let vv = movies[3] ;
        return vv;

     }else if(aaaaaaaaa === movies[4].imdbID){
        let zz = movies[4];
        return zz;

     }else if(aaaaaaaaa === movies[5].imdbID){
        let bb = movies[5] ;
        return bb;

     }else if(aaaaaaaaa === movies[6].imdbID){
        let uu = movies[6] ;
        return uu;

     }else if(aaaaaaaaa === movies[7].imdbID){
        let oo = movies[7] ;
        return oo;

     }else if(aaaaaaaaa === movies[8].imdbID){
        let pp = movies[8] ;
        return pp;

     }else if(aaaaaaaaa === movies[9].imdbID){
        let ll = movies[9] ;
        return ll;

     }else if(aaaaaaaaa === movies[10].imdbID){
        let qq = movies[10].Title ;
        return qq;

     }else if(aaaaaaaaa === movies[11].imdbID){
        let ww = movies[11] ;
        return ww;

     }else if(aaaaaaaaa === movies[12].imdbID){
        let yy = movies[12] ;
        return yy;
     }else if(aaaaaaaaa === movies[13].imdbID){
        let ii = movies[13];
        return ii
     }
      
}

let gozila = getMovieById("tt0120737")
console.log(gozila)



/* EXERCISE 17
    Write a function called sumAllTheYears which returns the sum of all the years in which the movies in the provided movies array have been produced.
*/

const sumAllTheYears = function () {
    for (i=0; i <movies.length ; i++)
    return movies[i].Year + movies[i++].Year
}
  
//add


/* EXERCISE 18
    Write a function called searchByTitle which receives a string as a parameter and returns all the movies in the provided movies array which contain that string in the title.
*/

const searchByTitle = function (string) {
    for(k = 0; k<movies.length; k++)
    console.log(movies[k++].Title)
}
searchByTitle("rings")

/* EXERCISE 19
    Write a function called searchAndDivide which receives a string as a parameter and returns an object;
    this object should contain an array called match, made by all the movies from the provided movies array which contain the given string in the title,
    and another array unmatch with all the remaining ones.
*/

/* EXERCISE 20
   Write a function called "removeIndex" which receives a number as a parameter and returns the provided movies array without the element in the given position.
*/

// [EXTRAS] JS Advanced

/* EXERCISE 21
  Create a function called "halfTree" which receives a number as a parameter and builds an "*" half tree with the given height.
  Example:
  halfTree(3)
  *
  **
  ***
*/

/* EXERCISE 22 
  Create a function called "tree" which receives a number as a parameter and builds an "*" tree with the given height.
  Example: 
  tree(3)
    *  
   *** 
  *****
*/

/* EXERCISE 23
  Create a function called "isItPrime" that receives a number as a parameter and returns true if the given number is a prime number.
*/



