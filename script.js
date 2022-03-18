{
  var food = 50;
  var game = 50;
  var sleep = 50;
  var study = 0;
  var hour = 6;
  var minute = 0;
  var semester = 1;
  var nama;
  var choice = 0;
  var choosen = false
  var timer = 1000
}

$(document).ready(function(){
  $("#easy").click(function(){
    timer = timer;
    $("#easy").hide();
    $("#hard").hide();
    alert("Easy mode enabled.");
  });
  $("#hard").click(function(){
    timer = timer/2;
    $("#easy").hide();
    $("#hard").hide();
    alert("Hard mode enabled.");
  });
  $("#play_area").hide();
  $("#choice1").click(function(){
    alert("Demon selected as character.");
    choosen = true;
    choice = 1;
  });
  $("#choice2").click(function(){
    alert("Human selected as character.");
    choosen = true;
    choice = 2;
  });
  $("#card1").click(function(){
    choosen = true;
    choice = 1;
  });
  $("#card2").click(function(){
    choosen = true;
    choice = 2;
  });
  $("#tombol").click(function(){
      nama = $("#nulis").val();
      decay();
      alertorg();
      $("#time").text("Good Morning " + nama);
      $("#character_maker").hide();
      $("#play_area").show();
  });
  $("#press1").click(function(){
      makan();
      $("#press1").hide();
      $("#press2").hide();
      $("#press3").hide();
      $("#press4").hide();
  });
  $("#press3").click(function(){
      main();
      $("#press1").hide();
      $("#press2").hide();
      $("#press3").hide();
      $("#press4").hide();
  });
  $("#press2").click(function(){
      tidur();
      $("#press1").hide();
      $("#press2").hide();
      $("#press3").hide();
      $("#press4").hide();
  });
  $("#press4").click(function(){
      belajar();
      $("#press1").hide();
      $("#press2").hide();
      $("#press3").hide();
      $("#press4").hide();
  });
});

function alertorg(){
    var rcheck = setInterval(function(){
    if(food <= -10 || sleep <= -10 || game <= -20 || study <= -20){
      clearInterval(rcheck);
    }
    if(food <= 2){
      alert("Karakter mulai lapar!!")
    }
    if(sleep <= 2){
      alert("Karakter mulai kurang tidur!!")
    }
    if(game <= 2){
      alert("Karakter mulai stress!")
    }
    if(study <= -5){
      alert("Karakter mulai bodoh!")
    }
  },timer*6);
}

