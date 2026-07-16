const quizDiv = document.getElementById("quiz");
const letters = ["A","B","C","D"];

questions.forEach(item => {
  const qDiv = document.createElement("div");
  qDiv.className = "question";

  const left = document.createElement("div");
  left.className = "question-left";

  const title = document.createElement("h3");
  title.innerHTML = item.q;

  const optionsDiv = document.createElement("div");
  optionsDiv.className = "options";

  const feedback = document.createElement("div");
  feedback.className = "feedback";

  item.options.forEach((opt, i) => {
    const btn = document.createElement("button");

    const letterBadge = document.createElement("span");
    letterBadge.textContent = letters[i];
    letterBadge.style.background = "#2563eb";
    letterBadge.style.color = "white";
    letterBadge.style.borderRadius = "6px";
    letterBadge.style.padding = "4px 8px";
    letterBadge.style.fontWeight = "bold";
    letterBadge.style.minWidth = "28px";
    letterBadge.style.textAlign = "center";

    const textSpan = document.createElement("span");
    textSpan.innerHTML = opt;

    btn.appendChild(letterBadge);
    btn.appendChild(textSpan);

    btn.onclick = () => {
      feedback.className = "feedback";
      if (i === item.answer) {
        feedback.textContent = "🎉 Correct!";
        feedback.classList.add("correct");
      } else {
        feedback.textContent = "❌ Try again!";
        feedback.classList.add("wrong");
      }
    };

    optionsDiv.appendChild(btn);
  });

  left.appendChild(title);
  left.appendChild(optionsDiv);
  left.appendChild(feedback);

  const right = document.createElement("div");
  right.className = "question-right";

  const videoBox = document.createElement("div");
  videoBox.className = "video-box";

  const iframe = document.createElement("iframe");
  iframe.src = item.video;
  iframe.allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture";
  iframe.allowFullscreen = true;

  videoBox.appendChild(iframe);
  right.appendChild(videoBox);

  qDiv.appendChild(left);
  qDiv.appendChild(right);
  quizDiv.appendChild(qDiv);
});