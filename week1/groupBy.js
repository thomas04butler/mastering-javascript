const peopleArray = [
    {
        firstname: 'Thomas',
        country: 'Spain'
    },
    {
        firstname: 'Godin',
        country: 'Uruguay'
    },
        {
        firstname: 'Butler',
        country: 'Spain'
    },
    {
        firstname: 'Federico',
        country: 'Uruguay'
    },
        {
        firstname: 'Lamine',
        country: 'Morocco'
    },
    {
        firstname: 'Joshua',
        country: 'Germany'
    },
]

function groupByCountry(people) {
    let groupedPeopleArray = []

    for (let i = 0; i < people.length; i++) {
        const country = (people[i].country)
        const firstname = (people[i].firstname)

        let inArray = false

        for (let f = 0; f < groupedPeopleArray.length; f++) {
            if (groupedPeopleArray[f].label === country) {
                inArray = true
                groupedPeopleArray[f].children.push(firstname)

                break
            }
        }
        if (!inArray) {
            groupedPeopleArray.push({label:country, 'children':[firstname]})
        }
    }
    console.log(groupedPeopleArray)
}

function groupByCountry1(people) { 
    let sortedPeople = []

    for (let i= 0; i < people.length; i++) {
        country = people[i].country
        firstname = people[i].firstname

        let inArray = false

        for (let j = 0; j <= sortedPeople.length; j++) {
            if (country === sortedPeople[j]) {
                inArray = true
                sortedPeople[j].push(firstname)
            }

        }
    }
}

groupByCountry1(peopleArray)
//groupByCountry(peopleArray)