class User {
  // public name: string = "";
  // public location: string = "";

  constructor(private realName: string = "", public location: string = "") {
    // this.name = name;
    // this.location = location;
  }

  get job() {
    return "Developer Educator";
  }

  get name() {
    return this.realName;
  }

  set name(newValue) {
    if (newValue.length < 4) {
      throw new Error("Name too short!");
    }
    this.realName = newValue;
  }
}

// Object!
const user = new User("Kevin", "Northern Ireland");

user.name = "bob";
