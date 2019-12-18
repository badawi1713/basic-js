// Membuat obyek Person dalam bentuk seperti JSON
const Person = {
    "name": {
        "firstName": "Dzaky",
        "lastName": "Badawi"
    },
    "birthday": {
        "year": "1997",
        "month": "April",
        "day": "27",
        "age": 22
    },
    "homeAddress": {
        "region": "Indonesia",
        "province": "Special Region of Yogyakarta",
        "city": "Bantul",
        "street": "Jl. Sukun Banguntapan",
        "streetNumber": "E-4",
        "postalCode": "55198"
    },
    "education": {
        "college": {
            "name": "Islamic University of Indonesia",
            "address": "Jl. Kaliurang KM. 14,5 Sleman",
            "faculty": {
                "facultyName": "Faculty of Industrial Technology",
                "address": "Jl. Kaliurang KM. 14,5 Sleman",
                "major": "Informatics",
                "code": "523"
            }
        }
    },
    "hobbies": {
        "movies": {
            "genre": {
                "action": {
                    "shazam": {
                        "releaseDate": "5 April 2019",
                        "duration": "110 minutes",
                        "rating": "7.5/10"
                    },
                    "detectivePikachu": {
                        "releaseDate": "",
                        "duration": "",
                        "rating": ""
                    },
                    "salt": {
                        "releaseDate": "",
                        "duration": "",
                        "rating": ""
                    }
                },
                "animation":{
                    "battleOfSurabaya": {
                        "releaseDate":"",
                        "duration":"",
                        "rating":""
                    },
                    "toyStory4":{
                        "releaseDate":"",
                        "duration":"",
                        "rating":""
                    },
                    "shrek2":{
                        "releaseDate":"",
                        "duration":"",
                        "rating":""
                    }
                }

            }
        }
    }
}

const test = JSON.stringify(Person);
const parse = JSON.parse(test);
console.log(test);

console.log(parse);

console.log('movies:', Person.hobbies.movies.genre.action);