float[] points = new float[1100];
float currentX = mouseX;

void setup() {
  size(500, 500);
  background(255);
}

void draw() {
  background(255);
  if (currentX != mouseX) {
    for (int i = 0; i < 21; i++) {
      for (int j = 0; j < 51; j++) {
        points[i*51+j] = random(-mouseX/((51-j)*(21-i+1)), mouseX/((51-j)*(21-i+1)));
      }
    }
  }
  strokeWeight(1);
  for (int j = 0; j < 20; j++) {
    for (int i = 0; i < 51; i++) {
      line(i*10, j*25+points[j*51+i]+10, (i+1)*10, j*25+points[j*51+i+1]+10);
    }
  }
  currentX = mouseX;
}
