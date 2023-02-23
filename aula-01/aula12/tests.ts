const oldObj = {
  contacts: {
    email: 'old_email',
  },
};

const newObj = {
  ...oldObj,
};

newObj.contacts.email = 'new_email';

console.log(oldObj === newObj); // false
