var express = require('express');
var app = express();
fs = require('fs');
var pub = __dirname;

app.use(express.static(pub));

app.set('view engine', 'jade');
app.set('views', __dirname);

//при чтение файла с сервера в буфер и в строку возникают неожиданные проблемы, не знаю с чем связано...
//regexps работают отлично

var message = `
        Sitting Quietly
        兀然無事坐、春夾草自生
        "Sitting quietly, doing nothing,
        Spring comes, and the grass grows by itself." Zenrin Kushû (The Way of Zen 134, 222)

        Suchness
        青山自青山、白雲自白雲
        "The blue mountains are of themselves blue mountains;
        "The white clouds are of themselves white clouds." Zenrin Kushû (The Way of Zen 134, 222)

        Mountains are Mountains
        老僧三十年前未參禪時、見山是山、見水是水、及至後夾親見知識、有箇入處、見山不是山、見水不是水、而今得箇體歇處、依然見山秪是山、見水秪是水
        Before I had studied Zen for thirty years, I saw mountains as mountains, and waters as waters. When I arrived at a more intimate knowledge, I came to the point where I saw that mountains are not mountains, and waters are not waters. But now that I have got its very substance I am at rest. For it's just that I see mountains once again as mountains, and waters once again as waters. 13
        13 Ch'uan Teng Lu, 22. (The Way of Zen 126)

        Eternity in an hour
        萬古長空      An eternity of endless space:
        一朝風月      A day of wind and moon.
        "One of the most frequently reiterated couplets in Chinese Zen literature" (The Golden Age of Zen 246)

        Oneness
        天地同根      Heaven and earth and I are of the same root,
        萬物一體      The ten-thousand things and I are of one substance.
        Zen Master Sêng-chao/Sõjõ (僧肇 384-414)

        Unity
        Merge your mind with cosmic space, integrate your actions with myriad forms.
        Ch'an master Hung-chih Cheng-chüeh (宏智正覺 Wanshi Shõkaku, 1091-1157)

        Subtlety
        入林不動草、入水不立波
        "Entering the forest he moves not the grass;
        Entering the water he makes not a ripple." Zenrin Kushû (The Way of Zen 152, 224)

        Everyday Mind
        争如著衣喫飲、此外更無佛祖 "There's nothing equal to wearing clothes and eating food. Outside this there are neither Buddhas nor Patriarchs." Zenrin Kushû (The Way of Zen 152, 224)

        Seeking the Same Thing
        From the K'un-lun mountains eastward the term "Great Oneness" is used. From Kashmir westward the term sambodhi is used. Whether one looks longingly toward "non-being" or cultivates "emptiness", the principle involved is the same. 4
        4 Quoted by Fung Yu-lan, vol. 2, p. 240, from Seng-yu, Ch'u San-tsang Chi-chi, 9. (The Way of Zen 82)

        Ocean of Pure Reality
        清淨眞如海 Ocean of pure Reality,
        湛然體常住 Its substance, in fathomless quiescence, exists eternally.
        Ch'an master Fo-kuang Ju-man (佛光如滿 Bukkõ Nyoman)

        Great Unity
        有一物上拄天下拄地。黒似漆。常在動用中。
        There is one thing: above, it supports Heaven; below, it upholds Earth. It is black like lacquer, always actively functioning.
        Ch'an master Tung-shan Ling-chia (洞山良价 Tõsan Ryõkai, 807-869)

        Man of Tao
        譬如秋水澄渟清浄無爲澹泞無礙。喚他作道人亦名無事人。
        Like the clear stillness of autumn water—pure and without activity; in its tranquil depths are no obstructions. Such an one is called a man of Tao, also, a man who has nothing further to do.
        Wei-shan Ling-yu (溈山靈祐 Isan Reiyû)

        Nondiscrimination
        善與不善、世出世間、一切諸法莫記憶、莫緣念、放捨身心、今其自在。心如木石、無所辨別。
        "When you forget the good and the non-good, the worldly life and the religious life, and all other dharmas, and permit no thoughts relating to them to arise, and you abandon body and mind—then there is complete freedom. When the mind is like wood or stone, there is nothing to be discriminated." Pai-chang Huai-hai (百丈懷海 Hyakujõ Ekai, 720-814)

        Speech and Silence
        語是謗、寂是誑、語寂向上有路在
        "Speech is blasphemy, silence a lie. Above speech and silence there is a way out."
        I-tuan one of Nan-ch'uan's great disciples (The Golden Age of Zen 250, 322 n.13)

        Inexpressible
        説不處用無盡         What is inexpressible is inexhaustible in its use.
        A Chinese Zen master (The Golden Age of Zen 253, 322 n.19)

        Independent
        寧可永刧受沈淪、不從諸聖求解脱
        I would rather sink to the bottom of the sea for endless eons than seek liberation through all the saints of the universe. Shih-t'ou(The Golden Age of Zen 270, 323 n.57)

        Independent
        丈夫自有衝天志    The full-grown man aspires to pierce through the heavens:
        莫向如夾行處行    Let him not walk in the footsteps of the Buddha!
        Ts'ui-yen (The Golden Age of Zen 270, 323 n.59)

        Bodhidharma's Definition of Zen
        Four Sacred Verses of Bodhidharma
        教外別傳      Kyõge betsuden        A special transmission outside the scriptures;
        不立文字      Furyû monji               No dependence upon words and letters;
        直指人心      Jikishi ninshin                        Direct pointing at the soul of man;
        見性成佛      Kenshõ jõbutsu        Seeing into one's nature and the attainment of Buddhahood.
        Bodhidharma (Essays in Zen Buddhism – First Series 176)

        Accomplishing Beforehand
        "When the task is done beforehand, then it is easy." Zen master Yuan-tong
        (The Tao of Abundance 100)

        Begin at the Top
        If you want to climb a mountain, begin at the top. Zen saying

        Every Day is a Good Day
        日日是好日
        "Everyday is a good day." (Nichi nichi kore kõjitsu.)

        No Work, No Eating
        一日不作、一日不食
        "A day without work, a day without eating."
        Pai-chang Huai-hai (百丈懷海 Hyakujõ Ekai, 720-814)

        Living Dead
        許多死漢、送一個活漢 What a long procession of dead bodies follows the wake of a single living person! Chao-chou Ts'ung-shen (趙州從諗Jõshû Jûshin)

        Mind is Buddha
        Asked "What is buddha?" Ma-tsu replied "This very mind, this is Buddha."
        Mumonkan case 30 (The Development of Chinese Zen After the Sixth Patriarch 53)

        No Mind No Buddha
        Asked "What is buddha?" Ma-tsu replied "Neither mind nor Buddha."
        Mumonkan case 33 (The Development of Chinese Zen After the Sixth Patriarch 53)

        This Very Mind is Buddha
        自心是佛 Jishin zebutsu. "Your own mind—this is Buddha." Ma-tsu
        (The Development of Chinese Zen After the Sixth Patriarch 55)

        No Mind No Buddha Not a Thing
        不是心不是佛不是物 "This is not mind, this is not Buddha, this is not a thing." (Fuzeshin, fuzebutsu, fuzemotsu.)

        No Clinging
        不着不求 "No clinging, no seeking."
        (The Development of Chinese Zen After the Sixth Patriarch 62)

        All Dharmas are Mind-Created
        故三界唯心 "Therefore the Three Realms are only mind"
        法界一相 Ultimate reality has a unified form. (Fa-chieh i-hsiang./Hokkai issõ.) Buddha
        (Early Ch'an in China and Tibet 107)

        Great Tao
        不二大道 "The non-dual Great Tao."  Chao-chou Ts'ung-shên (趙州 Jõshû Jûshin)

        No Delusive Thoughts
        幕妄想 "Away with your delusive thoughts!" "Don't be deluded!"
        Ch'an master Wu-ye (Mugõ, 760-821)
`;

app.get('/', function(req, res) {
    res.render('./views/index.jade', {
        quote: obfuscate(message)
    });
});

app.listen(3001, function() {
    console.log('App listening on port 3001!');
});

var obfuscate = function(data) {
    let sp = /[^_]+?\)\n/g;
    let elems = data.match(sp);
    let ran = Math.floor(Math.random() * elems.length);
    return elems[ran];
}
