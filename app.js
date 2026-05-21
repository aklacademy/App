let content = [

    {

        contentType: "word",
        theme: "Work & jobs",
        listName: "Recruitment & Joining",
        items: [

            {
            id: 1,
            content: "hire",
            partOfSpeech: "verb",
            pronunciation: "HIRE",
            meaning: "To give someone a job.",
            synonyms: [
                "employ",
                "appoint"
            ],

            antonyms: [
                "fire",
                "dismiss"
            ],

            usage: [
                "The company plans to hire new staff.",
                "They hired him as a manager.",
                "She was hired after the interview."
            ],
            image: ""
    },
    
 {

            id: 2,
            content: "recruit",
            partOfSpeech: "verb",
            pronunciation: "re-KROOT",
            meaning: "To find and bring in new people for jobs.",
            synonyms: [
                "enlist",
                "sign up"
            ],

            antonyms: [
                "reject",
                "test"
            ],

            usage: [
                "The firm recruits graduates every year.",
                "They recruited five engineers.",
                "The army is recruiting soldiers."
            ],
            image: ""
        
    }
]
},

{ 

contentType: "word",
        theme: "Work & jobs",
        listName: "Roles & Tasks",
        items: [

            {
                id: 3,
            content: "shortlist",
            partOfSpeech: "verb",
            pronunciation: "SHORT-list",
            meaning: "To make a small list of the best candidates.",
            synonyms: [
                "lselect",
                "choose"
            ],

            antonyms: [],

            usage: [
                "She was shortlisted for the job.",
                "The HR team shortlisted ten people.",
                "Three names were shortlisted for the prize."
            ],
            image: ""
        
 

            }
        ]

}

];

let currentList = 0;

let currentWord  = 0;

let selectedContentType = "";

let selectedMode = "";

let selectedTheme = "";

let selectedList = "";


function displayWord() {
    let currentItem =   
    content[currentList].items[currentWord];

document.getElementById("word").innerHTML = currentItem.content;

document.getElementById("partOfSpeech").innerHTML = currentItem.partOfSpeech;

document.getElementById("pronunciation").innerHTML = currentItem.pronunciation;

document.getElementById("definition").innerHTML = currentItem.meaning;

document.getElementById("relatedWords").innerHTML = currentItem.synonyms;

document.getElementById("oppositeWords").innerHTML = currentItem.antonyms;

let usageText = "<div class='usage-item'>";

for (let i = 0; i < currentItem.usage.length; i++) {

    usageText = 
     usageText + 
     currentItem.usage[i] + 
     "</div><div class='usage-item'>";
}

document.getElementById("usage").innerHTML = usageText;

document.getElementById("image").src = currentItem.image;

document.querySelector(".progress-text").innerHTML =

(currentWord + 1) +

" / " +

content[currentList].items.length +

" words";

let progressPercent =

((currentWord + 1) /

content[currentList].items.length) * 100;

document.querySelector(".progress-fill").style.width =
progressPercent + "%";

}

function openLearnPage(listName) {

    selectedList = listName;

    for (let i = 0; i < content.length; i++) {

        if (content[i].listName == selectedList) {

            currentList = i;
    }
    }

    currentWord = 0;

    displayWord();

    document.getElementById("learnTitle").innerHTML =

    selectedContentType + " → " + 
    
    selectedMode +

    " → " + 
    selectedTheme +

    " → " +
    
    selectedList;


    document.getElementById("listPage").style.display =
    "none";

    document.getElementById("learnPage").style.display =
    "block";

}

displayWord()


function openModePage(contentType) {

    selectedContentType = contentType;

    document.getElementById("homePage").style.display =
    "none";

    document.getElementById("modePage").style.display = 
    "block";

}

function goHome() {

    document.getElementById("modePage").style.display = 
    "none";
    document.getElementById("themePage").style.display = 
    "none";
    document.getElementById("listPage").style.display =
    "none";
    document.getElementById("learnPage").style.display =
    "none";
    document.getElementById("homePage").style.display =
    "block";
}

function goToModePage(){

    document.getElementById("themePage").style.display =
    "none";

    document.getElementById("modePage").style.display =
    "block";
}

function goToThemePage() {

    document.getElementById("listPage").style.display = 
    "none";

    document.getElementById("themePage").style.display =
    "block";
}

function goToListPage() {

    document.getElementById("learnPage").style.display =
    "none";

    document.getElementById("listPage").style.display =
    "block";
}

function openThemePage(mode) {

    selectedMode = mode;

    document.getElementById("themeTitle").innerHTML =

    selectedContentType + " → " + selectedMode;

    document.getElementById("modePage").style.display =
    "none";

    document.getElementById("themePage").style.display = 
    "block";

}

function displayThemes() {

    let themeContainer = 

    document.getElementById("themeContainer");
    themeContainer.innerHTML = "";
    let themes = [];
    for (let i = 0; i <content.length; i++) {

        let currentTheme = content[i].theme;
         if (themes.includes(currentTheme) == false) {

            themes.push(currentTheme);
         }
    }
    console.log(themes);

    for (let i = 0; i < themes.length; i++) {

        let currentTheme = themes[i];

        let buttonHTML =

        '<button class="nav-button" onclick="openListPage(\'' +

        currentTheme +

        '\')">' +

        currentTheme +

        '</button>';

        themeContainer.innerHTML += buttonHTML;

    }
}

displayThemes()

function openListPage(theme) {

    selectedTheme = theme;

    document.getElementById("listTitle").innerHTML = 

    selectedContentType + " → " + 
    
    selectedMode +

    " → " +
    selectedTheme;
    
    displayLists();

    document.getElementById("themePage").style.display =
    "none";
    
    document.getElementById("listPage").style.display = 
    "block";
}


function displayLists() {

    let listContainer = 

    document.getElementById("listContainer");

    listContainer.innerHTML = "";

    let lists = [];

    for (let i = 0; i < content.length; i++) {

        if (content[i].theme == selectedTheme) {

            let currentList = content[i].listName;

            if (lists.includes(currentList) == false) {

                lists.push(currentList);

            }

        }

    }

    console.log(lists);

    for (let i = 0; i < lists.length; i++) {

    let currentList = lists[i];

    let buttonHTML =

    '<button class="nav-button" onclick="openLearnPage(\'' +

    currentList +

    '\')">' +

    currentList +

    '</button>';

    listContainer.innerHTML += buttonHTML;

    }   
}  


function nextWord() {

    if (
        currentWord <
        content[currentList].items.length - 1
    ) {

        currentWord++;

        displayWord();
    } else {
        alert("Lesson Complete!");
    }
}



function previousWord() {

    if (currentWord > 0) {

        currentWord--;

        displayWord();

    }
}

function restartLesson() {

    currentWord = 0;

    displayWord();
}

