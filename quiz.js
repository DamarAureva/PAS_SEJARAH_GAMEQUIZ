var quiztitle = "Quiz Pemberontakan di Indonesia";

var quiz = [
    {
        question: "Q1: Apa nama pemberontakan yang dipimpin oleh Muso pada tahun 1948?",
        image: "",
        choices: [
          "Pemberontakan PKI Madiun",
          "Pemberontakan DI/TII",
          "Pemberontakan PRRI",
          "Pemberontakan APRA",
        ],
        correct: "Pemberontakan PKI Madiun",
        explanation:
          "Pemberontakan PKI di Madiun tahun 1948 dipimpin oleh Muso dan merupakan salah satu ancaman besar bagi Republik Indonesia.",
      },
      {
        question: "Q2: Siapa tokoh di dalam gambar ini?",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Musso.jpg/220px-Musso.jpg",
        choices: [
          "Soeharto",
          "Muso",
          "Amir Sjarifuddin",
          "Tan Malaka",
        ],
        correct: "Muso",
        explanation: "Muso adalah pemimpin PKI yang memimpin pemberontakan di Madiun tahun 1948.",
      },
      {
        question: "Q3: Apa tujuan utama pemberontakan DI/TII yang dipimpin oleh Kartosuwiryo?",
        image: "",
        choices: [
          "Menggulingkan pemerintahan Sukarno",
          "Mendirikan Negara Islam Indonesia",
          "Mengakhiri pengaruh kolonial Belanda",
          "Menguasai wilayah Jawa Barat",
        ],
        correct: "Mendirikan Negara Islam Indonesia",
        explanation:
          "Pemberontakan DI/TII dipimpin oleh Kartosuwiryo dengan tujuan mendirikan Negara Islam Indonesia (NII).",
      },
      {
        question: "Q4: Pemberontakan PRRI terjadi di daerah mana?",
        image: "",
        choices: [
          "Sumatera Barat",
          "Sulawesi Selatan",
          "Jawa Timur",
          "Kalimantan Selatan",
        ],
        correct: "Sumatera Barat",
        explanation:
          "Pemberontakan PRRI terjadi di Sumatera Barat dan dipicu oleh ketidakpuasan terhadap pemerintahan pusat.",
      },
      {
        question: "Q5: Siapa pemimpin pemberontakan APRA di Bandung?",
        image: "",
        choices: [
          "Westerling",
          "Kartosoewiryo",
          "Soeharto",
          "Tan Malaka",
        ],
        correct: "Westerling",
        explanation:
          "Raymond Westerling memimpin APRA (Angkatan Perang Ratu Adil) dalam pemberontakan di Bandung.",
      },
      {
        question: "Q6: Pemberontakan G30S/PKI terjadi pada tahun?",
        image: "",
        choices: [
          "1948",
          "1950",
          "1965",
          "1967",
        ],
        correct: "1965",
        explanation:
          "G30S/PKI adalah pemberontakan yang terjadi pada 30 September 1965 dan melibatkan pembunuhan sejumlah jenderal TNI AD.",
      },
      {
        question: "Q7: Apa nama operasi militer yang dilakukan untuk menumpas pemberontakan PRRI?",
        image: "",
        choices: [
          "Operasi Sadar",
          "Operasi Tegas",
          "Operasi Penumpasan",
          "Operasi 17 Agustus",
        ],
        correct: "Operasi 17 Agustus",
        explanation:
          "Operasi 17 Agustus adalah operasi militer yang dilakukan untuk menumpas pemberontakan PRRI di Sumatera Barat.",
      },
      {
        question: "Q8: Siapa tokoh yang memimpin pemberontakan DI/TII di Aceh?",
        image: "",
        choices: [
          "Daud Beureueh",
          "Kartosuwiryo",
          "Sutan Syahrir",
          "Amir Sjarifuddin",
        ],
        correct: "Daud Beureueh",
        explanation:
          "Daud Beureueh memimpin pemberontakan DI/TII di Aceh dengan tujuan mendirikan Negara Islam.",
      },
      {
        question: "Q9: Apa penyebab utama pemberontakan RMS di Maluku?",
        image: "",
        choices: [
          "Keinginan memisahkan diri dari Republik Indonesia",
          "Pengaruh komunis di Maluku",
          "Perselisihan antara suku-suku lokal",
          "Dukungan kolonial Belanda",
        ],
        correct: "Keinginan memisahkan diri dari Republik Indonesia",
        explanation:
          "RMS (Republik Maluku Selatan) adalah gerakan separatis yang ingin memisahkan diri dari Republik Indonesia.",
      },
      {
        question: "Q10: Operasi Trikora dilancarkan untuk merebut wilayah mana?",
        image: "",
        choices: [
          "Timor Timur",
          "Papua Barat",
          "Sulawesi Utara",
          "Sumatera Selatan",
        ],
        correct: "Papua Barat",
        explanation:
          "Operasi Trikora adalah operasi militer untuk merebut Papua Barat dari kekuasaan Belanda.",
      },
];

