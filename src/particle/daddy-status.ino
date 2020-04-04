// Daddy status indicator

int greenLed = D0; 

int redLed = D3; 

void setup() {
  #if defined(DEBUG_BUILD)
    Mesh.off();
    BLE.off();
  #endif

  // init pins
  pinMode(greenLed, OUTPUT);
  pinMode(redLed, OUTPUT);
  
  // subscripbe for events  
  Particle.subscribe("daddy/status", statusHandler);
  
  // init status as available
  digitalWrite(redLed, LOW);
  digitalWrite(greenLed, HIGH);

}

// loop method not needed
void loop() {
}


// event subsription handler
void statusHandler(String event, String data) {
    if (data == "available")
    {
        digitalWrite(redLed, LOW);
        digitalWrite(greenLed, HIGH);
    }
    else if (data == "occupied") 
    { 
        digitalWrite(redLed, HIGH);
        digitalWrite(greenLed, LOW);
    }
}
