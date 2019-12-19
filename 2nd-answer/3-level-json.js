// Membuat obyek Person dalam bentuk seperti JSON
const Person = {
    name: {
        firstName: "Dzaky",
        lastName: "Badawi"
    },
    birthday: {
        year: "1997",
        month: "April",
        day: "27",
        age: 22
    },
    homeAddress: {
        region: "Indonesia",
        province: "Special Region of Yogyakarta",
        city: "Bantul",
        street: "Jl. Sukun Banguntapan",
        streetNumber: "E-4",
        postalCode: "55198"
    },
    education: {
        college: {
            name: "Islamic University of Indonesia",
            address: "Jl. Kaliurang KM. 14,5 Sleman",
            faculty: {
                facultyName: "Faculty of Industrial Technology",
                address: "Jl. Kaliurang KM. 14,5 Sleman",
                major: "Informatics",
                code: "523",
                gpa: 3.81,
                graduate: "28-12-2019"
            }
        }
    },
    hobbies: {
        movies: {
            genre: {
                action: {
                    shazam: {
                        releaseDate: "05-04-2019",
                        duration: "110 minutes",
                        rating: "7.5/10"
                    },
                    detectivePikachu: {
                        releaseDate: "08-05-2019",
                        duration: "105 minutes",
                        rating: "6.6/10"
                    },
                    "salt": {
                        "releaseDate": "28-07-2010",
                        "duration": "104 minutes",
                        "rating": "6.4/10.0"
                    }
                },
                animation: {
                    battleOfSurabaya: {
                        releaseDate: "20-08-2015",
                        duration: "99 minutes",
                        rating: "7.1/10"
                    },
                    toyStory4: {
                        releaseDate: "20-06-2019",
                        duration: "100 minutes",
                        rating: "7.9/10"
                    },
                    shrek2: {
                        releaseDate: "23-06-2004",
                        duration: "105 minutes",
                        rating: "7.2/10"
                    }
                }

            }
        }
    }
};

const test = JSON.stringify(Person);
const parse = JSON.parse(test);
console.log(test);

console.log(parse);

console.log('action movies:', Person.hobbies.movies.genre.action);

console.log('animation movies:', Person.hobbies.movies.genre.animation);