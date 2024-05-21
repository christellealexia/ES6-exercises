function createValidationProxy(obj) {
    // Define the validation rules
    const validators = {
      numericProperty(value) {
        if (typeof value!== 'number') {
          throw new Error(`Invalid value for numeric property: ${value}`);
        }
      },
      stringProperty(value) {
        if (typeof value!== 'string') {
          throw new Error(`Invalid value for string property: ${value}`);
        }
      },
      // Add more validators as needed
    };
  
    // Create a handler object for the proxy
    const handler = {
      set(target, prop, value) {
        // Check if the property exists and has a validator
        if (validators.hasOwnProperty(prop)) {
          validators[prop](value);
        }
  
        // Set the property value
        target[prop] = value;
        return true;
      },
    };
  
    // Create and return the proxy
    return new Proxy(obj, handler);
  }
  
  // Example usage
  const obj = {};
  const validatedObj = createValidationProxy(obj);
  
  // Valid assignment
  validatedObj.age = 25; // No error, age is a numeric property
  
  // Invalid assignment
  try {
    validatedObj.name = "John"; // Throws an error, name is expected to be a string
  } catch (error) {
    console.error(error.message);
  }
  
  // Adding a new property with a custom validator
  validatedObj.weight = 70; // Assuming weight is a numeric property
  