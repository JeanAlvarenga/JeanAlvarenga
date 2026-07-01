const translations = {};

document.addEventListener("DOMContentLoaded", function () {
  const language = localStorage.getItem("language") || "pt";
  const switchElement = document.getElementById("languageSwitch");

  if (switchElement) {
    switchElement.checked = language === "en";
  }

  carregarTextos(language);
});

function setText(id, value) {
  const element = document.getElementById(id);
  if (element && value !== undefined) {
    element.innerText = value;
  }
}

function setPlaceholder(id, value) {
  const element = document.getElementById(id);
  if (element && value !== undefined) {
    element.placeholder = value;
  }
}

function trocarLingua() {
  const switchElement = document.getElementById("languageSwitch");
  const language = switchElement && switchElement.checked ? "en" : "pt";

  localStorage.setItem("language", language);
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
      translations.pt = data.pt;
      translations.en = data.en;

      const text = data[language] || data.pt;
      document.documentElement.lang = language === "en" ? "en" : "pt-BR";
      document.title = text.titulo;
      setText("title", text.titulo);

      setText("page_home", text.pageHome);
      setText("page_about", text.pageAbout);
      setText("page_projects", text.pageProjects);
      setText("page_contact", text.pageContact);
      setText("page_home-1", text.pageHome);
      setText("page_about-1", text.pageAbout);
      setText("page_projects-1", text.pageProjects);
      setText("page_contact-1", text.pageContact);

      setText("text_hello", text.textHello);
      setText("text_automation", text.textAutomation);
      setText("text_enginner", text.textEnginner);
      setText("text_description", text.textDescription);
      setText("about-me", text.textAboutMe);
      setText("text-desc-about", text.textDescAbout);

      setText("text-my", text.textMy);
      setText("text-projects", text.textProjects);
      setText("getDownloadURL", text.textDownload);
      document.querySelectorAll("[data-project-link]").forEach(element => {
        element.innerText = text.projectLinkText;
      });

      setText("txtWebsite", text.txtWebsite);
      setText("txtHomeAutomation", text.txtHomeAutomation);
      setText("txtAppHomeAutomation", text.txtAppHomeAutomation);
      setText("txtPCBAutomation", text.txtPCBAutomation);
      setText("txtWebsiteDesc", text.txtWebsiteDesc);
      setText("txtHomeAutomationDesc", text.txtHomeAutomationDesc);
      setText("txtAppHomeAutomationDesc", text.txtAppHomeAutomationDesc);
      setText("txtPCBAutomationDesc", text.txtPCBAutomationDesc);

      setText("txt-eletrical-panel", text.txtEletricPanel);
      setText("txtEletricalPanelDesc", text.txtEletricPanelDesc);
      setText("txtTcc", text.txtTcc);
      setText("txtTccDesc", text.txtTccDesc);
      setText("txtControlLevel", text.txtControlLevel);
      setText("txtControlLevelDesc", text.txtControlLevelDesc);
      setText("txtControlPosition", text.txtControlPosition);
      setText("txtControlPositionDesc", text.txtControlPositionDesc);
      setText("txtTubeAmplifier", text.txtTubeAmplifier);
      setText("txtTubeAmplifierDesc", text.txtTubeAmplifierDesc);
      setText("txtJavaProject", text.txtJavaProject);
      setText("txtJavaProjectDesc", text.txtJavaProjectDesc);

      setText("m-p", text.txtmp);
      setText("s-ja", text.txtsja);
      setText("p-a", text.txtpa);
      setText("p-b", text.txtpb);

      setText("contact-title", text.contactTitle);
      setPlaceholder("contact-name", text.contactName);
      setPlaceholder("contact-email", text.contactEmail);
      setPlaceholder("contact-phone", text.contactPhone);
      setPlaceholder("contact-message", text.contactMessage);
      setText("contact-send", text.contactSend);
    })
    .catch(error => console.error("Erro ao carregar textos:", error));
}
