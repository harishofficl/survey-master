export const users = [
  {
    id: "user-1",
    name: "Harish S",
    email: "harish",
    password: "harish",
  },
  {
    id: "user-2",
    name: "User",
    email: "user",
    password: "user",
  },
];

export const admins = [
  {
    id: "admin-1",
    name: "Admin",
    email: "admin",
    password: "admin",
  },
  {
    id: "admin-2",
    name: "BOSS",
    email: "boss",
    password: "boss",
  },
];

class Store {
  constructor() {
    this.state = {
      id: "",
      name: "",
      role: "",
    };
    this.subscribers = [];
  }

  subscribe(callback) {
    this.subscribers.push(callback);
  }

  notify() {
    this.subscribers.forEach((callback) => callback(this.state));
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.notify();
  }

  getState() {
    return this.state;
  }
}

export const currentUserStore = new Store();


// url
export const url = "localhost:8080";