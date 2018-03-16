const posts = [
   {
      "code":"BAcyDyQwcXX",
      "caption":"Lunch #hamont",
      "likes":56,
      "id":"1161022966406956503",
      "display_src":"https://scontent.cdninstagram.com/hphotos-xap1/t51.2885-15/e35/12552326_495932673919321_1443393332_n.jpg"
   },
   {
      "code":"BAcJeJrQca9",
      "caption":"Snow! ⛄️🌨❄️ #lifewithsnickers",
      "likes":59,
      "id":"1160844458347054781",
      "display_src":"https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e35/12407344_1283694208323785_735653395_n.jpg"
   },
   {
      "code":"BAF_KY4wcRY",
      "caption":"Cleaned my office and mounted my recording gear overhead. Stoked for 2016!",
      "likes":79,
      "id":"1154606670337393752",
      "display_src":"https://scontent.cdninstagram.com/hphotos-xpf1/t51.2885-15/e35/923995_1704188643150533_1383710275_n.jpg"
   },
   {
      "code":"BAPIPRjQce9",
      "caption":"Making baby pancakes for one early rising baby. ☕️🍴",
      "likes":47,
      "id":"1157179863266871229",
      "display_src":"https://scontent.cdninstagram.com/hphotos-xap1/t51.2885-15/e35/12407480_1654828594805097_152207166_n.jpg"
   }
   // {
   //    "code":"_XpJcrwcSn",
   //    "caption":"6 page spread on flexbox in this months netmag!",
   //    "likes":74,
   //    "id":"1141561999742846119",
   //    "display_src":"https://scontent.cdninstagram.com/hphotos-xfp1/t51.2885-15/e35/12362588_1688046211438811_1395882545_n.jpg"
   // },
   // {
   //    "code":"_KnU7MwceA",
   //    "caption":"Hanging out in my office waiting for 5:00 beers to come around.",
   //    "likes":54,
   //    "id":"1137894817632733056",
   //    "display_src":"https://scontent.cdninstagram.com/hphotos-xfp1/t51.2885-15/e35/12301208_1533749386944985_1334730917_n.jpg"
   // },
   // {
   //    "code":"_HMejJQcY5",
   //    "caption":"Today I learned that a long pull espresso is called a 'lungo'",
   //    "likes":18,
   //    "id":"1136932306813044281",
   //    "display_src":"https://scontent.cdninstagram.com/hphotos-xft1/t51.2885-15/e35/12357319_493317964181479_310198908_n.jpg"
   // },
   // {
   //    "code":"_Fq2zmwcaz",
   //    "caption":"Awesome hand lettered gift from @eunibae and the HackerYou crew.",
   //    "likes":48,
   //    "id":"1136502965197194931",
   //    "display_src":"https://scontent.cdninstagram.com/hphotos-xfp1/t51.2885-15/e35/12317458_1692845870986430_331905833_n.jpg"
   // },
   // {
   //    "code":"_A2r0aQcfD",
   //    "caption":"Some serious hardware meet JavaScript hacks going down this week at hackeryou. Excited for demo day!",
   //    "likes":57,
   //    "id":"1135147611821557699",
   //    "display_src":"https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e35/12276809_750065668431999_184252508_n.jpg"
   // },
   // {
   //    "code":"-1rhFawccs",
   //    "caption":"Some major audio upgrades coming to my next videos 😍",
   //    "likes":39,
   //    "id":"1132002270913873708",
   //    "display_src":"https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e35/12331333_1650987978502155_1162510634_n.jpg"
   // },
   // {
   //    "code":"-pjx-gQcVi",
   //    "caption":"My baby and me. Thanks to @bearandsparrow for this one.",
   //    "likes":81,
   //    "id":"1128590547628442978",
   //    "display_src":"https://scontent.cdninstagram.com/hphotos-xtf1/t51.2885-15/e35/12298962_863814057068027_460827278_n.jpg"
   // },
   // {
   //    "code":"-oTZ0zQcWt",
   //    "caption":"It's too early. Send coffee.",
   //    "likes":81,
   //    "id":"1128237044221461933",
   //    "display_src":"https://scontent.cdninstagram.com/hphotos-xtf1/t51.2885-15/e35/12328347_990748230999662_1512917342_n.jpg"
   // },
   // {
   //    "code":"-mxKQoQcQh",
   //    "caption":"They both have figured it out. #lifewithsnickers",
   //    "likes":47,
   //    "id":"1127804966031967265",
   //    "display_src":"https://scontent.cdninstagram.com/hphotos-xtp1/t51.2885-15/e35/12256736_1758525004381641_1136705181_n.jpg"
   // },
   // {
   //    "code":"-fasqlQceO",
   //    "caption":"Kaitlin decorated the house for the Christmas. So gezellig! #casabos",
   //    "likes":46,
   //    "id":"1125735850454402958",
   //    "display_src":"https://scontent.cdninstagram.com/hphotos-xpt1/t51.2885-15/e35/12277581_1028556737218368_1184190781_n.jpg"
   // },
   // {
   //    "code":"-VBgtGQcSf",
   //    "caption":"Trying the new Hamilton Brewery beer. Big fan.",
   //    "likes":27,
   //    "id":"1122810327591928991",
   //    "display_src":"https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e35/12224456_175248682823294_1558707223_n.jpg"
   // },
   // {
   //    "code":"-FpTyHQcau",
   //    "caption":"I'm in Austin for a conference and doing some training. Enjoying some local brew with my baby.",
   //    "likes":82,
   //    "id":"1118481761857291950",
   //    "display_src":"https://scontent.cdninstagram.com/hphotos-xpt1/t51.2885-15/e35/11326072_550275398458202_1726754023_n.jpg"
   // }
];


export default posts;
