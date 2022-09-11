class User {
  constructor(name) {
    this.name = name;
  }
/*I needed help for this section, I'll understand this thing very soon*/
  changeName = newName => {
    this.name = newName;
    return this.name;
  }
}

module.exports = User;
