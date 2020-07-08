class Form {
    constructor(){
        this.input = createInput("Name");
        this.email = createInput("Email ID");
        this.q1 = createElement('h3', "Q1. Do you like to study in an online environment ?");
        this.q1.style('color:white');
        this.r1 = createRadio('h3');
        this.r1.option('Yes');
        this.r1.style('color: white');
        this.r1.option('No');
        this.q2 = createElement('h3', "Q2. Do you understand the concepts of different subjects in online classes?");
        this.q2.style('color:white');
        this.r2 = createRadio('h3');
        this.r2.style('color:white');
        this.r2.option('Yes');
        this.r2.option('No');
        this.q3 = createElement('h3', "Q3. Do you want to study in the school (as you went earlier)?");
        this.q3.style('color:white');
        this.r3 = createRadio('h3');
        this.r3.style('color:white');
        this.r3.option('Yes');
        this.r3.option('No');
        this.submit = createButton('Submit');
   }

   display() {
    this.input.position(50, 25);
    this.email.position(50, 65);
    this.q1.position(70, 160);
    this.r1.position(125, 220);
    this.q2.position(70, 260);
    this.r2.position(125, 320);
    this.q3.position(70, 355);
    this.r3.position(125, 420);
    this.submit.position(355, 470);
    this.submit.mousePressed(()=>{
        this.input.hide();
        this.email.hide();
        this.q1.hide();
        this.r1.hide();
        this.q2.hide();
        this.r2.hide();
        this.q3.hide();
        this.r3.hide();
        this.submit.hide();
        this.text = createElement('h1',"Thank you filling in the survey form.");
        this.text.position(130, 220);
        this.text.style('color:white');
    })
       }

    }