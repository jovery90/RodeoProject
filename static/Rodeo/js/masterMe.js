var hairCount = Number(document.getElementById("id_avatar_hair").value);
var eyebrowCount = Number(document.getElementById("id_avatar_eyebrows").value);
var eyeCount = Number(document.getElementById("id_avatar_eyes").value);
var noseCount = Number(document.getElementById("id_avatar_nose").value);
var mouthCount = Number(document.getElementById("id_avatar_mouth").value);

function testStuff(){
  document.getElementById("thisTag").innerHTML = hairCount;
}


// var initialHairCount = document.getElementById("id_avatar_hair").value;
// var initialEyebrowCount = document.getElementById("id_avatar_eyebrows").value;
// var initialEyeCount = document.getElementById("id_avatar_eyes").value;
// var initialNoseCount = document.getElementById("id_avatar_nose").value;
// var initialMouthCount = document.getElementById("id_avatar_mouth").value;

// var hairCount = 1;
// var eyebrowCount = 1;
// var eyeCount = 1;
// var noseCount = 1;
// var mouthCount = 1;

// function valueTest(){
//   document.getElementById("id_gender").value = "female";
//   document.getElementById("thisTag").innerHTML = document.getElementById("id_gender").value;
// }



// function imageTest(){
//   document.getElementById("mainBody").src = "../../../static/Rodeo/images/head.png";
// }


function changeHair(){
  if (hairCount == 1){
    //Starting Hair 1
     document.getElementById("mainHair").style.background = "url('../../../static/Rodeo/images/hair.png') no-repeat -72px 0";
     document.getElementById("mainHair").style.width = "542px";
     document.getElementById("mainHair").style.height = "327px";
     document.getElementById("mainHair").style.top = "0px";
     document.getElementById("mainHair").style.left = "204px";
  }
  if (hairCount == 2){
    //Short Black 2
     document.getElementById("mainHair").style.background = "url('../../../static/Rodeo/images/hair.png') no-repeat -738px -500px";
     document.getElementById("mainHair").style.width = "390px";
     document.getElementById("mainHair").style.height = "184px";
     document.getElementById("mainHair").style.top = "110px";
     document.getElementById("mainHair").style.left = "268px";
  }
  if (hairCount == 3){
    //Bald 3
    document.getElementById("mainHair").style.background = "url('../../../static/Rodeo/images/hair.png') no-repeat -764px -66px";
    document.getElementById("mainHair").style.width = "422px";
    document.getElementById("mainHair").style.height = "199px";
    document.getElementById("mainHair").style.top = "162px";
    document.getElementById("mainHair").style.left = "252px";
  }
  if (hairCount == 4){
    //  Old man 4
      document.getElementById("mainHair").style.background = "url('../../../static/Rodeo/images/hair.png') no-repeat -1311px -61px";
      document.getElementById("mainHair").style.width = "422px";
      document.getElementById("mainHair").style.height = "239px";
      document.getElementById("mainHair").style.top = "122px";
      document.getElementById("mainHair").style.left = "250px";
  }
  if (hairCount == 5){
    // Short straight 5
      document.getElementById("mainHair").style.background = "url('../../../static/Rodeo/images/hair.png') no-repeat -1796px -51px";
      document.getElementById("mainHair").style.width = "422px";
      document.getElementById("mainHair").style.height = "256px";
      document.getElementById("mainHair").style.top = "118px";
      document.getElementById("mainHair").style.left = "254px";
  }
  if (hairCount == 6){
    //Long straight 6
      document.getElementById("mainHair").style.background = "url('../../../static/Rodeo/images/hair.png') no-repeat -2294px -47px";
      document.getElementById("mainHair").style.width = "421px";
      document.getElementById("mainHair").style.height = "310px";
      document.getElementById("mainHair").style.top = "60px";
      document.getElementById("mainHair").style.left = "256px";
  }
  if (hairCount == 7){
    // Puffy 7
      document.getElementById("mainHair").style.background = "url('../../../static/Rodeo/images/hair.png') no-repeat -86px -447px";
      document.getElementById("mainHair").style.width = "540px";
      document.getElementById("mainHair").style.height = "326px";
      document.getElementById("mainHair").style.top = "0px";
      document.getElementById("mainHair").style.left = "206px";
  }
  if (hairCount == 8){
    // Flattop 8
    document.getElementById("mainHair").style.background = "url('../../../static/Rodeo/images/hair.png') no-repeat -1280px -445px";
    document.getElementById("mainHair").style.width = "389px";
    document.getElementById("mainHair").style.height = "128px";
    document.getElementById("mainHair").style.top = "64px";
    document.getElementById("mainHair").style.left = "268px";
  }
  if (hairCount == 9){
    // Flattop 2 9
      document.getElementById("mainHair").style.background = "url('../../../static/Rodeo/images/hair.png') no-repeat -1788px -415px";
      document.getElementById("mainHair").style.width = "422px";
      document.getElementById("mainHair").style.height = "256px";
      document.getElementById("mainHair").style.top = "104px";
      document.getElementById("mainHair").style.left = "254px";
  }
  if (hairCount == 10){
    // Small curls 10
      document.getElementById("mainHair").style.background = "url('../../../static/Rodeo/images/hair.png') no-repeat -896px -1120px";
      document.getElementById("mainHair").style.width = "316px";
      document.getElementById("mainHair").style.height = "165px";
      document.getElementById("mainHair").style.top = "12px";
      document.getElementById("mainHair").style.left = "301px";
  }

  if (hairCount == 11){
    // Small spikes 11
      document.getElementById("mainHair").style.background = "url('../../../static/Rodeo/images/hair.png') no-repeat -1406px -1109px";
      document.getElementById("mainHair").style.width = "335px";
      document.getElementById("mainHair").style.height = "174px";
      document.getElementById("mainHair").style.top = "10px";
      document.getElementById("mainHair").style.left = "300px";
  }
}

