export class RandomDataGenerator {

    generateRandomBDPhoneNumber() {

        const prefixes = ['13', '16', '17', '18', '19'];
        let phoneNumber = '';
        const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
        phoneNumber += prefix;

        for (let i = 0; i < 8; i++) {
            phoneNumber += Math.floor(Math.random() * 10).toString();
        }

        return phoneNumber;
    }

    generateRandomName() {

        const firstNames = ["John", "Jane", "Alice", "Bob", "Emma", "Noah", "Olivia", "Liam", "Sophia", "Mason"];
        const lastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez"];

        const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
        const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];

        return `${firstName} ${lastName}`;
    }

    generateRandomDOB() {

        const currentYear = new Date().getFullYear();
        const minAge = 18;
        const maxAge = 60;
        const minYear = currentYear - maxAge;
        const maxYear = currentYear - minAge;

        const year = Math.floor(Math.random() * (maxYear - minYear + 1)) + minYear;
        const month = Math.floor(Math.random() * 12) + 1;

        let day;
        if ([4, 6, 9, 11].includes(month)) {
            day = Math.floor(Math.random() * 30) + 1;
        } else if (month === 2) {
            day = Math.floor(Math.random() * 28) + 1;
        } else {
            day = Math.floor(Math.random() * 31) + 1;
        }

        const formattedMonth = month < 10 ? `0${month}` : month;
        const formattedDay = day < 10 ? `0${day}` : day;

        return `${formattedDay}-${formattedMonth}-${year}`;
    }

}

// Creating an instance of the RandomDataGenerator class
const randomData = new RandomDataGenerator()

// Example usage
// console.log("Random BD Phone Number:", randomData.generateRandomBDPhoneNumber());
// console.log("Random Name:", randomData.generateRandomName());
// console.log("Random DOB:", randomData.generateRandomDOB());
