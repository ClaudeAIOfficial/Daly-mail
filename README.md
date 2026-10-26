# Daily Mail homepage clone (static archive)

This is a standalone, self-contained reconstruction of the Daily Mail UK homepage as captured in the supplied ZIP on 26 October 2026. It includes the original page markup, styles, and locally archived images. It is **not** an official Daily Mail website.

## Run it

From this folder:

```bash
python -m http.server 8080
```

Visit `http://localhost:8080`. You can also double-click `index.html` to view the visual snapshot, although search works best when served over HTTP.

## Included

- `index.html`: original homepage layout and headlines, cleaned of analytics scripts.
- `images/`: bundled archive images, icons and logos.
- `styles/`: bundled original page CSS, plus small local adjustments.
- `pages/`: linked headline previews and category browsing pages, generated from the supplied homepage data.
- `story-data.json`: editable list of extracted headlines, images, snippets and categories.
- `clone.js`: local headline search. Press `/` or `Ctrl+K` (on Mac, `Cmd+K`).

## Limitations

This is a fixed editorial snapshot, not a live feed. The source ZIP did not include full article pages, so article links open local **previews** showing the information present in the saved homepage. Original logins, subscriptions, video advertising, analytics and comments are not functional. Certain outbound links point to third-party websites. Do not use this clone to impersonate the news publisher or collect credentials.
