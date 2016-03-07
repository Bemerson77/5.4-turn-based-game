var $ = require('jquery');
var _ = require('underscore');

var counter = 0;

function Player(name, health){
  this.name = name;
  this.health = health || 100;

}



function Enemy(name, health){
  this.name = name;
  this.health = health || 100;

}

Enemy.prototype.attack = function(victim){
  var damage = _.random(20)
  victim.health = victim.health - damage;
};


//main character = new Player
var jediGuardian = new Player('Jedi Guardian');
var sithLord = new Player('Sith Lord');

var ninjaAssassin = new Enemy('Ninja Assassin');
var ninjaWarrior = new Enemy('Ninja Warrior');
var ninjaMaster = new Enemy('Ninja Master');
var ninjaMystic = new Enemy('Ninja Mystic');





(function(){

  $('.player-select').click(function(){
    if($(this).siblings('.start').hasClass('hide')){
      $(this).siblings('.start').removeClass('hide');
    }
  });

  $('.start').click(function(){
    if($(this).siblings('.player-atk-btn').hasClass('hide')){
      $(this).siblings('.player-atk-btn').removeClass('hide');
      $(this).siblings('.player-select').addClass('hide');
      $(this).addClass('hide');
    }
  });


  $(".player-select").on('click', function(){
    counter++;
    var select = counter % 2;
    if (select == 0){

      $('.jedi-display').html("<h1>" + jediGuardian.name + "</h1>");
   } else {

     $('.jedi-display').html("<h1>" + sithLord.name + "</h1>");
   }
    })

$('.jedi-display').append("<h1>Select a Player</h1>")


var ninjas = [ninjaAssassin.name, ninjaWarrior.name, ninjaMaster.name, ninjaMystic.name];
var shuffledNinjas = _.shuffle(ninjas);
var fightingNinja = _.last(shuffledNinjas);
$('.ninja-display').append("<h1>" + fightingNinja + "</h1>")


$('.player-atk-btn').on('click', function(){

  var damage = _.random(20)

  ninjaAssassin.health = ninjaAssassin.health - damage;
  $('.ninja-bar').width(ninjaAssassin.health + "%");

  console.log("Assassin health: ", ninjaAssassin.health);

  if(ninjaAssassin.health <= 0){
    alert("Jedi Victory!");
    location.reload();
  }



  if(ninjaAssassin.health <= 50){
    $('.ninja-bar').css("background-color", "rgba(251, 235, 0, 1)");
  }
  if(ninjaAssassin.health <= 30){
    $('.ninja-bar').css("background-color", "rgba(251, 24, 0, 1)");
  }




  setTimeout(function(){
    ninjaAssassin.attack(jediGuardian);
    $('.jedi-bar').width(jediGuardian.health + "%");
    if(jediGuardian.health <= 0){
      alert("Ninja Victory!");
      location.reload();
    }

    if(jediGuardian.health <= 50){
      $('.jedi-bar').css("background-color", "rgba(251, 235, 0, 1)");
    }
    if(jediGuardian.health <= 30){
      $('.jedi-bar').css("background-color", "rgba(251, 24, 0, 1)");
    }
    console.log("jedi health: ", jediGuardian.health);
  }, 1200);

});



})();
