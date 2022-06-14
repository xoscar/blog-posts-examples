type TInfo = {
  firstName: string;
  lastName: string;
  age: number;
};

type TAddress = {
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
};

type TContact = {
  email: string;
  phone: string;
};

type TUser = TInfo &
  TAddress &
  TContact & {
    id: number;
  };

const info: TInfo = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

const updateBasicInfo = (user: TUser, update: TInfo): TUser => {
  return {
    ...user,
    ...update,
  };
};

const address: TAddress = {
  street: "123 Main St",
  city: "New York",
  state: "NY",
  zip: "10001",
  country: "USA",
};

const updateAddress = (user: TUser, update: TAddress): TUser => {
  return {
    ...user,
    ...update,
  };
};

const contact: TContact = {
  email: "foo@bar.com",
  phone: "123-456-7890",
};

const updateContact = (user: TUser, update: TContact): TUser => {
  return {
    ...user,
    ...update,
  };
};

const user: TUser = {
  id: 1,
  firstName: "Oscar",
  lastName: "Wilde",
  age: 60,
  street: "Calle de la cima 143",
  city: "Monterrey",
  state: "NL",
  zip: "64000",
  country: "Mexico",
  email: "oscar@bar.com",
  phone: "123-456-7890",
};

const updatedUser: TUser = updateContact(
  updateBasicInfo(updateAddress(user, address), info),
  contact
);

console.log(user);
console.log(updatedUser);
