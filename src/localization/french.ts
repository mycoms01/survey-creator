import { editorLocalization } from "../editorLocalization";

var frenchTranslation = {
    //Strings in Editor
    "ed": {
        "survey": "Questionnaire",
        "editSurvey": "Éditer le questionnaire",
        "addNewPage": "Ajouter une page",
        "deletePage": "Supprimer une page",
        "editPage": "Éditer une page",
        "newPageName": "page",
        "newQuestionName": "question",
        "newPanelName": "panneau",
        "testSurvey": "Tester le questionnaire",
        "testSurveyAgain": "Tester à nouveau le questionnaire",
        "testSurveyWidth": "Largeur du questionnaire : ",
        "embedSurvey": "Intégrer le questionnaire",
        "saveSurvey": "Sauvegarder le questionnaire",
        "designer": "Éditeur de questionnaire",
        "jsonEditor": "Éditer JSON",
        "undo": "Annuler",
        "redo": "Rétablir",
        "options": "Options",
        "generateValidJSON": "Générer un JSON valide",
        "generateReadableJSON": "Générer un JSON lisible",
        "toolbox": "Boîte à outils",
        "delSelObject": "Supprimer l'objet sélectionné",
        "editSelObject": "Éditer l'objet sélectionné",
        "correctJSON": "SVP corriger le JSON",
        "surveyResults": "Résultat du questionnaire : ",
        "modified": "Modifié",
        "saving": "Sauvegarde en cours",
        "saved": "Sauvegardé"
    },
    //Embed window
    "ew": {
        "angular": "Utiliser la version Angular",
        "jquery": "Utiliser la version jQuery",
        "knockout": "Utiliser la version Knockout",
        "react": "Utiliser la version React",
        "vue": "Utiliser la version Vue",
        "bootstrap": "Pour le framework Bootstrap",
        "standard": "Sans Bootstrap",
        "showOnPage": "Afficher le questionnaire dans une page",
        "showInWindow": "Afficher le questionnaire dans une fenêtre",
        "loadFromServer": "Charger le JSON du questionnaire depuis un serveur",
        "titleScript": "Scripts et styles",
        "titleHtml": "HTML",
        "titleJavaScript": "JavaScript"
    },
    //Operators
    "op": {
        "empty": "est vide",
        "notempty": "n'est pas vide",
        "equal": "égal",
        "notequal": "n'est pas égal",
        "contains": "contient",
        "notcontains": "ne contient pas",
        "greater": "supérieur",
        "less": "inférieur",
        "greaterorequal": "supérieur ou égal",
        "lessorequal": "inférieur ou égal"
    },
    //Survey
    "survey": {
        "edit": "Éditer",
        "dropQuestion": "Déposer votre question ici.",
        "copy": "Copier",
        "addToToolbox": "Ajouter à la boîte à outils",
        "deletePanel": "Supprimer le panneau",
        "deleteQuestion": "Supprimer la question",
        "convertTo": "Convertir en"
    },
    //Properties
    "p": {
        "name": "Nom",
        "title": {
            "name": "Titre",
            "title": "Laissez vide, si même texte que le \"Nom\""
        },
        "page_title": {
            "name": "titre",
            "title": "Titre de la page"
        },
        "addRowText": "Bouton ajouter une ligne",
        "cellType": "Type de cellule",
        "choices": "Choix",
        "choicesByUrl": "Choix par API",
        "choicesOrder": "Ordre des choix",
        "clearInvisibleValues": "Cacher les valeurs invisibles",
        "colCount": "Nombre de colonnes",
        "cols": "Colonnes",
        "columnColCount": "Nombre de colonnes",
        "columnMinWidth": "Largeur minimale des colonnes",
        "columns": "Colonnes",
        "commentText": "Description champ commentaire",
        "completeText": "Texte questionnaire finalisé",
        "completedHtml": "HTML questionnaire finalisé",
        "cookieName": "Nom du cookie",
        "edit": "Éditer",
        "focusFirstQuestionAutomatic": "Focus automatique sur la première question",
        "goNextPageAutomatic": "Aller à la page suivante automatiquement",
        "hasComment": "Champ commentaire ?",
        "hasOther": "Choix autre ?",
        "horizontalScroll": "Scroll horizontal",
        "imageHeight": "Hauteur de l'image",
        "imageWidth": "Largeur de l'image",
        "indent": "Indentation",
        "inputType": "Type de champ",
        "isAllRowRequired": "Toutes les lignes sont-elle obligatoires ?",
        "isRequired": "Obligatoire ?",
        "itemSize": "Nombre maximum de caractères",
        "items": "Items",
        "locale": "Langue",
        "maxRateDescription": "Description note maximum",
        "maxSize": "Taille maximum",
        "minRateDescription": "Description note minimum",
        "minRowCount": "Nombre de lignes minimal",
        "mode": "Mode d'affichage",
        "optionsCaption": "Texte par défaut",
        "otherErrorText": "Texte d'erreur champ \"autre\"",
        "otherText": {
            "name": "Text autre",
            "title": "Champ commentaire ou choix \"autre\""
        },
        "pageNextText": "Bouton page suivante",
        "pagePrevText": "Bouton page précédente",
        "placeHolder": "PlaceHolder (indice dans le champ)",
        "questionStartIndex": "Index de numérotation des questions",
        "questionTitleLocation": "Emplacement titre question",
        "questionTitleTemplate": {
            "name": "Template d'affichage des questions",
            "title": "Exemple: {no}) {title} {require}:"
        },
        "rateValues": "Barème",
        "removeRowText": "Bouton supprimer une ligne",
        "requiredText": "Texte pour les champs obligatoires",
        "rowCount": "Nombre de lignes",
        "rows": "Nombre de lignes",
        "sendResultOnPageNext": "Envoyer les résultats au changement de page",
        "showCompletedPage": "Voir la page formulaire complété ?",
        "showNavigationButtons": "Boutons de navigation",
        "showPageNumbers": "Numérotation des pages",
        "showPageTitles": "Titre des pages",
        "showPreview": "Voir la prévisualisation",
        "showProgressBar": "Barre de progression",
        "showQuestionNumbers": "Numérotation des questions",
        "showTitle": "Afficher le titre",
        "size": "Nombre maximum de caractères",
        "startWithNewLine": "Commencer avec une nouvelle ligne",
        "storeDataAsText": "Stocker les données comme du texte",
        "storeOthersAsComment": "Sauvegarder choix autre comme commentaire",
        "surveyId": "ID du questionnaire",
        "surveyPostId": "PostID questionnaire",
        "survey_title": {
            "name": "titre",
            "title": "Il sera affiché sur chaque page."
        },
        "triggers": "Déclencheurs",
        "validators": "Validateurs",
        "visibleIf": "Visible si ",
        "width": "Largeur"
    },
    "pe": {
        "apply": "Appliquer",
        "ok": "OK",
        "cancel": "Annuler",
        "reset": "Réinitialiser",
        "close": "Fermer",
        "delete": "Supprimer",
        "addNew": "Ajouter un nouveau",
        "removeAll": "Tout supprimer",
        "edit": "Éditer",
        "empty": "<vide>",
        "fastEntry": "Ajout rapide",
        "formEntry": "Ajout via formulaire",
        "testService": "Tester le service",
        "conditionSelectQuestion": "Sélectionner une question...",
        "conditionButtonAdd": "Ajouter",
        "conditionButtonReplace": "Remplacer",
        "conditionHelp": "Veuillez entrer une expression booléenne. Elle doit retourner Vrai(true) pour garder la question/page visible. Par exemple: {question1} = \"valeur1\" or ({question2} = 3 and {question3} < 5)",
        "expressionHelp": "Veuillez entrer une expression. Vous pouvez utiliser des accolades pour accéder aux valeurs des questions '{question1} + {question2}', '({prix}*{quantite}) * (100 - {remise})'",
        "aceEditorHelp": "Appuyer sur Ctrl + espace pour obtenir une aide pour la saisie d'expression",
        "aceEditorRowTitle": "Ligne courante",
        "aceEditorPanelTitle": "Panneau courant",
        "showMore": "Pour plus d'informations, veuillez vous référer à la documentation",
        "assistantTitle": "Questions disponibles :",
        "propertyIsEmpty": "Veuillez entrer une valeur pour la propriété",
        "value": "Valeur",
        "text": "Texte",
        "required": "Obligatoire ?",
        "columnEdit": "Éditer la colonne: {0}",
        "itemEdit": "Éditer l'item: {0}",
        "url": "URL",
        "path": "Chemin",
        "valueName": "Nom de la valeur",
        "titleName": "Nom du titre",
        "hasOther": "Contient un autre item",
        "otherText": "Autre item texte",
        "name": "Nom",
        "title": "Titre",
        "cellType": "Type de cellule",
        "colCount": "Nombre de colonnes",
        "choicesOrder": "Sélectionner l'ordre des choix",
        "visible": "Est visible ?",
        "isRequired": "Est obligatoire ?",
        "startWithNewLine": "Commencer avec une nouvelle ligne ?",
        "rows": "Nombre de lignes",
        "placeHolder": "PlaceHolder (indice dans le champ)",
        "showPreview": "L'aperçu d'image est-il affiché ?",
        "storeDataAsText": "Stocker le contenu du fichier dans le résultat JSON sous forme de texte",
        "maxSize": "Taille maximum du fichier en octets",
        "imageHeight": "Hauteur de l'image",
        "imageWidth": "Largeur de l'image",
        "rowCount": "Nombre de lignes",
        "addRowText": "Texte bouton \"Ajouter une ligne\"",
        "removeRowText": "Texte bouton \"Supprimer une ligne\"",
        "minRateDescription": "Description note minimum",
        "maxRateDescription": "Description note maximum",
        "inputType": "Type de champ",
        "optionsCaption": "Texte par défaut",
        "defaultValue": "Valeur par défaut",
        "surveyEditorTitle": "Éditer les préférences du questionnaire",
        "qEditorTitle": "Éditer la question: {0}",
        "showTitle": "Afficher/cacher le titre",
        "locale": "Langue par défaut",
        "mode": "Mode (édition/lecture seule)",
        "clearInvisibleValues": "Effacer les valeurs invisibles",
        "cookieName": "Nom du cookie (pour empêcher de compléter 2 fois le questionnaire localement)",
        "sendResultOnPageNext": "Envoyer les résultats au changement de page",
        "storeOthersAsComment": "Sauvegarder la valeur \"Autres\" dans un champ séparé",
        "showPageTitles": "Afficher les titres de pages",
        "showPageNumbers": "Afficher les numéros de pages",
        "pagePrevText": "Texte bouton page précédente",
        "pageNextText": "Texte bouton page suivante",
        "completeText": "Texte bouton terminer",
        "startSurveyText": "Texte bouton commencer",
        "showNavigationButtons": "Afficher les boutons de navigation (navigation par défaut)",
        "showPrevButton": "Afficher le bouton précédent (l'utilisateur pourra retourner sur la page précédente)",
        "firstPageIsStarted": "La première page du questionnaire est une page de démarrage.",
        "showCompletedPage": "Afficher la page \"terminé\" à la fin (completedHtml)",
        "goNextPageAutomatic": "Aller à la page suivante automatiquement pour toutes les questions",
        "showProgressBar": "Afficher la barre de progression",
        "questionTitleLocation": "Emplacement du titre de la question",
        "requiredText": "La question requiert un/des symbole(s)",
        "questionStartIndex": "Index de départ de la question (1, 2 ou 'A', 'a')",
        "showQuestionNumbers": "Afficher les numéros de questions",
        "questionTitleTemplate": "Gabarit du titre de question, par défaut : '{no}. {require} {title}'",
        "questionErrorLocation": "Emplacement de l'erreur",
        "focusFirstQuestionAutomatic": "Focus sur la première question au changement de page",
        "questionsOrder": "Ordre des éléments sur la page",
        "maxTimeToFinish": "Temps maximum pour terminer le questionnaire",
        "maxTimeToFinishPage": "Temps maximum pour terminer une page",
        "showTimerPanel": "Afficher le panneau chronomètre",
        "showTimerPanelMode": "Mode d'affichage du panneau chronomètre",
        "renderMode": "Mode de rendu",
        "allowAddPanel": "Autoriser l'ajout du panneau",
        "allowRemovePanel": "Autoriser la suppression du panneau",
        "panelAddText": "Ajouter un panneau texte",
        "panelRemoveText": "Supprimer le panneau texte",
        "isSinglePage": "Afficher tous les éléments sur une seule page",
        "tabs": {
            "general": "Général",
            "fileOptions": "Options",
            "html": "Éditeur HTML",
            "columns": "Colonnes",
            "rows": "Lignes",
            "choices": "Choix",
            "visibleIf": "Visible si",
            "enableIf": "Actif si",
            "rateValues": "Barème",
            "choicesByUrl": "Choix depuis API web",
            "matrixChoices": "Choix par défaut",
            "multipleTextItems": "Champs texte multiples",
            "validators": "Validateurs",
            "navigation": "Navigation",
            "question": "Question",
            "completedHtml": "HTML de fin",
            "loadingHtml": "HTML de chargement",
            "timer": "Chronomètre/Quiz",
            "triggers": "Déclencheurs",
            "templateTitle": "Titre de gabarit"
        },
        "editProperty": "Éditer la propriété \"{0}\"",
        "items": "[ Élements: {0} ]",
        "enterNewValue": "Veuillez saisir la valeur.",
        "noquestions": "Il n'y a aucune question dans le questionnaire.",
        "createtrigger": "Veuillez créer un déclencheur",
        "triggerOn": "Quand ",
        "triggerMakePagesVisible": "Rendre les pages visibles :",
        "triggerMakeQuestionsVisible": "Rendre les questions visibles :",
        "triggerCompleteText": "Terminer le questionnaire en cas de succès.",
        "triggerNotSet": "Le déclencheur n'est pas défini",
        "triggerRunIf": "Exécuter si",
        "triggerSetToName": "Changer la valeur de: ",
        "triggerSetValue": "à: ",
        "triggerIsVariable": "Ne placez pas la variable dans le résultat du questionnaire.",
        "verbChangePage": "Changer de page ",
        "verbChangeType": "Changer le type "
    },
    //questionTypes
    "qt": {
        "checkbox": "Cases à cocher",
        "comment": "Commentaire",
        "dropdown": "Liste déroulante",
        "file": "Fichier",
        "html": "HTML",
        "matrix": "Matrice (choix unique)",
        "matrixdropdown": "Matrice (choix multiples)",
        "matrixdynamic": "Matrice (lignes dynamiques)",
        "multipletext": "Champ multilignes",
        "panel": "Panneau",
        "paneldynamic": "Panneau (panneaux dynamiques)",
        "radiogroup": "Boutons radio",
        "rating": "Évaluation",
        "text": "Champ texte",
        "boolean": "Booléen",
        "expression": "Expression"
    },
    //property values
    "pv": {
        "true": "true",
        "false": "false",
        "ar": "العربية",
        "ca": "català",
        "cz": "čeština",
        "da": "dansk",
        "de": "deutsch",
        "en": "english",
        "es": "español",
        "fa": "فارْسِى",
        "fi": "suomalainen",
        "fr": "français",
        "gr": "ελληνικά",
        "he": "עברית",
        "hu": "magyar",
        "it": "italiano",
        "is": "íslenska",
        "ka": "ქართული",
        "lv": "latviešu",
        "nl": "hollandsk",
        "pl": "polski",
        "pt": "português",
        "ro": "română",
        "ru": "русский",
        "sv": "svenska",
        "tr": "türkçe",
        "zh-cn": "简体中文"
    },
    //test
    "ts": {
        "selectPage": "Sélectionner une page pour la tester"
    },
    //validators
    "validators": {
        "answercountvalidator": "total de réponses",
        "emailvalidator": "e-mail",
        "numericvalidator": "numérique",
        "regexvalidator": "regex",
        "textvalidator": "texte"
    },
    // triggers
    "triggers": {
        "completetrigger": "terminer le questionnaire",
        "setvaluetrigger": "définir la valeur",
        "visibletrigger": "modifier la visibilité"
    }
}

editorLocalization.locales["fr"] = frenchTranslation;
