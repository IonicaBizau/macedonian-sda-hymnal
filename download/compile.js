import fs from "fs/promises";
import path from "path";
import { start } from "repl";

const __dirname = path.dirname(new URL(import.meta.url).pathname);

(async () => {
    const files = await fs.readdir(path.join(__dirname, "json"));

    const finalJson = {
        lang: "mk",
        header: {
            title: "Macedonian SDA Hymnal",
            shortTitle: "Macedonian Hymnal"
        },
        hymns: [],
        topics: [{
            name: "За слава и благодарност на Бога – Adoration and Praise",
            start: "1",
            end: "19"
        }, {
            name: "За Светиот Дух – For the Holy Spirit",
            start: "20",
            end: "23"
        }, {
            name: "За Речта Господова – For the Word of God",
            start: "24",
            end: "32"
        }, {
            name: "За денот Господен – For the Lord’s Day",
            start: "33",
            end: "57"
        }, {
            name: "За Христовиот живот и работа – For the Life and Work of Christ",
            start: "58",
            end: "94"
        }, {
            name: "За копнеж и предана служба – For Longing and Devoted Service",
            start: "95",
            end: "147"
        }, {
            name: "За сигурност во Исуса – For Security in Jesus",
            start: "148",
            end: "198"
        }, {
            name: "За молитва и работа – For Prayer and Work",
            start: "199",
            end: "225"
        }, {
            name: "За вера, љубов и надеж – For Faith, Love and Hope",
            start: "226",
            end: "244"
        }, {
            name: "За блажен живот во Христа – For a Blessed Life in Christ",
            start: "245",
            end: "284"
        }, {
            name: "Утрински и вечерни песни – Morning and Evening Songs",
            start: "285",
            end: "291"
        }, {
            name: "Обредни песни – Ritual Songs",
            start: "292",
            end: "300"
        }, {
            name: "Разни песни – Miscellaneous Songs",
            start: "301",
            end: "340"
        }]
    };

    const findTopic = (num, topics) => {
        for (const topic of topics) {
            if (num >= topic.start && num <= topic.end) {
                return topic.name;
            }
        }
        throw new Error(`No topic found for hymn number ${num}`);
    }

    for (const file of files) {
        const content = await fs.readFile(path.join(__dirname, "json", file), "utf-8");
        const json = JSON.parse(content);
        finalJson.hymns.push({
            num: json.songNumber.toString(),
            title: json.title,
            topic: findTopic(json.songNumber, finalJson.topics),
            stanzas: {
                verses: json.verses.filter(v => v.content.refrain === false).map(v => v.content.lines),
                refrain: json.verses.find(v => v.content.refrain === true)?.content?.lines || undefined
            }
        });
    }

    console.log(JSON.stringify(finalJson, null, 4));
})();

/*
{
    "hymns": [
        {
            "title": "Before Jehovah’s Awful Throne",
            "topic": "Adoration",
            "stanzas": {
                "verses": [
                    [
                        "Before Jehovah’s awful throne,",
                        "Ye nations bow with sacred joy;",
                        "Know that the Lord is God alone;",
                        "He can create, and He destroy."
                    ],
                    [
                        "His sovereign power, without our aid,",
                        "Made us of clay, and formed us men;",
                        "And when like wandering sheep we strayed,",
                        "He brought us to His fold again."
                    ],
                    [
                        "We’ll crowd His gates with thankful songs,",
                        "High as the heavens our voices raise;",
                        "And earth, with her ten thousand tongues,",
                        "Shall fill His courts with sounding praise."
                    ],
                    [
                        "Wide as the world is His command,",
                        "Vast as Eternity His love;",
                        "Firm as a rock His truth shall stand,",
                        "When rolling years shall cease to move."
                    ]
                ],
                "refrain": []
            }
        },
        {
        }
    ]
}
*/
