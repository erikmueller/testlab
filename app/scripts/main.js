require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery',
        scribe: '../bower_components/scribe/scribe',
        'scribe-plugin-toolbar': '../bower_components/scribe-plugin-toolbar/scribe-plugin-toolbar',
        'scribe-plugin-heading-command': '../bower_components/scribe-plugin-heading-command/scribe-plugin-heading-command',
        'scribe-plugin-blockquote-command': '../bower_components/scribe-plugin-blockquote-command/scribe-plugin-blockquote-command',
        'scribe-plugin-smart-lists': '../bower_components/scribe-plugin-smart-lists/scribe-plugin-smart-lists',
        'scribe-plugin-link-prompt-command': '../bower_components/scribe-plugin-link-prompt-command/scribe-plugin-link-prompt-command',
        'scribe-plugin-keyboard-shortcuts': '../bower_components/scribe-plugin-keyboard-shortcuts/scribe-plugin-keyboard-shortcuts',
        'scribe-plugin-intelligent-unlink-command': '../bower_components/scribe-plugin-intelligent-unlink-command/scribe-plugin-intelligent-unlink-command',
        bootstrapAffix: '../bower_components/bootstrap/js/affix',
        bootstrapAlert: '../bower_components/bootstrap/js/alert',
        bootstrapButton: '../bower_components/bootstrap/js/button',
        bootstrapCarousel: '../bower_components/bootstrap/js/carousel',
        bootstrapCollapse: '../bower_components/bootstrap/js/collapse',
        bootstrapDropdown: '../bower_components/bootstrap/js/dropdown',
        bootstrapModal: '../bower_components/bootstrap/js/modal',
        bootstrapPopover: '../bower_components/bootstrap/js/popover',
        bootstrapScrollspy: '../bower_components/bootstrap/js/scrollspy',
        bootstrapTab: '../bower_components/bootstrap/js/tab',
        bootstrapTooltip: '../bower_components/bootstrap/js/tooltip',
        bootstrapTransition: '../bower_components/bootstrap/js/transition'
},
    shim: {
        bootstrapAffix: {
            deps: ['jquery']
        },
        bootstrapAlert: {
            deps: ['jquery', 'bootstrapTransition']
        },
        bootstrapButton: {
            deps: ['jquery']
        },
        bootstrapCarousel: {
            deps: ['jquery', 'bootstrapTransition']
        },
        bootstrapCollapse: {
            deps: ['jquery', 'bootstrapTransition']
        },
        bootstrapDropdown: {
            deps: ['jquery']
        },
        bootstrapModal:{
            deps: ['jquery', 'bootstrapTransition']
        },
        bootstrapPopover: {
            deps: ['jquery', 'bootstrapTooltip']
        },
        bootstrapScrollspy: {
            deps: ['jquery']
        },
        bootstrapTab: {
            deps: ['jquery', 'bootstrapTransition']
        },
        bootstrapTooltip: {
            deps: ['jquery', 'bootstrapTransition']
        },
        bootstrapTransition: {
            deps: ['jquery']
        }
    }
});

require([
    'jquery',
    'scribe',
    'scribe-plugin-toolbar',
    'scribe-plugin-heading-command',
    'scribe-plugin-blockquote-command',
    'scribe-plugin-smart-lists',
    'scribe-plugin-link-prompt-command',
    'scribe-plugin-intelligent-unlink-command',
    'scribe-plugin-keyboard-shortcuts'
], function ($, Scribe, scribePluginToolbar, scribePluginHeading, scribePluginBlockquote, scribePluginSmartLists, scribePluginLinkPromptCommand, scribePluginIntelligentUnlinkCommand, scribePluginKeyboardShortcuts) {
    'use strict';

    /**
    * Keyboard shortcuts
    */

    var ctrlKey = function (event) { return event.metaKey || event.ctrlKey; };

    var commandsToKeyboardShortcutsMap = Object.freeze({
        bold: function (event) { return event.metaKey && event.keyCode === 66; }, // b
        italic: function (event) { return event.metaKey && event.keyCode === 73; }, // i
        strikeThrough: function (event) { return event.altKey && event.shiftKey && event.keyCode === 83; }, // s
        removeFormat: function (event) { return event.altKey && event.shiftKey && event.keyCode === 65; }, // a
        linkPrompt: function (event) { return event.metaKey && ! event.shiftKey && event.keyCode === 75; }, // k
        unlink: function (event) { return event.metaKey && event.shiftKey && event.keyCode === 75; }, // k,
        insertUnorderedList: function (event) { return event.altKey && event.shiftKey && event.keyCode === 66; }, // b
        insertOrderedList: function (event) { return event.altKey && event.shiftKey && event.keyCode === 78; }, // n
        blockquote: function (event) { return event.altKey && event.shiftKey && event.keyCode === 87; }, // w
        code: function (event) { return event.metaKey && event.shiftKey && event.keyCode === 76; }, // l
        h2: function (event) { return ctrlKey(event) && event.keyCode === 50; } // 2
    });

    var scribeElement = document.querySelector('.scribe');
    // Create an instance of Scribe
    var scribe = new Scribe(scribeElement);

    // To log scribe's content to the console (just for debugging purposes)
    window.scribe = scribe;
    // Formatters

    // Use some plugins
    var toolbarElement = document.querySelector('.toolbar');
    scribe.use(scribePluginToolbar(toolbarElement));
    scribe.use(scribePluginHeading(2));
    scribe.use(scribePluginBlockquote());
    scribe.use(scribePluginSmartLists());
    scribe.use(scribePluginLinkPromptCommand());
    scribe.use(scribePluginKeyboardShortcuts(commandsToKeyboardShortcutsMap));
    scribe.use(scribePluginIntelligentUnlinkCommand());


});
