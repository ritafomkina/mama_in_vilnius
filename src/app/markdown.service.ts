import { Injectable } from '@angular/core';

import markdownit from 'markdown-it';

@Injectable({
    providedIn: 'root',
})
export class MarkdownService {
    // full options list (defaults)
    private md = markdownit({
        // Enable HTML tags in source
        html: false,

        // Use '/' to close single tags (<br />).
        // This is only for full CommonMark compatibility.
        xhtmlOut: false,

        // Convert '\n' in paragraphs into <br>
        breaks: false,

        // CSS language prefix for fenced blocks. Can be
        // useful for external highlighters.
        langPrefix: 'language-',

        // Autoconvert URL-like text to links
        linkify: false,

        // Enable some language-neutral replacement + quotes beautification
        // For the full list of replacements, see https://github.com/markdown-it/markdown-it/blob/master/lib/rules_core/replacements.mjs
        typographer: false,

        // Double + single quotes replacement pairs, when typographer enabled,
        // and smartquotes on. Could be either a String or an Array.
        //
        // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
        // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
        quotes: '“”‘’',

        // Highlighter function. Should return escaped HTML,
        // or '' if the source string is not changed and should be escaped externally.
        // If result starts with <pre... internal wrapper is skipped.
        highlight: function (/*str, lang*/) {
            return '';
        },
    });

    public render(src: string) {
        return this.md.render(src);
    }

    constructor() {
        const defaultRender =
            this.md.renderer.rules['link_open'] ||
            function (tokens, idx, options, env, self) {
                return self.renderToken(tokens, idx, options);
            };

        this.md.renderer.rules['link_open'] = function (
            tokens,
            idx,
            options,
            env,
            self,
        ) {
            // Add a new `target` attribute, or replace the value of the existing one.
            tokens[idx].attrSet('target', '_blank');

            // Pass the token to the default renderer.
            return defaultRender(tokens, idx, options, env, self);
        };
    }
}
