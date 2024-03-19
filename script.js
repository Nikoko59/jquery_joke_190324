$(function () {
  let a = $("h1"),
    logo = $("#logo"),
    nav = $(".nav"),
    navigation = $("#navigation"),
    parUn = $("#parOne"),
    list = $(".list"),
    custom = $(".customlist"),
    listOne = $("#list1"),
    listTwo = "#list2",
    listThree = "#list3",
    listFour = "#list4",
    listFive = "#list5";

  $(a).css({
    color: "orange",
    background: "#070142",
    textAlign: "center",
  });

  $(nav).css({
    display: "flex",
    width: "1200px",
    justifyContent: "space-between",
  });

  $(custom).css({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "50px",
    margin: "20px",
    width: "1600px",
  });

  $(navigation).css({
    width: "80%",
  });

  $(list).css({
    "list-style-type": "none",
    fontSize: "1.5rem",
  });

  $(listOne).css({
    background: "#070142",
    color: "orange",
    width: "200px",
    marginRight: "30px",
    padding: "10px",
    opacity: 0.9,
    cursor: "pointer",
    textAlign: "center",
  });

  $(listTwo).css({
    background: "orange",
    color: "#070142",
    width: "200px",
    textAlign: "center",
    padding: "10px",
    cursor: "pointer",
  });

  $(listThree).css({
    background: "#070142",
    color: "orange",
    textAlign: "center",
    opacity: 0.9,
    width: "200px",
    padding: "10px",
    cursor: "pointer",
  });

  $(logo).css({
    margin: "20px",
    borderRadius: "20px",
  });

  $.ajax({
    url: "https://api.blablagues.net/?rub=blagues",
    type: "GET",
    dataType: "json", // Le type de données que l'on attend en réponse
    success: function (data) {
      // Vérifier la structure des données

      let joke = data.data.content.text_head;
      let answer = data.data.content.text_hidden;

      $("#explanation").text(joke);
      $("#content").text(answer);
    },
    error: function (xhr, status, error) {
      // Gérer les erreurs
      console.error("Erreur lors de la requête à l'API : " + status);
    },
  });

  $("#explanation").css({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontSize: "2rem",
    padding: "80px",
  });

  $("#content").css({
    color: "white",
    background: "orange",
    fontSize: "0.9em",
    margin: "0 auto ",
    padding: "10px",
    transition: "0.3s ease-in",
    opacity: 0,
  });
  $("#content")
    .animate(
      {
        opacity: 1,
      },
      3000
    )
    .fadeIn("slow");

  $(parUn).css({
    color: "#070142",
    textAlign: "center",
    padding: "10px",
    overflow: "hidden",
    margin: "20px",
  });

  $(listFour).css({
    background: "orange",
    color: "#070142",
    padding: "10px",
    opacity: 0.9,
    cursor: "pointer",
  });
  $(listFive).css({
    background: "#070142",
    color: "orange",
    padding: "10px",
    opacity: 0.9,
    cursor: "pointer",
  });
});
