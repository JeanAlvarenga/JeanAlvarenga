document.addEventListener("DOMContentLoaded", function () {
    const language = localStorage.getItem("language") || "pt";
    const switchElement = document.getElementById("languageSwitch");

    // Define o estado inicial do switch
    switchElement.checked = language === "en";
    carregarTextos(language);
});

function trocarLingua() {
    const switchElement = document.getElementById("languageSwitch");
    const language = switchElement.checked ? "en" : "pt";

    // Salva a preferência no localStorage
    localStorage.setItem("language", language);

    // Carrega os textos da linguagem selecionada
    carregarTextos(language);
}

function carregarTextos(language) {
    fetch("texts.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro ao carregar o arquivo JSON");
            }
            return response.json();
        })
        .then(data => {
            document.getElementById("title").innerText = data[language].titulo;
            //document.getElementById("labelSwitch").innerText = data[language].labelSwitch;
            document.getElementById("page_home").innerText = data[language].pageHome;
            document.getElementById("page_about").innerText = data[language].pageAbout;
            document.getElementById("page_projects").innerText = data[language].pageProjects;
            document.getElementById("page_contact").innerText = data[language].pageContact;
            
            document.getElementById("about-me").innerText = data[language].textAboutMe;
            document.getElementById("text-desc-about").innerText = data[language].textDescAbout;

            document.getElementById("text-my").innerText = data[language].textMy;
            document.getElementById("text-projects").innerText = data[language].textProjects;
            document.getElementById("getDownloadURL").innerText = data[language].textDownload;

            document.getElementById("txtWebsite").innerText = data[language].txtWebsite;
            document.getElementById("txtHomeAutomation").innerText = data[language].txtHomeAutomation;
            document.getElementById("txtAppHomeAutomation").innerText = data[language].txtAppHomeAutomation;
            document.getElementById("txtPCBAutomation").innerText = data[language].txtPCBAutomation;
            document.getElementById("txtWebsiteDesc").innerText = data[language].txtWebsiteDesc;
            document.getElementById("txtHomeAutomationDesc").innerText = data[language].txtHomeAutomationDesc;
            document.getElementById("txtAppHomeAutomationDesc").innerText = data[language].txtAppHomeAutomationDesc;
            document.getElementById("txtPCBAutomationDesc").innerText = data[language].txtPCBAutomationDesc;

            document.getElementById("txt-eletrical-panel").innerText = data[language].txtEletricPanel;
            document.getElementById("txtEletricalPanelDesc").innerText = data[language].txtEletricPanelDesc;
            document.getElementById("txtTcc").innerText = data[language].txtTcc;
            document.getElementById("txtTccDesc").innerText = data[language].txtTccDesc;
            document.getElementById("txtControlLevel").innerText = data[language].txtControlLevel;
            document.getElementById("txtControlLevelDesc").innerText = data[language].txtControlLevelDesc;
            document.getElementById("txtControlPosition").innerText = data[language].txtControlPosition;
            document.getElementById("txtControlPositionDesc").innerText = data[language].txtControlPositionDesc;
            document.getElementById("txtTubeAmplifier").innerText = data[language].txtTubeAmplifier;
            document.getElementById("txtTubeAmplifierDesc").innerText = data[language].txtTubeAmplifierDesc;
            document.getElementById("txtJavaProject").innerText = data[language].txtJavaProject;
            document.getElementById("txtJavaProjectDesc").innerText = data[language].txtJavaProjectDesc;

            document.getElementById("m-p").innerText = data[language].txtmp;
            document.getElementById("s-ja").innerText = data[language].txtsja;
            document.getElementById("p-a").innerText = data[language].txtpa;
            document.getElementById("p-b").innerText = data[language].txtpb;
        })
        .catch(error => console.error("Erro ao carregar textos:", error));
        
}