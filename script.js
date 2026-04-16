function goMessage() {
  window.location.href = "message.html";
}

document.addEventListener("DOMContentLoaded", () => {
  const typedMessage = document.getElementById("typedMessage");
  const partyStars = document.getElementById("partyStars");

  if (!typedMessage || !partyStars) return;

  const message = `Happy Birthday SHIMIIII ♡

Happy birthday, Shimi!

Today is your birthday!!!
I made a small gift for you, I hope you like it.  
It’s nothing big, but I wanted to make something just for you, something that feels a little bit like you.

You’re really special in a quiet, soft kind of way — the kind that stays in people’s hearts without even trying.  
There’s something about you that just makes everything feel lighter and a little more beautiful.

I hope today makes you smile a lot, even for the smallest reasons.  
You deserve to feel happy, loved, and surrounded by all the warmth in the world.

Thank you for being you, just the way you are.  
I’m really glad you exist.

Happy birthday again ♡  
I hope this year is kind to you in every way

with love always ♡`;

  typeText(typedMessage, message, 30);
  launchPartyStars(partyStars, 30);
});

function typeText(element, text, speed = 35) {
  let i = 0;
  element.classList.add("typing-cursor");

  function write() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      element.parentElement.scrollTop = element.parentElement.scrollHeight;
      setTimeout(write, speed);
    } else {
      element.classList.remove("typing-cursor");
    }
  }

  write();
}

function launchPartyStars(container, count = 24) {
  const symbols = ["★", "✦", "✧", "☆", "⋆"];

  for (let i = 0; i < count; i++) {
    const star = document.createElement("span");
    star.className = "party-star";
    star.textContent = symbols[Math.floor(Math.random() * symbols.length)];

    const startX = 50 + (Math.random() * 20 - 10);
    const startY = 55 + (Math.random() * 12 - 6);

    const moveX = `${Math.random() * 260 - 130}px`;
    const moveY = `${-(Math.random() * 180 + 30)}px`;

    star.style.left = `${startX}%`;
    star.style.top = `${startY}%`;
    star.style.setProperty("--x", moveX);
    star.style.setProperty("--y", moveY);
    star.style.animationDelay = `${Math.random() * 0.8}s`;

    container.appendChild(star);

    setTimeout(() => {
      star.remove();
    }, 2200);
  }
}