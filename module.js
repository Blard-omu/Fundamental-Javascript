// exporting the contents of this file

// person object
const person = {
    firstName: 'Blard',
    lastName: 'Dev',
    age: '23',
    country: 'United States',
    skills: ['html', 'css', 'js', 'react', 'node', 'python'],
    isMarried: true,
    // status: this.isMarried ? "I am married" : "I am single",
    getDetails: function(){
        return `Hi, my name is ${this.firstName} ${this.lastName}\nI live in ${this.country}, I am ${this.age} years old\nI have very good knowledge of ${this.skills}.}`
    }
}

// foodList array
let foodList = ["Amala", "Agbado", "Ewa"]

const  companies = [
        {id: 1,
        company: "B-tech",
        category: "it",
        from: 1989,
        to: 2003},
    
        {id: 2,
        company: "GIG",
        category: "logistics",
        from: 2010,
        to: 2019},
    
        {id: 3,
        company: "Techstudio academy",
        category: "software",
        from: 2018,
        to: 2023},
    
        {id: 4,
        company: "Bosco Nig Ltd.",
        category: "logistics",
        from: 1998,
        to: 2005},
    
        {id: 5,
        company: "Alaska suits",
        category: "hospitality",
        from: 2005,
        to: 2023}, 
    ];
    
export {person, companies, foodList}

