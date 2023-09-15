---
title: Who
date: "2011-01-23"
thumbnail: ./kdo.jpg
description: Research & Text Processing & Audio
tags: ["interactive", "art", "featured"]
teaser_color: white
teaser_overlay: "black"
---

<div class="p-row p-row_center">

<div class="p-col p-col_12" style="text-align: center; padding-bottom: 4rem;">

`audio: /kdo.mp3`

</div>

<div class="p-col p-col_12" style="text-align: center; padding-bottom: 4rem;">

Generator of endless speach about "US" and "THEM" forcing the listener to guess who is who.

</div>

<div class="p-col p-col_12 p-col_md_6 p-col_lg_4">

Data source:

I crawled discussions on Czech news servers in January 2011, collecting xenofobous & racist judgements. Example:

- "Germans were allways against us."
- "Sweedish people never want to give us work."
- "Gipsies will never work."
- "Ukraininians came to take our jobs!"

</div>

<div class="p-col p-col_12 p-col_md_6 p-col_lg_4">

Generalisation:

Particular nations were replaced by us and them:

- "They were allways against us."
- "They never want to give us work."
- "They will never work."
- "Ukrainians came to take our jobs!"

</div>

<div class="p-col p-col_12 p-col_md_6 p-col_lg_4">

Generating the endless speach:

Using a Markov chain algorithm, I generated an endless speach. Each two neighbouring sentences make sense. But the general text does not as the meaning of US and THEM changes constantly.

"They came to take our jobs! They were allways against us. They will never work. They never want to give us work."

</div>

</div>
