(function() {
  if (typeof window.Alchemy === 'undefined') {
    window.Alchemy = {};
  }

  Alchemy.translations = {
    de: {
      allowed_chars: 'von %{count} Zeichen',
      cancel: 'Abbrechen',
      cancelled: 'Abgebrochen',
      click_to_edit: 'Klicken zum Bearbeiten',
      complete: 'Abgeschlossen',
      element_dirty_notice: 'Dieses Element hat nicht gespeicherte Änderungen. Möchten Sie es wirklich einklappen?',
      help: 'Hilfe',
      ok: 'Ok',
      page_dirty_notice: 'Sie haben ungesicherte Änderungen auf der Seite. Diese gehen verloren, wenn Sie fortfahren.',
      page_found: 'Seite gefunden',
      pages_found: 'Seiten gefunden',
      url_validation_failed: 'Die URL hat kein gültiges Format.',
      warning: 'Achtung!',
      'File is too large': 'Datei ist zu groß.',
      'File is too small': 'Datei ist zu klein.',
      'File type not allowed': 'Dateityp nicht erlaubt.',
      'Maximum number of files exceeded': 'Maximale Anzahl gleichzeitig erlaubter Datei-Uploads erreicht.',
      'Uploaded bytes exceed file size': 'Maximale Größe der erlaubten Dateigröße erreicht.',
      formats: {
        datetime: "d.m.Y H:i",
        date: "d.m.Y",
        time: "H:i",
        start_of_week: 1
      }
    },
    en: {
      allowed_chars: 'of %{count} chars',
      cancel: 'Cancel',
      cancelled: 'Cancelled',
      click_to_edit: 'click to edit',
      complete: 'Complete',
      element_dirty_notice: 'This element has unsaved changes. Do you really want to fold it?',
      help: 'Help',
      ok: 'Ok',
      page_dirty_notice: 'You have unsaved changes on this page. They will be lost if you continue.',
      page_found: 'Page found',
      pages_found: 'Pages found',
      url_validation_failed: 'The url has no valid format.',
      warning: 'Warning!',
      'File is too large': 'File is too large',
      'File is too small': 'File is too small',
      'File type not allowed': 'File type not allowed',
      'Maximum number of files exceeded': 'Maximum number of files exceeded.',
      'Uploaded bytes exceed file size': 'Uploaded bytes exceed file size',
      formats: {
        datetime: "Y-m-d H:i",
        date: "Y-m-d",
        time: "H:i",
        start_of_week: 0
      }
    },
    nl: {
      allowed_chars: 'of %{count} chars',
      cancel: 'Annuleren',
      cancelled: 'Afgebroken',
      click_to_edit: 'klik om aan te passen',
      complete: 'Klaar',
      element_dirty_notice: 'Dit element bevat niet opgeslagen wijzigingen. Wilt u dit echt inklappen?',
      help: 'Hulp',
      ok: 'Ok',
      page_found: 'Page found',
      pages_found: 'Pages found',
      page_dirty_notice: 'Er zijn wijzigingen op deze pagina aangebracht. Deze gaan verloren als u doorgaat.',
      url_validation_failed: 'De url heeft geen geldig formaat.',
      warning: 'Waarschuwing!',
      'File is too large': 'File is too large',
      'File is too small': 'File is too small',
      'File type not allowed': 'File type not allowed',
      'Maximum number of files exceeded': 'Uploadlimiet bereikt.',
      'Uploaded bytes exceed file size': 'Uploaded bytes exceed file size',
      formats: {
        datetime: "Y-m-d H:i",
        date: "Y-m-d",
        time: "H:i",
        start_of_week: 1
      }
    },
    fr: {
      allowed_chars: 'von %{count} signes',
      cancel: 'abandonner',
      cancelled: 'annulé',
      click_to_edit: 'Cliquez pour modifier',
      complete: 'terminé',
      element_dirty_notice: 'Cet élément a des modifications non enregistrées. Souhaitez-vous vraiment plier?',
      help: 'Aide',
      ok: 'Ok',
      page_dirty_notice: 'Vous avez des modifications non enregistrées sur la page. Ce sera perdue si vous continuez.',
      page_found: 'page trouvée',
      pages_found: 'pages trouvées',
      url_validation_failed: "L'URL n'est pas correctement formatée.",
      warning: 'Attention!',
      'File is too large': 'Le fichier est trop grand.',
      'File is too small': 'Le fichier est trop petit.',
      'File type not allowed': 'Type de document non autorisé.',
      'Maximum number of files exceeded': 'Le nombre maximum de fichiers est atteint.',
      'Uploaded bytes exceed file size': 'Taille de fichier maximale autorisée atteint.',
      formats: {
        datetime: "d.m.Y H:i",
        date: "d.m.Y",
        time: "H:i",
        start_of_week: 1
      }
    },
    ru: {
      allowed_chars: '%{count} знаков',
      cancel: 'Отмена',
      cancelled: 'Отменено',
      click_to_edit: 'нажмите, чтобы редактировать',
      complete: 'Завершено',
      element_dirty_notice: 'Для этого элемента есть несохраненные изменения. Вы действительно хотите их сбросить?',
      help: 'Помощь',
      ok: 'Ок',
      page_dirty_notice: 'На странице есть несохраненные изменения. Если вы продолжите, то они пропадут.',
      page_found: 'Страница найдена',
      pages_found: 'Страницы найдены',
      url_validation_failed: 'Адрес (URL) имеет неверный формат.',
      warning: 'Внимание!',
      'File is too large': 'Файл слишком большой',
      'File is too small': 'Файл слишком маленький',
      'File type not allowed': 'Этот тип файла не разрешен',
      'Maximum number of files exceeded': 'Исчерпано максимальное количество файлов.',
      'Uploaded bytes exceed file size': 'Превышен максимальный размер файла',
      formats: {
        datetime: "d.m.Y H:i",
        date: "d.m.Y",
        time: "H:i",
        start_of_week: 1
      }
    },
    es: {
      allowed_chars: 'de %{count} caracteres',
      cancel: 'Cancelar',
      cancelled: 'Cancelado',
      click_to_edit: 'Pulsar para editar',
      complete: 'Completado',
      element_dirty_notice: 'Este elemento tiene cambios sin guardar. ¿Realmente quieres plegarlo?',
      help: 'Ayuda',
      ok: 'Aceptar',
      page_dirty_notice: 'Tienes cambios sin guardar en esta página. Si continúas se perderán.',
      page_found: 'Página encontrada',
      pages_found: 'Páginas encontradas',
      url_validation_failed: 'La url no tiene un formato válido.',
      warning: '¡Atención!',
      'File is too large': 'El archivo es demasiado grande',
      'File is too small': 'El archivo es demasiado pequeño',
      'File type not allowed': 'El tipo de archivo no está permitido',
      'Maximum number of files exceeded': 'Número máximo de archivos excedido.',
      'Uploaded bytes exceed file size': 'Los bytes subidos exceden el tamaño del archivo',
      formats: {
        datetime: "d/m/Y H:i",
        date: "d/m/Y",
        time: "H:i",
        start_of_week: 1
      }
    },
    it: {
      allowed_chars: 'di %{count} caratteri',
      cancel: 'Annulla',
      cancelled: 'Annullato',
      click_to_edit: 'clicca per modificare',
      complete: 'Completato',
      element_dirty_notice: 'Questo elemento contiene delle modifiche non salvate. Vuoi veramenter chiuderlo?',
      help: 'Aiuto',
      ok: 'Ok',
      page_dirty_notice: 'Su questa pagina hai delle modifiche non salvate. Verranno perse se decidi di continuare.',
      page_found: 'Pagina trovata',
      pages_found: 'Pagine trovate',
      url_validation_failed: 'Formato URL non valido.',
      warning: 'Attenzione!',
      'File is too large': 'Il file è troppo grande',
      'File is too small': 'Il file è troppo piccolo',
      'File type not allowed': 'Tipo di file non consentito',
      'Maximum number of files exceeded': 'Numero massimo di file raggiunto.',
      'Uploaded bytes exceed file size': 'Il numero di byte caricati eccede la dimensione del file',
      formats: {
        datetime: "Y-m-d H:i",
        date: "Y-m-d",
        time: "H:i",
        start_of_week: 1
      }
    }
  };

}).call(this);
(function() {
  if (typeof window.Alchemy === 'undefined') {
    window.Alchemy = {};
  }

  Alchemy.I18n = {
    KEY_SEPARATOR: /\./,
    translate: function(key, replacement) {
      var keys, translation, translations;
      if (Alchemy.locale == null) {
        throw 'Alchemy.locale is not set! Please set Alchemy.locale to a locale string in order to translate something.';
      }
      translations = Alchemy.translations[Alchemy.locale];
      if (translations) {
        if (this.KEY_SEPARATOR.test(key)) {
          keys = key.split(this.KEY_SEPARATOR);
          translation = translations[keys[0]][keys[1]] || key;
        } else {
          translation = translations[key] || key;
        }
        if (replacement) {
          return translation.replace(/%\{.+\}/, replacement);
        } else {
          return translation;
        }
      } else {
        Alchemy.debug("Translations for locale " + Alchemy.locale + " not found!");
        return key;
      }
    }
  };

  Alchemy.t = function(key, replacement) {
    return Alchemy.I18n.translate(key, replacement);
  };

}).call(this);
(function() {
  window.Alchemy = Alchemy || {};

  Alchemy.initAlchemyPreviewMode = function() {
    Object.assign(Alchemy, {
      ElementSelector: {
        styles: {
          reset: {
            outline: "",
            "outline-offset": "",
            cursor: ""
          },
          hover: {
            outline: "2px dashed #f0b437",
            "outline-offset": "4px",
            cursor: "pointer"
          },
          selected: {
            outline: "2px dashed #90b9d0",
            "outline-offset": "4px"
          }
        },
        init: function() {
          window.addEventListener("message", (function(_this) {
            return function(message) {
              if (message.data === "blurAlchemyElements") {
                return _this.blurElements();
              }
            };
          })(this), false);
          this.elements = document.querySelectorAll("[data-alchemy-element]");
          this.elements.forEach((function(_this) {
            return function(element) {
              element.addEventListener('mouseover', function() {
                element.setAttribute('title', Alchemy.t('click_to_edit'));
                if (!element.classList.contains('selected')) {
                  Object.assign(element.style, _this.getStyle('hover'));
                }
              });
              element.addEventListener('mouseout', function() {
                element.removeAttribute('title');
                if (!element.classList.contains('selected')) {
                  Object.assign(element.style, _this.getStyle('reset'));
                }
              });
              element.addEventListener('SelectPreviewElement.Alchemy', function() {
                _this.selectElement(element);
              }, false);
              element.addEventListener('click', function(e) {
                e.stopPropagation();
                e.preventDefault();
                _this.selectElement(element);
                _this.focusElementEditor(element);
              });
            };
          })(this));
        },
        selectElement: function(element) {
          this.blurElements();
          element.classList.add('selected');
          Object.assign(element.style, this.getStyle('selected'));
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        },
        blurElements: function() {
          this.elements.forEach((function(_this) {
            return function(element) {
              element.classList.remove('selected');
              Object.assign(element.style, _this.getStyle('reset'));
            };
          })(this));
        },
        focusElementEditor: function(element) {
          var $element_editor, alchemy_window, elements_window, target_id;
          alchemy_window = window.parent;
          target_id = element.getAttribute('data-alchemy-element');
          $element_editor = alchemy_window.$("#element_" + target_id);
          elements_window = alchemy_window.Alchemy.ElementsWindow;
          $element_editor.trigger("FocusElementEditor.Alchemy", target_id);
          if (elements_window.hidden) {
            elements_window.show();
          }
        },
        getStyle: function(state) {
          if (state === "reset") {
            return this.styles["reset"];
          } else {
            return this.styles[state];
          }
        }
      }
    });
    return Alchemy.ElementSelector.init();
  };

  Alchemy.initAlchemyPreviewMode();

}).call(this);
