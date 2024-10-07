let player = 0;
let track_list = new Array(9).fill(-1);
let c = 0;

function winCheck(val) {
  if (track_list[0] == val && track_list[1] == val && track_list[2] == val) {
    return 1;
  } else if (
    track_list[2] == val &&
    track_list[5] == val &&
    track_list[8] == val 
  ) {
    return 1;
  } else if (
    track_list[3] == val &&
    track_list[4] == val &&
    track_list[5] == val
  ) {
    return 1;
  } else if (
    track_list[6] == val &&
    track_list[7] == val &&
    track_list[8] == val
  ) {
    return 1;
  } else if (
    track_list[0] == val &&
    track_list[4] == val &&
    track_list[8] == val
  ) {
    return 1;
  } else if (
    track_list[2] == val &&
    track_list[4] == val &&
    track_list[6] == val
  ) {
    return 1;
  } else if (
    track_list[0] == val &&
    track_list[3] == val &&
    track_list[6] == val
  ) {
    return 1;
  } else if (
    track_list[1] == val &&
    track_list[4] == val &&
    track_list[7] == val
  ) {
    return 1;
  } else {
    return 0;
  }
}

function draw() {
  alert("Draw");
  $(".plays").text("Draw.");
}

$(document).ready(() => {
  $(".box div").on("click", function () {
    if (!$(this).text()) {
      c += 1;
      if (player === 0) {
        $(this).text("X");
        track_list[$(this).index()] = 1;
        if (winCheck(1)) {
          $(".box div").off();
          setTimeout(() => {
            alert("X wins the game.");
            $(".plays").text("X wins the game.");
          }, 100);
        } else if (c == 9) {
          draw();
        } else {
          $(".plays").text("O plays now");
        }
        player = 1;
      } else {
        $(this).text("O");
        track_list[$(this).index()] = 0;
        if (winCheck(0)) {
          $(".box div").off();
          setTimeout(() => {
            alert("O wins the game.");
            $(".plays").text("O wins the game.");
          }, 100);
        } else if (c == 9) {
          draw();
        } else {
          $(".plays").text("X plays now");
        }
        player = 0;
      }
    }
  });
});