function hairAdd(){
  hairCount = hairCount + 1;
  if (hairCount == 12){
    hairCount = 1;
  }
  changeHair();
  document.getElementById("id_avatar_hair").value = hairCount;
  //document.getElementById("testMe").innerText = hairCount;
}

function hairSub(){
  hairCount = hairCount - 1;
   if (hairCount == 0){
    hairCount = 11;
  }
  changeHair();
  document.getElementById("id_avatar_hair").value = hairCount;
  //document.getElementById("testMe").innerText = hairCount;
}




function changeEyebrows(){
  if (eyebrowCount == 1){
    // Eyebrows original 1
    document.getElementById("mainEyebrows").style.background = "url('../../../static/Rodeo/images/eyeBrows.png') no-repeat -2px 0";
    document.getElementById("mainEyebrows").style.width = "308px";
    document.getElementById("mainEyebrows").style.height = "37px";
    document.getElementById("mainEyebrows").style.top = "185px";
    document.getElementById("mainEyebrows").style.left = "304px";
  }
  if (eyebrowCount == 2){
    // Eyebrows thin 2
    document.getElementById("mainEyebrows").style.background = "url('../../../static/Rodeo/images/eyeBrows.png') no-repeat -21px -567px";
    document.getElementById("mainEyebrows").style.width = "261px";
    document.getElementById("mainEyebrows").style.height = "28px";
    document.getElementById("mainEyebrows").style.top = "195px";
    document.getElementById("mainEyebrows").style.left = "324px";
  }
  if (eyebrowCount == 3){
    // Eyebrows medium 3
      document.getElementById("mainEyebrows").style.background = "url('../../../static/Rodeo/images/eyeBrows.png') no-repeat -29px -511px";
      document.getElementById("mainEyebrows").style.width = "262px";
      document.getElementById("mainEyebrows").style.height = "32px";
      document.getElementById("mainEyebrows").style.top = "195px";
      document.getElementById("mainEyebrows").style.left = "324px";
  }
  if (eyebrowCount == 4){
    // Eyebrows thick 4
    document.getElementById("mainEyebrows").style.background = "url('../../../static/Rodeo/images/eyeBrows.png') no-repeat -14px -440px";
    document.getElementById("mainEyebrows").style.width = "268px";
    document.getElementById("mainEyebrows").style.height = "39px";
    document.getElementById("mainEyebrows").style.top = "195px";
    document.getElementById("mainEyebrows").style.left = "318px";
  }
  if (eyebrowCount == 5){
    // Eyebrows uni2 5
    document.getElementById("mainEyebrows").style.background = "url('../../../static/Rodeo/images/eyeBrows.png') no-repeat -6px -345px";
    document.getElementById("mainEyebrows").style.width = "267px";
    document.getElementById("mainEyebrows").style.height = "38px";
    document.getElementById("mainEyebrows").style.top = "195px";
    document.getElementById("mainEyebrows").style.left = "318px";
  }
  if (eyebrowCount == 6){
    // Eybrows uni 6
      document.getElementById("mainEyebrows").style.background = "url('../../../static/Rodeo/images/eyeBrows.png') no-repeat -22px -99px";
      document.getElementById("mainEyebrows").style.width = "258px";
      document.getElementById("mainEyebrows").style.height = "24px";
      document.getElementById("mainEyebrows").style.top = "195px";
      document.getElementById("mainEyebrows").style.left = "328px";
}
if (eyebrowCount == 7){
  // Eyebrows thin 7
    document.getElementById("mainEyebrows").style.background = "url('../../../static/Rodeo/images/eyeBrows.png') no-repeat -417px -2px";
    document.getElementById("mainEyebrows").style.width = "266px";
    document.getElementById("mainEyebrows").style.height = "32px";
    document.getElementById("mainEyebrows").style.top = "200px";
    document.getElementById("mainEyebrows").style.left = "320px";
 }
}

