export const users = [
  {
    id: "user-1",
    name: "Harish S",
    email: "h",
    password: "h",
  },
  {
    id: "user-2",
    name: "User",
    email: "u",
    password: "u",
  },
  {
    id: "user-3",
    name: "Suganth",
    email: "s",
    password: "s",
  },
  {
    id: "user-4",
    name: "Dhanvanth",
    email: "d",
    password: "d",
  },
  {
    id: "user-5",
    name: "Dhayanithi",
    email: "n",
    password: "n",
  },
];

export const admins = [
  {
    id: "admin-1",
    name: "Admin",
    email: "a",
    password: "a",
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
export const url = "localhost:8080/v1";