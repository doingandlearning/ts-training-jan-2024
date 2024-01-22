interface User {
  username: string;
  email: string;
}

class Repository<Type> {
  private items: Type[] = [];

  addItem(item: Type): void {
    this.items.push(item);
  }

  getItem(index: number): Type {
    return this.items[index];
  }
}

const userRespository = new Repository<User>();

userRespository.addItem({
  username: "kevin",
  email: "kevin@kevincunningham.co.uk",
});
