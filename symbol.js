function secureConfig(config) {
    // Define a unique Symbol for the apiKey
    const API_KEY_SYMBOL = Symbol("apiKey");
  
    // Use the Symbol as a key to add a private property to the config object
    config[API_KEY_SYMBOL] = "yourPrivateKeyApiKey";
  
    // Return the modified config object
    return config;
  }
  
  // Example usage
  const myConfig = {
    databaseUrl: "mongodb://localhost",
    port: 3000,
  };
  
  const securedConfig = secureConfig(myConfig);
  
  // Accessing the private apiKey
  console.log(securedConfig[securedConfig[Symbol.for("config")]]);
  