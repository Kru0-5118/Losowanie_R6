const operators = {
    atk: [
        "Striker", "Sledge", "Thatcher", "Ash", "Thermite", "Twitch", "Montagne", "Glaz", "Fuze", "Blitz", "IQ",
        "Buck", "Blackbeard", "Capitão", "Hibana", "Jackal", "Ying", "Zofia", "Dokkaebi", "Lion", "Finka",
        "Maverick", "Nomad", "Gridlock", "Nøkk", "Amaru", "Kali", "Iana", "Ace", "Zero", "Flores", 
        "Osa", "Sens", "Grim", "Brava", "Ram", "Deimos", "Rauora"
    ],
    def: [
        "Sentry", "Smoke", "Mute", "Castle", "Pulse", "Doc", "Rook", "Kapkan", "Tachanka", "Jäger", "Bandit",
        "Frost", "Valkyrie", "Caveira", "Echo", "Mira", "Lesion", "Ela", "Vigil", "Maestro", "Alibi",
        "Clash", "Kaid", "Mozzie", "Warden", "Goyo", "Wamai", "Oryx", "Melusi", "Aruni", "Thunderbird",
        "Thorn", "Azami", "Solis", "Fenrir", "Tubarão", "Skopós", "Denari"
    ]
};

// Map operator names to filenames
const operatorFileMap = {
    "Capitão": "capitao",
    "Nøkk": "nokk",
    "Jäger": "jager",
    "Tubarão": "tubarao",
    "Skopós": "skopos",
};

function getOperatorFileName(opName) {
    if (operatorFileMap[opName]) {
        return operatorFileMap[opName];
    }
    return opName.toLowerCase();
}

let currentSide = 'atk';

function setSide(side, btn) {
    currentSide = side;
    document.querySelectorAll('.btn-side').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
}

function rollOperator() {
    const display = document.getElementById('operator-display');
    const nameLabel = document.getElementById('op-name');
    const iconImg = document.getElementById('op-icon');
    const ops = operators[currentSide];

    // Efekt losowania (glitch)
    display.classList.add('glitch');

    let counter = 0;
    const interval = setInterval(() => {
        const randomOp = ops[Math.floor(Math.random() * ops.length)];
        nameLabel.innerText = randomOp.toUpperCase();
        const fileName = 'Icons/' + getOperatorFileName(randomOp) + '.png?t=' + Date.now();
        iconImg.src = fileName;
        counter++;

        if (counter > 15) {
            clearInterval(interval);
            display.classList.remove('glitch');
            const finalOp = ops[Math.floor(Math.random() * ops.length)];
            nameLabel.innerText = finalOp.toUpperCase();
            iconImg.src = 'Icons/' + getOperatorFileName(finalOp) + '.png';
            nameLabel.style.color = currentSide === 'atk' ? '#00d4ff' : '#ff9900';
        }
    }, 50);
}
