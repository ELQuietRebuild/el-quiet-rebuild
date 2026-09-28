const viewDetailsButtons = document.querySelectorAll(".view-details");

viewDetailsButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const product = button.closest(".product");
    const productDetails = product.querySelector(".product-details");

    productDetails.classList.toggle("show");

    if (productDetails.classList.contains("show")) {
      button.textContent = "Hide Details";
    } else {
      button.textContent = "View Details";
    }
  });

  const contactForm = document.querySelector("#contact-form");
  const contactMessage = document.querySelector("#contact-message");

  contactForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const formData = new FormData(contactForm);

    try {
      const response = await fetch(contactForm.action, {
        method: contactForm.method,
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        contactForm.reset();
        contactMessage.textContent = "Thank you. Your message has been sent.";

        setTimeout(function () {
          contactMessage.textContent = "";
        }, 5000);
      } else {
        contactMessage.textContent = "Something went wrong. Please try again.";
      }
    } catch (error) {
      contactMessage.textContent = "Something went wrong. Please try again.";
    }
  });
});

// COMMUNICATION PRACTICE QUESTIONS

const practiceQuestion = document.querySelector("#practice-question");
const newPracticeQuestionButton = document.querySelector(
  "#new-practice-question",
);

const practiceQuestions = [
  "What is one belief or opinion you have changed your mind about, and what made you reconsider it?",
  "What is one decision you made recently, and what reasons influenced your decision?",
  "Someone misunderstands something you said. How would you explain your point differently?",
  "You disagree with an idea during a meeting. How would you explain your position clearly and respectfully?",
  "Someone strongly disagrees with your opinion. How would you respond while remaining respectful and clear?",
  "Think of something you understand well. How would you explain it simply to someone who knows nothing about it?",
  "You need help with something but usually struggle to ask. How would you clearly explain what you need and why?",
  "Someone asks for your opinion about their work. How would you give useful and respectful feedback?",
  "Someone asks you an unexpected question and you need a moment to organise your thoughts. How would you begin your response?",
  "Someone asks you to do something you cannot agree to. How would you communicate your decision clearly without over-explaining?",
];

let currentQuestionIndex = 0;

if (practiceQuestion && newPracticeQuestionButton) {
  newPracticeQuestionButton.addEventListener("click", function () {
    currentQuestionIndex++;

    if (currentQuestionIndex >= practiceQuestions.length) {
      currentQuestionIndex = 0;
    }

    practiceQuestion.textContent = `${currentQuestionIndex + 1}. ${practiceQuestions[currentQuestionIndex]}`;
  });
}

// CRITICAL THINKING PRACTICE QUESTIONS

const criticalThinkingQuestion = document.querySelector(
  "#critical-thinking-question",
);

const newCriticalThinkingQuestionButton = document.querySelector(
  "#new-critical-thinking-question",
);

const criticalThinkingQuestions = [
  "You see a popular social-media post giving financial advice. Thousands of people agree with it. What would you want to know before deciding whether the advice is reliable?",

  "Someone tells you, “A university degree is the only reliable path to a successful career.” What claim is being made, and what evidence would you look for before forming your position?",

  "A person you respect gives you strong relationship advice based entirely on their own experience. How would you separate their experience from evidence that might apply more broadly?",

  "You read two articles that reach different conclusions about the same subject. What would you examine before deciding which argument is better supported?",

  "You strongly agree with a statement the moment you hear it. What questions could you ask yourself before accepting it as true?",

  "Someone says, “This worked for me, so it will work for you.” What assumption might be hidden in that statement?",

  "You discover reliable information that challenges something you have believed for years. How would you examine the new information fairly without accepting or rejecting it immediately?",

  "A claim includes statistics that sound convincing. What would you want to know about where the numbers came from and what they actually measure?",

  "Two people look at the same situation and reach different conclusions. What information, experiences or assumptions might explain the difference?",

  "After researching an issue, you still find important information missing. What would be a reasonable conclusion to reach at that point?",
];

let currentCriticalThinkingIndex = 0;

if (criticalThinkingQuestion && newCriticalThinkingQuestionButton) {
  newCriticalThinkingQuestionButton.addEventListener("click", function () {
    currentCriticalThinkingIndex++;

    if (currentCriticalThinkingIndex >= criticalThinkingQuestions.length) {
      currentCriticalThinkingIndex = 0;
    }

    criticalThinkingQuestion.textContent = `${currentCriticalThinkingIndex + 1}. ${criticalThinkingQuestions[currentCriticalThinkingIndex]}`;
  });
}