function eyebrowAdd(){
  eyebrowCount = eyebrowCount + 1;
  if (eyebrowCount == 8){
    eyebrowCount = 1;
  }
  changeEyebrows();
  document.getElementById("id_avatar_eyebrows").value = eyebrowCount;
  //document.getElementById("testMe").innerText = hairCount;
}

function eyebrowSub(){
  eyebrowCount = eyebrowCount - 1;
   if (eyebrowCount == 0){
    eyebrowCount = 7;
  }
  changeEyebrows();
  document.getElementById("id_avatar_eyebrows").value = eyebrowCount;
  //document.getElementById("testMe").innerText = hairCount;
}



function changeEyes(){
  if (eyeCount == 1){
    // Original eyes 1
      document.getElementById("mainEyes").style.background = "url('../../../static/Rodeo/images/eyes.png') no-repeat -331px -6px";
      document.getElementById("mainEyes").style.width = "251px";
      document.getElementById("mainEyes").style.height = "114px";
      document.getElementById("mainEyes").style.top = "220px";
      document.getElementById("mainEyes").style.left = "330px";
  }
  if (eyeCount == 2){
    // Eye lashes 2
      document.getElementById("mainEyes").style.background = "url('../../../static/Rodeo/images/eyes.png') no-repeat 0 0";
      document.getElementById("mainEyes").style.width = "282px";
      document.getElementById("mainEyes").style.height = "120px";
      document.getElementById("mainEyes").style.top = "220px";
      document.getElementById("mainEyes").style.left = "315px";
  }
  if (eyeCount == 3){
    // Crazy Eyes 3
      document.getElementById("mainEyes").style.background = "url('../../../static/Rodeo/images/eyes.png') no-repeat -22px -173px";
      document.getElementById("mainEyes").style.width = "252px";
      document.getElementById("mainEyes").style.height = "114px";
      document.getElementById("mainEyes").style.top = "220px";
      document.getElementById("mainEyes").style.left = "330px";
  }
  if (eyeCount == 4){
    // Square Eyes 4
      document.getElementById("mainEyes").style.background = "url('../../../static/Rodeo/images/eyes.png') no-repeat -314px -182px";
      document.getElementById("mainEyes").style.width = "254px";
      document.getElementById("mainEyes").style.height = "87px";
      document.getElementById("mainEyes").style.top = "235px";
      document.getElementById("mainEyes").style.left = "330px";
  }
  if (eyeCount == 5){
    // Pink Eye 5
      document.getElementById("mainEyes").style.background = "url('../../../static/Rodeo/images/eyes.png') no-repeat -26px -340px";
      document.getElementById("mainEyes").style.width = "252px";
      document.getElementById("mainEyes").style.height = "113px";
      document.getElementById("mainEyes").style.top = "220px";
      document.getElementById("mainEyes").style.left = "330px";
  }
  if (eyeCount == 6){
    // Angry Eyes 6
    document.getElementById("mainEyes").style.background = "url('../../../static/Rodeo/images/eyes.png') no-repeat -343px -344px";
    document.getElementById("mainEyes").style.width = "252px";
    document.getElementById("mainEyes").style.height = "113px";
    document.getElementById("mainEyes").style.top = "220px";
    document.getElementById("mainEyes").style.left = "330px";
  }
}

