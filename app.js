const monky = {
    firstName: "Monky",
    lastName: "Monkyson",
    bananaCount: 25,
    vibeStatus: true,
    quote: "ooga booga",
    addBanana: function () {
        this.bananaCount++;
    },
    fullName: function () {
        return `${this.firstName} ${this.lastName}`;
    },
};

arr 