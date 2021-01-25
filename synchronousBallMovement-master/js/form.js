class Form {

    constructor(){
    }

display(){
var Title=createElement("h2");
Title.html("Car Racing Game");
Title.position(130,0);
var Input = createInput ("Enter Name")
Input.position(200,200)
var Button= createButton ("Play")
Button.position(200, 300)
var Greeting= createElement("h3")
Button.mousepressed(function(){

Input.hide()
Button.hide()
var name= input.value()
//increase player count by 1
playercount=playercount+1;
//update the database with player name and player count
player.update(name)
player.updatecount(playercount)

Greeting.html("hello" + name)
Greeting.position( 200,200);

})

}




}