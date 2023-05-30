function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // Altere apenas o código abaixo desta linha

  Object.freeze(MATH_CONSTANTS);
  // Altere apenas o código acima desta linha
  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();