function doctorize(firstname) {
  return `dr. ${firstname}`;
}

const add = (a, b = 3) => a + b;

const name = {
  first: 'Kevin',
  pet: function kevinsCat() {
    console.log("my cat's name is Saffron");
  },
};