function decay(){
  gambar();
  var repeat = setInterval(function(){
    if(hour>=18 && hour<24){
      $("#time").text("Good Evening " + nama);
      $("#bg").removeClass("background-image-afternoon");
      $("#bg").addClass("background-image-evening");
    }
    else if(hour>=12 && hour <18){
      $("#time").text("Good Afternoon " + nama);
      $("#bg").removeClass("background-image-morning");
      $("#bg").addClass("background-image-afternoon");
    }
    else if(hour>=0 && hour<12){
      $("#time").text("Good Morning " + nama);
      $("#bg").removeClass("background-image-evening");
      $("#bg").addClass("background-image-morning");
    }

    if(food >= 100){
        food = 100
    }
    if(game >= 100){
        game = 100
    }
    if(sleep >= 100){
        sleep = 100
    }

    food = food - 1;
    game = game - 1;
    sleep = sleep - 1;
    study = study - 1;
    ++minute;
    if(minute >= 60){
        minute = 0;
        ++hour;
    }
    if(hour >= 24){
        hour = 0;
    }
    
    if(study >= 100){
        semester++;
        study = 0;
    }
    if(semester >= 9){
      if(choice == 1){
        $("#karakter").attr("src","wraith_lulus.png");
      }
      if(choice == 2){
        $("#karakter").attr("src","human_lulus.png");
      }
      $("#ending").removeClass("endingclass");
      $("#ending").addClass("endinglulusclass");
      $("#ending").html("LULUS");
      clearInterval(rcheck);
      clearInterval(rmakan);
      clearInterval(rmain);
      clearInterval(rbelajar);
      clearInterval(rtidur);
      clearInterval(repeat);
    }
    
    if(food <= -10 || sleep <= -10){
      $("#press1").hide();
      $("#press2").hide();
      $("#press3").hide();
      $("#press4").hide();
      $("#ending").html("You DIED");
      if(choice == 1){
        $("#karakter").attr("src","wraith_meninggal.png");
      }
      if(choice == 2){
        $("#karakter").attr("src","human_meninggal.png");
      }
      clearInterval(rcheck);
      clearInterval(rmakan);
      clearInterval(rmain);
      clearInterval(rbelajar);
      clearInterval(rtidur);
      clearInterval(repeat);
    }
    if(game <= -20){
      $("#press1").hide();
      $("#press2").hide();
      $("#press3").hide();
      $("#press4").hide();
      $("#ending").html("Game over because big sad");
      if(choice == 1){
        $("#karakter").attr("src","wraith_depressed.png");
      }
      if(choice == 2){
        $("#karakter").attr("src","human_depressed.png");
      }
      clearInterval(rcheck);
      clearInterval(rmakan);
      clearInterval(rmain);
      clearInterval(rbelajar);
      clearInterval(rtidur);
      clearInterval(repeat);
    }
    if(study <= -20){
      $("#press1").hide();
      $("#press2").hide();
      $("#press3").hide();
      $("#press4").hide();
      $("#ending").html("Drop Out");
      if(choice == 1){
        $("#karakter").attr("src","wraith_DroppedOut.png");
      }
      if(choice == 2){
        $("#karakter").attr("src","human_DropOut.png");
      }
      clearInterval(rcheck);
      clearInterval(rmakan);
      clearInterval(rmain);
      clearInterval(rbelajar);
      clearInterval(rtidur);
      clearInterval(repeat);
    }
    
    if(minute < 10){
        $("#local_clock").html(hour + ":0" + minute);
    }
    else{
        $("#local_clock").html(hour + ":" + minute);
    }
    $("#semester").html("Semester " + semester);
    $("#makanan").attr("value",food);
    $("#mainan").attr("value",game);
    $("#tiduran").attr("value",sleep);
    $("#belajaran").attr("value",study);
  },timer/2);
}

function makan(){
  var time = 5;
  rmakan = setInterval(function(){
      makangambar();
      food = food + 10;
      minute = minute + 20;
      time = time - 1;
      if(time <= 0){
          showall();
          clearInterval(rmakan);
          gambar();
      }
  },timer/2);
}

function main(){
  var time = 5;
  rmain = setInterval(function(){
      maingambar();
      game = game + 10;
      study = study - 1;
      minute = minute + 20;
      time = time - 1;
      if(time <= 0){
          showall();
          clearInterval(rmain);
          gambar();
      }
  },timer/2);
}

function tidur(){
  var time = 5;
  rtidur = setInterval(function(){
      tidurgambar();
      sleep = sleep + 10;
      minute = minute + 20;
      time = time - 1;
      if(time <= 0){
          showall();
          clearInterval(rtidur);
          gambar();
      }
  },timer/2);
}

function belajar(){
  var time = 5;
  rbelajar = setInterval(function(){
      belajargambar();
      study = study + 10;
      sleep = sleep - 1;
      game = game - 1;
      minute = minute + 20;
      time = time - 1;
      if(time <= 0){
          showall();
          clearInterval(rbelajar);
          gambar();
      }
  },timer/2);
}

function showall(){
  $("#press1").show();
  $("#press2").show();
  $("#press3").show();
  $("#press4").show();
}


function gambar(){
  if(choice == 2){
    $("#karakter").attr("src","human.png");
  }
  if(choice == 1){
    $("#karakter").attr("src","wraith2.png");
  }
}

function makangambar(){
  if(choice == 1){
    $("#karakter").attr("src","makan2.png");
  }
  if(choice == 2){
    $("#karakter").attr("src","makan1.png");
  }
}
function maingambar(){
  if(choice == 1){
    $("#karakter").attr("src","main2.png");
  }
  if(choice == 2){
    $("#karakter").attr("src","main1.png");
  }
}
function tidurgambar(){
  if(choice == 1){
    $("#karakter").attr("src","tidur2.png");
  }
  if(choice == 2){
    $("#karakter").attr("src","tidur1.png");
  }
}
function belajargambar(){
  if(choice == 1){
    $("#karakter").attr("src","belajar2.png");
  }
  if(choice == 2){
    $("#karakter").attr("src","belajar1.png");
  }
}