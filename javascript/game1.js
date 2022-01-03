document.addEventListener("DOMContentLoaded", function () {
  const cardArray = [
    {
      name: "fma",
      img: "images/fma.jpg",
    },
    {
      name: "fma",
      img: "images/fma.jpg",
    },
    {
      name: "itachi",
      img: "images/itachi.jpg",
    },
    {
      name: "itachi",
      img: "images/itachi.jpg",
    },
    {
      name: "killua",
      img: "images/killua.jpg",
    },

    {
      name: "killua",
      img: "images/killua.jpg",
    },

    {
      name: "l1",
      img: "images/l1.png",
    },

    {
      name: "l1",
      img: "images/l1.png",
    },

    {
      name: "levi",
      img: "images/levi.jpg",
    },

    {
      name: "levi",
      img: "images/levi.jpg",
    },

    {
      name: "mob",
      img: "images/mob.jpg",
    },
    {
      name: "mob",
      img: "images/mob.jpg",
    },
    {
      name: "saitama",
      img: "../images/saitama.png",
    },

    {
      name: "saitama",
      img: "images/saitama.png",
    },

    {
      name: "cg",
      img: "images/cg.jpg",
    },

    {
      name: "cg",
      img: "images/cg.jpg",
    },
  ];
  cardArray.sort(() => 0.5 - Math.random());

  let j = 0;
  let cardChosen = [];
  let arr = [];

  const grid = document.querySelector(".grid");

  function createBoard() {
    for (var i = 0; i < cardArray.length; i++) {
      let card = document.createElement("img");
      card.setAttribute("src", "images/back.jpg");
      card.setAttribute("id", i);
      card.addEventListener("click", flipCard);

      grid.appendChild(card);
    }
  }

  function flipCard() {
    let cardid = this.getAttribute("id");
    cardChosen.push(cardArray[cardid].name);
    arr.push(cardid);
    this.setAttribute("src", cardArray[cardid].img);
    if (cardChosen.length == 2) {
      setTimeout(check, 100);
    }
  }
  function check() {
    var cards = document.querySelectorAll("img");
    let a = arr[0];
    let b = arr[1];

    if (cardChosen[0] == cardChosen[1]) {
      alert("Matched!!!!!");
      cards[a].setAttribute("src", "images/whit.jpg");
      cards[b].setAttribute("src", "images/whit.jpg");
      j++;
      document.getElementById("result").innerHTML = j;
    } else {
      alert("NOT Matched");
      cards[a].setAttribute("src", "images/back.jpg");
      cards[b].setAttribute("src", "images/back.jpg");
    }
    cardChosen = [];
    arr = [];
  }

  createBoard();
});
