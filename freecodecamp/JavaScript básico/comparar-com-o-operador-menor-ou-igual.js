function testLessOrEqual(val) {
  if (val <= 12) {  // Altere esta linha
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {  // Altere esta linha
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(10);