var currentquestion = 0,
    score = 0,
    submt = true,
    picked;

    jQuery(document).ready(function ($) {
      function htmlEncode(value) {
          return $(document.createElement("div")).text(value).html();
      }
  
      function addChoices(choices) {
          if (typeof choices !== "undefined" && $.type(choices) === "array") {
              $("#choice-block").empty();
              for (var i = 0; i < choices.length; i++) {
                  $(document.createElement("li"))
                      .addClass("choice choice-box")
                      .attr("data-index", i)
                      .text(choices[i])
                      .appendTo("#choice-block");
              }
          }
      }
  
      function nextQuestion() {
          submt = true;
          $("#explanation").empty();
          $("#question").text(quiz[currentquestion]["question"]);
          $("#pager").text(
              "Question " + (currentquestion + 1) + " of " + quiz.length
          );
  
          if (quiz[currentquestion].hasOwnProperty("image") && quiz[currentquestion]["image"] != "") {
              if ($("#question-image").length == 0) {
                  $(document.createElement("img"))
                      .addClass("question-image")
                      .attr("id", "question-image")
                      .attr("src", quiz[currentquestion]["image"])
                      .attr("alt", htmlEncode(quiz[currentquestion]["question"]))
                      .insertAfter("#question");
              } else {
                  $("#question-image")
                      .attr("src", quiz[currentquestion]["image"])
                      .attr("alt", htmlEncode(quiz[currentquestion]["question"]));
              }
          } else {
              $("#question-image").remove();
          }
  
          addChoices(quiz[currentquestion]["choices"]);
          setupButtons();
      }
  
      function processQuestion(choice) {
          if (quiz[currentquestion]["choices"][choice] === quiz[currentquestion]["correct"]) {
              $(".choice").eq(choice).css({ "background-color": "#50D943" });
              $("#explanation").html(
                  "<strong>Correct!</strong> " + htmlEncode(quiz[currentquestion]["explanation"])
              );
              score++;
          } else {
              $(".choice").eq(choice).css({ "background-color": "#D92623" });
              $("#explanation").html(
                  "<strong>Incorrect.</strong> " + htmlEncode(quiz[currentquestion]["explanation"])
              );
          }
          currentquestion++;
          $("#submitbutton")
              .html("NEXT QUESTION &raquo;")
              .on("click", function () {
                  if (currentquestion === quiz.length) {
                      endQuiz();
                  } else {
                      $(this)
                          .text("Check Answer")
                          .css({ color: "#222" })
                          .off("click");
                      nextQuestion();
                  }
              });
      }
  
      function restartQuiz() {
          currentquestion = 0;
          score = 0;
          submt = true;
          picked = undefined;
          $("#frame").empty(); // Membersihkan konten frame
          init(); // Memulai ulang kuis
      }
  
      function setupButtons() {
          $(".choice").on("mouseover", function () {
              $(this).css({ "background-color": "#e1e1e1" });
          });
          $(".choice").on("mouseout", function () {
              $(this).css({ "background-color": "#fff" });
          });
          $(".choice").on("click", function () {
              picked = $(this).attr("data-index");
              $(".choice").removeAttr("style").off("mouseout mouseover");
              $(this).css({
                  "border-color": "#222",
                  "font-weight": 700,
                  "background-color": "#c1c1c1",
              });
              if (submt) {
                  submt = false;
                  $("#submitbutton")
                      .css({ color: "#000" })
                      .on("click", function () {
                          $(".choice").off("click");
                          $(this).off("click");
                          processQuestion(picked);
                          if (currentquestion === quiz.length) {
                              showResults();
                          }
                      });
              }
          });
      }
  
      function showResults() {
          $("#submitbutton").remove();
          $("#question").text(
              "You got " + score + " out of " + quiz.length + " correct."
          );
          $(document.createElement("h2"))
              .css({ "text-align": "center", "font-size": "4em" })
              .text(Math.round((score / quiz.length) * 100) + "%")
              .insertAfter("#question");
  
          $(document.createElement("div"))
              .addClass("choice-box")
              .attr("id", "retrybutton")
              .text("Coba Lagi")
              .css({ "font-weight": 700, color: "#222", padding: "30px 0", "background-color": "#D04848" })
              .on("click", function () {
                  restartQuiz();
              })
              .appendTo("#frame");
      }
  
      function endQuiz() {
          $("#explanation").empty();
          $("#question").empty();
          $("#choice-block").empty();
          $("#submitbutton").remove();
          showResults();
      }
  
      function init() {
          if (typeof quiztitle !== "undefined" && $.type(quiztitle) === "string") {
              $(document.createElement("h1")).text(quiztitle).appendTo("#frame");
          } else {
              $(document.createElement("h1")).text("Quiz").appendTo("#frame");
          }
  
          if (typeof quiz !== "undefined" && $.type(quiz) === "array") {
              $(document.createElement("p"))
                  .addClass("pager")
                  .attr("id", "pager")
                  .text("Question 1 of " + quiz.length)
                  .appendTo("#frame");
  
              $(document.createElement("h2"))
                  .addClass("question")
                  .attr("id", "question")
                  .text(quiz[0]["question"])
                  .appendTo("#frame");
  
              if (quiz[0].hasOwnProperty("image") && quiz[0]["image"] !== "") {
                  $(document.createElement("img"))
                      .addClass("question-image")
                      .attr("id", "question-image")
                      .attr("src", quiz[0]["image"])
                      .attr("alt", htmlEncode(quiz[0]["question"]))
                      .appendTo("#frame");
              }
  
              $(document.createElement("p"))
                  .addClass("explanation")
                  .attr("id", "explanation")
                  .html("&nbsp;")
                  .appendTo("#frame");
  
              $(document.createElement("ul"))
                  .attr("id", "choice-block")
                  .appendTo("#frame");
  
              addChoices(quiz[0]["choices"]);
  
              $(document.createElement("div"))
                  .addClass("choice-box")
                  .attr("id", "submitbutton")
                  .text("Check Answer")
                  .css({ "font-weight": 700, color: "#222", padding: "30px 0" })
                  .appendTo("#frame");
  
              setupButtons();
          }
      }
  
      init();
  });
  