function eyeAdd(){
  eyeCount = eyeCount + 1;
  if (eyeCount == 7){
    eyeCount = 1;
  }
  changeEyes();
  document.getElementById("id_avatar_eyes").value = eyeCount;
  //document.getElementById("testMe").innerText = hairCount;
}

function eyeSub(){
  eyeCount = eyeCount - 1;
   if (eyeCount == 0){
    eyeCount = 6;
  }
  changeEyes();
  document.getElementById("id_avatar_eyes").value = eyeCount;
  //document.getElementById("testMe").innerText = hairCount;
}



function changeNoses(){
  if (noseCount == 1){
    // Original nose 1
    document.getElementById("mainNose").style.background = "url('../../../static/Rodeo/images/noses.png') no-repeat -604px -16px";
    document.getElementById("mainNose").style.width = "72px";
    document.getElementById("mainNose").style.height = "81px";
    document.getElementById("mainNose").style.top = "340px";
    document.getElementById("mainNose").style.left = "400px";
  }
  if (noseCount == 2){
    // Big nose 2
    document.getElementById("mainNose").style.background = "url('../../../static/Rodeo/images/noses.png') no-repeat 0 -13px";
    document.getElementById("mainNose").style.width = "81px";
    document.getElementById("mainNose").style.height = "79px";
    document.getElementById("mainNose").style.top = "344px";
    document.getElementById("mainNose").style.left = "420px";
  }
  if (noseCount == 3){
    // Triangular nose 3
      document.getElementById("mainNose").style.background = "url('../../../static/Rodeo/images/noses.png') no-repeat -183px -18px";
      document.getElementById("mainNose").style.width = "46px";
      document.getElementById("mainNose").style.height = "65px";
      document.getElementById("mainNose").style.top = "340px";
      document.getElementById("mainNose").style.left = "400px";
  }
  if (noseCount == 4){
    // Fulltriangle nose 4
      document.getElementById("mainNose").style.background = "url('../../../static/Rodeo/images/noses.png') no-repeat -278px -21px";
      document.getElementById("mainNose").style.width = "76px";
      document.getElementById("mainNose").style.height = "65px";
      document.getElementById("mainNose").style.top = "348px";
      document.getElementById("mainNose").style.left = "420px";
  }
  if (noseCount == 5){
    // Low nose 5
    document.getElementById("mainNose").style.background = "url('../../../static/Rodeo/images/noses.png') no-repeat -394px -21px";
    document.getElementById("mainNose").style.width = "77px";
    document.getElementById("mainNose").style.height = "66px";
    document.getElementById("mainNose").style.top = "348px";
    document.getElementById("mainNose").style.left = "420px";
  }
  if (noseCount == 6){
    // Half nose 6
    document.getElementById("mainNose").style.background = "url('../../../static/Rodeo/images/noses.png') no-repeat -706px -14px";
    document.getElementById("mainNose").style.width = "63px";
    document.getElementById("mainNose").style.height = "62px";
    document.getElementById("mainNose").style.top = "348px";
    document.getElementById("mainNose").style.left = "420px";
  }
  if (noseCount == 7){
    // Full nose 7
      document.getElementById("mainNose").style.background = "url('../../../static/Rodeo/images/noses.png') no-repeat -815px -14px";
      document.getElementById("mainNose").style.width = "77px";
      document.getElementById("mainNose").style.height = "62px";
      document.getElementById("mainNose").style.top = "348px";
      document.getElementById("mainNose").style.left = "420px";
  }
  if (noseCount == 8){
    // Long nose 8
      document.getElementById("mainNose").style.background = "url('../../../static/Rodeo/images/noses.png') no-repeat -1046px 0";
      document.getElementById("mainNose").style.width = "80px";
      document.getElementById("mainNose").style.height = "81px";
      document.getElementById("mainNose").style.top = "348px";
      document.getElementById("mainNose").style.left = "420px";
  }
  if (noseCount == 9){
    // Round nose 9
    document.getElementById("mainNose").style.background = "url('../../../static/Rodeo/images/noses.png') no-repeat -1166px -12px";
    document.getElementById("mainNose").style.width = "54px";
    document.getElementById("mainNose").style.height = "62px";
    document.getElementById("mainNose").style.top = "348px";
    document.getElementById("mainNose").style.left = "420px";
  }
  if (noseCount == 10){
    // Full nose 10
      document.getElementById("mainNose").style.background = "url('../../../static/Rodeo/images/noses.png') no-repeat -1273px 0";
      document.getElementById("mainNose").style.width = "73px";
      document.getElementById("mainNose").style.height = "74px";
      document.getElementById("mainNose").style.top = "348px";
      document.getElementById("mainNose").style.left = "420px";
  }
  if (noseCount == 11){
    // Full nose 2 11
      document.getElementById("mainNose").style.background = "url('../../../static/Rodeo/images/noses.png') no-repeat -1410px 0";
      document.getElementById("mainNose").style.width = "74px";
      document.getElementById("mainNose").style.height = "74px";
      document.getElementById("mainNose").style.top = "348px";
      document.getElementById("mainNose").style.left = "420px";
  }
  if (noseCount == 12){
    // Full nose 3 12
    document.getElementById("mainNose").style.background = "url('../../../static/Rodeo/images/noses.png') no-repeat -1529px 0";
    document.getElementById("mainNose").style.width = "71px";
    document.getElementById("mainNose").style.height = "79px";
    document.getElementById("mainNose").style.top = "348px";
    document.getElementById("mainNose").style.left = "420px";
  }
}


