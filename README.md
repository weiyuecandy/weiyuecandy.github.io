# Wei Yue — academic homepage (V8, multi-page)

Files:
- `index.html`: About / Biography / Contact
- `research.html`: Design · Embody · Act framework and images
- `publications.html`: featured journals + complete 37-work bibliography
- `highlights.html`: research coverage and 12 honors/awards from CV
- `styles.css`, `site.js`, `assets/`: required website support files

**Preview:** Unzip, then open `index.html` in a web browser. All files must remain together in the same extracted directory. The site does not load remote frameworks or fonts.

**GitHub Pages:** Create a repository named `YOUR_USERNAME.github.io`, upload the *contents* of this folder to repository root, and enable Pages under Settings → Pages → Deploy from branch (main, /root). Your site should become `https://YOUR_USERNAME.github.io`.

The supplied academic CV is used for the awards list, but the original CV PDF is not included because it contains a personal phone number.

External links will require internet access.

### Version 8.3
Fixed Back to top on all four pages (static top anchor and smooth scroll).

V8.4: Highlights page updated with six linked news articles, a linked Instagram post, and two journal cover features. The BBC and Instagram content could not be fully verified by automated preview, so neutral descriptions are used.

V8.5: Instagram post has been integrated into the News & Media grid on Highlights, removing the separate Social Media section.

V8.6 update: Added a Transducers 2023 oral-presentation photo and highlight, and annotated the associated swarm-robot conference publication. Research videos not added.

V8.7 update: Moved the Transducers 2023 oral-presentation image from Highlights into the fifth Selected Publications carousel slide. Renamed the Instagram news card to emphasize microrobotics and magnetic actuation (specific Instagram caption not publicly verifiable).

V8.8: Corrected the Instagram News & Media card to identify the Advanced Materials Technologies weakly coupled resonator optimization paper.


## V8.9 embedded research videos

Nine short, web-optimized MP4 videos have been added to `research.html` under the EMBODY and ACT sections. The videos are stored in `assets/videos/` and can be opened locally after extracting the entire ZIP. The PowerPoint source file remains unchanged. The videos are user-provided seminar material; please review permissions and unpublished content before publishing the website.


## Video playback corrected to match PowerPoint

Videos were re-exported from the original PhD Seminar.pptx applying PowerPoint
`p14:trim` start / end-removal offsets and `a:srcRect` spatial cropping
for each video shape, rather than using the entire raw media file.
Player aspect ratios now match their respective video frame crop, and posters
are generated from the corrected media. Videos do not autoplay.

The exact values used for these nine clips are documented in
`VIDEO_TRIM_AND_CROP.csv`.


## Google Search indexing (SEO)
The website includes sitemap.xml, robots.txt, canonical links, and structured-data metadata.
In Google Search Console add the URL-prefix property https://weiyuecandy.github.io/ and verify ownership.
Use URL Inspection to request indexing of the homepage and submit sitemap.xml in Sitemaps.
Google ownership verification HTML file is account-specific: download it from Search Console and upload it unchanged to the GitHub repository root.
