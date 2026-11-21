# 20 November 2026 in one image

[![make.fun · news-image-20261120](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![rank](https://make.fun/badge/news-image-20261120/sontv01034/news-image-20261120/rank.svg)](https://make.fun/bounty/news-image-20261120/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![reward](https://make.fun/badge/news-image-20261120/sontv01034/news-image-20261120/reward.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)

One image summing up the world's news of Friday, 20 November 2026, built for the make.fun bounty of the same name.

## The day, in six stories

- **Kyiv bridges hit** — Russia fires 400+ drones and 110 missiles; three bridges over the Dnipro are struck, 8 killed and ~30 hurt, and two missiles land in Poland.
- **Record IPO, rout** — Anthropic stages the largest IPO ever ($81bn raised, shares +17% to $97.17) while the Dow falls 1,101 points and the S&P 500 posts a sixth straight loss.
- **COP31 stalls** — On the final day in Antalya, the revised draft drops every fossil-fuel reference and the $120bn adaptation-finance figure.
- **Hormuz blockade** — The US naval blockade holds as Iran threatens Gulf oil and tanker convoys; Saudi defences down a Houthi missile and five drones.
- **Crimean Bridge** — Ukrainian strikes damage the Kerch Bridge's road and rail spans; Russia vows retaliation and rations fuel in Sevastopol.
- **Haiti raid** — Police kill 34 gang suspects in a raid on the Martissant stronghold.

Also: the Senate passes the permitting bill 62–33; the EU and UK conclude deals at their second summit; Hungary lifts its veto on Ukraine's EU accession clusters.

## How the image is made

`entry.png` (1024×1024) is drawn programmatically with Python and Pillow — a dark news-board layout with one panel per story, so every word stays legible even at small sizes. No AI image generation was used for the text.

`main.ts` is the entrypoint: it copies `entry.png` to the output directory the grader provides.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Sources

Reuters, AP, Kyiv and COP31 reporting from 20 November 2026.
