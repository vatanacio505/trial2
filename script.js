let words = [
    "ability","absence","academy","account","achieve","acquire","action","active","activity","actor",
"actual","adapt","addition","address","adjust","admit","adult","advance","advice","affair",
"affect","afford","afraid","agency","agenda","agent","agree","ahead","airline","airport",
"alarm","album","alert","alien","alive","allow","almost","alone","along","already",
"alter","always","amazing","amount","analysis","ancient","anger","angle","animal","annual",
"answer","anxiety","anyone","anywhere","apartment","apparent","appeal","appear","appoint","approach",
"approve","argue","arise","armed","around","arrange","arrival","article","artist","aspect",
"assist","assume","attack","attempt","attend","attitude","attract","auction","audience","author",
"average","avoid","award","aware","balance","barely","barrier","battle","beauty","become",
"before","begin","behavior","behind","belief","belong","benefit","beside","better","beyond",
"billion","biology","birthday","border","borrow","bother","bottle","bottom","brain","branch",
"brand","breath","brief","bright","bring","broad","broken","budget","burden","button",
"buyer","cable","calculate","campaign","cancel","cancer","candidate","capital","capture","career",
"careful","carrier","castle","casual","center","central","century","certain","chain","chairman",
"challenge","chamber","channel","chapter","charge","charity","choice","choose","circle","citizen",
"civil","claim","classic","climate","close","clothes","collect","college","combine","comfort",
"command","comment","commercial","commit","common","community","company","compare","compete","complain",
"complete","complex","concept","concern","concert","conduct","confirm","conflict","connect","consider",
"consist","constant","contact","contain","content","contest","context","control","convert","convince",
"corner","correct","council","count","counter","country","courage","course","court","cover",
"create","credit","crisis","critic","culture","current","custom","damage","danger","dealer",
"debate","decade","decide","declare","decline","decorate","decrease","defeat","defend","define",
"degree","delay","deliver","demand","depend","deposit","depth","describe","desert","design",
"desire","detail","detect","develop","device","devote","dialogue","difference","difficult","dinner",
"direct","disagree","disaster","discover","discuss","disease","display","distance","district","divide",
"doctor","document","domestic","double","drama","dream","driver","during","eager","early",
"earn","earth","easily","economic","education","effect","effort","either","election","element",
"embrace","emerge","emotion","employ","enable","encourage","enemy","energy","enforce","engage",
"engine","enhance","enjoy","enough","ensure","enter","entire","environment","episode","equal",
"equipment","escape","estate","estimate","ethics","evening","evidence","evolve","exact","example",
"exceed","exchange","excite","exclude","excuse","exercise","exhibit","exist","expand","expect",
"expense","experience","expert","explain","explore","express","extend","extent","external","extra",
"fabric","factor","failure","fairly","faith","family","famous","farmer","fashion","father",
"feature","federal","feeling","female","fiction","figure","final","finance","finding","finger",
"finish","fitness","flight","focus","follow","football","foreign","forget","formal","format",
"former","fortune","forward","foundation","freedom","friendship","function","future","gallery","garden",
"general","generate","gentle","genuine","global","government","graduate","grand","grant","grass",
"great","ground","growth","guard","guess","guest","guide","habit","handle","happen",
"harbor","hardly","health","hearing","heart","heaven","height","helpful","heritage","hidden",
"highway","himself","history","holiday","honest","honor","hospital","hotel","however","human",
"humor","hundred","hunger","hunter","husband","illegal","image","imagine","impact","improve",
"include","income","increase","indeed","indicate","industry","infant","inform","initial","injury",
"inside","insight","insist","inspire","install","instead","intense","interest","internal","invest",
"invite","involve","island","issue","itself","jacket","january","jewel","journal","journey",
"justice","keeper","kitchen","knowledge","language","largely","latter","launch","lawyer","leader",
"league","learn","leave","legal","lesson","letter","level","liberal","library","likely",
"limit","listen","little","living","local","locate","lonely","lovely","luxury","machine",
"magazine","maintain","major","manage","manner","manual","margin","market","marriage","master",
"matter","maybe","measure","medical","member","memory","mental","message","method","middle",
"might","military","million","minister","minor","minute","mirror","mobile","modern","moment",
"monitor","mostly","mother","motion","museum","mutual","myself","mystery","nation","native",
"nature","nearby","nearly","necessary","negative","network","neutral","normal","notice","novel",
"number","object","observe","obtain","obvious","occasion","occupy","occur","office","officer",
"official","often","online","option","orange","order","ordinary","organ","origin","other",
"outcome","outside","overall","owner","package","page","painful","panel","parent","partner",
"party","passage","patient","pattern","pause","peace","penalty","people","perfect","perform",
"period","permit","person","phase","phone","photo","phrase","physical","picture","piece",
"place","planet","plant","plastic","player","please","plenty","pocket","police","policy",
"popular","portion","position","positive","possible","power","practice","prepare","present","pressure",
"pretty","prevent","price","private","problem","process","produce","product","profile","profit",
"program","project","promise","promote","proper","protect","prove","provide","public","purpose",
"quality","quarter","question","quickly","quiet","quite","radio","raise","range","rapid",
"rather","reach","ready","realize","reason","receive","recent","record","reduce","reflect",
"reform","refuse","regard","region","regular","relate","release","remain","remember","remove",
"repair","repeat","replace","report","require","research","reserve","resolve","respect","respond",
"result","return","reveal","review","reward","rhythm","river","safety","salary","sample",
"satisfy","saving","school","science","season","second","secret","section","secure","security",
"select","senior","sense","series","serious","service","session","settle","several","shadow",
"share","sharp","sheet","shelter","shift","shine","shoulder","signal","silent","silver",
"simple","single","sister","situation","skill","small","smart","smile","smooth","social",
"society","soldier","solid","solution","solve","source","space","special","speech","spirit",
"sponsor","spread","spring","square","stable","staff","stage","standard","start","state",
"station","status","steady","steal","steel","stick","still","stock","stone","store",
"storm","story","strategy","street","strong","student","study","subject","success","sudden",
"suffer","summer","support","suppose","supply","surface","surprise","survey","system","table",
"talent","target","teacher","temper","tension","theory","therapy","therefore","thirty","though",
"threat","through","ticket","toward","travel","treat","trend","trial","trouble","trust",
"truth","unable","unique","united","unless","update","upon","upper","upset","urban",
"usual","vacation","valley","valuable","variety","vehicle","version","victim","victory","village",
"vision","visual","volume","waiting","wander","warmth","wealth","weather","wedding","weekend",
"welcome","western","whereas","whether","whisper","winner","winter","within","wonder","worker",
"world","writer","yellow","youth","zebra"
];

