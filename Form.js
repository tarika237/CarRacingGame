class Form{
    constructor(){
        this.input = createInput("Name");
        this.button = createButton('Play');
        this.greeting = createElement('h2');
        this.title = createElement('h2');
}

hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();

}

display(){
    
    this.title.html("Car Racing Game");
    this.title.position(displayWidth/2-50 , 0);

    
   this. input.position(displayWidth/2-50 , displayHeight/2-40);
    this.button.position(displayWidth/2+50 , displayHeight/2-50);

    this.button.mousePressed(function(){
    this.input.hide();
    this.button.hide();

        player.name = this.input.value();
        playerCount+=1;
        player.update();
        player.index = playerCount;
        player.updateCount(playerCount);
        var greeting = createElement('h3');
        this.greeting.html("Hello " + name);
        this.greeting.position(displayWidth/2-70 , displayHeight/2-40);
        });
    }
}