function testGreaterOrEqual(val) {
  if (val >= 20) {  // Altere esta linha
    return "20 or Over";
  }

  if (val >= 10) {  // Altere esta linha
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);