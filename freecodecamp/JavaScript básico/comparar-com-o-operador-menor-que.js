function testLessThan(val) {
  if (val < 25) {  // Altere esta linha
    return "Under 25";
  }

  if (val < 55) {  // Altere esta linha
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);