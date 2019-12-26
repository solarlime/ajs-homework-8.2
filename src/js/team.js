class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (!this.members.has(character)) {
      this.members.add(character);
      return `${character.name} added!`;
    }
    throw new Error('Already there');
  }

  addAll(...characters) {
    characters.forEach((item) => this.members.add(item));
    return this.members;
  }

  toArray() {
    return Array.from(this.members);
  }
}

export default Team;
