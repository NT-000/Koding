function show1() {
    blankAll();
    document.getElementById('cardTools').innerHTML = /*html*/`
        <div class="innerCard">
        De to viktigste verktøyene vi skal bruke er disse:
            <ul>
                <li>
                    Koderedigeringsprogrammet <a href="https://code.visualstudio.com/">Visual Studio Code</a>
                    <br />Vi skal bruke noen <i>extensions</i>:
                    <ul>
                        <li>JavaScript-booster</li>
                        <li>es6-string-html</li>
                        <li>live-server</li>
                        <li>live-share</li>
                    </ul>
                </li>
                <li>Nettleseren <a href="https://www.google.com/intl/no/chrome/">Google Chrome</a></li>
            </ul>        
        </div>
    `;
}

function show2() {
    blankAll();
    document.getElementById('cardHtml').innerHTML = /*html*/`
    <div class="innerCard">

    Vi bruker HTML til å definere et dokument.
    <ul>
        <li>
            Tagger for grunnleggende oppsett av en HTML-fil
            <li>Tagger for grunnleggende formatering av tekst</li>
            
                <li>&ltdiv&gt</li>
                <li>&ltinput type="text"&gt</li>
            <li>&ltbutton&gt</li>
        </li>
        <a href="https://www.w3schools.com/html/default.asp"> W3Schools HTML Tutorial</a>

        <a href="https://www.w3schools.com/tags/default.asp"> W3Schools HTML Reference</a>
    </ul>
    </div>
    `;
}

function show3() {
    blankAll();
    document.getElementById('cardCSS').innerHTML = /*html*/`
    <div class="innerCard">
Vi bruker CSS til å style et dokument, altså farger, fonter, utseende og lignende.
    <ul>
        <li></li>
        background-color
    </li><li>
            color
        </li><li>
            padding
        </li><li>
            margin
        </li><li>
            border
        </li><li>
            text-align
        </li><li>
            font-size
        </li><li>
            <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">Flexbox</a>
        </li><li>
            <a href="https://css-tricks.com/snippets/css/complete-guide-grid/">Grid</a>
        </li><li>
            <a href="https://www.w3schools.com/css/default.asp">W3Schools CSS Tutorial</a>
        </li><li>
            <a href="https://www.w3schools.com/cssref/default.asp">W3Schools CSS Reference</a>
        </li>
    
</ul>
</div> `;}

function show4() {
    blankAll();
    document.getElementById('cardJS').innerHTML = /*html*/`
        <div class="innerCard">

        <ul>Det viktigste vi skal lære er programmeringsspråket JavaScript. Vi skal lære grunnleggende programmering ved å manipulere HTML- og CSS-kode på en nettside ved hjelp av JavaScript.
        
            <li>
                Det finnes en W3Schools JavaScript Tutorial, men her anbefaler vi heller å følge kurset vårt på Moodle.
            </li>
            <li>
                <a href="https://www.w3schools.com/jsref/default.asp">W3Schools JavaScript Reference</a>
            </li>

        </ul>
        </div>
        `;
        
}

function showGame() {
    blankAll();
    document.getElementById('cardGame').innerHTML = /*html*/`
    <div class="innerCard">
    <div id="head" class="bodyPart">
    <button onclick="selectHead3()">◀</button>
    <img src="Kroppsdeler/head4.png">
    <button onclick="selectHead1()">▶</button>
 </div>  

      <div id="body" class="bodyPart">
     <button onclick="selectBody2()">◀</button>
     <img src="Kroppsdeler/body3.png">
     <button onclick="selectBody4()">▶</button>
      </div>

 <div id="legs" class="bodyPart">
    <button onclick="selectLegs1()">◀</button>
        <img src="Kroppsdeler/legs2.png">
        <button onclick="selectLegs3()">▶</button>

    `;

}


function selectHead1() {
document.getElementById('head').innerHTML = /*HTML*/`
    <button onclick="selectHead4()">◀</button>
    <img src="Kroppsdeler/head1.png">
    <button onclick="selectHead2()">▶</button>
    `;
}

function selectHead2() {
    document.getElementById('head').innerHTML = /*HTML*/`
    <button onclick="selectHead1()">◀</button>
    <img src="Kroppsdeler/head2.png">
    <button onclick="selectHead3()">▶</button>
    `;
}

function selectHead3() {
    document.getElementById('head').innerHTML = /*HTML*/`
        <button onclick="selectHead2()">◀</button>
        <img src="Kroppsdeler/head3.png">
        <button onclick="selectHead4()">▶</button>
        `;
    }

    function selectHead4() {
        document.getElementById('head').innerHTML = /*HTML*/`
            <button onclick="selectHead3()">◀</button>
            <img src="Kroppsdeler/head4.png">
            <button onclick="selectHead1()">▶</button>
            `;
        }

        function selectBody1() {
            document.getElementById('body').innerHTML = /*HTML*/`
                <button onclick="selectBody4()">◀</button>
                <img src="Kroppsdeler/body1.png">
                <button onclick="selectBody2()">▶</button>
                `;
            }

            function selectBody2() {
                document.getElementById('body').innerHTML = /*HTML*/`
                    <button onclick="selectBody1()">◀</button>
                    <img src="Kroppsdeler/body2.png">
                    <button onclick="selectBody3()">▶</button>
            ;`}
            
            function selectBody3() {
                document.getElementById('body').innerHTML = /*HTML*/`
                    <button onclick="selectBody2()">◀</button>
                    <img src="Kroppsdeler/body3.png">
                    <button onclick="selectBody4()">▶</button>
            ;`}
            
            function selectBody4() {
                document.getElementById('body').innerHTML = /*HTML*/`
                    <button onclick="selectBody3()">◀</button>
                    <img src="Kroppsdeler/body4.png">
                    <button onclick="selectBody1()">▶</button>
            ;`}
            
            function selectLegs1() {
                document.getElementById('legs').innerHTML = /*HTML*/`
                <button onclick="selectLegs4()">◀</button>
                <img src="Kroppsdeler/legs1.png">
                <button onclick="selectLegs2()">▶</button>
                `;
            }

                function selectLegs2() {
                document.getElementById('legs').innerHTML = /*HTML*/`
                <button onclick="selectLegs1()">◀</button>
                <img src="Kroppsdeler/legs2.png">
                <button onclick="selectLegs3()">▶</button>
                `;
            }

                function selectLegs3() {
                document.getElementById('legs').innerHTML = /*HTML*/`
                <button onclick="selectLegs2()">◀</button>
                <img src="Kroppsdeler/legs3.png">
                <button onclick="selectLegs4()">▶</button>
                `;
            }

                function selectLegs4() {
                document.getElementById('legs').innerHTML = /*HTML*/`
                <button onclick="selectLegs3()">◀</button>
                <img src="Kroppsdeler/legs4.png">
                <button onclick="selectLegs1()">▶</button>
                `;
            }
function blankAll() {
    document.getElementById('cardTools').innerHTML = '';
    document.getElementById('cardCSS').innerHTML = '';
    document.getElementById('cardHtml').innerHTML = '';
    document.getElementById('cardJS').innerHTML = '';
    document.getElementById('cardGame').innerHTML = '';
}
            
 