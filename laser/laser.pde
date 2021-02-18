float t = 0;

void setup() {
  size(500, 500);
  background(20);
}

void draw() {
  background(20);
  strokeWeight(5);
  translate(width/2, height/2);
  
  stroke(255, 200, 0);
  for (int i = 0; i < 20; i += 2) {
    line(x1(t + i), y1(t + i), x2(t + i), y2(t + i));
  }
  
  stroke(200, 255, 0);
  for (int i = 0; i < 20; i += 2) {
    line(-x1(t + i), -y1(t + i), -x2(t + i), -y2(t + i));
  }
  
  stroke(0, 255, 200);
  for (int i = 0; i < 20; i += 2) {
    line(x1(t + i), -y1(t + i), x2(t + i), -y2(t + i));
  }
  
  stroke(0, 200, 255);
  for (int i = 0; i < 20; i += 2) {
    line(-x1(t + i), y1(t + i), -x2(t + i), y2(t + i));
  }
  
  t += 0.5;
}

float x1(float t) {
  return sin(t/10) * 200;
}

float y1(float t) {
  return cos(t/40) * 200;
}

float x2(float t) {
  return cos(t/20) * 200;
}

float y2(float t) {
  return sin(t/30) * 200;
}