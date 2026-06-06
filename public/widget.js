(function () {
  try {
    if (typeof document < `u`) {
      var e = document.createElement(`style`);
      (e.appendChild(
        document.createTextNode(
          `:root{--cb-primary:#000;--cb-primary-dark:#333;--cb-highlight:#b8f53c;--cb-bg:#fff;--cb-solid-bg:#fff;--cb-radius:16px;--cb-shadow:0 4px 12px #0000000d, 0 1px 3px #00000008;--cb-font:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Courier New", monospace;--cb-ui-font:"Segoe UI", system-ui, sans-serif}#cb-container{z-index:99999;font-family:var(--cb-ui-font);position:fixed;bottom:24px;right:24px}#cb-toggle{background:var(--cb-primary);cursor:pointer;width:52px;height:52px;box-shadow:var(--cb-shadow);color:#fff;border:none;border-radius:50%;justify-content:center;align-items:center;margin-left:auto;transition:transform .2s,background .2s;display:flex;position:relative}#cb-toggle svg{flex-shrink:0;width:24px;height:24px}#cb-toggle:before{content:"";background:var(--cb-primary);opacity:.4;pointer-events:none;border-radius:50%;width:52px;height:52px;animation:2s cubic-bezier(0,0,.2,1) infinite cb-ping;position:absolute}#cb-toggle.cb-pinged:before{animation:none;display:none}@keyframes cb-ping{0%{opacity:.4;transform:scale(1)}70%{opacity:0;transform:scale(1.6)}to{opacity:0;transform:scale(1.6)}}#cb-window{opacity:0;pointer-events:none;transform-origin:100% 100%;width:380px;height:520px;max-height:calc(100vh - 120px);transition:all .3s cubic-bezier(.16,1,.3,1);position:absolute;bottom:80px;right:0;transform:translateY(20px)scale(.95)}#cb-window.cb-open{opacity:1;pointer-events:all;transform:translateY(0)scale(1)}#cb-main-backdrop{background:var(--cb-solid-bg);border-radius:var(--cb-radius);box-shadow:var(--cb-shadow);z-index:1;border:1px solid #0000000d;position:absolute;inset:0}#cb-messages-layer{z-index:2;-ms-overflow-style:none;scrollbar-width:none;scroll-behavior:smooth;width:100%;position:absolute;inset:64px 0 60px;overflow:hidden auto;-webkit-mask-image:linear-gradient(#0000 0%,#000 8% 100%);mask-image:linear-gradient(#0000 0%,#000 8% 100%)}#cb-messages-layer::-webkit-scrollbar{display:none}#cb-messages{flex-direction:column;gap:12px;padding:12px 0;display:flex}#cb-header-layer{color:#fff;border-top-left-radius:var(--cb-radius);border-top-right-radius:var(--cb-radius);z-index:5;background:#1a1a1a;justify-content:flex-start;align-items:center;height:68px;padding:0 20px;display:flex;position:absolute;top:0;left:0;right:0}#cb-header-info{flex-direction:column;display:flex}#cb-title{font-family:var(--cb-ui-font);align-items:center;margin-bottom:2px;font-size:16px;font-weight:600;display:flex}#cb-subtitle{font-family:var(--cb-ui-font);color:#aaa;align-items:center;font-size:12px;display:flex}.cb-online-dot{background-color:var(--cb-highlight);border-radius:50%;width:8px;height:8px;margin-right:6px;display:inline-block}#cb-input-layer{border-bottom-left-radius:var(--cb-radius);border-bottom-right-radius:var(--cb-radius);z-index:5;background:0 0;flex-direction:column;display:flex;position:absolute;bottom:0;left:0;right:0}#cb-input-area{background:var(--cb-solid-bg);border-bottom-left-radius:var(--cb-radius);border-bottom-right-radius:var(--cb-radius);border-top:1px solid #0000000d;align-items:flex-end;gap:8px;padding:12px 16px;display:flex}#cb-input{resize:none;font-family:var(--cb-ui-font);appearance:none;background:#f5f5f5;border:none;border-radius:12px;outline:none;flex:1;max-height:120px;padding:12px;font-size:16px}#cb-send{background:var(--cb-primary);color:#fff;cursor:pointer;border:none;border-radius:50%;flex-shrink:0;justify-content:center;align-items:center;width:40px;height:40px;transition:opacity .2s;display:flex}#cb-send:disabled{opacity:.5;cursor:not-allowed}#cb-send svg{width:18px;height:18px}#cb-verify-tag{display:none}#cb-footer{text-align:center;color:#0006;pointer-events:none;font-size:10px;position:absolute;bottom:-25px;left:0;right:0}.cb-msg-row{align-items:flex-start;margin:0 12px;animation:.6s cubic-bezier(.16,1,.3,1) forwards cb-row-entry;display:flex;position:relative}@keyframes cb-row-entry{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}.cb-msg-row-bot{justify-content:flex-start}.cb-msg-row-user{justify-content:flex-end}.cb-avatar-bot{background:var(--cb-highlight);color:#1a1a1a;z-index:10;object-fit:cover;box-sizing:border-box;border:none;border-radius:50%;flex-shrink:0;justify-content:center;align-items:center;width:34px;height:34px;margin-right:8px;padding:4px;font-size:14px;font-weight:600;display:flex;box-shadow:0 2px 8px #0000000d}.cb-msg-row-bot+.cb-msg-row-bot,.cb-msg-row-user+.cb-msg-row-user{margin-top:-12px}.cb-msg-row-bot+.cb-msg-row-bot .cb-avatar-bot{visibility:hidden}.cb-header-avatar{background:var(--cb-highlight);color:#000;border-radius:50%;justify-content:center;align-items:center;width:32px;height:32px;display:flex}.cb-welcome-screen{flex-direction:column;align-items:center;margin-top:30px;display:flex}.cb-center-image{object-fit:cover;width:96px;height:96px;animation:.6s cubic-bezier(.16,1,.3,1) forwards cb-row-entry}#cb-quick-replies-container{pointer-events:none;width:100%}.cb-quick-replies{pointer-events:all;background:linear-gradient(to bottom, transparent, var(--cb-solid-bg));flex-direction:column;align-items:center;gap:8px;padding:8px 16px 18px;display:flex}.cb-quick-reply{color:#1a1a1a;cursor:pointer;font-size:13px;font-family:var(--cb-ui-font);text-align:center;background:#fff;border:1px solid #eee;border-radius:20px;width:fit-content;max-width:90%;padding:8px 16px;transition:all .2s;box-shadow:0 2px 4px #00000005}.cb-quick-reply:hover{background:#f9f9f9;border-color:#ddd}.cb-msg{z-index:2;border-radius:16px;max-width:80%;padding:8px 12px;font-size:14px;line-height:1.5;position:relative}.cb-msg-user{color:#fff;background:#1a1a1a;border-top-right-radius:4px}.cb-msg-bot{color:#1a1a1a;background:#f8f8f8;border:1px solid #00000008;border-top-left-radius:4px}.cb-msg-bot p{margin:0 0 6px}.cb-msg-bot p:last-child{margin-bottom:0}.cb-msg-bot ul,.cb-msg-bot ol{margin:4px 0 6px 18px;padding:0}.cb-msg-bot li{margin-bottom:3px;line-height:1.5}.cb-msg-bot li:last-child{margin-bottom:0}.cb-msg-bot strong{font-weight:600}.cb-msg-bot code{background:#0000000f;border-radius:4px;padding:1px 4px;font-size:12px}.cb-typing{gap:4px;padding:12px 16px;display:flex}.cb-typing span{background:#999;border-radius:50%;width:6px;height:6px;animation:1.2s infinite cb-bounce}.cb-typing span:nth-child(2){animation-delay:.2s}.cb-typing span:nth-child(3){animation-delay:.4s}@keyframes cb-bounce{0%,60%,to{transform:translateY(0)}30%{transform:translateY(-6px)}}@media screen and (width<=480px){#cb-container{bottom:16px;right:16px}#cb-window{top:max(12px, env(safe-area-inset-top,12px));transform-origin:100% 100%;width:auto;height:auto;max-height:none;position:fixed;bottom:84px;left:12px;right:12px}#cb-window.cb-open{transform:translateY(0)scale(1)}#cb-input-area{padding:10px 12px}}/*$vite$:1*/`,
        ),
      ),
        document.head.appendChild(e));
    }
  } catch (e) {
    console.error(`vite-plugin-css-injected-by-js`, e);
  }
})();
(function () {
  function e() {
    return {
      async: !1,
      breaks: !1,
      extensions: null,
      gfm: !0,
      hooks: null,
      pedantic: !1,
      renderer: null,
      silent: !1,
      tokenizer: null,
      walkTokens: null,
    };
  }
  var t = e();
  function n(e) {
    t = e;
  }
  var r = { exec: () => null };
  function i(e) {
    let t = [];
    return (n) => {
      let r = Math.max(0, Math.min(3, n - 1)),
        i = t[r];
      return (i || ((i = e(r)), (t[r] = i)), i);
    };
  }
  function a(e, t = ``) {
    let n = typeof e == `string` ? e : e.source,
      r = {
        replace: (e, t) => {
          let i = typeof t == `string` ? t : t.source;
          return ((i = i.replace(s.caret, `$1`)), (n = n.replace(e, i)), r);
        },
        getRegex: () => new RegExp(n, t),
      };
    return r;
  }
  var o = ((e = ``) => {
      try {
        return !!RegExp(`(?<=1)(?<!1)` + e);
      } catch {
        return !1;
      }
    })(),
    s = {
      codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm,
      outputLinkReplace: /\\([\[\]])/g,
      indentCodeCompensation: /^(\s+)(?:```)/,
      beginningSpace: /^\s+/,
      endingHash: /#$/,
      startingSpaceChar: /^ /,
      endingSpaceChar: / $/,
      nonSpaceChar: /[^ ]/,
      newLineCharGlobal: /\n/g,
      tabCharGlobal: /\t/g,
      multipleSpaceGlobal: /\s+/g,
      blankLine: /^[ \t]*$/,
      doubleBlankLine: /\n[ \t]*\n[ \t]*$/,
      blockquoteStart: /^ {0,3}>/,
      blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g,
      blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm,
      listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g,
      listIsTask: /^\[[ xX]\] +\S/,
      listReplaceTask: /^\[[ xX]\] +/,
      listTaskCheckbox: /\[[ xX]\]/,
      anyLine: /\n.*\n/,
      hrefBrackets: /^<(.*)>$/,
      tableDelimiter: /[:|]/,
      tableAlignChars: /^\||\| *$/g,
      tableRowBlankLine: /\n[ \t]*$/,
      tableAlignRight: /^ *-+: *$/,
      tableAlignCenter: /^ *:-+: *$/,
      tableAlignLeft: /^ *:-+ *$/,
      startATag: /^<a /i,
      endATag: /^<\/a>/i,
      startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i,
      endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i,
      startAngleBracket: /^</,
      endAngleBracket: />$/,
      pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/,
      unicodeAlphaNumeric: /[\p{L}\p{N}]/u,
      escapeTest: /[&<>"']/,
      escapeReplace: /[&<>"']/g,
      escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
      escapeReplaceNoEncode:
        /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,
      caret: /(^|[^\[])\^/g,
      percentDecode: /%25/g,
      findPipe: /\|/g,
      splitPipe: / \|/,
      slashPipe: /\\\|/g,
      carriageReturn: /\r\n|\r/g,
      spaceLine: /^ +$/gm,
      notSpaceStart: /^\S*/,
      endingNewline: /\n$/,
      listItemRegex: (e) => RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),
      nextBulletRegex: i((e) =>
        RegExp(`^ {0,${e}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),
      ),
      hrRegex: i((e) =>
        RegExp(`^ {0,${e}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),
      ),
      fencesBeginRegex: i((e) => RegExp(`^ {0,${e}}(?:\`\`\`|~~~)`)),
      headingBeginRegex: i((e) => RegExp(`^ {0,${e}}#`)),
      htmlBeginRegex: i((e) => RegExp(`^ {0,${e}}<(?:[a-z].*>|!--)`, `i`)),
      blockquoteBeginRegex: i((e) => RegExp(`^ {0,${e}}>`)),
    },
    c = /^(?:[ \t]*(?:\n|$))+/,
    l = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,
    u =
      /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
    d = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
    f = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
    p = / {0,3}(?:[*+-]|\d{1,9}[.)])/,
    m =
      /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
    ee = a(m)
      .replace(/bull/g, p)
      .replace(/blockCode/g, /(?: {4}| {0,3}\t)/)
      .replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/)
      .replace(/blockquote/g, / {0,3}>/)
      .replace(/heading/g, / {0,3}#{1,6}/)
      .replace(/html/g, / {0,3}<[^\n>]+>\n/)
      .replace(/\|table/g, ``)
      .getRegex(),
    te = a(m)
      .replace(/bull/g, p)
      .replace(/blockCode/g, /(?: {4}| {0,3}\t)/)
      .replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/)
      .replace(/blockquote/g, / {0,3}>/)
      .replace(/heading/g, / {0,3}#{1,6}/)
      .replace(/html/g, / {0,3}<[^\n>]+>\n/)
      .replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/)
      .getRegex(),
    h =
      /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
    ne = /^[^\n]+/,
    g = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,
    re = a(
      /^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/,
    )
      .replace(`label`, g)
      .replace(
        `title`,
        /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/,
      )
      .getRegex(),
    ie = a(/^(bull)([ \t][^\n]+?)?(?:\n|$)/)
      .replace(/bull/g, p)
      .getRegex(),
    _ = `address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul`,
    v = /<!--(?:-?>|[\s\S]*?(?:-->|$))/,
    ae = a(
      `^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))`,
      `i`,
    )
      .replace(`comment`, v)
      .replace(`tag`, _)
      .replace(
        `attribute`,
        / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/,
      )
      .getRegex(),
    y = a(h)
      .replace(`hr`, d)
      .replace(`heading`, ` {0,3}#{1,6}(?:\\s|$)`)
      .replace(`|lheading`, ``)
      .replace(`|table`, ``)
      .replace(`blockquote`, ` {0,3}>`)
      .replace(`fences`, " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
      .replace(`list`, ` {0,3}(?:[*+-]|1[.)])[ \\t]`)
      .replace(
        `html`,
        `</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`,
      )
      .replace(`tag`, _)
      .getRegex(),
    b = {
      blockquote: a(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/)
        .replace(`paragraph`, y)
        .getRegex(),
      code: l,
      def: re,
      fences: u,
      heading: f,
      hr: d,
      html: ae,
      lheading: ee,
      list: ie,
      newline: c,
      paragraph: y,
      table: r,
      text: ne,
    },
    oe = a(
      `^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)`,
    )
      .replace(`hr`, d)
      .replace(`heading`, ` {0,3}#{1,6}(?:\\s|$)`)
      .replace(`blockquote`, ` {0,3}>`)
      .replace(`code`, `(?: {4}| {0,3}	)[^\\n]`)
      .replace(`fences`, " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
      .replace(`list`, ` {0,3}(?:[*+-]|1[.)])[ \\t]`)
      .replace(
        `html`,
        `</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`,
      )
      .replace(`tag`, _)
      .getRegex(),
    se = {
      ...b,
      lheading: te,
      table: oe,
      paragraph: a(h)
        .replace(`hr`, d)
        .replace(`heading`, ` {0,3}#{1,6}(?:\\s|$)`)
        .replace(`|lheading`, ``)
        .replace(`table`, oe)
        .replace(`blockquote`, ` {0,3}>`)
        .replace(`fences`, " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
        .replace(`list`, ` {0,3}(?:[*+-]|1[.)])[ \\t]`)
        .replace(
          `html`,
          `</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`,
        )
        .replace(`tag`, _)
        .getRegex(),
    },
    ce = {
      ...b,
      html: a(
        `^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`,
      )
        .replace(`comment`, v)
        .replace(
          /tag/g,
          `(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b`,
        )
        .getRegex(),
      def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
      heading: /^(#{1,6})(.*)(?:\n+|$)/,
      fences: r,
      lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
      paragraph: a(h)
        .replace(`hr`, d)
        .replace(
          `heading`,
          ` *#{1,6} *[^
]`,
        )
        .replace(`lheading`, ee)
        .replace(`|table`, ``)
        .replace(`blockquote`, ` {0,3}>`)
        .replace(`|fences`, ``)
        .replace(`|list`, ``)
        .replace(`|html`, ``)
        .replace(`|tag`, ``)
        .getRegex(),
    },
    le = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
    ue = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
    de = /^( {2,}|\\)\n(?!\s*$)/,
    fe =
      /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
    x = /[\p{P}\p{S}]/u,
    S = /[\s\p{P}\p{S}]/u,
    C = /[^\s\p{P}\p{S}]/u,
    pe = a(/^((?![*_])punctSpace)/, `u`)
      .replace(/punctSpace/g, S)
      .getRegex(),
    me = /(?!~)[\p{P}\p{S}]/u,
    he = /(?!~)[\s\p{P}\p{S}]/u,
    ge = /(?:[^\s\p{P}\p{S}]|~)/u,
    _e = a(/link|precode-code|html/, `g`)
      .replace(
        `link`,
        /\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/,
      )
      .replace(`precode-`, o ? "(?<!`)()" : "(^^|[^`])")
      .replace(`code`, /(?<b>`+)[^`]+\k<b>(?!`)/)
      .replace(`html`, /<(?! )[^<>]*?>/)
      .getRegex(),
    ve = /^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,
    ye = a(ve, `u`).replace(/punct/g, x).getRegex(),
    be = a(ve, `u`).replace(/punct/g, me).getRegex(),
    w = `^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)`,
    xe = a(w, `gu`)
      .replace(/notPunctSpace/g, C)
      .replace(/punctSpace/g, S)
      .replace(/punct/g, x)
      .getRegex(),
    Se = a(w, `gu`)
      .replace(/notPunctSpace/g, ge)
      .replace(/punctSpace/g, he)
      .replace(/punct/g, me)
      .getRegex(),
    Ce = a(
      `^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)`,
      `gu`,
    )
      .replace(/notPunctSpace/g, C)
      .replace(/punctSpace/g, S)
      .replace(/punct/g, x)
      .getRegex(),
    we = a(/^~~?(?:((?!~)punct)|[^\s~])/, `u`)
      .replace(/punct/g, x)
      .getRegex(),
    Te = a(
      `^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)`,
      `gu`,
    )
      .replace(/notPunctSpace/g, C)
      .replace(/punctSpace/g, S)
      .replace(/punct/g, x)
      .getRegex(),
    Ee = a(/\\(punct)/, `gu`)
      .replace(/punct/g, x)
      .getRegex(),
    De = a(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/)
      .replace(`scheme`, /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/)
      .replace(
        `email`,
        /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,
      )
      .getRegex(),
    Oe = a(v).replace(`(?:-->|$)`, `-->`).getRegex(),
    ke = a(
      `^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>`,
    )
      .replace(`comment`, Oe)
      .replace(
        `attribute`,
        /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,
      )
      .getRegex(),
    T =
      /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/,
    Ae = a(
      /^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/,
    )
      .replace(`label`, T)
      .replace(`href`, /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/)
      .replace(
        `title`,
        /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,
      )
      .getRegex(),
    E = a(/^!?\[(label)\]\[(ref)\]/)
      .replace(`label`, T)
      .replace(`ref`, g)
      .getRegex(),
    D = a(/^!?\[(ref)\](?:\[\])?/)
      .replace(`ref`, g)
      .getRegex(),
    je = a(`reflink|nolink(?!\\()`, `g`)
      .replace(`reflink`, E)
      .replace(`nolink`, D)
      .getRegex(),
    O = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,
    k = {
      _backpedal: r,
      anyPunctuation: Ee,
      autolink: De,
      blockSkip: _e,
      br: de,
      code: ue,
      del: r,
      delLDelim: r,
      delRDelim: r,
      emStrongLDelim: ye,
      emStrongRDelimAst: xe,
      emStrongRDelimUnd: Ce,
      escape: le,
      link: Ae,
      nolink: D,
      punctuation: pe,
      reflink: E,
      reflinkSearch: je,
      tag: ke,
      text: fe,
      url: r,
    },
    Me = {
      ...k,
      link: a(/^!?\[(label)\]\((.*?)\)/)
        .replace(`label`, T)
        .getRegex(),
      reflink: a(/^!?\[(label)\]\s*\[([^\]]*)\]/)
        .replace(`label`, T)
        .getRegex(),
    },
    A = {
      ...k,
      emStrongRDelimAst: Se,
      emStrongLDelim: be,
      delLDelim: we,
      delRDelim: Te,
      url: a(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/)
        .replace(`protocol`, O)
        .replace(
          `email`,
          /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
        )
        .getRegex(),
      _backpedal:
        /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
      del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,
      text: a(
        /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/,
      )
        .replace(`protocol`, O)
        .getRegex(),
    },
    Ne = {
      ...A,
      br: a(de).replace(`{2,}`, `*`).getRegex(),
      text: a(A.text)
        .replace(`\\b_`, `\\b_| {2,}\\n`)
        .replace(/\{2,\}/g, `*`)
        .getRegex(),
    },
    j = { normal: b, gfm: se, pedantic: ce },
    M = { normal: k, gfm: A, breaks: Ne, pedantic: Me },
    Pe = {
      "&": `&amp;`,
      "<": `&lt;`,
      ">": `&gt;`,
      '"': `&quot;`,
      "'": `&#39;`,
    },
    N = (e) => Pe[e];
  function P(e, t) {
    if (t) {
      if (s.escapeTest.test(e)) return e.replace(s.escapeReplace, N);
    } else if (s.escapeTestNoEncode.test(e))
      return e.replace(s.escapeReplaceNoEncode, N);
    return e;
  }
  function Fe(e) {
    try {
      e = encodeURI(e).replace(s.percentDecode, `%`);
    } catch {
      return null;
    }
    return e;
  }
  function Ie(e, t) {
    let n = e
        .replace(s.findPipe, (e, t, n) => {
          let r = !1,
            i = t;
          for (; --i >= 0 && n[i] === `\\`; ) r = !r;
          return r ? `|` : ` |`;
        })
        .split(s.splitPipe),
      r = 0;
    if (
      (n[0].trim() || n.shift(),
      n.length > 0 && !n.at(-1)?.trim() && n.pop(),
      t)
    )
      if (n.length > t) n.splice(t);
      else for (; n.length < t; ) n.push(``);
    for (; r < n.length; r++) n[r] = n[r].trim().replace(s.slashPipe, `|`);
    return n;
  }
  function F(e, t, n) {
    let r = e.length;
    if (r === 0) return ``;
    let i = 0;
    for (; i < r; ) {
      let a = e.charAt(r - i - 1);
      if (a === t && !n) i++;
      else if (a !== t && n) i++;
      else break;
    }
    return e.slice(0, r - i);
  }
  function Le(e) {
    let t = e.split(`
`),
      n = t.length - 1;
    for (; n >= 0 && s.blankLine.test(t[n]); ) n--;
    return t.length - n <= 2
      ? e
      : t.slice(0, n + 1).join(`
`);
  }
  function Re(e, t) {
    if (e.indexOf(t[1]) === -1) return -1;
    let n = 0;
    for (let r = 0; r < e.length; r++)
      if (e[r] === `\\`) r++;
      else if (e[r] === t[0]) n++;
      else if (e[r] === t[1] && (n--, n < 0)) return r;
    return n > 0 ? -2 : -1;
  }
  function ze(e, t = 0) {
    let n = t,
      r = ``;
    for (let t of e)
      if (t === `	`) {
        let e = 4 - (n % 4);
        ((r += ` `.repeat(e)), (n += e));
      } else ((r += t), n++);
    return r;
  }
  function Be(e, t, n, r, i) {
    let a = t.href,
      o = t.title || null,
      s = e[1].replace(i.other.outputLinkReplace, `$1`);
    r.state.inLink = !0;
    let c = {
      type: e[0].charAt(0) === `!` ? `image` : `link`,
      raw: n,
      href: a,
      title: o,
      text: s,
      tokens: r.inlineTokens(s),
    };
    return ((r.state.inLink = !1), c);
  }
  function Ve(e, t, n) {
    let r = e.match(n.other.indentCodeCompensation);
    if (r === null) return t;
    let i = r[1];
    return t
      .split(
        `
`,
      )
      .map((e) => {
        let t = e.match(n.other.beginningSpace);
        if (t === null) return e;
        let [r] = t;
        return r.length >= i.length ? e.slice(i.length) : e;
      }).join(`
`);
  }
  var I = class {
      options;
      rules;
      lexer;
      constructor(e) {
        this.options = e || t;
      }
      space(e) {
        let t = this.rules.block.newline.exec(e);
        if (t && t[0].length > 0) return { type: `space`, raw: t[0] };
      }
      code(e) {
        let t = this.rules.block.code.exec(e);
        if (t) {
          let e = this.options.pedantic ? t[0] : Le(t[0]);
          return {
            type: `code`,
            raw: e,
            codeBlockStyle: `indented`,
            text: e.replace(this.rules.other.codeRemoveIndent, ``),
          };
        }
      }
      fences(e) {
        let t = this.rules.block.fences.exec(e);
        if (t) {
          let e = t[0],
            n = Ve(e, t[3] || ``, this.rules);
          return {
            type: `code`,
            raw: e,
            lang: t[2]
              ? t[2].trim().replace(this.rules.inline.anyPunctuation, `$1`)
              : t[2],
            text: n,
          };
        }
      }
      heading(e) {
        let t = this.rules.block.heading.exec(e);
        if (t) {
          let e = t[2].trim();
          if (this.rules.other.endingHash.test(e)) {
            let t = F(e, `#`);
            (this.options.pedantic ||
              !t ||
              this.rules.other.endingSpaceChar.test(t)) &&
              (e = t.trim());
          }
          return {
            type: `heading`,
            raw: F(
              t[0],
              `
`,
            ),
            depth: t[1].length,
            text: e,
            tokens: this.lexer.inline(e),
          };
        }
      }
      hr(e) {
        let t = this.rules.block.hr.exec(e);
        if (t)
          return {
            type: `hr`,
            raw: F(
              t[0],
              `
`,
            ),
          };
      }
      blockquote(e) {
        let t = this.rules.block.blockquote.exec(e);
        if (t) {
          let e = F(
              t[0],
              `
`,
            ).split(`
`),
            n = ``,
            r = ``,
            i = [];
          for (; e.length > 0; ) {
            let t = !1,
              a = [],
              o;
            for (o = 0; o < e.length; o++)
              if (this.rules.other.blockquoteStart.test(e[o]))
                (a.push(e[o]), (t = !0));
              else if (!t) a.push(e[o]);
              else break;
            e = e.slice(o);
            let s = a.join(`
`),
              c = s
                .replace(
                  this.rules.other.blockquoteSetextReplace,
                  `
    $1`,
                )
                .replace(this.rules.other.blockquoteSetextReplace2, ``);
            ((n = n
              ? `${n}
${s}`
              : s),
              (r = r
                ? `${r}
${c}`
                : c));
            let l = this.lexer.state.top;
            if (
              ((this.lexer.state.top = !0),
              this.lexer.blockTokens(c, i, !0),
              (this.lexer.state.top = l),
              e.length === 0)
            )
              break;
            let u = i.at(-1);
            if (u?.type === `code`) break;
            if (u?.type === `blockquote`) {
              let t = u,
                a =
                  t.raw +
                  `
` +
                  e.join(`
`),
                o = this.blockquote(a);
              ((i[i.length - 1] = o),
                (n = n.substring(0, n.length - t.raw.length) + o.raw),
                (r = r.substring(0, r.length - t.text.length) + o.text));
              break;
            } else if (u?.type === `list`) {
              let t = u,
                a =
                  t.raw +
                  `
` +
                  e.join(`
`),
                o = this.list(a);
              ((i[i.length - 1] = o),
                (n = n.substring(0, n.length - u.raw.length) + o.raw),
                (r = r.substring(0, r.length - t.raw.length) + o.raw),
                (e = a.substring(i.at(-1).raw.length).split(`
`)));
              continue;
            }
          }
          return { type: `blockquote`, raw: n, tokens: i, text: r };
        }
      }
      list(e) {
        let t = this.rules.block.list.exec(e);
        if (t) {
          let n = t[1].trim(),
            r = n.length > 1,
            i = {
              type: `list`,
              raw: ``,
              ordered: r,
              start: r ? +n.slice(0, -1) : ``,
              loose: !1,
              items: [],
            };
          ((n = r ? `\\d{1,9}\\${n.slice(-1)}` : `\\${n}`),
            this.options.pedantic && (n = r ? n : `[*+-]`));
          let a = this.rules.other.listItemRegex(n),
            o = !1;
          for (; e; ) {
            let n = !1,
              r = ``,
              s = ``;
            if (!(t = a.exec(e)) || this.rules.block.hr.test(e)) break;
            ((r = t[0]), (e = e.substring(r.length)));
            let c = ze(
                t[2].split(
                  `
`,
                  1,
                )[0],
                t[1].length,
              ),
              l = e.split(
                `
`,
                1,
              )[0],
              u = !c.trim(),
              d = 0;
            if (
              (this.options.pedantic
                ? ((d = 2), (s = c.trimStart()))
                : u
                  ? (d = t[1].length + 1)
                  : ((d = c.search(this.rules.other.nonSpaceChar)),
                    (d = d > 4 ? 1 : d),
                    (s = c.slice(d)),
                    (d += t[1].length)),
              u &&
                this.rules.other.blankLine.test(l) &&
                ((r +=
                  l +
                  `
`),
                (e = e.substring(l.length + 1)),
                (n = !0)),
              !n)
            ) {
              let t = this.rules.other.nextBulletRegex(d),
                n = this.rules.other.hrRegex(d),
                i = this.rules.other.fencesBeginRegex(d),
                a = this.rules.other.headingBeginRegex(d),
                o = this.rules.other.htmlBeginRegex(d),
                f = this.rules.other.blockquoteBeginRegex(d);
              for (; e; ) {
                let p = e.split(
                    `
`,
                    1,
                  )[0],
                  m;
                if (
                  ((l = p),
                  this.options.pedantic
                    ? ((l = l.replace(
                        this.rules.other.listReplaceNesting,
                        `  `,
                      )),
                      (m = l))
                    : (m = l.replace(this.rules.other.tabCharGlobal, `    `)),
                  i.test(l) ||
                    a.test(l) ||
                    o.test(l) ||
                    f.test(l) ||
                    t.test(l) ||
                    n.test(l))
                )
                  break;
                if (m.search(this.rules.other.nonSpaceChar) >= d || !l.trim())
                  s +=
                    `
` + m.slice(d);
                else {
                  if (
                    u ||
                    c
                      .replace(this.rules.other.tabCharGlobal, `    `)
                      .search(this.rules.other.nonSpaceChar) >= 4 ||
                    i.test(c) ||
                    a.test(c) ||
                    n.test(c)
                  )
                    break;
                  s +=
                    `
` + l;
                }
                ((u = !l.trim()),
                  (r +=
                    p +
                    `
`),
                  (e = e.substring(p.length + 1)),
                  (c = m.slice(d)));
              }
            }
            (i.loose ||
              (o
                ? (i.loose = !0)
                : this.rules.other.doubleBlankLine.test(r) && (o = !0)),
              i.items.push({
                type: `list_item`,
                raw: r,
                task: !!this.options.gfm && this.rules.other.listIsTask.test(s),
                loose: !1,
                text: s,
                tokens: [],
              }),
              (i.raw += r));
          }
          let s = i.items.at(-1);
          if (s) ((s.raw = s.raw.trimEnd()), (s.text = s.text.trimEnd()));
          else return;
          i.raw = i.raw.trimEnd();
          for (let e of i.items) {
            ((this.lexer.state.top = !1),
              (e.tokens = this.lexer.blockTokens(e.text, [])));
            let t = e.tokens[0];
            if (e.task && (t?.type === `text` || t?.type === `paragraph`)) {
              ((e.text = e.text.replace(this.rules.other.listReplaceTask, ``)),
                (t.raw = t.raw.replace(this.rules.other.listReplaceTask, ``)),
                (t.text = t.text.replace(
                  this.rules.other.listReplaceTask,
                  ``,
                )));
              for (let e = this.lexer.inlineQueue.length - 1; e >= 0; e--)
                if (
                  this.rules.other.listIsTask.test(
                    this.lexer.inlineQueue[e].src,
                  )
                ) {
                  this.lexer.inlineQueue[e].src = this.lexer.inlineQueue[
                    e
                  ].src.replace(this.rules.other.listReplaceTask, ``);
                  break;
                }
              let n = this.rules.other.listTaskCheckbox.exec(e.raw);
              if (n) {
                let t = {
                  type: `checkbox`,
                  raw: n[0] + ` `,
                  checked: n[0] !== `[ ]`,
                };
                ((e.checked = t.checked),
                  i.loose
                    ? e.tokens[0] &&
                      [`paragraph`, `text`].includes(e.tokens[0].type) &&
                      `tokens` in e.tokens[0] &&
                      e.tokens[0].tokens
                      ? ((e.tokens[0].raw = t.raw + e.tokens[0].raw),
                        (e.tokens[0].text = t.raw + e.tokens[0].text),
                        e.tokens[0].tokens.unshift(t))
                      : e.tokens.unshift({
                          type: `paragraph`,
                          raw: t.raw,
                          text: t.raw,
                          tokens: [t],
                        })
                    : e.tokens.unshift(t));
              }
            } else e.task &&= !1;
            if (!i.loose) {
              let t = e.tokens.filter((e) => e.type === `space`);
              i.loose =
                t.length > 0 &&
                t.some((e) => this.rules.other.anyLine.test(e.raw));
            }
          }
          if (i.loose)
            for (let e of i.items) {
              e.loose = !0;
              for (let t of e.tokens)
                t.type === `text` && (t.type = `paragraph`);
            }
          return i;
        }
      }
      html(e) {
        let t = this.rules.block.html.exec(e);
        if (t) {
          let e = Le(t[0]);
          return {
            type: `html`,
            block: !0,
            raw: e,
            pre: t[1] === `pre` || t[1] === `script` || t[1] === `style`,
            text: e,
          };
        }
      }
      def(e) {
        let t = this.rules.block.def.exec(e);
        if (t) {
          let e = t[1]
              .toLowerCase()
              .replace(this.rules.other.multipleSpaceGlobal, ` `),
            n = t[2]
              ? t[2]
                  .replace(this.rules.other.hrefBrackets, `$1`)
                  .replace(this.rules.inline.anyPunctuation, `$1`)
              : ``,
            r = t[3]
              ? t[3]
                  .substring(1, t[3].length - 1)
                  .replace(this.rules.inline.anyPunctuation, `$1`)
              : t[3];
          return {
            type: `def`,
            tag: e,
            raw: F(
              t[0],
              `
`,
            ),
            href: n,
            title: r,
          };
        }
      }
      table(e) {
        let t = this.rules.block.table.exec(e);
        if (!t || !this.rules.other.tableDelimiter.test(t[2])) return;
        let n = Ie(t[1]),
          r = t[2].replace(this.rules.other.tableAlignChars, ``).split(`|`),
          i = t[3]?.trim()
            ? t[3].replace(this.rules.other.tableRowBlankLine, ``).split(`
`)
            : [],
          a = {
            type: `table`,
            raw: F(
              t[0],
              `
`,
            ),
            header: [],
            align: [],
            rows: [],
          };
        if (n.length === r.length) {
          for (let e of r)
            this.rules.other.tableAlignRight.test(e)
              ? a.align.push(`right`)
              : this.rules.other.tableAlignCenter.test(e)
                ? a.align.push(`center`)
                : this.rules.other.tableAlignLeft.test(e)
                  ? a.align.push(`left`)
                  : a.align.push(null);
          for (let e = 0; e < n.length; e++)
            a.header.push({
              text: n[e],
              tokens: this.lexer.inline(n[e]),
              header: !0,
              align: a.align[e],
            });
          for (let e of i)
            a.rows.push(
              Ie(e, a.header.length).map((e, t) => ({
                text: e,
                tokens: this.lexer.inline(e),
                header: !1,
                align: a.align[t],
              })),
            );
          return a;
        }
      }
      lheading(e) {
        let t = this.rules.block.lheading.exec(e);
        if (t) {
          let e = t[1].trim();
          return {
            type: `heading`,
            raw: F(
              t[0],
              `
`,
            ),
            depth: t[2].charAt(0) === `=` ? 1 : 2,
            text: e,
            tokens: this.lexer.inline(e),
          };
        }
      }
      paragraph(e) {
        let t = this.rules.block.paragraph.exec(e);
        if (t) {
          let e =
            t[1].charAt(t[1].length - 1) ===
            `
`
              ? t[1].slice(0, -1)
              : t[1];
          return {
            type: `paragraph`,
            raw: t[0],
            text: e,
            tokens: this.lexer.inline(e),
          };
        }
      }
      text(e) {
        let t = this.rules.block.text.exec(e);
        if (t)
          return {
            type: `text`,
            raw: t[0],
            text: t[0],
            tokens: this.lexer.inline(t[0]),
          };
      }
      escape(e) {
        let t = this.rules.inline.escape.exec(e);
        if (t) return { type: `escape`, raw: t[0], text: t[1] };
      }
      tag(e) {
        let t = this.rules.inline.tag.exec(e);
        if (t)
          return (
            !this.lexer.state.inLink && this.rules.other.startATag.test(t[0])
              ? (this.lexer.state.inLink = !0)
              : this.lexer.state.inLink &&
                this.rules.other.endATag.test(t[0]) &&
                (this.lexer.state.inLink = !1),
            !this.lexer.state.inRawBlock &&
            this.rules.other.startPreScriptTag.test(t[0])
              ? (this.lexer.state.inRawBlock = !0)
              : this.lexer.state.inRawBlock &&
                this.rules.other.endPreScriptTag.test(t[0]) &&
                (this.lexer.state.inRawBlock = !1),
            {
              type: `html`,
              raw: t[0],
              inLink: this.lexer.state.inLink,
              inRawBlock: this.lexer.state.inRawBlock,
              block: !1,
              text: t[0],
            }
          );
      }
      link(e) {
        let t = this.rules.inline.link.exec(e);
        if (t) {
          let e = t[2].trim();
          if (
            !this.options.pedantic &&
            this.rules.other.startAngleBracket.test(e)
          ) {
            if (!this.rules.other.endAngleBracket.test(e)) return;
            let t = F(e.slice(0, -1), `\\`);
            if ((e.length - t.length) % 2 == 0) return;
          } else {
            let e = Re(t[2], `()`);
            if (e === -2) return;
            if (e > -1) {
              let n = (t[0].indexOf(`!`) === 0 ? 5 : 4) + t[1].length + e;
              ((t[2] = t[2].substring(0, e)),
                (t[0] = t[0].substring(0, n).trim()),
                (t[3] = ``));
            }
          }
          let n = t[2],
            r = ``;
          if (this.options.pedantic) {
            let e = this.rules.other.pedanticHrefTitle.exec(n);
            e && ((n = e[1]), (r = e[3]));
          } else r = t[3] ? t[3].slice(1, -1) : ``;
          return (
            (n = n.trim()),
            this.rules.other.startAngleBracket.test(n) &&
              (n =
                this.options.pedantic &&
                !this.rules.other.endAngleBracket.test(e)
                  ? n.slice(1)
                  : n.slice(1, -1)),
            Be(
              t,
              {
                href: n && n.replace(this.rules.inline.anyPunctuation, `$1`),
                title: r && r.replace(this.rules.inline.anyPunctuation, `$1`),
              },
              t[0],
              this.lexer,
              this.rules,
            )
          );
        }
      }
      reflink(e, t) {
        let n;
        if (
          (n = this.rules.inline.reflink.exec(e)) ||
          (n = this.rules.inline.nolink.exec(e))
        ) {
          let e =
            t[
              (n[2] || n[1])
                .replace(this.rules.other.multipleSpaceGlobal, ` `)
                .toLowerCase()
            ];
          if (!e) {
            let e = n[0].charAt(0);
            return { type: `text`, raw: e, text: e };
          }
          return Be(n, e, n[0], this.lexer, this.rules);
        }
      }
      emStrong(e, t, n = ``) {
        let r = this.rules.inline.emStrongLDelim.exec(e);
        if (
          !(
            !r ||
            (!r[1] && !r[2] && !r[3] && !r[4]) ||
            (r[4] && n.match(this.rules.other.unicodeAlphaNumeric))
          ) &&
          (!(r[1] || r[3]) || !n || this.rules.inline.punctuation.exec(n))
        ) {
          let n = [...r[0]].length - 1,
            i,
            a,
            o = n,
            s = 0,
            c =
              r[0][0] === `*`
                ? this.rules.inline.emStrongRDelimAst
                : this.rules.inline.emStrongRDelimUnd;
          for (
            c.lastIndex = 0, t = t.slice(-1 * e.length + n);
            (r = c.exec(t)) !== null;
          ) {
            if (((i = r[1] || r[2] || r[3] || r[4] || r[5] || r[6]), !i))
              continue;
            if (((a = [...i].length), r[3] || r[4])) {
              o += a;
              continue;
            } else if ((r[5] || r[6]) && n % 3 && !((n + a) % 3)) {
              s += a;
              continue;
            }
            if (((o -= a), o > 0)) continue;
            a = Math.min(a, a + o + s);
            let t = [...r[0]][0].length,
              c = e.slice(0, n + r.index + t + a);
            if (Math.min(n, a) % 2) {
              let e = c.slice(1, -1);
              return {
                type: `em`,
                raw: c,
                text: e,
                tokens: this.lexer.inlineTokens(e),
              };
            }
            let l = c.slice(2, -2);
            return {
              type: `strong`,
              raw: c,
              text: l,
              tokens: this.lexer.inlineTokens(l),
            };
          }
        }
      }
      codespan(e) {
        let t = this.rules.inline.code.exec(e);
        if (t) {
          let e = t[2].replace(this.rules.other.newLineCharGlobal, ` `),
            n = this.rules.other.nonSpaceChar.test(e),
            r =
              this.rules.other.startingSpaceChar.test(e) &&
              this.rules.other.endingSpaceChar.test(e);
          return (
            n && r && (e = e.substring(1, e.length - 1)),
            { type: `codespan`, raw: t[0], text: e }
          );
        }
      }
      br(e) {
        let t = this.rules.inline.br.exec(e);
        if (t) return { type: `br`, raw: t[0] };
      }
      del(e, t, n = ``) {
        let r = this.rules.inline.delLDelim.exec(e);
        if (r && (!r[1] || !n || this.rules.inline.punctuation.exec(n))) {
          let n = [...r[0]].length - 1,
            i,
            a,
            o = n,
            s = this.rules.inline.delRDelim;
          for (
            s.lastIndex = 0, t = t.slice(-1 * e.length + n);
            (r = s.exec(t)) !== null;
          ) {
            if (
              ((i = r[1] || r[2] || r[3] || r[4] || r[5] || r[6]),
              !i || ((a = [...i].length), a !== n))
            )
              continue;
            if (r[3] || r[4]) {
              o += a;
              continue;
            }
            if (((o -= a), o > 0)) continue;
            a = Math.min(a, a + o);
            let t = [...r[0]][0].length,
              s = e.slice(0, n + r.index + t + a),
              c = s.slice(n, -n);
            return {
              type: `del`,
              raw: s,
              text: c,
              tokens: this.lexer.inlineTokens(c),
            };
          }
        }
      }
      autolink(e) {
        let t = this.rules.inline.autolink.exec(e);
        if (t) {
          let e, n;
          return (
            t[2] === `@`
              ? ((e = t[1]), (n = `mailto:` + e))
              : ((e = t[1]), (n = e)),
            {
              type: `link`,
              raw: t[0],
              text: e,
              href: n,
              tokens: [{ type: `text`, raw: e, text: e }],
            }
          );
        }
      }
      url(e) {
        let t;
        if ((t = this.rules.inline.url.exec(e))) {
          let e, n;
          if (t[2] === `@`) ((e = t[0]), (n = `mailto:` + e));
          else {
            let r;
            do
              ((r = t[0]),
                (t[0] = this.rules.inline._backpedal.exec(t[0])?.[0] ?? ``));
            while (r !== t[0]);
            ((e = t[0]), (n = t[1] === `www.` ? `http://` + t[0] : t[0]));
          }
          return {
            type: `link`,
            raw: t[0],
            text: e,
            href: n,
            tokens: [{ type: `text`, raw: e, text: e }],
          };
        }
      }
      inlineText(e) {
        let t = this.rules.inline.text.exec(e);
        if (t) {
          let e = this.lexer.state.inRawBlock;
          return { type: `text`, raw: t[0], text: t[0], escaped: e };
        }
      }
    },
    L = class e {
      tokens;
      options;
      state;
      inlineQueue;
      tokenizer;
      constructor(e) {
        ((this.tokens = []),
          (this.tokens.links = Object.create(null)),
          (this.options = e || t),
          (this.options.tokenizer = this.options.tokenizer || new I()),
          (this.tokenizer = this.options.tokenizer),
          (this.tokenizer.options = this.options),
          (this.tokenizer.lexer = this),
          (this.inlineQueue = []),
          (this.state = { inLink: !1, inRawBlock: !1, top: !0 }));
        let n = { other: s, block: j.normal, inline: M.normal };
        (this.options.pedantic
          ? ((n.block = j.pedantic), (n.inline = M.pedantic))
          : this.options.gfm &&
            ((n.block = j.gfm),
            this.options.breaks ? (n.inline = M.breaks) : (n.inline = M.gfm)),
          (this.tokenizer.rules = n));
      }
      static get rules() {
        return { block: j, inline: M };
      }
      static lex(t, n) {
        return new e(n).lex(t);
      }
      static lexInline(t, n) {
        return new e(n).inlineTokens(t);
      }
      lex(e) {
        ((e = e.replace(
          s.carriageReturn,
          `
`,
        )),
          this.blockTokens(e, this.tokens));
        for (let e = 0; e < this.inlineQueue.length; e++) {
          let t = this.inlineQueue[e];
          this.inlineTokens(t.src, t.tokens);
        }
        return ((this.inlineQueue = []), this.tokens);
      }
      blockTokens(e, t = [], n = !1) {
        ((this.tokenizer.lexer = this),
          this.options.pedantic &&
            (e = e.replace(s.tabCharGlobal, `    `).replace(s.spaceLine, ``)));
        let r = 1 / 0;
        for (; e; ) {
          if (e.length < r) r = e.length;
          else {
            this.infiniteLoopError(e.charCodeAt(0));
            break;
          }
          let i;
          if (
            this.options.extensions?.block?.some((n) =>
              (i = n.call({ lexer: this }, e, t))
                ? ((e = e.substring(i.raw.length)), t.push(i), !0)
                : !1,
            )
          )
            continue;
          if ((i = this.tokenizer.space(e))) {
            e = e.substring(i.raw.length);
            let n = t.at(-1);
            i.raw.length === 1 && n !== void 0
              ? (n.raw += `
`)
              : t.push(i);
            continue;
          }
          if ((i = this.tokenizer.code(e))) {
            e = e.substring(i.raw.length);
            let n = t.at(-1);
            n?.type === `paragraph` || n?.type === `text`
              ? ((n.raw +=
                  (n.raw.endsWith(`
`)
                    ? ``
                    : `
`) + i.raw),
                (n.text +=
                  `
` + i.text),
                (this.inlineQueue.at(-1).src = n.text))
              : t.push(i);
            continue;
          }
          if ((i = this.tokenizer.fences(e))) {
            ((e = e.substring(i.raw.length)), t.push(i));
            continue;
          }
          if ((i = this.tokenizer.heading(e))) {
            ((e = e.substring(i.raw.length)), t.push(i));
            continue;
          }
          if ((i = this.tokenizer.hr(e))) {
            ((e = e.substring(i.raw.length)), t.push(i));
            continue;
          }
          if ((i = this.tokenizer.blockquote(e))) {
            ((e = e.substring(i.raw.length)), t.push(i));
            continue;
          }
          if ((i = this.tokenizer.list(e))) {
            ((e = e.substring(i.raw.length)), t.push(i));
            continue;
          }
          if ((i = this.tokenizer.html(e))) {
            ((e = e.substring(i.raw.length)), t.push(i));
            continue;
          }
          if ((i = this.tokenizer.def(e))) {
            e = e.substring(i.raw.length);
            let n = t.at(-1);
            n?.type === `paragraph` || n?.type === `text`
              ? ((n.raw +=
                  (n.raw.endsWith(`
`)
                    ? ``
                    : `
`) + i.raw),
                (n.text +=
                  `
` + i.raw),
                (this.inlineQueue.at(-1).src = n.text))
              : this.tokens.links[i.tag] ||
                ((this.tokens.links[i.tag] = { href: i.href, title: i.title }),
                t.push(i));
            continue;
          }
          if ((i = this.tokenizer.table(e))) {
            ((e = e.substring(i.raw.length)), t.push(i));
            continue;
          }
          if ((i = this.tokenizer.lheading(e))) {
            ((e = e.substring(i.raw.length)), t.push(i));
            continue;
          }
          let a = e;
          if (this.options.extensions?.startBlock) {
            let t = 1 / 0,
              n = e.slice(1),
              r;
            (this.options.extensions.startBlock.forEach((e) => {
              ((r = e.call({ lexer: this }, n)),
                typeof r == `number` && r >= 0 && (t = Math.min(t, r)));
            }),
              t < 1 / 0 && t >= 0 && (a = e.substring(0, t + 1)));
          }
          if (this.state.top && (i = this.tokenizer.paragraph(a))) {
            let r = t.at(-1);
            (n && r?.type === `paragraph`
              ? ((r.raw +=
                  (r.raw.endsWith(`
`)
                    ? ``
                    : `
`) + i.raw),
                (r.text +=
                  `
` + i.text),
                this.inlineQueue.pop(),
                (this.inlineQueue.at(-1).src = r.text))
              : t.push(i),
              (n = a.length !== e.length),
              (e = e.substring(i.raw.length)));
            continue;
          }
          if ((i = this.tokenizer.text(e))) {
            e = e.substring(i.raw.length);
            let n = t.at(-1);
            n?.type === `text`
              ? ((n.raw +=
                  (n.raw.endsWith(`
`)
                    ? ``
                    : `
`) + i.raw),
                (n.text +=
                  `
` + i.text),
                this.inlineQueue.pop(),
                (this.inlineQueue.at(-1).src = n.text))
              : t.push(i);
            continue;
          }
          if (e) {
            this.infiniteLoopError(e.charCodeAt(0));
            break;
          }
        }
        return ((this.state.top = !0), t);
      }
      inline(e, t = []) {
        return (this.inlineQueue.push({ src: e, tokens: t }), t);
      }
      inlineTokens(e, t = []) {
        this.tokenizer.lexer = this;
        let n = e,
          r = null;
        if (this.tokens.links) {
          let e = Object.keys(this.tokens.links);
          if (e.length > 0)
            for (
              ;
              (r = this.tokenizer.rules.inline.reflinkSearch.exec(n)) !== null;
            )
              e.includes(r[0].slice(r[0].lastIndexOf(`[`) + 1, -1)) &&
                (n =
                  n.slice(0, r.index) +
                  `[` +
                  `a`.repeat(r[0].length - 2) +
                  `]` +
                  n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
        }
        for (
          ;
          (r = this.tokenizer.rules.inline.anyPunctuation.exec(n)) !== null;
        )
          n =
            n.slice(0, r.index) +
            `++` +
            n.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
        let i;
        for (; (r = this.tokenizer.rules.inline.blockSkip.exec(n)) !== null; )
          ((i = r[2] ? r[2].length : 0),
            (n =
              n.slice(0, r.index + i) +
              `[` +
              `a`.repeat(r[0].length - i - 2) +
              `]` +
              n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex)));
        n = this.options.hooks?.emStrongMask?.call({ lexer: this }, n) ?? n;
        let a = !1,
          o = ``,
          s = 1 / 0;
        for (; e; ) {
          if (e.length < s) s = e.length;
          else {
            this.infiniteLoopError(e.charCodeAt(0));
            break;
          }
          (a || (o = ``), (a = !1));
          let r;
          if (
            this.options.extensions?.inline?.some((n) =>
              (r = n.call({ lexer: this }, e, t))
                ? ((e = e.substring(r.raw.length)), t.push(r), !0)
                : !1,
            )
          )
            continue;
          if ((r = this.tokenizer.escape(e))) {
            ((e = e.substring(r.raw.length)), t.push(r));
            continue;
          }
          if ((r = this.tokenizer.tag(e))) {
            ((e = e.substring(r.raw.length)), t.push(r));
            continue;
          }
          if ((r = this.tokenizer.link(e))) {
            ((e = e.substring(r.raw.length)), t.push(r));
            continue;
          }
          if ((r = this.tokenizer.reflink(e, this.tokens.links))) {
            e = e.substring(r.raw.length);
            let n = t.at(-1);
            r.type === `text` && n?.type === `text`
              ? ((n.raw += r.raw), (n.text += r.text))
              : t.push(r);
            continue;
          }
          if ((r = this.tokenizer.emStrong(e, n, o))) {
            ((e = e.substring(r.raw.length)), t.push(r));
            continue;
          }
          if ((r = this.tokenizer.codespan(e))) {
            ((e = e.substring(r.raw.length)), t.push(r));
            continue;
          }
          if ((r = this.tokenizer.br(e))) {
            ((e = e.substring(r.raw.length)), t.push(r));
            continue;
          }
          if ((r = this.tokenizer.del(e, n, o))) {
            ((e = e.substring(r.raw.length)), t.push(r));
            continue;
          }
          if ((r = this.tokenizer.autolink(e))) {
            ((e = e.substring(r.raw.length)), t.push(r));
            continue;
          }
          if (!this.state.inLink && (r = this.tokenizer.url(e))) {
            ((e = e.substring(r.raw.length)), t.push(r));
            continue;
          }
          let i = e;
          if (this.options.extensions?.startInline) {
            let t = 1 / 0,
              n = e.slice(1),
              r;
            (this.options.extensions.startInline.forEach((e) => {
              ((r = e.call({ lexer: this }, n)),
                typeof r == `number` && r >= 0 && (t = Math.min(t, r)));
            }),
              t < 1 / 0 && t >= 0 && (i = e.substring(0, t + 1)));
          }
          if ((r = this.tokenizer.inlineText(i))) {
            ((e = e.substring(r.raw.length)),
              r.raw.slice(-1) !== `_` && (o = r.raw.slice(-1)),
              (a = !0));
            let n = t.at(-1);
            n?.type === `text`
              ? ((n.raw += r.raw), (n.text += r.text))
              : t.push(r);
            continue;
          }
          if (e) {
            this.infiniteLoopError(e.charCodeAt(0));
            break;
          }
        }
        return t;
      }
      infiniteLoopError(e) {
        let t = `Infinite loop on byte: ` + e;
        if (this.options.silent) console.error(t);
        else throw Error(t);
      }
    },
    R = class {
      options;
      parser;
      constructor(e) {
        this.options = e || t;
      }
      space(e) {
        return ``;
      }
      code({ text: e, lang: t, escaped: n }) {
        let r = (t || ``).match(s.notSpaceStart)?.[0],
          i =
            e.replace(s.endingNewline, ``) +
            `
`;
        return r
          ? `<pre><code class="language-` +
              P(r) +
              `">` +
              (n ? i : P(i, !0)) +
              `</code></pre>
`
          : `<pre><code>` +
              (n ? i : P(i, !0)) +
              `</code></pre>
`;
      }
      blockquote({ tokens: e }) {
        return `<blockquote>
${this.parser.parse(e)}</blockquote>
`;
      }
      html({ text: e }) {
        return e;
      }
      def(e) {
        return ``;
      }
      heading({ tokens: e, depth: t }) {
        return `<h${t}>${this.parser.parseInline(e)}</h${t}>
`;
      }
      hr(e) {
        return `<hr>
`;
      }
      list(e) {
        let t = e.ordered,
          n = e.start,
          r = ``;
        for (let t = 0; t < e.items.length; t++) {
          let n = e.items[t];
          r += this.listitem(n);
        }
        let i = t ? `ol` : `ul`,
          a = t && n !== 1 ? ` start="` + n + `"` : ``;
        return (
          `<` +
          i +
          a +
          `>
` +
          r +
          `</` +
          i +
          `>
`
        );
      }
      listitem(e) {
        return `<li>${this.parser.parse(e.tokens)}</li>
`;
      }
      checkbox({ checked: e }) {
        return (
          `<input ` + (e ? `checked="" ` : ``) + `disabled="" type="checkbox"> `
        );
      }
      paragraph({ tokens: e }) {
        return `<p>${this.parser.parseInline(e)}</p>
`;
      }
      table(e) {
        let t = ``,
          n = ``;
        for (let t = 0; t < e.header.length; t++)
          n += this.tablecell(e.header[t]);
        t += this.tablerow({ text: n });
        let r = ``;
        for (let t = 0; t < e.rows.length; t++) {
          let i = e.rows[t];
          n = ``;
          for (let e = 0; e < i.length; e++) n += this.tablecell(i[e]);
          r += this.tablerow({ text: n });
        }
        return (
          (r &&= `<tbody>${r}</tbody>`),
          `<table>
<thead>
` +
            t +
            `</thead>
` +
            r +
            `</table>
`
        );
      }
      tablerow({ text: e }) {
        return `<tr>
${e}</tr>
`;
      }
      tablecell(e) {
        let t = this.parser.parseInline(e.tokens),
          n = e.header ? `th` : `td`;
        return (
          (e.align ? `<${n} align="${e.align}">` : `<${n}>`) +
          t +
          `</${n}>
`
        );
      }
      strong({ tokens: e }) {
        return `<strong>${this.parser.parseInline(e)}</strong>`;
      }
      em({ tokens: e }) {
        return `<em>${this.parser.parseInline(e)}</em>`;
      }
      codespan({ text: e }) {
        return `<code>${P(e, !0)}</code>`;
      }
      br(e) {
        return `<br>`;
      }
      del({ tokens: e }) {
        return `<del>${this.parser.parseInline(e)}</del>`;
      }
      link({ href: e, title: t, tokens: n }) {
        let r = this.parser.parseInline(n),
          i = Fe(e);
        if (i === null) return r;
        e = i;
        let a = `<a href="` + e + `"`;
        return (
          t && (a += ` title="` + P(t) + `"`),
          (a += `>` + r + `</a>`),
          a
        );
      }
      image({ href: e, title: t, text: n, tokens: r }) {
        r && (n = this.parser.parseInline(r, this.parser.textRenderer));
        let i = Fe(e);
        if (i === null) return P(n);
        e = i;
        let a = `<img src="${e}" alt="${P(n)}"`;
        return (t && (a += ` title="${P(t)}"`), (a += `>`), a);
      }
      text(e) {
        return `tokens` in e && e.tokens
          ? this.parser.parseInline(e.tokens)
          : `escaped` in e && e.escaped
            ? e.text
            : P(e.text);
      }
    },
    z = class {
      strong({ text: e }) {
        return e;
      }
      em({ text: e }) {
        return e;
      }
      codespan({ text: e }) {
        return e;
      }
      del({ text: e }) {
        return e;
      }
      html({ text: e }) {
        return e;
      }
      text({ text: e }) {
        return e;
      }
      link({ text: e }) {
        return `` + e;
      }
      image({ text: e }) {
        return `` + e;
      }
      br() {
        return ``;
      }
      checkbox({ raw: e }) {
        return e;
      }
    },
    B = class e {
      options;
      renderer;
      textRenderer;
      constructor(e) {
        ((this.options = e || t),
          (this.options.renderer = this.options.renderer || new R()),
          (this.renderer = this.options.renderer),
          (this.renderer.options = this.options),
          (this.renderer.parser = this),
          (this.textRenderer = new z()));
      }
      static parse(t, n) {
        return new e(n).parse(t);
      }
      static parseInline(t, n) {
        return new e(n).parseInline(t);
      }
      parse(e) {
        this.renderer.parser = this;
        let t = ``;
        for (let n = 0; n < e.length; n++) {
          let r = e[n];
          if (this.options.extensions?.renderers?.[r.type]) {
            let e = r,
              n = this.options.extensions.renderers[e.type].call(
                { parser: this },
                e,
              );
            if (
              n !== !1 ||
              ![
                `space`,
                `hr`,
                `heading`,
                `code`,
                `table`,
                `blockquote`,
                `list`,
                `html`,
                `def`,
                `paragraph`,
                `text`,
              ].includes(e.type)
            ) {
              t += n || ``;
              continue;
            }
          }
          let i = r;
          switch (i.type) {
            case `space`:
              t += this.renderer.space(i);
              break;
            case `hr`:
              t += this.renderer.hr(i);
              break;
            case `heading`:
              t += this.renderer.heading(i);
              break;
            case `code`:
              t += this.renderer.code(i);
              break;
            case `table`:
              t += this.renderer.table(i);
              break;
            case `blockquote`:
              t += this.renderer.blockquote(i);
              break;
            case `list`:
              t += this.renderer.list(i);
              break;
            case `checkbox`:
              t += this.renderer.checkbox(i);
              break;
            case `html`:
              t += this.renderer.html(i);
              break;
            case `def`:
              t += this.renderer.def(i);
              break;
            case `paragraph`:
              t += this.renderer.paragraph(i);
              break;
            case `text`:
              t += this.renderer.text(i);
              break;
            default: {
              let e = `Token with "` + i.type + `" type was not found.`;
              if (this.options.silent) return (console.error(e), ``);
              throw Error(e);
            }
          }
        }
        return t;
      }
      parseInline(e, t = this.renderer) {
        this.renderer.parser = this;
        let n = ``;
        for (let r = 0; r < e.length; r++) {
          let i = e[r];
          if (this.options.extensions?.renderers?.[i.type]) {
            let e = this.options.extensions.renderers[i.type].call(
              { parser: this },
              i,
            );
            if (
              e !== !1 ||
              ![
                `escape`,
                `html`,
                `link`,
                `image`,
                `strong`,
                `em`,
                `codespan`,
                `br`,
                `del`,
                `text`,
              ].includes(i.type)
            ) {
              n += e || ``;
              continue;
            }
          }
          let a = i;
          switch (a.type) {
            case `escape`:
              n += t.text(a);
              break;
            case `html`:
              n += t.html(a);
              break;
            case `link`:
              n += t.link(a);
              break;
            case `image`:
              n += t.image(a);
              break;
            case `checkbox`:
              n += t.checkbox(a);
              break;
            case `strong`:
              n += t.strong(a);
              break;
            case `em`:
              n += t.em(a);
              break;
            case `codespan`:
              n += t.codespan(a);
              break;
            case `br`:
              n += t.br(a);
              break;
            case `del`:
              n += t.del(a);
              break;
            case `text`:
              n += t.text(a);
              break;
            default: {
              let e = `Token with "` + a.type + `" type was not found.`;
              if (this.options.silent) return (console.error(e), ``);
              throw Error(e);
            }
          }
        }
        return n;
      }
    },
    V = class {
      options;
      block;
      constructor(e) {
        this.options = e || t;
      }
      static passThroughHooks = new Set([
        `preprocess`,
        `postprocess`,
        `processAllTokens`,
        `emStrongMask`,
      ]);
      static passThroughHooksRespectAsync = new Set([
        `preprocess`,
        `postprocess`,
        `processAllTokens`,
      ]);
      preprocess(e) {
        return e;
      }
      postprocess(e) {
        return e;
      }
      processAllTokens(e) {
        return e;
      }
      emStrongMask(e) {
        return e;
      }
      provideLexer(e = this.block) {
        return e ? L.lex : L.lexInline;
      }
      provideParser(e = this.block) {
        return e ? B.parse : B.parseInline;
      }
    },
    H = new (class {
      defaults = e();
      options = this.setOptions;
      parse = this.parseMarkdown(!0);
      parseInline = this.parseMarkdown(!1);
      Parser = B;
      Renderer = R;
      TextRenderer = z;
      Lexer = L;
      Tokenizer = I;
      Hooks = V;
      constructor(...e) {
        this.use(...e);
      }
      walkTokens(e, t) {
        let n = [];
        for (let r of e)
          switch (((n = n.concat(t.call(this, r))), r.type)) {
            case `table`: {
              let e = r;
              for (let r of e.header)
                n = n.concat(this.walkTokens(r.tokens, t));
              for (let r of e.rows)
                for (let e of r) n = n.concat(this.walkTokens(e.tokens, t));
              break;
            }
            case `list`: {
              let e = r;
              n = n.concat(this.walkTokens(e.items, t));
              break;
            }
            default: {
              let e = r;
              this.defaults.extensions?.childTokens?.[e.type]
                ? this.defaults.extensions.childTokens[e.type].forEach((r) => {
                    let i = e[r].flat(1 / 0);
                    n = n.concat(this.walkTokens(i, t));
                  })
                : e.tokens && (n = n.concat(this.walkTokens(e.tokens, t)));
            }
          }
        return n;
      }
      use(...e) {
        let t = this.defaults.extensions || { renderers: {}, childTokens: {} };
        return (
          e.forEach((e) => {
            let n = { ...e };
            if (
              ((n.async = this.defaults.async || n.async || !1),
              e.extensions &&
                (e.extensions.forEach((e) => {
                  if (!e.name) throw Error(`extension name required`);
                  if (`renderer` in e) {
                    let n = t.renderers[e.name];
                    n
                      ? (t.renderers[e.name] = function (...t) {
                          let r = e.renderer.apply(this, t);
                          return (r === !1 && (r = n.apply(this, t)), r);
                        })
                      : (t.renderers[e.name] = e.renderer);
                  }
                  if (`tokenizer` in e) {
                    if (
                      !e.level ||
                      (e.level !== `block` && e.level !== `inline`)
                    )
                      throw Error(
                        `extension level must be 'block' or 'inline'`,
                      );
                    let n = t[e.level];
                    (n ? n.unshift(e.tokenizer) : (t[e.level] = [e.tokenizer]),
                      e.start &&
                        (e.level === `block`
                          ? t.startBlock
                            ? t.startBlock.push(e.start)
                            : (t.startBlock = [e.start])
                          : e.level === `inline` &&
                            (t.startInline
                              ? t.startInline.push(e.start)
                              : (t.startInline = [e.start]))));
                  }
                  `childTokens` in e &&
                    e.childTokens &&
                    (t.childTokens[e.name] = e.childTokens);
                }),
                (n.extensions = t)),
              e.renderer)
            ) {
              let t = this.defaults.renderer || new R(this.defaults);
              for (let n in e.renderer) {
                if (!(n in t)) throw Error(`renderer '${n}' does not exist`);
                if ([`options`, `parser`].includes(n)) continue;
                let r = n,
                  i = e.renderer[r],
                  a = t[r];
                t[r] = (...e) => {
                  let n = i.apply(t, e);
                  return (n === !1 && (n = a.apply(t, e)), n || ``);
                };
              }
              n.renderer = t;
            }
            if (e.tokenizer) {
              let t = this.defaults.tokenizer || new I(this.defaults);
              for (let n in e.tokenizer) {
                if (!(n in t)) throw Error(`tokenizer '${n}' does not exist`);
                if ([`options`, `rules`, `lexer`].includes(n)) continue;
                let r = n,
                  i = e.tokenizer[r],
                  a = t[r];
                t[r] = (...e) => {
                  let n = i.apply(t, e);
                  return (n === !1 && (n = a.apply(t, e)), n);
                };
              }
              n.tokenizer = t;
            }
            if (e.hooks) {
              let t = this.defaults.hooks || new V();
              for (let n in e.hooks) {
                if (!(n in t)) throw Error(`hook '${n}' does not exist`);
                if ([`options`, `block`].includes(n)) continue;
                let r = n,
                  i = e.hooks[r],
                  a = t[r];
                V.passThroughHooks.has(n)
                  ? (t[r] = (e) => {
                      if (
                        this.defaults.async &&
                        V.passThroughHooksRespectAsync.has(n)
                      )
                        return (async () => {
                          let n = await i.call(t, e);
                          return a.call(t, n);
                        })();
                      let r = i.call(t, e);
                      return a.call(t, r);
                    })
                  : (t[r] = (...e) => {
                      if (this.defaults.async)
                        return (async () => {
                          let n = await i.apply(t, e);
                          return (n === !1 && (n = await a.apply(t, e)), n);
                        })();
                      let n = i.apply(t, e);
                      return (n === !1 && (n = a.apply(t, e)), n);
                    });
              }
              n.hooks = t;
            }
            if (e.walkTokens) {
              let t = this.defaults.walkTokens,
                r = e.walkTokens;
              n.walkTokens = function (e) {
                let n = [];
                return (
                  n.push(r.call(this, e)),
                  t && (n = n.concat(t.call(this, e))),
                  n
                );
              };
            }
            this.defaults = { ...this.defaults, ...n };
          }),
          this
        );
      }
      setOptions(e) {
        return ((this.defaults = { ...this.defaults, ...e }), this);
      }
      lexer(e, t) {
        return L.lex(e, t ?? this.defaults);
      }
      parser(e, t) {
        return B.parse(e, t ?? this.defaults);
      }
      parseMarkdown(e) {
        return (t, n) => {
          let r = { ...n },
            i = { ...this.defaults, ...r },
            a = this.onError(!!i.silent, !!i.async);
          if (this.defaults.async === !0 && r.async === !1)
            return a(
              Error(
                `marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise.`,
              ),
            );
          if (typeof t > `u` || t === null)
            return a(Error(`marked(): input parameter is undefined or null`));
          if (typeof t != `string`)
            return a(
              Error(
                `marked(): input parameter is of type ` +
                  Object.prototype.toString.call(t) +
                  `, string expected`,
              ),
            );
          if (
            (i.hooks && ((i.hooks.options = i), (i.hooks.block = e)), i.async)
          )
            return (async () => {
              let n = i.hooks ? await i.hooks.preprocess(t) : t,
                r = await (
                  i.hooks
                    ? await i.hooks.provideLexer(e)
                    : e
                      ? L.lex
                      : L.lexInline
                )(n, i),
                a = i.hooks ? await i.hooks.processAllTokens(r) : r;
              i.walkTokens &&
                (await Promise.all(this.walkTokens(a, i.walkTokens)));
              let o = await (
                i.hooks
                  ? await i.hooks.provideParser(e)
                  : e
                    ? B.parse
                    : B.parseInline
              )(a, i);
              return i.hooks ? await i.hooks.postprocess(o) : o;
            })().catch(a);
          try {
            i.hooks && (t = i.hooks.preprocess(t));
            let n = (
              i.hooks ? i.hooks.provideLexer(e) : e ? L.lex : L.lexInline
            )(t, i);
            (i.hooks && (n = i.hooks.processAllTokens(n)),
              i.walkTokens && this.walkTokens(n, i.walkTokens));
            let r = (
              i.hooks ? i.hooks.provideParser(e) : e ? B.parse : B.parseInline
            )(n, i);
            return (i.hooks && (r = i.hooks.postprocess(r)), r);
          } catch (e) {
            return a(e);
          }
        };
      }
      onError(e, t) {
        return (n) => {
          if (
            ((n.message += `
Please report this to https://github.com/markedjs/marked.`),
            e)
          ) {
            let e =
              `<p>An error occurred:</p><pre>` +
              P(n.message + ``, !0) +
              `</pre>`;
            return t ? Promise.resolve(e) : e;
          }
          if (t) return Promise.reject(n);
          throw n;
        };
      }
    })();
  function U(e, t) {
    return H.parse(e, t);
  }
  ((U.options = U.setOptions =
    function (e) {
      return (H.setOptions(e), (U.defaults = H.defaults), n(U.defaults), U);
    }),
    (U.getDefaults = e),
    (U.defaults = t),
    (U.use = function (...e) {
      return (H.use(...e), (U.defaults = H.defaults), n(U.defaults), U);
    }),
    (U.walkTokens = function (e, t) {
      return H.walkTokens(e, t);
    }),
    (U.parseInline = H.parseInline),
    (U.Parser = B),
    (U.parser = B.parse),
    (U.Renderer = R),
    (U.TextRenderer = z),
    (U.Lexer = L),
    (U.lexer = L.lex),
    (U.Tokenizer = I),
    (U.Hooks = V),
    (U.parse = U),
    U.options,
    U.setOptions,
    U.use,
    U.walkTokens,
    U.parseInline,
    B.parse,
    L.lex,
    U.setOptions({ breaks: !0, gfm: !0 }));
  var W = window.ChatbotConfig || {},
    He = W.backendUrl || `http://localhost:5000`,
    Ue = W.primaryColor || `#000000`,
    We = W.title || `Assistant`,
    Ge = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:20px;height:20px"><rect x="3" y="11" width="18" height="10" rx="2" ry="2"></rect><circle cx="12" cy="5" r="2"></circle><path d="M12 7v4"></path><line x1="8" y1="16" x2="8" y2="16"></line><line x1="16" y1="16" x2="16" y2="16"></line></svg>`,
    Ke = {
      "Who is Nishmika?": `Nishmika is a software engineer from Sri Lanka who builds custom AI chatbots trained on your own business documents. He specializes in chatbots that stream responses like ChatGPT, cite their sources, and embed on any website with two lines of code.`,
      "What are his services?": `Nishmika builds custom RAG chatbots with streaming responses, source citations, and session memory. His bots are embeddable on any platform (WordPress, Webflow, Shopify, Next.js, or custom code sites) and feature professional, branded widgets.`,
      "How to contact him?": `You can reach Nishmika via email at nurannishmika22@gmail.com, view his portfolio at nishmika.me, or find him on Fiverr at fiverr.com/users/nishmikanuran.`,
    },
    qe = `sess_` + Math.random().toString(36).slice(2),
    G = !1,
    K = !1,
    q = null;
  function Je() {
    document.documentElement.style.setProperty(`--cb-primary`, Ue);
    let e = document.createElement(`div`);
    e.id = `cb-container`;
    let t = document.createElement(`button`);
    ((t.id = `cb-toggle`),
      (t.innerHTML = `
    <svg id="cb-icon-chat" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
    <svg id="cb-icon-close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display:none">
      <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  `));
    let n = document.createElement(`div`);
    ((n.id = `cb-window`),
      (n.innerHTML = `
    <!-- Solid white backdrop -->
    <div id="cb-main-backdrop"></div>

    <!-- Scrolling messages area -->
    <div id="cb-messages-layer">
      <div id="cb-messages"></div>
    </div>

    <!-- Fixed header overlay -->
    <div id="cb-header-layer">
      <div id="cb-header-info">
        <div id="cb-title">${We}</div>
        <div id="cb-subtitle"><span class="cb-online-dot"></span> Online · Replies instantly</div>
      </div>
    </div>

    <!-- Fixed input overlay -->
    <div id="cb-input-layer">
      <div id="cb-quick-replies-container"></div>
      <div id="cb-input-area">
        <textarea id="cb-input" placeholder="Type a message..." rows="1"></textarea>
        <button id="cb-send">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
          </svg>
        </button>
      </div>
      <div id="cb-verify-tag">Auto-Verify ✅</div>
    </div>
  `),
      e.appendChild(n),
      e.appendChild(t),
      document.body.appendChild(e),
      t.addEventListener(`click`, Ye),
      document.getElementById(`cb-send`).addEventListener(`click`, $),
      document.getElementById(`cb-input`).addEventListener(`keydown`, (e) => {
        e.key === `Enter` && !e.shiftKey && (e.preventDefault(), $());
      }),
      document.getElementById(`cb-input`).addEventListener(`input`, (e) => {
        ((e.target.style.height = `auto`),
          (e.target.style.height =
            Math.min(e.target.scrollHeight, 120) + `px`));
      }));
  }
  function Ye() {
    G = !G;
    let e = document.getElementById(`cb-window`),
      t = document.getElementById(`cb-icon-chat`),
      n = document.getElementById(`cb-icon-close`);
    if (
      (document.getElementById(`cb-toggle`).classList.add(`cb-pinged`),
      e.classList.toggle(`cb-open`, G),
      (t.style.display = G ? `none` : `block`),
      (n.style.display = G ? `block` : `none`),
      G)
    ) {
      document.getElementById(`cb-messages`).innerHTML = ``;
      let e = Y(``);
      ((e.innerHTML = `Hi! I'm Nishmika's assistant. How can I help you today?`),
        setTimeout(() => {
          Qe([
            `Who is Nishmika?`,
            `What are his services?`,
            `How to contact him?`,
          ]);
        }, 300));
    }
  }
  function J(e) {
    return U.parse(e);
  }
  function Xe(e) {
    let t = document.getElementById(`cb-messages`),
      n = document.createElement(`div`);
    n.className = `cb-msg-row cb-msg-row-user`;
    let r = document.createElement(`div`);
    return (
      (r.className = `cb-msg cb-msg-user`),
      (r.textContent = e),
      n.appendChild(r),
      t.appendChild(n),
      Z(),
      r
    );
  }
  function Y(e) {
    let t = document.getElementById(`cb-messages`),
      n = document.createElement(`div`);
    n.className = `cb-msg-row cb-msg-row-bot`;
    let r = document.createElement(`div`);
    ((r.className = `cb-avatar-bot`), (r.innerHTML = Ge));
    let i = document.createElement(`div`);
    return (
      (i.className = `cb-msg cb-msg-bot`),
      (i.textContent = e),
      n.appendChild(r),
      n.appendChild(i),
      t.appendChild(n),
      Z(),
      i
    );
  }
  function Ze() {
    let e = document.getElementById(`cb-messages`),
      t = document.createElement(`div`);
    ((t.className = `cb-msg-row cb-msg-row-bot`), (t.id = `cb-typing`));
    let n = document.createElement(`div`);
    ((n.className = `cb-avatar-bot`), (n.innerHTML = Ge));
    let r = document.createElement(`div`);
    ((r.className = `cb-msg cb-msg-bot cb-typing`),
      (r.innerHTML = `<span></span><span></span><span></span>`),
      t.appendChild(n),
      t.appendChild(r),
      e.appendChild(t),
      Z());
  }
  function X() {
    let e = document.getElementById(`cb-typing`);
    e && e.remove();
  }
  function Z() {
    let e = document.getElementById(`cb-messages-layer`);
    e.scrollTop = e.scrollHeight;
  }
  function Q(e) {
    let t = document.getElementById(`cb-input`),
      n = document.getElementById(`cb-send`);
    ((t.disabled = !e), (n.disabled = !e));
  }
  function Qe(e) {
    let t = document.getElementById(`cb-quick-replies-container`);
    t.innerHTML = ``;
    let n = document.createElement(`div`);
    ((n.className = `cb-quick-replies`),
      e.forEach((e) => {
        let t = document.createElement(`button`);
        ((t.className = `cb-quick-reply`),
          (t.textContent = e),
          (t.onclick = () => {
            ((document.getElementById(`cb-input`).value = e), $(), n.remove());
          }),
          n.appendChild(t));
      }),
      t.appendChild(n));
  }
  async function $e(e, t, n = 2) {
    for (let r = 1; r <= n; r++)
      try {
        let n = await fetch(e, { ...t, signal: AbortSignal.timeout(15e3) });
        if (!n.ok) throw Error(`HTTP ${n.status}`);
        return await n.json();
      } catch (e) {
        if (r === n) throw e;
        await new Promise((e) => setTimeout(e, 1e3));
      }
  }
  async function $() {
    let e = document.getElementById(`cb-input`),
      t = e.value.trim();
    if (!t || K) return;
    ((e.value = ``), (e.style.height = `auto`));
    let n = document.querySelector(`.cb-quick-replies`);
    if ((n && n.remove(), Xe(t), Ze(), Q(!1), (K = !0), Ke[t])) {
      setTimeout(() => {
        (X(), tt(Ke[t]));
      }, 600);
      return;
    }
    try {
      et(
        (
          await $e(`${He}/rag/ask/stream`, {
            method: `POST`,
            headers: { "Content-Type": `application/json` },
            body: JSON.stringify({ question: t, sessionId: qe }),
          })
        ).streamId,
      );
    } catch {
      X();
      let e = Y(``);
      ((e.textContent = `Sorry, I'm having trouble connecting to the server.`),
        (K = !1),
        Q(!0));
    }
  }
  function et(e) {
    q && q.close();
    let t = new EventSource(`${He}/rag/stream/${e}`);
    q = t;
    let n = null,
      r = ``,
      i = [],
      a = !1;
    function o() {
      if (i.length === 0) {
        ((a = !1), n && (n.innerHTML = J(r)));
        return;
      }
      a = !0;
      let e = i.shift();
      ((r += e), (n.textContent = r), Z(), setTimeout(o, 6));
    }
    function s(e) {
      for (let t of e) i.push(t);
      a || o();
    }
    let c = setTimeout(() => {
      (t.close(),
        n ||
          (X(),
          Y(
            `Sorry, the AI service is currently unavailable or taking too long. Please try again later.`,
          )),
        (K = !1),
        Q(!0));
    }, 1e4);
    (t.addEventListener(`token`, (e) => {
      clearTimeout(c);
      let { text: t } = JSON.parse(e.data);
      ((n ||= (X(), Y(``))), s(t));
    }),
      t.addEventListener(`error`, () => {
        (clearTimeout(c),
          t.close(),
          n ||
            (X(),
            Y(`Sorry, an error occurred while connecting to the server.`)),
          (K = !1),
          Q(!0));
      }),
      t.addEventListener(`done`, () => {
        (clearTimeout(c), t.close());
        let e = () => {
          i.length > 0 || a ? setTimeout(e, 50) : ((K = !1), Q(!0));
        };
        e();
      }));
  }
  function tt(e) {
    let t = Y(``),
      n = 0,
      r = ``;
    function i() {
      n < e.length
        ? ((r += e[n]), (t.textContent = r), n++, Z(), setTimeout(i, 10))
        : ((t.innerHTML = J(e)), (K = !1), Q(!0));
    }
    i();
  }
  Je();
})();