// SELF-TRUST PRACTICE QUESTIONS

const selfTrustQuestion = document.querySelector("#self-trust-question");

const newSelfTrustQuestionButton = document.querySelector(
  "#new-self-trust-question",
);

const selfTrustQuestions = [
  "You have already thought carefully about a small decision, but you still feel tempted to ask several people what they think. What could you do before asking for more reassurance?",

  "Someone you respect disagrees with a decision you have made. What could you consider before deciding whether to change your decision?",

  "You made a decision that did not produce the result you expected. How could you learn from what happened without treating the mistake as proof that you cannot trust yourself?",

  "You are considering an opportunity but feel unsure because you have never done anything like it before. How could you separate what you genuinely need to learn from fear of trying something new?",

  "You keep comparing your progress with someone who appears more confident and experienced than you. What evidence from your own progress could you examine instead?",

  "You need to make a decision, but important information is genuinely missing. How could you seek useful advice without handing the entire decision over to someone else?",

  "You promised yourself that you would complete a small task, but you are tempted to keep postponing it. How could keeping this commitment contribute to your self-trust?",

  "You receive criticism after trying something new. How could you decide which part of the criticism is useful without allowing one person's opinion to define your capability?",

  "New information shows that a decision you made should probably be changed. Why might adjusting your decision be a sign of good judgment rather than evidence that you failed?",

  "You have considered the information available, asked the necessary questions and still cannot know exactly what will happen. What would it look like to make a thoughtful decision despite the remaining uncertainty?",
];

let currentSelfTrustIndex = 0;

if (selfTrustQuestion && newSelfTrustQuestionButton) {
  newSelfTrustQuestionButton.addEventListener("click", function () {
    currentSelfTrustIndex++;

    if (currentSelfTrustIndex >= selfTrustQuestions.length) {
      currentSelfTrustIndex = 0;
    }

    selfTrustQuestion.textContent = `${currentSelfTrustIndex + 1}. ${selfTrustQuestions[currentSelfTrustIndex]}`;
  });
}

// SELF-RESPECT, STANDARDS & BOUNDARIES PRACTICE QUESTIONS

const standardsBoundariesQuestion = document.querySelector(
  "#standards-boundaries-question",
);

const newStandardsBoundariesQuestionButton = document.querySelector(
  "#new-standards-boundaries-question",
);

const standardsBoundariesQuestions = [
  "Someone gives you respectful feedback that makes you uncomfortable. Before calling it a boundary issue, what would you examine about the situation and your reaction?",

  "You prefer something to be done a certain way, but another person does it differently without causing harm or disrespect. Is this an important standard, a personal preference, or something that may require compromise?",

  "Someone repeatedly asks you for something you do not have the time or capacity to give. You usually say yes because you are afraid they will be disappointed. What matters here, and what is within your control?",

  "You expect someone close to you to communicate respectfully during disagreements, but you notice that you sometimes become disrespectful when you are angry. What does your own standard require from you?",

  "You have always believed that a 'good woman' should behave in a particular way because that is what you were taught growing up. How could you examine whether this is still a standard you consciously choose for yourself?",

  "A friend disagrees with an important decision you have made. Their disagreement makes you uncomfortable, but they have not insulted or pressured you. Does this situation require a boundary, a conversation, or simply acceptance that you can disagree?",

  "You have clearly communicated that something is important to you, but the same situation continues repeatedly. What action is within your control if your words alone are not changing the situation?",

  "You are considering lowering an important standard because you are afraid of losing a relationship or opportunity. What would you want to examine before making that decision?",

  "Someone asks you to compromise. How would you decide whether the compromise is reasonable or whether you are repeatedly abandoning something that genuinely matters to you?",

  "Think of one standard you expect from the people in your life. What would practising that same principle consistently look like in your own behaviour?",
];

let currentStandardsBoundariesIndex = 0;

if (standardsBoundariesQuestion && newStandardsBoundariesQuestionButton) {
  newStandardsBoundariesQuestionButton.addEventListener("click", function () {
    currentStandardsBoundariesIndex++;

    if (
      currentStandardsBoundariesIndex >= standardsBoundariesQuestions.length
    ) {
      currentStandardsBoundariesIndex = 0;
    }

    standardsBoundariesQuestion.textContent = `${currentStandardsBoundariesIndex + 1}. ${
      standardsBoundariesQuestions[currentStandardsBoundariesIndex]
    }`;
  });
}

// =========================
// MOBILE HAMBURGER MENU
// =========================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.textContent = isOpen ? "✕" : "☰";
  });
}
