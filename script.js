// ==========================================
// NOVATOOLS AI - MAIN JAVASCRIPT
// ==========================================

const modal = document.getElementById("toolModal");
const toolContent = document.getElementById("toolContent");


// ==========================================
// OPEN TOOL
// ==========================================

function openTool(tool) {

    modal.style.display = "flex";

    // WORD COUNTER
    if (tool === "wordCounter") {

        toolContent.innerHTML = `
            <div class="tool">

                <h2>✍️ Word Counter</h2>

                <p class="tool-description">
                    Count words, characters and estimated reading time.
                </p>

                <textarea
                    id="counterText"
                    placeholder="Type or paste your text here..."
                    oninput="updateCounter()"
                ></textarea>

                <div class="counter-stats">
                    <span id="wordCount">0 words</span>
                    <span id="characterCount">0 characters</span>
                    <span id="readingTime">0 min read</span>
                </div>

            </div>
        `;

        return;
    }


    // CASE CONVERTER
    if (tool === "caseConverter") {

        toolContent.innerHTML = `
            <div class="tool">

                <h2>🔤 Case Converter</h2>

                <p class="tool-description">
                    Convert your text into different cases.
                </p>

                <textarea
                    id="caseText"
                    placeholder="Enter your text..."
                ></textarea>

                <div class="case-buttons">

                    <button
                        class="tool-action"
                        onclick="convertCase('upper')">
                        UPPERCASE
                    </button>

                    <button
                        class="tool-action"
                        onclick="convertCase('lower')">
                        lowercase
                    </button>

                    <button
                        class="tool-action"
                        onclick="convertCase('title')">
                        Title Case
                    </button>

                    <button
                        class="tool-action"
                        onclick="convertCase('sentence')">
                        Sentence case
                    </button>

                </div>

                <div
                    class="result"
                    id="caseResult">
                </div>

            </div>
        `;

        return;
    }


    // TEXT CLEANER
    if (tool === "textCleaner") {

        toolContent.innerHTML = `
            <div class="tool">

                <h2>🧹 Text Cleaner</h2>

                <p class="tool-description">
                    Remove unnecessary spaces and clean your text.
                </p>

                <textarea
                    id="cleanText"
                    placeholder="Paste your text here..."
                ></textarea>

                <button
                    class="tool-action"
                    onclick="cleanText()">
                    Clean Text
                </button>

                <div
                    class="result"
                    id="cleanResult">
                </div>

            </div>
        `;

        return;
    }


    // KEYWORD EXTRACTOR
    if (tool === "keywordExtractor") {

        toolContent.innerHTML = `
            <div class="tool">

                <h2>🔎 Keyword Extractor</h2>

                <p class="tool-description">
                    Find the most frequently used keywords.
                </p>

                <textarea
                    id="keywordText"
                    placeholder="Paste an article or paragraph..."
                ></textarea>

                <button
                    class="tool-action"
                    onclick="extractKeywords()">
                    Extract Keywords
                </button>

                <div
                    class="result"
                    id="keywordResult">
                </div>

            </div>
        `;

        return;
    }


    // PROMPT BUILDER
    if (tool === "promptBuilder") {

        toolContent.innerHTML = `
            <div class="tool">

                <h2>⚡ Prompt Builder</h2>

                <p class="tool-description">
                    Create a structured prompt for AI tools.
                </p>

                <label>
                    What do you want the AI to do?
                </label>

                <input
                    id="promptGoal"
                    type="text"
                    placeholder="Example: Write a blog about fitness"
                >

                <label>
                    Target audience
                </label>

                <input
                    id="promptAudience"
                    type="text"
                    placeholder="Example: Beginners"
                >

                <label>
                    Tone
                </label>

                <select id="promptTone">
                    <option>Professional</option>
                    <option>Friendly</option>
                    <option>Simple</option>
                    <option>Persuasive</option>
                    <option>Creative</option>
                </select>

                <button
                    class="tool-action"
                    onclick="buildPrompt()">
                    Build Prompt
                </button>

                <div
                    class="result"
                    id="promptResult">
                </div>

            </div>
        `;

        return;
    }


    // EMAIL BUILDER
    if (tool === "emailBuilder") {

        toolContent.innerHTML = `
            <div class="tool">

                <h2>✉️ Email Draft Builder</h2>

                <p class="tool-description">
                    Create a professional email from simple details.
                </p>

                <label>
                    Email purpose
                </label>

                <input
                    id="emailPurpose"
                    type="text"
                    placeholder="Example: Request a meeting"
                >

                <label>
                    Recipient
                </label>

                <input
                    id="emailRecipient"
                    type="text"
                    placeholder="Example: Project Manager"
                >

                <label>
                    Important details
                </label>

                <textarea
                    id="emailDetails"
                    placeholder="Write the important information..."
                ></textarea>

                <button
                    class="tool-action"
                    onclick="buildEmail()">
                    Create Email
                </button>

                <div
                    class="result"
                    id="emailResult">
                </div>

            </div>
        `;

        return;
    }
}


// ==========================================
// CLOSE TOOL
// ==========================================

function closeTool() {
    modal.style.display = "none";
}


// Close modal when clicking outside

if (modal) {

    modal.addEventListener("click", function (event) {

        if (event.target === modal) {
            closeTool();
        }

    });

}


// ==========================================
// WORD COUNTER
// ==========================================

function updateCounter() {

    const textElement =
        document.getElementById("counterText");

    if (!textElement) return;

    const text = textElement.value;

    const trimmedText = text.trim();

    let words = 0;

    if (trimmedText.length > 0) {
        words = trimmedText.split(/\s+/).length;
    }

    const characters = text.length;

    let readingMinutes = 0;

    if (words > 0) {
        readingMinutes = Math.ceil(words / 200);
    }

    document.getElementById("wordCount").textContent =
        words + " words";

    document.getElementById("characterCount").textContent =
        characters + " characters";

    document.getElementById("readingTime").textContent =
        readingMinutes + " min read";
}


