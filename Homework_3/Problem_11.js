const checkKnow = {
  surname: "surname",
  name: "checkKnow",
  foo: {
    name: "foo",
    logName() {
      console.log(this.surname);
    },
  },
  boo() {
    const obj = {
      name: "boo method",
      check: () => {
        console.log(this.name);
      },
    };
    obj.check();
  },
};

checkKnow.foo.logName(); // Undefined
// logname is a standard nested function which called on checkKnow object by foo function.
// Standard function determine their this value dynamically (how it was called),
// as foo is a function not an object it tries to find the surname variable in global context and fails to find and returns undefined.

checkKnow.boo(); // checkKnow
// in contrast to standard functions arrow function determine their this value by where they were created. in this case they were created
// in object CheckKnow.So it take name value of checkKnow object.