function noseAdd(){
  noseCount = noseCount + 1;
  if (noseCount == 13){
    noseCount = 1;
  }
  changeNoses();
  document.getElementById("id_avatar_nose").value = noseCount;
  //document.getElementById("testMe").innerText = hairCount;
}

function noseSub(){
  noseCount = noseCount - 1;
   if (noseCount == 0){
    noseCount = 12;
  }
  changeNoses();
  document.getElementById("id_avatar_nose").value = noseCount;
  //document.getElementById("testMe").innerText = hairCount;
}

function changeMouths(){
  if (mouthCount == 1){
    // Original smile 1
      document.getElementById("mainMouth").style.background = "url('../../../static/Rodeo/images/mouths.png') no-repeat -344px -337px";
      document.getElementById("mainMouth").style.width = "185px";
      document.getElementById("mainMouth").style.height = "80px";
      document.getElementById("mainMouth").style.top = "440px";
      document.getElementById("mainMouth").style.left = "356px";
  }
  if (mouthCount == 2){
    // Smiles 2
    document.getElementById("mainMouth").style.background = "url('../../../static/Rodeo/images/mouths.png') no-repeat -15px -130px";
    document.getElementById("mainMouth").style.width = "243px";
    document.getElementById("mainMouth").style.height = "89px";
    document.getElementById("mainMouth").style.top = "440px";
    document.getElementById("mainMouth").style.left = "330px";
  }
  if (mouthCount == 3){
    // Big smile 3
      document.getElementById("mainMouth").style.background = "url('../../../static/Rodeo/images/mouths.png') no-repeat 0 -333px";
      document.getElementById("mainMouth").style.width = "246px";
      document.getElementById("mainMouth").style.height = "106px";
      document.getElementById("mainMouth").style.top = "435px";
      document.getElementById("mainMouth").style.left = "336px";
  }
  if (mouthCount == 4){
    // Yellow smile 4
      document.getElementById("mainMouth").style.background = "url('../../../static/Rodeo/images/mouths.png') no-repeat -20px -904px";
      document.getElementById("mainMouth").style.width = "247px";
      document.getElementById("mainMouth").style.height = "106px";
      document.getElementById("mainMouth").style.top = "435px";
      document.getElementById("mainMouth").style.left = "336px";
  }
  if (mouthCount == 5){
    // Stitches smile 5
      document.getElementById("mainMouth").style.background = "url('../../../static/Rodeo/images/mouths.png') no-repeat -26px -1095px";
      document.getElementById("mainMouth").style.width = "234px";
      document.getElementById("mainMouth").style.height = "94px";
      document.getElementById("mainMouth").style.top = "435px";
      document.getElementById("mainMouth").style.left = "336px";
  }
  if (mouthCount == 6){
    // Surprise smile 6
      document.getElementById("mainMouth").style.background = "url('../../../static/Rodeo/images/mouths.png') no-repeat -349px -130px";
      document.getElementById("mainMouth").style.width = "159x";
      document.getElementById("mainMouth").style.height = "81px";
      document.getElementById("mainMouth").style.top = "460px";
      document.getElementById("mainMouth").style.left = "365px";
  }
  if (mouthCount == 7){
    // Buck smile 7
      document.getElementById("mainMouth").style.background = "url('../../../static/Rodeo/images/mouths.png') no-repeat -567px -572px";
      document.getElementById("mainMouth").style.width = "121px";
      document.getElementById("mainMouth").style.height = "35px";
      document.getElementById("mainMouth").style.top = "470px";
      document.getElementById("mainMouth").style.left = "385px";
  }
  if (mouthCount == 8){
    // Not smile 8
      document.getElementById("mainMouth").style.background = "url('../../../static/Rodeo/images/mouths.png') no-repeat -786px -950px";
      document.getElementById("mainMouth").style.width = "143x";
      document.getElementById("mainMouth").style.height = "5px";
      document.getElementById("mainMouth").style.top = "470px";
      document.getElementById("mainMouth").style.left = "385px";
  }
  if (mouthCount == 9){
    // Frown smile 9
    document.getElementById("mainMouth").style.background = "url('../../../static/Rodeo/images/mouths.png') no-repeat -803px -1162px";
    document.getElementById("mainMouth").style.width = "128x";
    document.getElementById("mainMouth").style.height = "50px";
    document.getElementById("mainMouth").style.top = "470px";
    document.getElementById("mainMouth").style.left = "400px";
  }
  if (mouthCount == 10){
    // Unentertained smile 10
      document.getElementById("mainMouth").style.background = "url('../../../static/Rodeo/images/mouths.png') no-repeat -778px -1052px";
      document.getElementById("mainMouth").style.width = "151px";
      document.getElementById("mainMouth").style.height = "24px";
      document.getElementById("mainMouth").style.top = "490px";
      document.getElementById("mainMouth").style.left = "380px";
  }
  if (mouthCount == 11){
    // Lil smile 11
    document.getElementById("mainMouth").style.background = "url('../../../static/Rodeo/images/mouths.png') no-repeat -772px -729px";
    document.getElementById("mainMouth").style.width = "157px";
    document.getElementById("mainMouth").style.height = "66px";
    document.getElementById("mainMouth").style.top = "460px";
    document.getElementById("mainMouth").style.left = "380px";
  }
  if (mouthCount == 12){
    // Big smile 12
      document.getElementById("mainMouth").style.background = "url('../../../static/Rodeo/images/mouths.png') no-repeat -757px -539px";
      document.getElementById("mainMouth").style.width = "243px";
      document.getElementById("mainMouth").style.height = "101px";
      document.getElementById("mainMouth").style.top = "440px";
      document.getElementById("mainMouth").style.left = "340px";
  }
  if (mouthCount == 13){
    // Grin smile 13
      document.getElementById("mainMouth").style.background = "url('../../../static/Rodeo/images/mouths.png') no-repeat -600px -8px";
      document.getElementById("mainMouth").style.width = "246px";
      document.getElementById("mainMouth").style.height = "106px";
      document.getElementById("mainMouth").style.top = "440px";
      document.getElementById("mainMouth").style.left = "330px";
  }
  if (mouthCount == 14){
    // Evil smile 14
      document.getElementById("mainMouth").style.background = "url('../../../static/Rodeo/images/mouths.png') no-repeat -965px -191px";
      document.getElementById("mainMouth").style.width = "266px";
      document.getElementById("mainMouth").style.height = "105px";
      document.getElementById("mainMouth").style.top = "440px";
      document.getElementById("mainMouth").style.left = "320px";
  }
}

function mouthAdd(){
  mouthCount = mouthCount + 1;
  if (mouthCount == 15){
    mouthCount = 1;
  }
  changeMouths();
  document.getElementById("id_avatar_mouth").value = mouthCount;
  //document.getElementById("testMe").innerText = hairCount;
}

function mouthSub(){
  mouthCount = mouthCount - 1;
   if (mouthCount == 0){
    mouthCount = 14;
  }
  changeMouths();
  document.getElementById("id_avatar_mouth").value = mouthCount;
  //document.getElementById("testMe").innerText = hairCount;
}