// ==========================================
// CASE CONVERTER
// ==========================================

function convertCase(type) {

    const textElement =
        document.getElementById("caseText");

    if (!textElement) return;

    const text = textElement.value;

    let result = text;


    // UPPERCASE
    if (type === "upper") {

        result = text.toUpperCase();

    }


    // lowercase
    else if (type === "lower") {

        result = text.toLowerCase();

    }


    // Title Case
    else if (type === "title") {

        result = text
            .toLowerCase()
            .replace(/\b\w/g, function (letter) {
                return letter.toUpperCase();
            });

    }


    // Sentence case
    else if (type === "sentence") {

        result = text
            .toLowerCase()
            .replace(
                /(^\s*\w|[.!?]\s+\w)/g,
                function (letter) {
                    return letter.toUpperCase();
                }
            );

    }


    const resultElement =
        document.getElementById("caseResult");

    if (resultElement) {
        resultElement.textContent = result;
    }
}


// ==========================================
// TEXT CLEANER
// ==========================================

function cleanText() {

    const textElement =
        document.getElementById("cleanText");

    if (!textElement) return;

    let text = textElement.value;


    // Remove extra spaces
    text = text.replace(/[ \t]+/g, " ");


    // Clean empty lines
    text = text.replace(/\n\s*\n\s*/g, "\n\n");


    // Remove spaces at beginning/end
    text = text.trim();


    const resultElement =
        document.getElementById("cleanResult");

    if (resultElement) {
        resultElement.textContent = text;
    }
}


// ==========================================
// KEYWORD EXTRACTOR
// ==========================================

function extractKeywords() {

    const textElement =
        document.getElementById("keywordText");

    if (!textElement) return;

    const text = textElement.value.toLowerCase();


    const stopWords = new Set([

        "the",
        "a",
        "an",
        "and",
        "or",
        "but",
        "for",
        "to",
        "of",
        "in",
        "on",
        "with",
        "is",
        "are",
        "was",
        "were",
        "be",
        "this",
        "that",
        "from",
        "by",
        "as",
        "at",
        "it",
        "its",
        "into",
        "about",
        "your",
        "you",
        "i",
        "we",
        "they",
        "he",
        "she",
        "their",
        "our",
        "has",
        "have",
        "had",
        "will",
        "can",
        "not",
        "also",
        "than",
        "then",
        "them",
        "these",
        "those"

    ]);


    const words = text
        .replace(/[^a-z0-9\s]/g, " ")
        .split(/\s+/)
        .filter(function (word) {

            return (
                word.length > 3 &&
                !stopWords.has(word)
            );

        });


    const frequency = {};


    words.forEach(function (word) {

        if (frequency[word]) {

            frequency[word]++;

        } else {

            frequency[word] = 1;

        }

    });


    const results = Object.entries(frequency)
        .sort(function (a, b) {
            return b[1] - a[1];
        })
        .slice(0, 15);


    const resultElement =
        document.getElementById("keywordResult");


    if (results.length === 0) {

        resultElement.textContent =
            "No keywords found.";

        return;
    }


    let output = "";


    results.forEach(function (item, index) {

        output +=
            (index + 1) +
            ". " +
            item[0] +
            " — " +
            item[1] +
            " times\n";

    });


    resultElement.textContent =
        output.trim();
}


// ==========================================
// PROMPT BUILDER
// ==========================================

function buildPrompt() {

    const goal =
        document.getElementById("promptGoal").value.trim();

    const audience =
        document.getElementById("promptAudience").value.trim();

    const tone =
        document.getElementById("promptTone").value;


    const finalPrompt = `
Act as an expert assistant.

TASK:
${goal || "Complete the requested task professionally."}

TARGET AUDIENCE:
${audience || "General audience"}

TONE:
${tone}

REQUIREMENTS:
- Give a clear and useful answer.
- Organize the response properly.
- Use headings where appropriate.
- Include practical examples when useful.
- Do not invent facts.
- Keep the language easy to understand.
- Provide a polished, ready-to-use result.
`;


    const resultElement =
        document.getElementById("promptResult");

    resultElement.textContent =
        finalPrompt.trim();
}


// ==========================================
// EMAIL BUILDER
// ==========================================

function buildEmail() {

    const purpose =
        document.getElementById("emailPurpose")
            .value
            .trim();

    const recipient =
        document.getElementById("emailRecipient")
            .value
            .trim();

    const details =
        document.getElementById("emailDetails")
            .value
            .trim();


    const email = `
Subject: ${purpose || "Quick Request"}

Hi ${recipient || "there"},

I am writing regarding ${
        purpose || "a quick request"
    }.

${
        details ||
        "I would appreciate your help with this matter."
    }

Please let me know if you need any additional information.

Thank you for your time.

Best regards,
[Your Name]
`;


    const resultElement =
        document.getElementById("emailResult");

    resultElement.textContent =
        email.trim();
}


// ==========================================
// SEARCH TOOLS
// ==========================================

function searchTools() {

    const input =
        document.getElementById("searchInput");

    if (!input) return;

    const query =
        input.value.toLowerCase().trim();


    const cards =
        document.querySelectorAll(".tool-card");


    cards.forEach(function (card) {

        const name =
            card.dataset.name.toLowerCase();


        if (name.includes(query)) {

            card.style.display = "";

        } else {

            card.style.display = "none";

        }

    });
}


// ==========================================
// ESC KEY CLOSE MODAL
// ==========================================

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        closeTool();

    }

});