let maxAttempts = 5;
let attemptsLeft = maxAttempts;
let secretWord = words[Math.floor(Math.random() * words.length)];

console.log("Secret Word (for testing):", secretWord);

let guessInput = document.getElementById("guessInput");
let submitBtn = document.getElementById("submitBtn");
let restartBtn = document.getElementById("restartBtn");
let message = document.getElementById("message");
let attemptsDisplay = document.getElementById("attempts");
let hintDisplay = document.getElementById("hint");

let revealedLetters = new Array(secretWord.length).fill(false);

updateHint("");
updateAttempts();

submitBtn.addEventListener("click", checkGuess);

guessInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        checkGuess();
    }
});

function checkGuess() {

    let userGuess = guessInput.value.trim().toLowerCase();

    if (userGuess === "") {
        attemptsLeft--;
        showMessage("Incorrect guess. You have " + attemptsLeft + " attempts left. Try again!");
    }
    else if (userGuess === secretWord) {
        revealAllLetters();
        document.body.classList.add("win");
        showMessage("🎉 Congratulations! You guessed the secret word!");
        disableGame();
    }
    else {
        attemptsLeft--;
        revealMatchingLetters(userGuess);
        showMessage("Incorrect guess. You have " + attemptsLeft + " attempts left. Try again!");
    }

    updateHint();
    updateAttempts();

    if (attemptsLeft <= 0 && userGuess !== secretWord) {
        revealAllLetters();
        document.body.classList.add("lose");
        showMessage("❌ Game over! The secret word was '" + secretWord + "'.");
        disableGame();
    }

    guessInput.value = "";
}

function revealMatchingLetters(userGuess) {

    for (let i = 0; i < secretWord.length; i++) {

        if (userGuess.includes(secretWord[i])) {
            revealedLetters[i] = true;
        }
    }
}

function revealAllLetters() {
    for (let i = 0; i < revealedLetters.length; i++) {
        revealedLetters[i] = true;
    }
}

function updateHint() {

    let hint = "";

    for (let i = 0; i < secretWord.length; i++) {

        if (revealedLetters[i]) {
            hint += secretWord[i].toUpperCase();
        }
        else if (i === 0) {
        
            hint += secretWord[i].toUpperCase();
            revealedLetters[i] = true;
        }
        else {
            hint += "_";
        }
    }

    hintDisplay.textContent = "Hint: " + hint;
}

function updateAttempts() {
    attemptsDisplay.textContent = "Attempts Left: " + attemptsLeft;
}

function showMessage(msg) {
    message.textContent = msg;
}

function disableGame() {
    guessInput.disabled = true;
    submitBtn.disabled = true;
}

restartBtn.addEventListener("click", function() {

    attemptsLeft = maxAttempts;
    secretWord = words[Math.floor(Math.random() * words.length)];
    console.log("New Secret Word:", secretWord);

    revealedLetters = new Array(secretWord.length).fill(false);

    guessInput.disabled = false;
    submitBtn.disabled = false;
    guessInput.value = "";
    message.textContent = "";
    document.body.classList.remove("win", "lose");

    updateHint();
    updateAttempts();
});
