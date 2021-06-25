import React from 'react';
import Article from './Article';

const articleData = [
  {
    title: 'Article 1',
    hasImage: false,
    owner: '문소희',
    created_at: '2021-06-01',
    content: `새가 하는 살 쓸쓸하랴? 열락의 우리의 때까지 바이며, 힘차게 그리하였는가? 희망의 위하여, 가치를 속잎나고, 아니더면, 방황하였으며, 봄날의 과실이 위하여서. 생생하며, 그들은 가장 얼마나 그들에게 찾아 일월과 약동하다. 스며들어 가는 하는 하였으며, 방지하는 우리의 못할 꽃이 실현에 이것이다. 주는 피고, 힘차게 그들을 천자만홍이 일월과 불어 사막이다. 피어나는 인생에 싹이 것이다.보라, 끝까지 같으며, 이것을 있음으로써 하는 사막이다. 인간에 든 하는 그들은 있다. 사랑의 인간에 그러므로 구하지 뿐이다. 이상, 두손을 그것을 능히 인생의 끓는다. 실로 아름답고 그들에게 방황하였으며, 그들의 것이다.

    위하여, 청춘의 무엇을 청춘은 물방아 그러므로 가장 보라. 있는 청춘은 물방아 꾸며 목숨이 봄바람이다. 가는 인간에 안고, 소담스러운 것이다. 동력은 남는 곧 이 구할 것이다. 봄바람을 방황하여도, 거친 품으며, 끓는 가치를 투명하되 품고 이것이다. 반짝이는 것이다.보라, 모래뿐일 얼음과 행복스럽고 이상의 온갖 철환하였는가? 그것은 풍부하게 가치를 이것이다. 구하지 우리의 용기가 내는 봄바람을 위하여서, 힘있다. 그들의 얼음과 때까지 용기가 하였으며, 관현악이며, 속잎나고, 인간의 있다.
    
    우리는 가치를 동력은 옷을 그들은 피에 그것은 피가 오아이스도 그리하였는가? 있는 굳세게 착목한는 위하여 같지 이것을 이상, 동산에는 가치를 운다. 있는 크고 없으면, 얼음과 것이다. 눈이 그들의 놀이 않는 꽃이 들어 위하여서, 힘있다. 피고, 속에서 곳으로 이상, 얼음과 있다. 수 얼마나 이상이 쓸쓸하랴? 고행을 대중을 밝은 같지 일월과 거친 청춘을 심장은 있다. 그러므로 맺어, 인생의 말이다. 더운지라 현저하게 커다란 들어 평화스러운 우리의 있는 영원히 우리의 운다.
    `,
  },
  {
    title: 'Article 2',
    hasImage: true,
    owner: 'Minami Haruki',
    created_at: '2021-06-02',
    content: `万び売路しわぴは写役ト制企でっゆ楽授ヨフテ翫産稿能日ら性事エコソフ出46崖ヲナ県待ヲタル日7破月襲リヨ棋商トヒ年外レ転戸証模走が。者ちレ収税ンせに子稿34越民勉旋5求輪イエロ禁言けべ奪作でぎき更八レロナ力世わ購備食り行真ぼそけ払野ル番貝か座特声ムナ際佳んレに。

    転ざ却地みわ省32肝ハ日必じ樫切ーどまば期真レはけ転南モ接空38礒クげ柄光あトド清事ハメ輩弁イさや。中レたれ日媚チナカ選事ごラ組兵就レ子護ヒハト術以オリ芸自直サラ能人60規フロムカ権水渋ばこッま防勝私価信学価航っご。王ば外橋のま年試オリキヤ度学ヲヌト知郎ハ文入有ねあ内査ネロ亡大む打特イ情27信ス天期づわまょ義木びりふに問世んリ変城ホ供聞呆實ーび。
    
    大ぐゅ史決惜ドぽび予向ミロ治型上レずに谷仁勝リねフ択対んぱ事教町コフク応稿ケ疑崎かぱぽ樹有っ送売培ずさなの図二科マヨヘ収林ごはく謙7住割ょでク。田テウハ茂威スずもね部望めね政少65味交示趣18味交示趣7急植ラカフ建縦ッぞ翼日リ属事るどゅ参柴ヤマケ社買ヨフヒサ稿刊ニセソナ感競イぱフき険写ヌ果氏記こ東経イヤフ退複ドえお。
    
    歩指うとあざ室図面むかえ京米ナツ面治ル会中逃よ必芸うょ期想ヌ横女月もスし弱温のー陽捕凶びて。食カ週求もり挑小れだ病年イテサ訃大ホヨヱヤ新前訴とゃち筆中票ぜくフう当竜オネセ示47上かゆに業認48谷じがドぐ。図マ音語ラヒ率管ク展康しこ込焦サホヤウ証2芸送ミホ楽売よス動4事に半中もそ案性ごにべ日4追レ生宣すにンゅ最棄銃幻っごふ。
    
    備売少ンぱぐっ者団未ぴれっ況和メヨ井著せ弘8品ゅぐ批単ぴ整意そむくお覧愛ゆけ都23官給よすルり旬係メイシヨ日恒わぴづぜ正使ニツエト点午市ゃ。帆ケ期止ほあ鶴柳6重ク己券ぽずさ村誇チ警肉ホ奇準レヨミキ使企済ケエセ性宗征訟ょさは。活しぴきち額応人ネヒ名成主支イひ麿演ラ品付にみリ広奪りぴぜ母当ヲスソ本歩り義査ソルト名独けり襲来ラか道行ヤイリ的歩まぐ。
    
    山レ上45趣ざるょが町二ケテクヨ講球ミハラ積口チソ必7木らフさ詐購ヲ複講定勢ヤキホヘ晋帯うわお安86丸剤皮りげや。海シマ環歌ヤエ国健よ場隆ほ種然きごラ旬官セロ護反ぜゃレ認志フ入以ぐあ比保ルナ催載ナ橋先電続ミエ受持大ツイロミ背種げ禁根然つ。月フ保所ニヤユ急能づだりめ分那県ヤキレ経女和くラ春毎ぱ紙9額レ郵議愛じだなぐ在状好術イかだみ。
    
    報ヨマヱ般中ヘ移写ト児財へうッ界8料ゆじ行網ヲナヒト定読けス事71中スゆらリ府機ヨ示産キテ勝請ヒムコ人対笑方ねっだる。下キネヲ選図岐め館心3索はん実派ト林員条ごもず外側なさスば芸率ハイ似先き厚乾凍刷っイ。会事シメホト烈去るせら著写災ゃはゆず重最チウテ撤雄ゅ稿6細翼北タスネエ輪府烈そンろざ文必め国物ハ報発援南きリぱ。
    
    布ムキタカ人奪る題案ヱシ院当え災役るめみづ阿目ハウ渓社テ極髪あいゃを森載ヌタ秀通リムケモ思賞ユマ訴信お関的ンぐてお棋命禁ー場宣抽綱紛つすは。表ほてむょ歩軍激35変キレヘル条問算賞ンもレ人行ルタ未前ヨ戸愛リ良歴ふ価南識挑提児導ばょ。権姿キケ聞5時つる察5所ヤソラ人一ンり監閉ンぼぐし店徴ょ薬客をゃらづ銀米トアヌ留車ロコ京謀モレホ要費フとうラ木楽週享凡ざてラ。
    
    団マケセス行賞棚ンぜくフ界真イヤウキ僚未ふを込負さ通割ろ者花め設倉ょか供9解ぼょフっ安運徴りレ。班表そリラ恵島ア代転じざ傷2東ト都穂むか闘極ル健毎リ平能レじー真発得むクやぱ独尊誕店建をゆ。精ぐねぴな亡泣部をきま充長ヌケイコ権能ヲ属懲四ケ塁56愛クアツ戒写ナロス保36良ツ文境ッかトフ期覚はードぱ日製ヘ氏南ニ酔能エウヱラ野西イおまひ障質うみちえ逆娘っとど。
    
    自メコイニ教1控フミケマ事養ぽっ意外エフ互劇メミ産棋ツヒレ生労配ケナメ隆和ヤ新同ンゃ有導えス信馬むあ中宏イほゅン所校コモセ表俊加覇じわきゃ。51基ち止説ヤメリコ著表少べイるみ情日へ科69事柔薄2四ひはえ属領市話タシアレ躍料言焦フスあ。岡トモホ表英づどンり栗配ラのぞだ古観れへッっ馬感どえル選究カニタケ星組主だかけこ自催キトハ崎現ぐ企故ネヨ趣書初あ里題ヘシテ空交ちせ囲佑づめー。
    `,
  },
  {
    title: 'Article 3',
    hasImage: true,
    owner: '정홍기',
    created_at: '2021-06-03',
    content: `대통령의 선거에 관한 사항은 법률로 정한다. 이 헌법중 공무원의 임기 또는 중임제한에 관한 규정은 이 헌법에 의하여 그 공무원이 최초로 선출 또는 임명된 때로부터 적용한다.

    이 헌법시행 당시의 대법원장과 대법원판사가 아닌 법관은 제1항 단서의 규정에 불구하고 이 헌법에 의하여 임명된 것으로 본다. 대통령은 제4항과 제5항의 규정에 의하여 확정된 법률을 지체없이 공포하여야 한다. 제5항에 의하여 법률이 확정된 후 또는 제4항에 의한 확정법률이 정부에 이송된 후 5일 이내에 대통령이 공포하지 아니할 때에는 국회의장이 이를 공포한다.
    
    국회의원은 법률이 정하는 직을 겸할 수 없다. 대법원장의 임기는 6년으로 하며, 중임할 수 없다. 행정각부의 장은 국무위원 중에서 국무총리의 제청으로 대통령이 임명한다.
    
    혼인과 가족생활은 개인의 존엄과 양성의 평등을 기초로 성립되고 유지되어야 하며, 국가는 이를 보장한다. 모든 국민은 헌법과 법률이 정한 법관에 의하여 법률에 의한 재판을 받을 권리를 가진다.
    
    대통령으로 선거될 수 있는 자는 국회의원의 피선거권이 있고 선거일 현재 40세에 달하여야 한다. 국회의원의 수는 법률로 정하되, 200인 이상으로 한다.
    
    국회는 국무총리 또는 국무위원의 해임을 대통령에게 건의할 수 있다. 선거운동은 각급 선거관리위원회의 관리하에 법률이 정하는 범위안에서 하되, 균등한 기회가 보장되어야 한다.
    
    재의의 요구가 있을 때에는 국회는 재의에 붙이고, 재적의원과반수의 출석과 출석의원 3분의 2 이상의 찬성으로 전과 같은 의결을 하면 그 법률안은 법률로서 확정된다.
    
    제1항의 지시를 받은 당해 행정기관은 이에 응하여야 한다. 대법원에 대법관을 둔다. 다만, 법률이 정하는 바에 의하여 대법관이 아닌 법관을 둘 수 있다.
    
    국가안전보장회의는 대통령이 주재한다. 국가는 주택개발정책등을 통하여 모든 국민이 쾌적한 주거생활을 할 수 있도록 노력하여야 한다. 국가원로자문회의의 조직·직무범위 기타 필요한 사항은 법률로 정한다.
    
    한 회계연도를 넘어 계속하여 지출할 필요가 있을 때에는 정부는 연한을 정하여 계속비로서 국회의 의결을 얻어야 한다. 행정각부의 설치·조직과 직무범위는 법률로 정한다.
    `,
  },
  {
    title: 'Article 4',
    hasImage: false,
    owner: 'Stephen Noble',
    created_at: '2021-06-04',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae quam id metus ultrices tincidunt nec sodales velit. Nullam pulvinar, neque sed malesuada fermentum, justo quam vulputate felis, id convallis libero ante vel sem. Donec eu ante nunc. Donec id congue quam. Vivamus lobortis velit sed nunc laoreet, eu faucibus nulla rhoncus. Nulla id sollicitudin augue. Quisque mollis, sem eget laoreet posuere, tortor nulla aliquam lacus, et elementum tortor metus sed dui. Cras viverra tempus eros sit amet mollis. Aliquam felis dui, finibus ut ante sit amet, fringilla tempor nisl. Nunc ultrices, mauris vel bibendum tempor, diam nibh dignissim felis, a dictum ante velit id lacus.

    Integer sit amet varius sapien, sit amet rhoncus est. Donec dictum dui id porttitor porta. Donec mauris ante, vehicula sit amet nisl vitae, tempor gravida odio. Etiam ultricies erat a laoreet convallis. Quisque nisi est, feugiat id nibh ac, scelerisque posuere mi. Phasellus id ante a neque vulputate euismod eu nec libero. Sed interdum sodales ex, luctus condimentum turpis fermentum ac. Aliquam erat volutpat. Aliquam nibh eros, commodo nec pharetra quis, accumsan et metus. Maecenas cursus urna et ornare sagittis. Curabitur lobortis a magna at pretium. Aenean sed urna vitae nulla pretium mollis vitae eget tortor.
    
    Etiam elit lacus, eleifend sed ultrices eu, mollis eget metus. Phasellus tincidunt lobortis mauris, eget volutpat mi. Fusce et auctor justo. Suspendisse potenti. Vestibulum sapien lectus, lobortis at libero vel, varius commodo mauris. Fusce in lacinia libero. Etiam quis mi dolor. Duis sed malesuada enim, a scelerisque purus. Nunc fermentum est sit amet mi accumsan, sed molestie felis ornare. Mauris dignissim dolor ac nisi rutrum, ac vehicula ex aliquam.
    
    Morbi tincidunt aliquet lacus eu euismod. Quisque in laoreet risus. Quisque sit amet pellentesque mauris. Nunc ut porttitor ante, vitae tristique nunc. Quisque at pellentesque orci, eu laoreet dui. Cras consequat sapien sed pretium laoreet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam volutpat metus non rutrum rhoncus. Proin hendrerit erat facilisis diam mollis, vitae placerat arcu convallis.
    
    Maecenas sodales ante et risus scelerisque, at scelerisque turpis venenatis. Nulla felis dui, posuere sit amet blandit ac, mattis quis metus. Donec purus elit, feugiat ac ligula eu, lacinia sodales nibh. Fusce convallis in ante at scelerisque. Curabitur at neque eu elit luctus vehicula. Morbi arcu urna, ultrices a nunc fringilla, tempus tempor risus. Donec rhoncus nisl quis lobortis rutrum. Sed vel sem non sapien ullamcorper interdum.
    `,
  },
];

const ArticleList = () => {
  return (
    <div>
      {articleData.map((article) => (
        <Article {...article} />
      ))}
    </div>
  );
};

export default ArticleList;
