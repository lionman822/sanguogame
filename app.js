const factions = ["曹魏", "蜀汉", "东吴", "其它"];

const generals = [
  {
    id: "zhang-liao",
    name: "张辽",
    faction: "曹魏",
    title: "威震逍遥津",
    color: "#7f94a0",
    stats: { might: 92, horse: 91, tactics: 88, nerve: 95 },
    mods: { approach: 5, arrows: 2, spears: 2, cavalry: 8, duel: 1, return: 8 },
  },
  {
    id: "xu-chu",
    name: "许褚",
    faction: "曹魏",
    title: "虎痴护军",
    color: "#b79a5d",
    stats: { might: 96, horse: 78, tactics: 62, nerve: 94 },
    mods: { approach: 0, arrows: -3, spears: 9, cavalry: -2, duel: 6, return: -3 },
  },
  {
    id: "xiahou-dun",
    name: "夏侯惇",
    faction: "曹魏",
    title: "拔矢啖睛",
    color: "#a64c48",
    stats: { might: 88, horse: 84, tactics: 77, nerve: 96 },
    mods: { approach: 1, arrows: 1, spears: 3, cavalry: 2, duel: 3, return: 1 },
  },
  {
    id: "pang-de",
    name: "庞德",
    faction: "曹魏",
    title: "白马将军",
    color: "#d6d2c5",
    stats: { might: 90, horse: 88, tactics: 74, nerve: 91 },
    mods: { approach: 4, arrows: 1, spears: 4, cavalry: 4, duel: 4, return: 2 },
  },
  {
    id: "guan-yu",
    name: "关羽",
    faction: "蜀汉",
    title: "万军中斩颜良",
    color: "#3f9b62",
    stats: { might: 99, horse: 93, tactics: 82, nerve: 99 },
    mods: { approach: 7, arrows: 5, spears: 8, cavalry: 4, duel: 16, return: 7 },
  },
  {
    id: "zhang-fei",
    name: "张飞",
    faction: "蜀汉",
    title: "据水断桥",
    color: "#4d4f58",
    stats: { might: 98, horse: 86, tactics: 66, nerve: 98 },
    mods: { approach: 3, arrows: -2, spears: 10, cavalry: 2, duel: 9, return: 0 },
  },
  {
    id: "zhao-yun",
    name: "赵云",
    faction: "蜀汉",
    title: "一身是胆",
    color: "#d9d9d3",
    stats: { might: 95, horse: 96, tactics: 84, nerve: 97 },
    mods: { approach: 7, arrows: 7, spears: 4, cavalry: 7, duel: 6, return: 11 },
  },
  {
    id: "ma-chao",
    name: "马超",
    faction: "蜀汉",
    title: "锦马超",
    color: "#7fb7d8",
    stats: { might: 96, horse: 99, tactics: 75, nerve: 93 },
    mods: { approach: 9, arrows: 5, spears: 5, cavalry: 9, duel: 7, return: 8 },
  },
  {
    id: "huang-zhong",
    name: "黄忠",
    faction: "蜀汉",
    title: "老当益壮",
    color: "#c2a85c",
    stats: { might: 91, horse: 82, tactics: 83, nerve: 92 },
    mods: { approach: 0, arrows: 8, spears: 2, cavalry: 0, duel: 4, return: 1 },
  },
  {
    id: "sun-ce",
    name: "孙策",
    faction: "东吴",
    title: "江东小霸王",
    color: "#cf5146",
    stats: { might: 95, horse: 91, tactics: 78, nerve: 96 },
    mods: { approach: 6, arrows: 2, spears: 6, cavalry: 5, duel: 8, return: 4 },
  },
  {
    id: "taishi-ci",
    name: "太史慈",
    faction: "东吴",
    title: "弓马双绝",
    color: "#5ea5aa",
    stats: { might: 91, horse: 90, tactics: 81, nerve: 92 },
    mods: { approach: 4, arrows: 8, spears: 2, cavalry: 4, duel: 4, return: 5 },
  },
  {
    id: "gan-ning",
    name: "甘宁",
    faction: "东吴",
    title: "锦帆夜袭",
    color: "#385d9d",
    stats: { might: 90, horse: 87, tactics: 86, nerve: 94 },
    mods: { approach: 5, arrows: 4, spears: 3, cavalry: 5, duel: 5, return: 7 },
  },
  {
    id: "zhou-tai",
    name: "周泰",
    faction: "东吴",
    title: "百创不退",
    color: "#8f4f72",
    stats: { might: 88, horse: 80, tactics: 69, nerve: 99 },
    mods: { approach: 1, arrows: 2, spears: 5, cavalry: -1, duel: 4, return: 0 },
  },
  {
    id: "lu-bu",
    name: "吕布",
    faction: "其它",
    title: "人中吕布",
    color: "#a63d37",
    stats: { might: 100, horse: 100, tactics: 70, nerve: 96 },
    mods: { approach: 10, arrows: 3, spears: 10, cavalry: 9, duel: 12, return: 5 },
  },
  {
    id: "wen-chou",
    name: "文丑",
    faction: "其它",
    title: "河北名将",
    color: "#a78549",
    stats: { might: 92, horse: 88, tactics: 70, nerve: 89 },
    mods: { approach: 2, arrows: 0, spears: 3, cavalry: 3, duel: 4, return: 0 },
  },
  {
    id: "hua-xiong",
    name: "华雄",
    faction: "其它",
    title: "汜水关猛将",
    color: "#6e5a4a",
    stats: { might: 90, horse: 78, tactics: 61, nerve: 88 },
    mods: { approach: -1, arrows: -3, spears: 5, cavalry: -2, duel: 4, return: -4 },
  },
];

const formation = {
  approach: 72,
  archers: 84,
  spears: 90,
  cavalry: 84,
  yanLiang: 96,
  pursuit: 83,
};

const reportLines = {
  opening: [
    "{name}在二百米外一夹马腹，马还没出汗，袁军鼓手已经先紧张到抢拍了半拍。",
    "{name}提兵器上马，远处袁军阵列一阵骚动：这位看着不像来谈判的。",
    "战鼓刚响，{name}便从营前冲出，速度快得像把军令状写在了风里。",
    "{name}单骑离营，尘土往后一甩，仿佛连退路都被他暂时寄存在马蹄下。",
  ],
  "approach.high": [
    "{name}起步极快，前哨盾手刚想摆个威风姿势，阵门已经被马蹄声敲得心里发虚。",
    "{name}马势笔直如箭，袁军第一排还在找准队形，他已经把距离砍掉一大截。",
    "{name}压着鼓点冲进旷地，袁军斥候回头一看，脸上写满了“这人怎么不减速”。",
  ],
  "approach.mid": [
    "{name}顶着号角推进，马蹄略被乱桩绊了节奏，好在气势还在，袁军没来得及笑出声。",
    "{name}穿过前哨坑线，速度不算完美，但也足够让盾手把盾牌抱得像祖传宝贝。",
    "起马这一段有些颠簸，{name}稳住缰绳，顺便把袁军阵门吓得提前合上。",
  ],
  "approach.low": [
    "袁军鼓声一压，{name}的坐骑踏到乱桩，开局吃了点亏；幸好人还在马上，面子暂时也在。",
    "{name}起步被坑线拖慢，袁军前排刚想松口气，又发现他根本没打算回头。",
    "旷地不太给面子，{name}的马蹄乱了一瞬，袁军趁机把盾牌摆得更像一堵脾气很差的墙。",
  ],
  "arrows.high": [
    "箭雨泼来，{name}贴着马颈穿缝而过，袁军弓手面面相觑：刚才射的是风吗？",
    "{name}在羽箭间左右一闪，像从暴雨里挑没雨的地方走，袁军弓阵当场失去一点自信。",
    "弦声齐响，{name}却从箭缝中钻出一条活路，弓手们差点怀疑自己是在伴奏。",
  ],
  "arrows.mid": [
    "{name}伏身避箭，几支羽箭擦甲而过，声音挺吓人，实际战果像账房漏算了零头。",
    "箭雨压来，{name}把身子贴低，硬是从一片寒光里挤出一条窄道。",
    "袁军齐射声势很足，{name}略吃了些亏，但马蹄没停，弓手们的喜色也没来得及挂稳。",
  ],
  "arrows.hurt": [
    "一支冷箭擦入肩甲，{name}闷哼一声，袁军刚要喝彩，又被他继续前冲噎了回去。",
    "箭阵咬住来路，{name}中了一记，伤不轻；不过他的眼神告诉弓手：这账先记着。",
    "羽箭落得密，{name}被逼得折线冲刺，场面狼狈了一点，但还远没到收摊的时候。",
  ],
  "arrows.bad": [
    "箭雨太密，{name}连受两创，袁军弓手终于找回职业尊严，虽然找得有点用力。",
    "袁军这一轮齐射准得不像临时工，{name}硬吃几箭，冲势被削得直冒火星。",
    "箭矢扑面而来，{name}的甲叶叮当乱响，听着像铁匠铺突然开张。",
  ],
  "spears.break": [
    "{name}直撞盾槊交界处，袁军前列被撕开口子，像一张被猛将强行翻页的竹简。",
    "盾槊墙被{name}一口气凿穿，前排士卒向两边倒卷，阵型当场少了点体面。",
    "{name}劈开拒马阵，马头硬挤入缺口，袁军盾手的表情比盾牌还僵。",
  ],
  "spears.hold": [
    "{name}硬挤入步阵，长槊擦身而过，阵线裂开但没崩；袁军算是保住了半张脸。",
    "盾槊阵被{name}撞得一阵晃，没全散，却也没人敢说这墙还很结实。",
    "{name}在槊尖里杀出一条窄缝，袁军前排被迫让路，让得很不情愿。",
  ],
  "spears.hurt": [
    "盾槊层层顶住马头，{name}劈翻数人，自己也被拖慢；这波像拿肩膀跟城门讲道理。",
    "袁军步阵合得紧，{name}一路硬拆，拆是拆动了，人和马也都被刮掉不少精神。",
    "{name}冲到槊林前被狠狠一拦，阵口没关死，但关门声已经贴着后背响了。",
  ],
  "spears.fail": [
    "袁军步阵稳得像欠了地皮钱不肯搬，{name}未能一口气破开盾槊墙。",
    "{name}撞上盾槊阵，前方全是尖头和坏消息，冲线被迫缩短。",
    "拒马阵这一合摆得严实，{name}劈出火花，却没劈出足够大的路。",
  ],
  "cavalry.clean": [
    "两翼骑兵夹来，{name}反勒半圈贴内线甩开追骑，动作利落得像提前看过地图。",
    "{name}在夹击口转出半个弧，袁军骑兵扑了个空，只好和尘土面面相觑。",
    "左右骑兵压上，{name}偏偏从最窄处钻过去，袁军这张网捞了个寂寞。",
  ],
  "cavalry.squeeze": [
    "{name}抢出一马位，虽被迫换线，仍望见颜良大纛；离目标近了，离麻烦也近了。",
    "袁军骑兵合围得快，{name}更快半拍，马蹄贴着刀光挤过去。",
    "{name}被夹击逼得改道，好在方向没丢，颜良的旗还在前方晃得很嚣张。",
  ],
  "cavalry.hurt": [
    "袁军骑兵从两翼压合，{name}强行突围，马力被耗去不少，追兵倒是追出了加班的气势。",
    "夹击来得凶，{name}一路硬闯，身后马蹄乱得像整支骑队都忘了排队。",
    "{name}被追骑咬住侧翼，虽杀出缝隙，体力也像酒坛漏了底。",
  ],
  "cavalry.outside": [
    "袁军骑兵补住阵口，{name}只能在外阵盘旋；颜良还远，麻烦已经很近。",
    "两翼骑兵把缺口一封，{name}暂时摸不到中军，只能和外阵继续周旋。",
    "{name}被逼在阵外绕行，袁军骑兵得意了一瞬，随即发现这人还在找机会。",
  ],
  "duel.capture": [
    "{name}逼到颜良马前，一合夺势挑断缰绳，颜良还没来得及放狠话，就被安排下马。",
    "阵心刀光一闪，{name}顺势擒住颜良，袁军亲兵集体愣住：剧本翻页太快了。",
    "{name}近身压住颜良，手上快得像账房拨算盘，转眼就把主将生擒。",
  ],
  "duel.kill": [
    "{name}直入中军，刀枪交错只一瞬，颜良落马，袁军大纛晃得像突然没了主心骨。",
    "颜良迎上来还想稳住场面，{name}一击破局，中军顿时从威风变成慌风。",
    "{name}贴马错身斩落颜良，袁军阵中安静半拍，随后乱得很有层次。",
  ],
  "duel.near": [
    "{name}与颜良连过数合，削落护臂，却没赶在合围前收账；差一点，差得让人想拍大腿。",
    "颜良接了几招险些失位，{name}刀锋已经贴近，可袁军亲骑来得像催债。",
    "{name}在阵心打出一阵惊呼，可颜良命硬一线，暂时没被写进战果。",
  ],
  "duel.hurt": [
    "颜良稳住中军亲骑，{name}强攻未果，被迫离开冲线；这位河北名将确实不是木桩。",
    "{name}攻势被颜良架住，亲骑随即压上，阵心这口锅越煮越烫。",
    "颜良硬接一轮猛攻，{name}没能收下人头，只收下一身更重的压力。",
  ],
  "duel.fail": [
    "颜良迎头截住攻势，亲骑从旁压上，{name}在阵心被围得像误入婚宴的刺客。",
    "{name}强攻颜良未果，中军亲骑一拥而上，场面忽然从单挑变成群聊。",
    "颜良这一挡十分老辣，{name}冲势被掐住，袁军的胆子又长回来几分。",
  ],
  "duel.outside": [
    "{name}没能杀到颜良马前，只见中军大旗隔着盾槊晃动，像在远处说“有本事过来”。",
    "中军近在眼前又远在槊后，{name}暂时摸不到颜良，只摸到一堆不讲理的长兵器。",
    "{name}望见颜良大纛，却被重重阵列隔开；目标很清楚，路很不讲武德。",
  ],
  "return.down": [
    "{name}伤疲交至，没能冲出合围；袁军终于松了口气，松得像刚还完一笔巨债。",
    "{name}马力将尽，退路被封，阵中尘土落下时，单骑冲阵也落入险局。",
    "伤势和围兵一齐压来，{name}未能脱阵，袁军这才敢把鼓声敲得响一点。",
  ],
  "return.safeWithYan": [
    "{name}趁袁军中阵失措拨马返营，带着战果穿尘而去，追兵只能吃土，吃得很均匀。",
    "颜良既倒，袁军阵脚大乱，{name}从乱缝里返营，顺手把功劳也拎了回来。",
    "{name}带着战果回冲，追兵越追越散，最后只追到一脸尘。",
  ],
  "return.safeNoYan": [
    "{name}见势收马沿阵缝退出，没拿下颜良，但全身而退；这叫留得青山，顺便留得马。",
    "{name}未取颜良，却把外阵搅得鸡飞鼓乱，随后稳稳返营，袁军只好假装没看见。",
    "眼看中军难破，{name}果断回马，撤得不丢人，甚至还有点潇洒。",
  ],
  "return.partialWithYan": [
    "{name}虽拿下颜良，却被追骑缠住，战果送出半程，人还在阵里和麻烦拉扯。",
    "颜良已经落入战果簿，返程却被袁军咬住，{name}这一趟像把胜利扛进泥地。",
    "{name}取下颜良后退路受阻，追兵扑得太凶，连尘土都没空落地。",
  ],
  "return.partialNoYan": [
    "{name}边战边退，带伤脱离主阵，回营时还能喘气，但马大概想写辞呈。",
    "{name}没能斩将，只好带着伤势撤离，袁军追兵吵得很，战果却不太响。",
    "退路上刀枪不断，{name}杀出外阵，虽然没赢漂亮，至少没把自己交代进去。",
  ],
  "return.trappedWithYan": [
    "{name}拿下颜良后陷入重围，袁军以人墙截断归路，战果在手，出口却像临时取消。",
    "颜良倒了，袁军急了，{name}返程被死死堵住；这胜利拿得像怀里揣了块烫铁。",
    "{name}斩将之后遭重围反扑，袁军这才想起自己人多，来得晚但来得密。",
  ],
  "return.trappedNoYan": [
    "{name}回马时被两翼追骑截住，退路彻底收窄，袁军这回终于把门关上了。",
    "未取颜良，退路又窄，{name}被追骑逼住，场面从豪勇转成非常需要冷静。",
    "袁军骑兵封死后路，{name}只能硬扛，空气里全是“这下麻烦了”的味道。",
  ],
  "outcome.full": [
    "{name}{yanText}，还平安回营。袁军中军当场少了主心骨，鼓声都敲出了几分心虚。",
    "{name}{yanText}并安全返营，整套流程干净利落，袁军像被人从阵心抽走了椽子。",
    "{name}{yanText}，又从追兵眼皮底下回到本阵。这不是冲阵，这是把袁军阵型当门帘掀。",
  ],
  "outcome.half": [
    "{name}{yanText}，可返程被重围截断。战果够硬，代价也够硬，像赢了牌却被桌子绊住。",
    "{name}{yanText}，但没能安全回营。袁军丢了主将，却也把退路咬得死紧。",
    "{name}{yanText}后陷入阵中，目标完成一半，惊险程度直接写满整张战报。",
  ],
  "outcome.retreat": [
    "{name}冲乱外阵后全身而退，却没能拿下颜良。袁军中军保住了，面子被刮掉一层。",
    "{name}没取颜良，但把袁军外阵搅得够呛，最后还安全返营，算是试出了这阵的脾气。",
    "{name}见势回马，保住性命和坐骑。颜良还在阵心，不过袁军也不敢笑得太大声。",
  ],
  "outcome.wounded": [
    "{name}未取颜良，带伤脱离袁军阵列。单骑冲阵窗口关闭，医官窗口立刻打开。",
    "{name}没能完成斩将，退出来时伤势不轻；袁军守住阵心，他守住了下次再来的可能。",
    "{name}重伤脱阵，战果未成。袁军阵列还在，但也被他撞得需要重新整队和重新壮胆。",
  ],
  "outcome.lost": [
    "{name}未能突破合围，颜良仍在中军压阵。袁军终于敢大声报数，确认自己还活着不少人。",
    "{name}陷没阵中，冲阵未成。颜良保住位置，袁军则保住了刚才差点飞走的魂。",
    "{name}被袁军合围吞没，单骑锋芒止于阵中；这阵不好破，尤其在袁军突然很团结的时候。",
  ],
};

const recentReportChoices = new Map();

const dom = {};
let activeFaction = "曹魏";
let selectedId = "zhang-liao";
let runCounter = 0;
let playToken = 0;
let renderer;

const scene = {
  phase: "idle",
  progress: 0,
  running: false,
  general: null,
  outcome: null,
};

document.addEventListener("DOMContentLoaded", () => {
  dom.factionTabs = document.getElementById("factionTabs");
  dom.rosterGrid = document.getElementById("rosterGrid");
  dom.chosenName = document.getElementById("chosenName");
  dom.runButton = document.getElementById("runButton");
  dom.phaseLabel = document.getElementById("phaseLabel");
  dom.distanceValue = document.getElementById("distanceValue");
  dom.staminaMeter = document.getElementById("staminaMeter");
  dom.momentumMeter = document.getElementById("momentumMeter");
  dom.woundMeter = document.getElementById("woundMeter");
  dom.staminaValue = document.getElementById("staminaValue");
  dom.momentumValue = document.getElementById("momentumValue");
  dom.woundValue = document.getElementById("woundValue");
  dom.resultCard = document.getElementById("resultCard");
  dom.logList = document.getElementById("logList");
  dom.battleScene = document.getElementById("battleScene");
  dom.unitLayer = document.getElementById("unitLayer");
  dom.playerUnit = document.getElementById("playerUnit");
  dom.playerNameTag = document.getElementById("playerNameTag");
  dom.playerSigil = document.getElementById("playerSigil");
  dom.phaseFlash = document.getElementById("phaseFlash");

  scene.general = getSelectedGeneral();
  renderer = new BattleRenderer(document.getElementById("battlefield"), scene);

  buildDomBattlefield();
  mountHeroPenFigures();
  renderFactionTabs();
  renderRoster();
  updateChosen();
  updateMeters({ stamina: 100, momentum: 0, wounds: 0 });

  dom.runButton.addEventListener("click", runSimulation);
});

function renderFactionTabs() {
  dom.factionTabs.innerHTML = factions
    .map(
      (faction) => `
        <button
          type="button"
          role="tab"
          aria-selected="${faction === activeFaction}"
          data-faction="${faction}"
        >${faction}</button>
      `,
    )
    .join("");

  dom.factionTabs.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      activeFaction = button.dataset.faction;
      const first = generals.find((general) => general.faction === activeFaction);
      if (first) selectedId = first.id;
      renderFactionTabs();
      renderRoster();
      updateChosen();
      setIdleReport();
    });
  });
}

function renderRoster() {
  dom.rosterGrid.innerHTML = generals
    .filter((general) => general.faction === activeFaction)
    .map((general) => {
      const selectedClass = general.id === selectedId ? " is-selected" : "";
      return `
        <button class="general-card${selectedClass}" type="button" data-id="${general.id}">
          <div class="general-topline">
            <span class="general-name">${general.name}</span>
            <span class="badge">${general.faction}</span>
          </div>
          <p class="general-title">${general.title}</p>
          <div class="stat-grid">
            ${statRow("武勇", general.stats.might)}
            ${statRow("马术", general.stats.horse)}
            ${statRow("谋断", general.stats.tactics)}
            ${statRow("胆魄", general.stats.nerve)}
          </div>
        </button>
      `;
    })
    .join("");

  dom.rosterGrid.querySelectorAll(".general-card").forEach((card) => {
    card.addEventListener("click", () => {
      selectedId = card.dataset.id;
      renderRoster();
      updateChosen();
      setIdleReport();
    });
  });
}

function statRow(label, value) {
  return `
    <div class="stat-row">
      <span>${label}</span>
      <span class="stat-bar"><i style="width: ${value}%"></i></span>
      <b>${value}</b>
    </div>
  `;
}

function updateChosen() {
  const general = getSelectedGeneral();
  scene.general = general;
  scene.phase = "idle";
  scene.progress = 0;
  scene.outcome = null;
  dom.chosenName.textContent = general.name;
  dom.phaseLabel.textContent = "待命";
  dom.distanceValue.textContent = "200 米";
  updateDomBattlefield(general, "idle", "待命", 200, 0);
  updateMeters({ stamina: 100, momentum: 0, wounds: 0 });
}

function setIdleReport() {
  const general = getSelectedGeneral();
  dom.resultCard.className = "result-card";
  dom.resultCard.innerHTML = `
    <strong>${general.name}待命</strong>
    <p>袁军盾槊环列，骑兵伏于两翼，颜良按刀立马于阵心。</p>
  `;
  dom.logList.innerHTML = `<li>${general.name}勒马听鼓，袁字大旗在远处起伏。</li>`;
}

function buildDomBattlefield() {
  if (!dom.unitLayer || dom.unitLayer.children.length > 0) return;

  const addUnit = (kind, distance, lane) => {
    const unit = document.createElement("span");
    unit.className = kind === "cavalry" ? "cavalry" : `soldier ${kind}`;
    const point = domPointForDistance(distance, lane);
    const knock = knockbackForUnit(kind, distance, lane);
    unit.style.left = `${point.x}%`;
    unit.style.top = `${point.y}%`;
    unit.style.setProperty("--s", point.scale.toFixed(2));
    unit.style.setProperty("--knock-current-x", "0px");
    unit.style.setProperty("--knock-current-y", "0px");
    unit.style.setProperty("--knock-current-rot", "0deg");
    unit.style.setProperty("--unit-squash-x", "1");
    unit.style.setProperty("--unit-squash-y", "1");
    unit.dataset.kind = kind;
    unit.dataset.distance = distance.toFixed(1);
    unit.dataset.lane = lane.toFixed(3);
    unit.dataset.knockX = knock.x.toFixed(2);
    unit.dataset.knockY = knock.y.toFixed(2);
    unit.dataset.knockRot = knock.rot.toFixed(2);
    unit.dataset.avoidX = knock.avoidX.toFixed(2);
    unit.dataset.avoidY = knock.avoidY.toFixed(2);
    unit.dataset.avoidRot = knock.avoidRot.toFixed(2);
    unit.dataset.retreatX = knock.retreatX.toFixed(2);
    unit.dataset.retreatY = knock.retreatY.toFixed(2);
    unit.dataset.retreatRot = knock.retreatRot.toFixed(2);
    unit.dataset.braceX = knock.braceX.toFixed(2);
    unit.dataset.braceY = knock.braceY.toFixed(2);
    unit.dataset.braceRot = knock.braceRot.toFixed(2);
    unit.dataset.waveDelay = knock.waveDelay.toFixed(3);
    unit.dataset.mass = knock.mass.toFixed(2);
    unit.innerHTML = penFigureSvg(kind);
    dom.unitLayer.appendChild(unit);
  };

  for (let row = 0; row < 3; row += 1) {
    const count = 7 + row * 2;
    const distance = 28 + row * 11;
    for (let i = 0; i < count; i += 1) {
      const lane = (i - (count - 1) / 2) / ((count - 1) / 2) * 0.74;
      addUnit(row === 0 ? "shield" : "spear", distance, lane);
    }
  }

  for (let row = 0; row < 3; row += 1) {
    const count = 11 + row * 2;
    const distance = 60 + row * 11;
    for (let i = 0; i < count; i += 1) {
      const lane = (i - (count - 1) / 2) / ((count - 1) / 2) * 0.86;
      addUnit("spear", distance, lane);
    }
  }

  for (let row = 0; row < 2; row += 1) {
    const count = 9 + row * 2;
    const distance = 96 + row * 13;
    for (let i = 0; i < count; i += 1) {
      const lane = (i - (count - 1) / 2) / ((count - 1) / 2) * 0.9;
      addUnit("archer", distance, lane);
    }
  }

  for (const side of [-1, 1]) {
    for (let i = 0; i < 6; i += 1) {
      addUnit("cavalry", 56 + i * 7, side * (0.98 + (i % 2) * 0.12));
    }
  }
}

function knockbackForUnit(kind, distance, lane) {
  const side = lane < 0 ? -1 : 1;
  const depth = clamp(1.15 - distance / 210, 0.35, 1);
  const base = kind === "cavalry" ? 34 : kind === "archer" ? 18 : 26;
  const centerPressure = clamp(1 - Math.abs(lane), 0.12, 1);
  const frontPressure = clamp(1.25 - distance / 150, 0.2, 1);
  const cavalryPeel = kind === "cavalry" ? 1 : 0.45;
  const archerFallBack = kind === "archer" ? 1.25 : 0.7;
  const mass = kind === "cavalry" ? 1.35 : kind === "shield" ? 1.18 : kind === "spear" ? 1 : 0.72;
  const waveDelay = clamp(Math.abs(lane) * 0.2 + distance / 900, 0.02, 0.32);

  return {
    x: side * base * (0.35 + Math.abs(lane) * 0.9),
    y: base * depth * (kind === "archer" ? -0.4 : 0.45),
    rot: side * (kind === "cavalry" ? 18 : kind === "archer" ? 12 : 22),
    avoidX: side * (18 + centerPressure * 34) * cavalryPeel,
    avoidY: (kind === "cavalry" ? -12 : 10) * frontPressure,
    avoidRot: side * (kind === "cavalry" ? -16 : 9),
    retreatX: side * (34 + Math.abs(lane) * 26 + centerPressure * 18),
    retreatY: (kind === "archer" ? -34 : 24 + frontPressure * 18) * archerFallBack,
    retreatRot: side * (kind === "cavalry" ? 28 : kind === "archer" ? 16 : 24),
    braceX: -side * centerPressure * (kind === "cavalry" ? 0 : kind === "archer" ? 4 : 9),
    braceY: kind === "archer" ? -7 : kind === "cavalry" ? 0 : 7 + frontPressure * 5,
    braceRot: -side * centerPressure * (kind === "archer" ? 4 : 7),
    waveDelay,
    mass,
  };
}

function penFigureSvg(kind) {
  if (kind === "cavalry") {
    return `
      <svg class="unit-figure cavalry-figure" viewBox="0 0 118 82" aria-hidden="true">
        <path class="paper-fill" d="M18 55c10-22 46-29 72-17 12 6 18 16 16 25-24 11-67 10-92 0 0-3 1-6 4-8Z" />
        <path d="M12 59c8-19 32-28 54-27 20 1 39 12 42 28" />
        <path d="M23 52c12-11 34-14 52-8M22 63c18 7 58 8 84-2" />
        <path d="M78 37c8-16 24-14 30-2 3 7-1 14-10 16" />
        <path d="M83 36c6 1 12 4 17 10M93 31c2-6 7-7 12-5" />
        <path d="M23 65l-8 14M40 66l-2 13M76 65l7 13M96 63l12 12" />
        <path d="M27 66c-6 2-10 6-14 11M42 66c-4 4-6 7-7 13M78 66c6 3 9 7 11 12M96 64c8 1 13 5 17 10" />
        <path d="M12 58c-8-9-4-18 6-23" />
        <path d="M18 35c-4 4-8 7-12 9M21 37c-4 7-7 13-7 20" />
        <path class="paper-fill" d="M50 24c5-13 22-13 28-1l-4 28H53l-3-27Z" />
        <circle class="paper-fill" cx="63" cy="17" r="8" />
        <path d="M51 24c5-14 22-15 28 0M53 25l-5 25M77 25l4 25" />
        <path d="M55 32h20M55 39h20M57 46h16" />
        <path d="M58 32v17M64 31v18M70 32v17" />
        <path d="M57 12c5-7 15-6 20 0M55 16h17M66 8c5-7 12-5 18 0M66 7c-6-2-12-2-17 2" />
        <path d="M62 18c2 1 4 1 6 0M60 21c3 3 7 3 10 0" />
        <path d="M77 24l34-20" />
        <path d="M105 7l9-6-4 11" />
        <path d="M72 25l-18 25M51 32l-15 12" />
        <path class="hatch" d="M31 43c8 2 15 2 23 0M29 49c10 2 20 2 30 0M68 45c10 0 18 2 27 6M85 39c5 2 10 6 14 10" />
        <path class="hatch" d="M58 58c-10 1-20 0-30-3M76 58c8 1 16 1 24-2" />
      </svg>
    `;
  }

  if (kind === "archer") {
    return `
      <svg class="unit-figure archer-figure" viewBox="0 0 70 94" aria-hidden="true">
        <path class="paper-fill" d="M24 39c8-11 24-12 33 0l-4 36H19l5-36Z" />
        <circle class="paper-fill" cx="40" cy="22" r="10" />
        <path d="M25 39c8-12 24-13 33 0M25 39l-7 36M58 39l4 36" />
        <path d="M27 51h26M25 60h29M23 69h27" />
        <path d="M30 49v27M38 47v29M46 49v27" />
        <path d="M30 15c7-10 22-9 28 1M29 22h22" />
        <path d="M41 10c6-10 14-7 20-1M40 9c-8-3-15-2-21 4" />
        <path d="M36 23c2 1 5 1 8 0M35 28c5 3 10 3 14-1" />
        <path d="M22 45l-13 14M56 43l9 13" />
        <path d="M15 9c19 14 20 59 0 75" />
        <path d="M15 9c4 23 4 50 0 75" />
        <path d="M17 48h45" />
        <path d="M58 44l8 4-8 4" />
        <path d="M12 65l-8 6M16 69l-9 9M51 75l-8 17M31 75l-11 17M24 91c-8 2-14 0-19-4M53 91c-6 2-12 2-18 0" />
        <path class="hatch" d="M24 44c9 2 20 2 30 0M22 55c11 2 22 2 33 0M22 65c10 3 20 3 31 0" />
        <path class="hatch" d="M18 75c10 5 23 5 35 0M6 87c12 2 24 2 36 0" />
      </svg>
    `;
  }

  const hasShield = kind === "shield";
  return `
    <svg class="unit-figure infantry-figure" viewBox="0 0 70 94" aria-hidden="true">
      <path class="paper-fill" d="M24 39c8-11 24-12 33 0l-4 36H19l5-36Z" />
      <circle class="paper-fill" cx="40" cy="22" r="10" />
      <path d="M25 39c8-12 24-13 33 0M25 39l-7 36M58 39l4 36" />
      <path d="M27 51h26M25 60h29M23 69h27" />
      <path d="M30 49v27M38 47v29M46 49v27" />
      <path d="M30 15c7-10 22-9 28 1M29 22h22" />
      <path d="M41 10c6-10 14-7 20-1M40 9c-8-3-15-2-21 4" />
      <path d="M36 23c2 1 5 1 8 0M35 28c5 3 10 3 14-1" />
      <path d="M21 75l-13 18M53 75l10 18M10 91c8 3 16 3 24 0M43 91c8 3 15 3 22 0" />
      ${
        hasShield
          ? `<path class="paper-fill shield-fill" d="M9 40c10-7 22-7 32 0v27c-5 12-15 19-32 20-7-15-7-31 0-47Z" />
             <path d="M9 40c10-7 22-7 32 0v27c-5 12-15 19-32 20-7-15-7-31 0-47Z" />
             <path d="M14 46h22M13 55h24M13 64h24M18 43c-3 11-3 23 0 35M29 42c3 12 3 24 0 36" />
             <path d="M17 61c8-7 17-7 18 1-4 7-12 8-18-1Z" />`
          : `<path d="M62 4L18 91M55 13l12-10M22 82l-10 11" />
             <path d="M54 11l14-9-6 16" />
             <path d="M54 23c-7 4-13 9-18 16M28 44l-15 11" />
             <path d="M61 21c4 5 4 10 0 15" />`
      }
      <path class="hatch" d="M24 44c9 2 20 2 30 0M22 55c11 2 22 2 33 0M22 65c10 3 20 3 31 0" />
      <path class="hatch" d="M18 75c10 5 23 5 35 0M9 88c13 2 27 2 42 0" />
    </svg>
  `;
}

function mountHeroPenFigures() {
  document.querySelectorAll(".player-unit, .yanliang-unit").forEach((unit) => {
    if (unit.querySelector(".hero-figure")) return;
    unit.insertAdjacentHTML("afterbegin", penFigureSvg("cavalry").replace("unit-figure cavalry-figure", "unit-figure cavalry-figure hero-figure"));
  });
}

function updateDomBattlefield(general, phase, title, distance, lane) {
  if (!dom.battleScene || !dom.playerUnit) return;

  const activeGeneral = general || getSelectedGeneral();
  const progress = scene.progress || 0;
  const point = domPointForDistance(distance, lane);
  const speed = scene.event
    ? Math.abs(scene.event.distanceStart - scene.event.distanceEnd) / Math.max(scene.event.duration || 1, 1)
    : 0;
  const surge = phase === "spears" || phase === "cavalry" ? Math.sin(progress * Math.PI) : phase === "return" ? -0.4 : 0;
  const lean = clamp(lane * (phase === "return" ? -18 : 20) + surge * (phase === "cavalry" ? 7 : 3), -14, 14);
  dom.battleScene.style.setProperty("--player-x", `${point.x}%`);
  dom.battleScene.style.setProperty("--player-y", `${point.y}%`);
  dom.battleScene.style.setProperty("--player-lean", `${lean}deg`);
  dom.battleScene.style.setProperty("--player-stretch", (1 + clamp(speed * 7, 0, 0.1)).toFixed(3));
  dom.playerNameTag.textContent = activeGeneral.name;
  dom.playerSigil.textContent = activeGeneral.name.slice(0, 1);
  dom.playerSigil.style.background = activeGeneral.color;
  dom.phaseFlash.textContent = title || "待命";

  const phases = ["idle", "approach", "arrows", "spears", "cavalry", "duel", "return", "result"];
  phases.forEach((phaseName) => dom.battleScene.classList.remove(`phase-${phaseName}`));
  dom.battleScene.classList.add(`phase-${phase}`);
  updateUnitKnockback(phase, progress);
}

function updateUnitKnockback(phase, progress) {
  if (!dom.unitLayer) return;

  const stage = phaseRank(phase);
  dom.unitLayer.querySelectorAll(".soldier, .cavalry").forEach((unit) => {
    const kind = unit.dataset.kind;
    const unitStage = unitKnockStage(kind);
    const lane = Number(unit.dataset.lane || 0);
    const side = lane < 0 ? -1 : 1;
    const isActiveStage = unitStage === stage;
    const hasBeenBroken = stage > unitStage;
    const waveDelay = Number(unit.dataset.waveDelay || 0);
    const localProgress = isActiveStage ? clamp((progress - waveDelay) / Math.max(0.45, 0.92 - waveDelay), 0, 1) : progress;
    const impactPulse = isActiveStage ? Math.sin(localProgress * Math.PI) : 0;
    const isKnocked = stage > unitStage || (isActiveStage && localProgress > 0.34);
    const isReturn = phase === "return";
    const isResult = phase === "result";
    const returnWithYan = isReturn && Boolean(scene.event?.tookYan);
    const resultBreak = isResult && ["功成返营", "斩将陷围", "逼退返营"].includes(scene.outcome?.title);
    const isAvoiding = phase === "cavalry"
      ? kind === "cavalry" && progress > 0.1 && progress < 0.88
      : phase === "spears" && kind !== "archer" && Math.abs(lane) < 0.42 && progress > 0.24;
    const isRetreating = resultBreak || (isReturn && (returnWithYan || hasBeenBroken));
    const isPursuing = (isReturn && !returnWithYan && !hasBeenBroken && (kind === "cavalry" || Math.abs(lane) > 0.36))
      || (isResult && !resultBreak && kind === "cavalry");
    const isBracing = kind !== "cavalry" && isActiveStage && progress > waveDelay * 0.35 && localProgress < 0.54 && !isKnocked;
    unit.classList.toggle("is-hit", isActiveStage && localProgress > 0.08 && localProgress < 0.92);
    unit.classList.toggle("is-knocked", isKnocked);
    unit.classList.toggle("is-bracing", isBracing);
    unit.classList.toggle("is-avoiding", isAvoiding);
    unit.classList.toggle("is-retreating", isRetreating);
    unit.classList.toggle("is-pursuing", isPursuing);
    unit.classList.toggle("is-routed", stage > unitStage + 1 || isRetreating);

    const force = isActiveStage ? impactResponse(localProgress) : isKnocked ? 1 : 0;
    const braceForce = isBracing ? Math.sin(clamp(localProgress / 0.54, 0, 1) * Math.PI) : 0;
    const avoidForce = isAvoiding ? Math.sin(clamp(progress, 0, 1) * Math.PI) : 0;
    const retreatForce = isRetreating ? (isResult ? 1 : easeInOut(progress)) : 0;
    const pursuitForce = isPursuing ? easeInOut(progress) : 0;
    const brokenDrag = hasBeenBroken && !isReturn && !isResult ? 0.22 : 0;
    const mass = Number(unit.dataset.mass || 1);
    const knockX = Number(unit.dataset.knockX || 0);
    const knockY = Number(unit.dataset.knockY || 0);
    const knockRot = Number(unit.dataset.knockRot || 0);
    const avoidX = Number(unit.dataset.avoidX || 0);
    const avoidY = Number(unit.dataset.avoidY || 0);
    const avoidRot = Number(unit.dataset.avoidRot || 0);
    const retreatX = Number(unit.dataset.retreatX || 0);
    const retreatY = Number(unit.dataset.retreatY || 0);
    const retreatRot = Number(unit.dataset.retreatRot || 0);
    const braceX = Number(unit.dataset.braceX || 0);
    const braceY = Number(unit.dataset.braceY || 0);
    const braceRot = Number(unit.dataset.braceRot || 0);
    const pursuitX = -side * (12 + Math.abs(lane) * 28);
    const pursuitY = kind === "cavalry" ? 28 : 16;
    const pursuitRot = -side * (kind === "cavalry" ? 12 : 7);
    const transfer = 1 / mass;
    unit.style.setProperty("--knock-current-x", `${braceX * braceForce + knockX * force * transfer + avoidX * avoidForce + retreatX * retreatForce + avoidX * brokenDrag + pursuitX * pursuitForce}px`);
    unit.style.setProperty("--knock-current-y", `${braceY * braceForce + knockY * force * transfer + avoidY * avoidForce + retreatY * retreatForce + Math.abs(avoidY) * brokenDrag + pursuitY * pursuitForce}px`);
    unit.style.setProperty("--knock-current-rot", `${braceRot * braceForce + knockRot * force * transfer + avoidRot * avoidForce + retreatRot * retreatForce + pursuitRot * pursuitForce}deg`);
    unit.style.setProperty("--unit-squash-x", (1 + impactPulse * (kind === "cavalry" ? 0.03 : 0.06)).toFixed(3));
    unit.style.setProperty("--unit-squash-y", (1 - impactPulse * (kind === "cavalry" ? 0.02 : 0.045)).toFixed(3));
  });

  const yanLiangHit = phase === "duel" && progress > 0.18;
  const yanLiangDown = (phase === "return" && Boolean(scene.event?.tookYan))
    || (phase === "result" && ["功成返营", "斩将陷围"].includes(scene.outcome?.title));
  document.querySelector(".yanliang-unit")?.classList.toggle("is-hit", yanLiangHit);
  document.querySelector(".yanliang-unit")?.classList.toggle("is-knocked", yanLiangDown || (phase === "duel" && progress > 0.66));
}

function phaseRank(phase) {
  return {
    idle: 0,
    approach: 0,
    arrows: 1,
    spears: 2,
    cavalry: 3,
    duel: 4,
    return: 5,
    result: 6,
  }[phase] || 0;
}

function unitKnockStage(kind) {
  if (kind === "archer") return 1;
  if (kind === "shield" || kind === "spear") return 2;
  if (kind === "cavalry") return 3;
  return 6;
}

function domPointForDistance(distance, lane) {
  const ratio = clamp(distance / 200, 0, 1);
  const y = lerp(31, 90, ratio);
  const spread = lerp(8, 43, ratio);
  const curve = Math.sin(ratio * Math.PI) * 2;
  return {
    x: 50 + lane * spread + lane * curve,
    y,
    scale: lerp(0.68, 1.28, ratio),
  };
}

function laneForPhase(phase, progress) {
  const p = easeInOut(progress);
  if (phase === "arrows") return Math.sin(p * Math.PI * 3) * 0.14;
  if (phase === "spears") return Math.sin(p * Math.PI * 2) * 0.1;
  if (phase === "cavalry") return Math.sin(p * Math.PI) * 0.2;
  if (phase === "return") return Math.sin(p * Math.PI * 2) * 0.14;
  if (phase === "duel") return Math.sin(p * Math.PI * 2.8) * 0.15;
  return 0;
}

function getSelectedGeneral() {
  return generals.find((general) => general.id === selectedId) || generals[0];
}

async function runSimulation() {
  if (scene.running) return;

  const general = getSelectedGeneral();
  const simulation = buildSimulation(general);
  const token = ++playToken;

  scene.running = true;
  scene.general = general;
  scene.outcome = null;
  dom.runButton.disabled = true;
  dom.runButton.textContent = "推演中";
  dom.resultCard.className = "result-card";
  dom.resultCard.innerHTML = `
    <strong>战鼓已起</strong>
    <p>${simulation.opening}</p>
  `;
  dom.logList.innerHTML = "";
  updateMeters({ stamina: 100, momentum: 0, wounds: 0 });

  for (const event of simulation.events) {
    if (token !== playToken) return;
    await playEvent(event, token);
    addLog(event.log);
    updateMeters(event);
    dom.phaseLabel.textContent = event.title;
    dom.distanceValue.textContent = `${Math.round(event.distanceEnd)} 米`;
  }

  scene.running = false;
  scene.phase = "result";
  scene.progress = 1;
  scene.outcome = simulation.outcome;
  updateDomBattlefield(general, "result", simulation.outcome.title, simulation.outcome.endDistance || 200, 0);
  showOutcome(simulation.outcome);
  addLog(`战报小结：${formatKillSummary(simulation.outcome, false)}。`);
  dom.runButton.disabled = false;
  dom.runButton.textContent = "再推一局";
}

function playEvent(event, token) {
  return new Promise((resolve) => {
    const duration = event.duration;
    const started = performance.now();

    function step(now) {
      if (token !== playToken) {
        resolve();
        return;
      }

      const progress = clamp((now - started) / duration, 0, 1);
      scene.phase = event.phase;
      scene.progress = progress;
      scene.event = event;
      dom.phaseLabel.textContent = event.title;
      dom.distanceValue.textContent = `${Math.round(lerp(event.distanceStart, event.distanceEnd, progress))} 米`;
      updateDomBattlefield(
        scene.general,
        event.phase,
        event.title,
        lerp(event.distanceStart, event.distanceEnd, progress),
        laneForPhase(event.phase, progress),
      );

      if (progress < 1) {
        setTimeout(() => step(performance.now()), 33);
      } else {
        resolve();
      }
    }

    setTimeout(() => step(performance.now()), 0);
  });
}

function addLog(text) {
  const item = document.createElement("li");
  item.textContent = text;
  dom.logList.appendChild(item);
  item.scrollIntoView({ block: "nearest", behavior: "smooth" });
}

function updateMeters(snapshot) {
  const stamina = clamp(Math.round(snapshot.stamina), 0, 100);
  const momentum = clamp(Math.round(snapshot.momentum), 0, 100);
  const wounds = clamp(Math.round(snapshot.wounds), 0, 4);

  dom.staminaMeter.style.width = `${stamina}%`;
  dom.momentumMeter.style.width = `${momentum}%`;
  dom.woundMeter.style.width = `${wounds * 25}%`;
  dom.staminaValue.textContent = stamina;
  dom.momentumValue.textContent = momentum;
  dom.woundValue.textContent = wounds;
}

function showOutcome(outcome) {
  dom.resultCard.className = `result-card ${outcome.success ? "success" : "failure"}`;
  const summary = formatKillSummary(outcome, true);
  dom.resultCard.innerHTML = `
    <strong>${outcome.title}</strong>
    <p>${outcome.body}</p>
    <p class="kill-summary">${summary}</p>
  `;
}

function formatKillSummary(outcome, withMarkup = false) {
  const yanNote = outcome.capturedYan
    ? "，另生擒颜良"
    : outcome.tookYan
      ? "，含颜良"
      : "";
  const kills = withMarkup ? `<b>${outcome.kills}</b>` : outcome.kills;
  return `杀敌人数：${kills} 人${yanNote}`;
}

function createNarrator(rng, general) {
  const used = new Set();

  return (key, extra = {}) => {
    const lines = reportLines[key] || [`{name}继续向前，战场一时尘土大作。`];
    const recent = recentReportChoices.get(key) || [];
    const fresh = lines.filter((line) => !used.has(line) && !recent.includes(line));
    const unused = lines.filter((line) => !used.has(line));
    const pool = fresh.length > 0 ? fresh : unused.length > 0 ? unused : lines;
    const template = pool[Math.floor(rng() * pool.length)];
    const keep = Math.max(1, Math.min(lines.length - 1, 3));
    recentReportChoices.set(key, [...recent, template].slice(-keep));
    used.add(template);
    return fillReportTemplate(template, general, extra);
  };
}

function fillReportTemplate(template, general, extra) {
  return template.replace(/\{(\w+)\}/g, (match, key) => {
    if (key === "name") return general.name;
    return Object.prototype.hasOwnProperty.call(extra, key) ? extra[key] : match;
  });
}

function buildSimulation(general) {
  const rng = createRng(seedFrom(`${general.id}-${Date.now()}-${runCounter++}`));
  const narrate = createNarrator(rng, general);
  const events = [];
  const s = general.stats;
  let stamina = 100;
  let momentum = 0;
  let wounds = 0;
  let distance = 200;
  let tookYan = false;
  let capturedYan = false;
  let returnSafe = false;
  let gotToCenter = true;
  let kills = 0;

  const addKills = (min, max, boost = 0) => {
    const low = Math.min(min, max);
    const high = Math.max(min, max);
    const value = Math.max(0, Math.round(low + rng() * (high - low) + boost));
    kills += value;
    return value;
  };

  const push = (phase, title, distanceEnd, log, duration = 1300, meta = {}) => {
    events.push({
      phase,
      title,
      distanceStart: distance,
      distanceEnd,
      stamina,
      momentum,
      wounds,
      log,
      duration,
      ...meta,
    });
    distance = distanceEnd;
  };

  let score = roll(rng, weighted(s, { horse: 0.45, nerve: 0.35, tactics: 0.2 }) + mod(general, "approach"), formation.approach, 18);
  if (score >= 16) {
    momentum += 12;
    addKills(1, 3);
    push("approach", "起马", 138, narrate("approach.high"));
  } else if (score >= -8) {
    momentum += 5;
    stamina -= 5;
    addKills(0, 1);
    push("approach", "起马", 145, narrate("approach.mid"));
  } else {
    stamina -= 13;
    momentum = Math.max(0, momentum - 3);
    push("approach", "起马", 152, narrate("approach.low"));
  }

  score = roll(
    rng,
    weighted(s, { horse: 0.42, tactics: 0.33, nerve: 0.25 }) + mod(general, "arrows") + momentum * 0.12,
    formation.archers,
    24,
  );
  if (score >= 18) {
    momentum += 13;
    addKills(5, 10, Math.floor(momentum / 18));
    push("arrows", "箭雨", 88, narrate("arrows.high"), 1450);
  } else if (score >= -6) {
    stamina -= 8;
    momentum += 4;
    addKills(2, 5);
    push("arrows", "箭雨", 94, narrate("arrows.mid"), 1450);
  } else if (score >= -22) {
    stamina -= 20;
    wounds += 1;
    momentum = Math.max(0, momentum - 4);
    addKills(1, 3);
    push("arrows", "箭雨", 106, narrate("arrows.hurt"), 1450);
  } else {
    stamina -= 31;
    wounds += 2;
    momentum = Math.max(0, momentum - 10);
    push("arrows", "箭雨", 118, narrate("arrows.bad"), 1450);
  }

  score = roll(
    rng,
    weighted(s, { might: 0.38, horse: 0.32, nerve: 0.2, tactics: 0.1 }) + mod(general, "spears") + momentum * 0.34 - wounds * 6,
    formation.spears,
    24,
  );
  if (score >= 20) {
    stamina -= 5;
    momentum += 18;
    addKills(18, 32, Math.floor(momentum / 14));
    push("spears", "破步阵", 34, narrate("spears.break"), 1600);
  } else if (score >= -4) {
    stamina -= 15;
    momentum += 7;
    addKills(9, 18, Math.floor(momentum / 24));
    push("spears", "破步阵", 45, narrate("spears.hold"), 1600);
  } else if (score >= -24) {
    stamina -= 30;
    wounds += 1;
    momentum = Math.max(0, momentum - 5);
    addKills(5, 12);
    push("spears", "破步阵", 66, narrate("spears.hurt"), 1600);
  } else {
    stamina -= 42;
    wounds += 1;
    momentum = Math.max(0, momentum - 12);
    gotToCenter = false;
    addKills(1, 5);
    push("spears", "破步阵", 82, narrate("spears.fail"), 1600);
  }

  if (stamina <= 12) gotToCenter = false;

  score = roll(
    rng,
    weighted(s, { horse: 0.46, tactics: 0.25, nerve: 0.2, might: 0.09 }) + mod(general, "cavalry") + momentum * 0.28 - wounds * 5,
    formation.cavalry,
    22,
  );
  if (gotToCenter && score >= 18) {
    momentum += 14;
    stamina -= 4;
    addKills(8, 16, Math.floor(momentum / 18));
    push("cavalry", "避夹击", 12, narrate("cavalry.clean"), 1500);
  } else if (gotToCenter && score >= -8) {
    stamina -= 14;
    momentum += 4;
    addKills(4, 9, Math.floor(momentum / 30));
    push("cavalry", "避夹击", 18, narrate("cavalry.squeeze"), 1500);
  } else if (gotToCenter) {
    stamina -= 27;
    wounds += 1;
    momentum = Math.max(0, momentum - 8);
    gotToCenter = stamina > 20;
    addKills(2, 6);
    push("cavalry", "避夹击", gotToCenter ? 28 : 52, narrate("cavalry.hurt"), 1500);
  } else {
    stamina -= 12;
    addKills(0, 3);
    push("cavalry", "避夹击", 96, narrate("cavalry.outside"), 1500);
  }

  if (gotToCenter && stamina > 16) {
    score = roll(
      rng,
      weighted(s, { might: 0.55, nerve: 0.23, tactics: 0.12, horse: 0.1 }) + mod(general, "duel") + momentum * 0.34 + stamina * 0.07 - wounds * 7,
      formation.yanLiang,
      26,
    );

    if (score >= 24) {
      tookYan = true;
      capturedYan = s.tactics + s.nerve + roll(rng, 10, 10, 14) > 186;
      stamina -= 7;
      momentum += 24;
      addKills(capturedYan ? 10 : 12, capturedYan ? 20 : 24, Math.floor(momentum / 20));
      if (!capturedYan) kills += 1;
      push(
        "duel",
        "斗颜良",
        0,
        capturedYan ? narrate("duel.capture") : narrate("duel.kill"),
        1800,
      );
    } else if (score >= 6) {
      stamina -= 15;
      momentum += 6;
      addKills(4, 9);
      push("duel", "斗颜良", 8, narrate("duel.near"), 1800);
    } else if (score >= -16) {
      stamina -= 28;
      wounds += 1;
      momentum = Math.max(0, momentum - 8);
      addKills(2, 6);
      push("duel", "斗颜良", 18, narrate("duel.hurt"), 1800);
    } else {
      stamina -= 44;
      wounds += 2;
      momentum = Math.max(0, momentum - 16);
      addKills(0, 3);
      push("duel", "斗颜良", 26, narrate("duel.fail"), 1800);
    }
  } else {
    addKills(0, 2);
    push("duel", "望中军", Math.max(58, distance), narrate("duel.outside"), 1200);
  }

  if (stamina <= 0) {
    addKills(0, tookYan ? 5 : 2);
    push("return", "阵没", distance, narrate("return.down"), 1200, { tookYan });
  } else {
    const pursuit = tookYan ? 66 : formation.pursuit;
    score = roll(
      rng,
      weighted(s, { horse: 0.43, tactics: 0.27, nerve: 0.18, might: 0.12 }) + mod(general, "return") + momentum * 0.25 + stamina * 0.13 - wounds * 7,
      pursuit,
      25,
    );

    if (score >= -4) {
      returnSafe = true;
      stamina = Math.max(9, stamina - 10);
      addKills(tookYan ? 10 : 4, tookYan ? 20 : 9, Math.floor(momentum / 22));
      push("return", "返营", 200, tookYan ? narrate("return.safeWithYan") : narrate("return.safeNoYan"), 1800, { tookYan });
    } else if (score >= -22) {
      stamina = Math.max(1, stamina - 24);
      wounds += 1;
      addKills(tookYan ? 5 : 2, tookYan ? 12 : 6);
      push("return", "返营", tookYan ? 148 : 175, tookYan ? narrate("return.partialWithYan") : narrate("return.partialNoYan"), 1800, { tookYan });
    } else {
      stamina = Math.max(0, stamina - 42);
      wounds += 1;
      addKills(tookYan ? 2 : 0, tookYan ? 7 : 3);
      push("return", "返营", tookYan ? 72 : 118, tookYan ? narrate("return.trappedWithYan") : narrate("return.trappedNoYan"), 1800, { tookYan });
    }
  }

  const outcome = decideOutcome(general, {
    tookYan,
    capturedYan,
    returnSafe,
    stamina,
    wounds,
    kills,
  }, narrate);
  outcome.endDistance = distance;

  return { events, outcome, opening: narrate("opening") };
}

function decideOutcome(general, result, narrate) {
  const yanText = result.capturedYan ? "生擒颜良" : "斩落颜良";

  if (result.tookYan && result.returnSafe) {
    return {
      success: true,
      title: "功成返营",
      body: narrate("outcome.full", { yanText }),
      kills: result.kills,
      tookYan: result.tookYan,
      capturedYan: result.capturedYan,
    };
  }

  if (result.tookYan) {
    return {
      success: false,
      title: "斩将陷围",
      body: narrate("outcome.half", { yanText }),
      kills: result.kills,
      tookYan: result.tookYan,
      capturedYan: result.capturedYan,
    };
  }

  if (result.returnSafe && result.wounds <= 1) {
    return {
      success: false,
      title: "逼退返营",
      body: narrate("outcome.retreat"),
      kills: result.kills,
      tookYan: result.tookYan,
      capturedYan: result.capturedYan,
    };
  }

  if (result.stamina > 0) {
    return {
      success: false,
      title: "重伤脱阵",
      body: narrate("outcome.wounded"),
      kills: result.kills,
      tookYan: result.tookYan,
      capturedYan: result.capturedYan,
    };
  }

  return {
    success: false,
    title: "陷没阵中",
    body: narrate("outcome.lost"),
    kills: result.kills,
    tookYan: result.tookYan,
    capturedYan: result.capturedYan,
  };
}

function weighted(stats, weights) {
  return Object.entries(weights).reduce((sum, [key, weight]) => sum + stats[key] * weight, 0);
}

function mod(general, key) {
  return general.mods[key] || 0;
}

function roll(rng, attack, defense, swing) {
  const bell = (rng() + rng() + rng()) / 3 - 0.5;
  return attack - defense + bell * swing * 2;
}

function seedFrom(text) {
  let hash = 2166136261;
  for (let index = 0; index < text.length; index += 1) {
    hash ^= text.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function createRng(seed) {
  let value = seed || 1;
  return () => {
    value += 0x6d2b79f5;
    let t = value;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function lerp(start, end, progress) {
  return start + (end - start) * progress;
}

class BattleRenderer {
  constructor(canvas, sceneState) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.scene = sceneState;
    this.width = 0;
    this.height = 0;
    this.time = 0;

    const observer = new ResizeObserver(() => this.resize());
    observer.observe(canvas.parentElement);
    this.resize();
    requestAnimationFrame((time) => this.loop(time));
  }

  resize() {
    const rect = this.canvas.parentElement.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    this.width = Math.max(320, rect.width);
    this.height = Math.max(420, rect.height);
    this.canvas.width = Math.floor(this.width * dpr);
    this.canvas.height = Math.floor(this.height * dpr);
    this.canvas.style.width = `${this.width}px`;
    this.canvas.style.height = `${this.height}px`;
    this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  loop(time) {
    this.time = time;
    this.draw();
    requestAnimationFrame((next) => this.loop(next));
  }

  draw() {
    const ctx = this.ctx;
    const w = this.width;
    const h = this.height;

    this.drawGround(ctx, w, h);
    this.drawDistanceBands(ctx, w, h);
    this.drawEnemyArmy(ctx, w, h);
    this.drawYanLiang(ctx, w, h);
    this.drawPhaseEffects(ctx, w, h);
    this.drawPlayer(ctx, w, h);
    this.drawCamp(ctx, w, h);
  }

  drawGround(ctx, w, h) {
    const gradient = ctx.createLinearGradient(0, 0, 0, h);
    gradient.addColorStop(0, "#263a24");
    gradient.addColorStop(0.42, "#1f2f1c");
    gradient.addColorStop(1, "#171b12");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, w, h);

    ctx.save();
    ctx.globalAlpha = 0.3;
    for (let i = 0; i < 70; i += 1) {
      const x = ((i * 73) % 997) / 997 * w;
      const y = ((i * 131) % 991) / 991 * h;
      const r = 1 + ((i * 17) % 5);
      ctx.fillStyle = i % 3 === 0 ? "#59704a" : "#2b3c25";
      ctx.beginPath();
      ctx.ellipse(x, y, r * 2.2, r, (i % 8) * 0.4, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();

    ctx.save();
    ctx.globalAlpha = 0.46;
    ctx.fillStyle = "#4b3a27";
    ctx.beginPath();
    ctx.moveTo(w * 0.42, h);
    ctx.bezierCurveTo(w * 0.47, h * 0.78, w * 0.44, h * 0.52, w * 0.5, h * 0.25);
    ctx.bezierCurveTo(w * 0.57, h * 0.52, w * 0.53, h * 0.78, w * 0.6, h);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  drawDistanceBands(ctx, w, h) {
    const bands = [
      { m: 200, y: 0.9 },
      { m: 150, y: 0.76 },
      { m: 100, y: 0.62 },
      { m: 50, y: 0.49 },
      { m: 0, y: 0.36 },
    ];

    ctx.save();
    ctx.font = "700 12px system-ui, sans-serif";
    ctx.textAlign = "left";
    bands.forEach((band) => {
      const y = h * band.y;
      ctx.strokeStyle = "rgba(244, 234, 210, 0.12)";
      ctx.setLineDash([6, 7]);
      ctx.beginPath();
      ctx.moveTo(w * 0.08, y);
      ctx.lineTo(w * 0.92, y);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = "rgba(244, 234, 210, 0.5)";
      ctx.fillText(`${band.m}m`, w * 0.09, y - 6);
    });
    ctx.restore();
  }

  drawEnemyArmy(ctx, w, h) {
    const tremor = this.scene.running ? Math.sin(this.time / 90) * 1.4 : 0;
    const open = this.scene.phase === "spears" || this.scene.phase === "cavalry" || this.scene.phase === "duel" || this.scene.phase === "return";
    const split = open ? this.scene.progress * 18 : 0;

    ctx.save();
    for (let row = 0; row < 6; row += 1) {
      const count = 9 + row * 2;
      const y = h * (0.32 + row * 0.045);
      const span = w * (0.42 + row * 0.055);
      for (let i = 0; i < count; i += 1) {
        const ratio = count === 1 ? 0.5 : i / (count - 1);
        let x = w * 0.5 - span / 2 + ratio * span;
        const centerGap = Math.abs(ratio - 0.5) < 0.09 && row > 2 ? split : 0;
        x += ratio < 0.5 ? -centerGap : centerGap;
        this.drawSoldier(ctx, x, y + tremor * ((i + row) % 2 ? 1 : -1), row > 2 ? 1.05 : 0.96);
      }
    }

    this.drawCavalryWing(ctx, w, h, "left");
    this.drawCavalryWing(ctx, w, h, "right");
    this.drawBanner(ctx, w * 0.28, h * 0.25, "袁");
    this.drawBanner(ctx, w * 0.72, h * 0.25, "袁");
    ctx.restore();
  }

  drawSoldier(ctx, x, y, scale) {
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale, scale);
    ctx.strokeStyle = "#2a1713";
    ctx.lineWidth = 1.4;
    ctx.beginPath();
    ctx.moveTo(-5, -11);
    ctx.lineTo(8, 11);
    ctx.stroke();

    ctx.fillStyle = "#8b332e";
    ctx.fillRect(-7, -5, 11, 14);
    ctx.fillStyle = "#c7a75c";
    ctx.beginPath();
    ctx.arc(-1, -9, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#d8b35a";
    ctx.fillRect(-9, -3, 4, 12);
    ctx.restore();
  }

  drawCavalryWing(ctx, w, h, side) {
    const left = side === "left";
    const phase = this.scene.phase;
    const charge = phase === "cavalry" ? this.scene.progress : phase === "duel" || phase === "return" ? 1 : 0;
    const baseX = left ? w * 0.22 : w * 0.78;
    const targetX = left ? w * 0.39 : w * 0.61;
    const dir = left ? 1 : -1;

    for (let i = 0; i < 5; i += 1) {
      const stagger = (i - 2) * 15;
      const x = lerp(baseX + stagger * 0.6, targetX + stagger * 0.24, charge);
      const y = h * (0.5 + i * 0.028) - charge * h * 0.055;
      this.drawHorse(ctx, x, y, 0.62, "#604936", "#8b332e", dir);
    }
  }

  drawYanLiang(ctx, w, h) {
    const pulse = 1 + Math.sin(this.time / 260) * 0.03;
    const x = w * 0.5;
    const y = h * 0.36;

    ctx.save();
    this.drawHorse(ctx, x, y, 0.94 * pulse, "#4a3027", "#c9a24b", 1);
    this.drawBanner(ctx, x + 30, y - 36, "良");
    ctx.fillStyle = "rgba(16, 19, 15, 0.72)";
    ctx.fillRect(x - 26, y + 18, 52, 22);
    ctx.fillStyle = "#fff2c3";
    ctx.font = "800 13px system-ui, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("颜良", x, y + 34);
    ctx.restore();
  }

  drawBanner(ctx, x, y, text) {
    ctx.save();
    ctx.strokeStyle = "#241713";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(x, y - 20);
    ctx.lineTo(x, y + 34);
    ctx.stroke();
    ctx.fillStyle = "#8b332e";
    ctx.fillRect(x + 2, y - 18, 28, 24);
    ctx.fillStyle = "#f8d987";
    ctx.font = "900 16px serif";
    ctx.textAlign = "center";
    ctx.fillText(text, x + 16, y);
    ctx.restore();
  }

  drawPhaseEffects(ctx, w, h) {
    const phase = this.scene.phase;
    const p = this.scene.progress;
    const player = this.playerPosition(w, h);

    if (phase === "arrows") {
      ctx.save();
      ctx.strokeStyle = "rgba(238, 217, 161, 0.72)";
      ctx.lineWidth = 1.3;
      for (let i = 0; i < 18; i += 1) {
        const offset = ((i * 37) % 100) / 100;
        const t = (p + offset) % 1;
        const sx = w * (0.25 + ((i * 53) % 50) / 100);
        const sy = h * (0.31 + ((i * 29) % 10) / 100);
        const ex = lerp(sx, player.x + (i - 8) * 5, t);
        const ey = lerp(sy, player.y - 8 + (i % 3) * 5, t);
        ctx.beginPath();
        ctx.moveTo(ex - 14, ey - 24);
        ctx.lineTo(ex, ey);
        ctx.stroke();
      }
      ctx.restore();
    }

    if (phase === "spears" || phase === "duel") {
      ctx.save();
      ctx.globalAlpha = phase === "duel" ? 0.85 : 0.55;
      ctx.strokeStyle = "#f4d071";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(w * 0.5, h * 0.39, 38 + Math.sin(this.time / 80) * 3, -0.5, Math.PI * 1.35);
      ctx.stroke();
      ctx.restore();
    }

    if (phase === "return") {
      ctx.save();
      ctx.globalAlpha = 0.28;
      ctx.fillStyle = "#d8b35a";
      for (let i = 0; i < 10; i += 1) {
        ctx.beginPath();
        ctx.ellipse(player.x + (i - 5) * 8, player.y + 22 + i * 2, 18 - i, 5, 0, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    }
  }

  drawPlayer(ctx, w, h) {
    const general = this.scene.general || generals[0];
    const pos = this.playerPosition(w, h);
    const moving = this.scene.running ? Math.sin(this.time / 70) * 2 : 0;
    const dir = this.scene.phase === "return" ? -1 : 1;

    ctx.save();
    ctx.globalAlpha = 0.32;
    ctx.fillStyle = "#0b0d0a";
    ctx.beginPath();
    ctx.ellipse(pos.x, pos.y + 18, 38, 10, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    this.drawHorse(ctx, pos.x, pos.y + moving, 0.9, "#1c1a17", general.color, dir);

    ctx.save();
    ctx.fillStyle = "rgba(16, 19, 15, 0.76)";
    ctx.fillRect(pos.x - 30, pos.y + 25, 60, 22);
    ctx.fillStyle = "#fff8df";
    ctx.font = "900 13px system-ui, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(general.name, pos.x, pos.y + 41);
    ctx.restore();
  }

  drawHorse(ctx, x, y, scale, horseColor, riderColor, direction) {
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(direction * scale, scale);

    ctx.strokeStyle = "#0f0b09";
    ctx.lineWidth = 2;
    ctx.fillStyle = horseColor;
    ctx.beginPath();
    ctx.ellipse(0, 4, 30, 13, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.ellipse(27, -4, 12, 8, -0.25, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    ctx.strokeStyle = horseColor;
    ctx.lineWidth = 5;
    const gait = Math.sin(this.time / 80) * 4;
    [-16, -4, 9, 20].forEach((leg, index) => {
      ctx.beginPath();
      ctx.moveTo(leg, 13);
      ctx.lineTo(leg + (index % 2 ? gait : -gait), 28);
      ctx.stroke();
    });

    ctx.fillStyle = riderColor;
    ctx.strokeStyle = "#0f0b09";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(-3, -16, 8, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.fillRect(-10, -11, 15, 20);

    ctx.strokeStyle = "#d8b35a";
    ctx.lineWidth = 2.2;
    ctx.beginPath();
    ctx.moveTo(5, -14);
    ctx.lineTo(35, -30);
    ctx.stroke();

    ctx.restore();
  }

  drawCamp(ctx, w, h) {
    const y = h * 0.94;
    ctx.save();
    ctx.fillStyle = "rgba(10, 13, 10, 0.58)";
    ctx.fillRect(0, y, w, h - y);
    ctx.strokeStyle = "rgba(216, 179, 90, 0.35)";
    ctx.beginPath();
    ctx.moveTo(w * 0.18, y + 4);
    ctx.lineTo(w * 0.82, y + 4);
    ctx.stroke();
    this.drawSmallTent(ctx, w * 0.26, y + 28, "#3f6f55");
    this.drawSmallTent(ctx, w * 0.38, y + 34, "#7f94a0");
    this.drawSmallTent(ctx, w * 0.74, y + 30, "#3f6f55");
    ctx.fillStyle = "rgba(244, 234, 210, 0.72)";
    ctx.font = "800 13px system-ui, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("本阵", w * 0.5, y + 32);
    ctx.restore();
  }

  drawSmallTent(ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(x - 22, y + 18);
    ctx.lineTo(x, y - 8);
    ctx.lineTo(x + 22, y + 18);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = "rgba(0, 0, 0, 0.24)";
    ctx.fillRect(x - 18, y + 18, 36, 5);
  }

  playerPosition(w, h) {
    const phase = this.scene.phase;
    const p = easeInOut(this.scene.progress);

    if (phase === "approach") {
      return { x: w * 0.5, y: lerp(h * 0.91, h * 0.66, p) };
    }
    if (phase === "arrows") {
      return { x: w * (0.5 + Math.sin(p * Math.PI * 3) * 0.035), y: lerp(h * 0.66, h * 0.55, p) };
    }
    if (phase === "spears") {
      return { x: w * (0.5 + Math.sin(p * Math.PI * 2) * 0.025), y: lerp(h * 0.55, h * 0.43, p) };
    }
    if (phase === "cavalry") {
      return { x: w * (0.5 + Math.sin(p * Math.PI) * 0.055), y: lerp(h * 0.43, h * 0.37, p) };
    }
    if (phase === "duel") {
      const angle = p * Math.PI * 2.5;
      return { x: w * 0.5 + Math.sin(angle) * 34, y: h * 0.37 + Math.cos(angle) * 16 };
    }
    if (phase === "return") {
      const endDistance = this.scene.event ? this.scene.event.distanceEnd : 200;
      const endY = this.distanceToY(endDistance, h);
      return { x: w * (0.5 + Math.sin(p * Math.PI * 2) * 0.04), y: lerp(h * 0.38, endY, p) };
    }
    if (phase === "result" && this.scene.outcome) {
      return { x: w * 0.5, y: this.distanceToY(this.scene.outcome.endDistance || 200, h) };
    }
    return { x: w * 0.5, y: h * 0.91 };
  }

  distanceToY(distance, height) {
    const ratio = clamp(distance / 200, 0, 1);
    return height * lerp(0.37, 0.91, ratio);
  }

  draw() {
    const ctx = this.ctx;
    const w = this.width;
    const h = this.height;

    this.drawGround(ctx, w, h);
    this.drawRoute(ctx, w, h);
    this.drawEnemyArmy(ctx, w, h);
    this.drawYanLiang(ctx, w, h);
    this.drawPhaseEffects(ctx, w, h);
    this.drawPlayer(ctx, w, h);
    this.drawCamp(ctx, w, h);
    this.drawGameHud(ctx, w, h);
  }

  drawGround(ctx, w, h) {
    const gradient = ctx.createLinearGradient(0, 0, 0, h);
    gradient.addColorStop(0, "#34452f");
    gradient.addColorStop(0.32, "#25341f");
    gradient.addColorStop(0.7, "#1c2518");
    gradient.addColorStop(1, "#11150e");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, w, h);

    ctx.save();
    ctx.globalAlpha = 0.18;
    ctx.strokeStyle = "#e2c16a";
    ctx.lineWidth = 1;
    for (let distance = 0; distance <= 200; distance += 25) {
      const left = this.pointForDistance(distance, -1.08, w, h);
      const right = this.pointForDistance(distance, 1.08, w, h);
      ctx.beginPath();
      ctx.moveTo(left.x, left.y);
      ctx.lineTo(right.x, right.y);
      ctx.stroke();
    }
    for (let lane = -1; lane <= 1.01; lane += 0.25) {
      const near = this.pointForDistance(200, lane, w, h);
      const far = this.pointForDistance(0, lane * 0.16, w, h);
      ctx.beginPath();
      ctx.moveTo(near.x, near.y);
      ctx.lineTo(far.x, far.y);
      ctx.stroke();
    }
    ctx.restore();

    ctx.save();
    ctx.globalAlpha = 0.35;
    for (let i = 0; i < 90; i += 1) {
      const distance = ((i * 47) % 200) + 4;
      const lane = (((i * 71) % 200) - 100) / 100;
      const point = this.pointForDistance(distance, lane, w, h);
      const scale = this.unitScale(distance);
      ctx.fillStyle = i % 4 === 0 ? "#6b7442" : i % 4 === 1 ? "#263b22" : "#4b3e27";
      ctx.beginPath();
      ctx.ellipse(point.x, point.y, 5 * scale, 2.5 * scale, (i % 8) * 0.38, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();

    ctx.save();
    const roadLeft = this.pointForDistance(200, -0.22, w, h);
    const roadRight = this.pointForDistance(200, 0.22, w, h);
    const roadTop = this.pointForDistance(0, 0, w, h);
    const roadMidL = this.pointForDistance(110, -0.12, w, h);
    const roadMidR = this.pointForDistance(110, 0.12, w, h);
    ctx.globalAlpha = 0.54;
    ctx.fillStyle = "#51402b";
    ctx.beginPath();
    ctx.moveTo(roadLeft.x, roadLeft.y);
    ctx.quadraticCurveTo(roadMidL.x, roadMidL.y, roadTop.x - 12, roadTop.y);
    ctx.quadraticCurveTo(roadMidR.x, roadMidR.y, roadRight.x, roadRight.y);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  drawRoute(ctx, w, h) {
    const start = this.pointForDistance(200, 0, w, h);
    const mid = this.pointForDistance(96, -0.08, w, h);
    const end = this.pointForDistance(0, 0, w, h);

    ctx.save();
    ctx.lineCap = "round";
    ctx.setLineDash([12, 14]);
    ctx.lineDashOffset = -this.time / 55;
    ctx.strokeStyle = "rgba(246, 213, 118, 0.44)";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(start.x, start.y);
    ctx.quadraticCurveTo(mid.x, mid.y, end.x, end.y);
    ctx.stroke();
    ctx.setLineDash([]);

    const pos = this.playerPosition(w, h);
    ctx.globalAlpha = this.scene.running ? 0.42 : 0.24;
    ctx.fillStyle = "#f3cf6d";
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, 18 + Math.sin(this.time / 120) * 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  drawEnemyArmy(ctx, w, h) {
    const phase = this.scene.phase;
    const active = this.scene.running;
    const breachPhase = phase === "spears" ? this.scene.progress : ["cavalry", "duel", "return", "result"].includes(phase) ? 1 : 0;
    const breach = easeInOut(breachPhase) * 0.32;
    const tremor = active ? Math.sin(this.time / 82) * 1.2 : 0;
    const units = [];

    for (let row = 0; row < 6; row += 1) {
      const count = 7 + row * 2;
      const distance = 26 + row * 12;
      for (let i = 0; i < count; i += 1) {
        const center = (count - 1) / 2;
        let lane = center === 0 ? 0 : (i - center) / center;
        if (row >= 2 && Math.abs(lane) < 0.22) {
          lane += lane < 0 ? -breach : breach;
        }
        const point = this.pointForDistance(distance, lane * 0.78, w, h);
        units.push({
          kind: row < 2 ? "shield" : "spear",
          x: point.x,
          y: point.y + tremor * ((i + row) % 2 ? 1 : -1),
          scale: this.unitScale(distance) * (row < 2 ? 0.74 : 0.82),
          lane,
          distance,
        });
      }
    }

    for (let row = 0; row < 2; row += 1) {
      const count = 9 + row * 2;
      const distance = 88 + row * 14;
      for (let i = 0; i < count; i += 1) {
        const lane = (i - (count - 1) / 2) / ((count - 1) / 2);
        const point = this.pointForDistance(distance, lane * 0.9, w, h);
        units.push({
          kind: "archer",
          x: point.x,
          y: point.y + (row ? 4 : 0),
          scale: this.unitScale(distance) * 0.72,
          lane,
          distance,
        });
      }
    }

    const wingPressure = phase === "cavalry" ? easeInOut(this.scene.progress) : ["duel", "return", "result"].includes(phase) ? 1 : 0;
    ["left", "right"].forEach((side) => {
      const sign = side === "left" ? -1 : 1;
      for (let i = 0; i < 6; i += 1) {
        const baseDistance = 58 + i * 8;
        const baseLane = sign * (1.12 + (i % 2) * 0.12);
        const lane = lerp(baseLane, sign * (0.68 + i * 0.015), wingPressure);
        const distance = lerp(baseDistance, 42 + i * 5, wingPressure);
        const point = this.pointForDistance(distance, lane, w, h);
        units.push({
          kind: "cavalry",
          x: point.x,
          y: point.y,
          scale: this.unitScale(distance) * 0.66,
          side,
          distance,
        });
      }
    });

    units.sort((a, b) => a.y - b.y);

    ctx.save();
    this.drawBanner(ctx, this.pointForDistance(18, -0.8, w, h).x, this.pointForDistance(18, -0.8, w, h).y - 24, "袁", 0.72);
    this.drawBanner(ctx, this.pointForDistance(18, 0.8, w, h).x, this.pointForDistance(18, 0.8, w, h).y - 24, "袁", 0.72);
    for (const unit of units) {
      if (unit.kind === "cavalry") {
        this.drawRider(ctx, unit.x, unit.y, unit.scale, "#5a4030", "#8b332e", unit.side === "left" ? 1 : -1, "袁骑");
      } else {
        this.drawFootman(ctx, unit.x, unit.y, unit.scale, unit.kind);
      }
    }
    ctx.restore();
  }

  drawFootman(ctx, x, y, scale, kind) {
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale, scale);

    ctx.fillStyle = "rgba(0, 0, 0, 0.26)";
    ctx.beginPath();
    ctx.ellipse(0, 13, 15, 5, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = "#1d100d";
    ctx.lineWidth = 2;
    if (kind === "spear") {
      ctx.strokeStyle = "#c9b071";
      ctx.beginPath();
      ctx.moveTo(-9, -22);
      ctx.lineTo(10, 22);
      ctx.stroke();
    }
    if (kind === "archer") {
      ctx.strokeStyle = "#c9b071";
      ctx.beginPath();
      ctx.arc(2, 0, 14, -1.15, 1.15);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(8, -11);
      ctx.lineTo(8, 11);
      ctx.stroke();
    }

    ctx.fillStyle = kind === "archer" ? "#7e2c27" : "#9f3b33";
    ctx.fillRect(-7, -6, 14, 18);
    ctx.fillStyle = "#d7b15d";
    ctx.beginPath();
    ctx.arc(0, -11, 6, 0, Math.PI * 2);
    ctx.fill();

    if (kind === "shield") {
      ctx.fillStyle = "#d8b35a";
      ctx.beginPath();
      ctx.rect(-16, -4, 10, 18);
      ctx.fill();
      ctx.strokeStyle = "rgba(36, 23, 19, 0.8)";
      ctx.stroke();
    }
    ctx.restore();
  }

  drawRider(ctx, x, y, scale, horseColor, riderColor, direction, label) {
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(direction * scale, scale);

    ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
    ctx.beginPath();
    ctx.ellipse(0, 16, 34, 9, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = horseColor;
    ctx.strokeStyle = "#110d0a";
    ctx.lineWidth = 2.2;
    ctx.beginPath();
    ctx.ellipse(0, 4, 34, 13, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.ellipse(28, -5, 12, 8, -0.32, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    const gait = Math.sin(this.time / 70) * 3.5;
    ctx.strokeStyle = horseColor;
    ctx.lineWidth = 5;
    [-18, -6, 8, 20].forEach((leg, index) => {
      ctx.beginPath();
      ctx.moveTo(leg, 13);
      ctx.lineTo(leg + (index % 2 ? gait : -gait), 29);
      ctx.stroke();
    });

    ctx.fillStyle = riderColor;
    ctx.strokeStyle = "#100c09";
    ctx.lineWidth = 1.5;
    ctx.fillRect(-9, -13, 18, 23);
    ctx.strokeRect(-9, -13, 18, 23);
    ctx.fillStyle = "#e2c16a";
    ctx.beginPath();
    ctx.arc(0, -19, 7, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    ctx.strokeStyle = "#ecd27b";
    ctx.lineWidth = 2.4;
    ctx.beginPath();
    ctx.moveTo(7, -14);
    ctx.lineTo(39, -30);
    ctx.stroke();

    ctx.restore();

    if (label) {
      ctx.save();
      ctx.fillStyle = "rgba(12, 14, 10, 0.62)";
      ctx.font = `800 ${Math.max(9, 11 * scale)}px system-ui, sans-serif`;
      ctx.textAlign = "center";
      ctx.fillText(label, x, y + 30 * scale);
      ctx.restore();
    }
  }

  drawYanLiang(ctx, w, h) {
    const point = this.pointForDistance(0, 0, w, h);
    const down = this.scene.phase === "result" && this.scene.outcome && this.scene.outcome.success;
    const pulse = 1 + Math.sin(this.time / 220) * 0.04;

    ctx.save();
    ctx.strokeStyle = down ? "rgba(166, 61, 55, 0.7)" : "rgba(246, 213, 118, 0.58)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(point.x, point.y, 34 + Math.sin(this.time / 150) * 4, 0, Math.PI * 2);
    ctx.stroke();

    if (down) {
      ctx.fillStyle = "rgba(166, 61, 55, 0.82)";
      ctx.beginPath();
      ctx.ellipse(point.x, point.y + 4, 32, 10, -0.18, 0, Math.PI * 2);
      ctx.fill();
      this.drawBanner(ctx, point.x + 30, point.y - 38, "良", 0.72, true);
    } else {
      this.drawRider(ctx, point.x, point.y, 0.74 * pulse, "#3b281f", "#c9a24b", 1, "");
      this.drawBanner(ctx, point.x + 28, point.y - 42, "良", 0.78);
    }

    ctx.fillStyle = "rgba(16, 19, 15, 0.78)";
    ctx.fillRect(point.x - 28, point.y + 24, 56, 22);
    ctx.fillStyle = "#fff2c3";
    ctx.font = "900 13px system-ui, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("颜良", point.x, point.y + 40);
    ctx.restore();
  }

  drawBanner(ctx, x, y, text, scale = 1, fallen = false) {
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale, scale);
    if (fallen) ctx.rotate(-0.65);
    ctx.strokeStyle = "#21130f";
    ctx.lineWidth = 2.2;
    ctx.beginPath();
    ctx.moveTo(0, -28);
    ctx.lineTo(0, 34);
    ctx.stroke();

    ctx.fillStyle = "#8b332e";
    ctx.beginPath();
    ctx.moveTo(2, -26);
    ctx.lineTo(36, -20 + Math.sin(this.time / 180) * 2);
    ctx.lineTo(32, 6);
    ctx.lineTo(2, 2);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = "rgba(255, 230, 160, 0.28)";
    ctx.stroke();

    ctx.fillStyle = "#f8d987";
    ctx.font = "900 17px serif";
    ctx.textAlign = "center";
    ctx.fillText(text, 18, -4);
    ctx.restore();
  }

  drawPhaseEffects(ctx, w, h) {
    const phase = this.scene.phase;
    const p = this.scene.progress;
    const player = this.playerPosition(w, h);

    if (phase === "approach") {
      this.drawDustTrail(ctx, player.x, player.y, p, "#d5b36b");
    }

    if (phase === "arrows") {
      ctx.save();
      ctx.strokeStyle = "rgba(247, 224, 165, 0.88)";
      ctx.lineWidth = 1.6;
      for (let i = 0; i < 30; i += 1) {
        const t = (p + ((i * 17) % 100) / 100) % 1;
        const lane = (((i * 41) % 200) - 100) / 100;
        const start = this.pointForDistance(96 + (i % 2) * 14, lane * 0.86, w, h);
        const end = {
          x: player.x + (i - 15) * 4,
          y: player.y - 10 + ((i * 13) % 20),
        };
        const x = lerp(start.x, end.x, t);
        const y = lerp(start.y, end.y, t);
        ctx.beginPath();
        ctx.moveTo(x - 18, y - 28);
        ctx.lineTo(x + 2, y + 4);
        ctx.stroke();
      }
      ctx.restore();
      this.drawImpactSparks(ctx, player.x, player.y, p, 10);
    }

    if (phase === "spears") {
      const center = this.pointForDistance(48, 0, w, h);
      ctx.save();
      ctx.globalAlpha = 0.55 + Math.sin(this.time / 70) * 0.15;
      ctx.strokeStyle = "#f4d071";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(center.x, center.y, 34 + p * 40, -0.65, Math.PI * 1.25);
      ctx.stroke();
      ctx.restore();
      this.drawImpactSparks(ctx, center.x, center.y, p, 16);
    }

    if (phase === "cavalry") {
      ctx.save();
      ctx.globalAlpha = 0.35;
      ctx.strokeStyle = "#a63d37";
      ctx.lineWidth = 4;
      const left = this.pointForDistance(52, -0.75, w, h);
      const right = this.pointForDistance(52, 0.75, w, h);
      ctx.beginPath();
      ctx.moveTo(left.x, left.y);
      ctx.lineTo(player.x, player.y);
      ctx.lineTo(right.x, right.y);
      ctx.stroke();
      ctx.restore();
      this.drawDustTrail(ctx, player.x, player.y, p, "#b98754");
    }

    if (phase === "duel") {
      const target = this.pointForDistance(0, 0, w, h);
      ctx.save();
      ctx.globalAlpha = 0.82;
      ctx.strokeStyle = "#fff0a8";
      ctx.lineWidth = 4;
      for (let i = 0; i < 3; i += 1) {
        const angle = p * Math.PI * 5 + i * 1.8;
        ctx.beginPath();
        ctx.arc(target.x, target.y, 26 + i * 11, angle, angle + 0.9);
        ctx.stroke();
      }
      ctx.restore();
      this.drawImpactSparks(ctx, target.x, target.y, p, 22);
    }

    if (phase === "return") {
      this.drawDustTrail(ctx, player.x, player.y, p, "#d8b35a");
    }
  }

  drawImpactSparks(ctx, x, y, progress, count) {
    ctx.save();
    for (let i = 0; i < count; i += 1) {
      const angle = (i / count) * Math.PI * 2 + progress * Math.PI * 3;
      const radius = 9 + ((i * 11) % 20) + progress * 18;
      ctx.globalAlpha = 0.7 * (1 - progress * 0.45);
      ctx.strokeStyle = i % 2 ? "#f6d576" : "#d46a4f";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(x + Math.cos(angle) * radius * 0.35, y + Math.sin(angle) * radius * 0.22);
      ctx.lineTo(x + Math.cos(angle) * radius, y + Math.sin(angle) * radius * 0.55);
      ctx.stroke();
    }
    ctx.restore();
  }

  drawDustTrail(ctx, x, y, progress, color) {
    ctx.save();
    ctx.fillStyle = color;
    for (let i = 0; i < 16; i += 1) {
      const t = (progress + i * 0.11) % 1;
      ctx.globalAlpha = (1 - t) * 0.24;
      ctx.beginPath();
      ctx.ellipse(x + (i - 8) * 8, y + 24 + t * 22, 20 * (1 - t), 7 * (1 - t), 0, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
  }

  drawPlayer(ctx, w, h) {
    const general = this.scene.general || generals[0];
    const pos = this.playerPosition(w, h);
    const distance = this.scene.event ? lerp(this.scene.event.distanceStart, this.scene.event.distanceEnd, easeInOut(this.scene.progress)) : 200;
    const scale = this.unitScale(distance) * 0.9;
    const dir = this.scene.phase === "return" ? -1 : 1;

    ctx.save();
    ctx.globalAlpha = 0.35;
    ctx.fillStyle = "#f1d47d";
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, 24 * scale + Math.sin(this.time / 110) * 3, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    this.drawRider(ctx, pos.x, pos.y + Math.sin(this.time / 65) * 1.5, scale, "#1c1a17", general.color, dir, "");

    ctx.save();
    ctx.fillStyle = "rgba(10, 12, 9, 0.78)";
    ctx.fillRect(pos.x - 34, pos.y + 28 * scale, 68, 22);
    ctx.fillStyle = "#fff8df";
    ctx.font = "900 13px system-ui, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(general.name, pos.x, pos.y + 44 * scale);
    ctx.restore();
  }

  drawCamp(ctx, w, h) {
    const y = h * 0.92;
    ctx.save();
    ctx.fillStyle = "rgba(8, 10, 7, 0.66)";
    ctx.fillRect(0, y, w, h - y);

    ctx.strokeStyle = "rgba(216, 179, 90, 0.52)";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(w * 0.12, y + 6);
    ctx.lineTo(w * 0.88, y + 6);
    ctx.stroke();

    for (let i = 0; i < 9; i += 1) {
      const x = w * (0.16 + i * 0.085);
      ctx.strokeStyle = "#5f442b";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(x, y + 2);
      ctx.lineTo(x - 7, y + 22);
      ctx.stroke();
    }

    this.drawSmallTent(ctx, w * 0.24, y + 42, "#3f6f55", 1.2);
    this.drawSmallTent(ctx, w * 0.39, y + 48, "#7f94a0", 1);
    this.drawSmallTent(ctx, w * 0.74, y + 44, "#3f6f55", 1.12);
    this.drawBanner(ctx, w * 0.5 - 20, y + 34, "营", 0.72);

    ctx.fillStyle = "rgba(244, 234, 210, 0.78)";
    ctx.font = "900 13px system-ui, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("己方营寨", w * 0.5, y + 56);
    ctx.restore();
  }

  drawSmallTent(ctx, x, y, color, scale = 1) {
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale, scale);
    ctx.fillStyle = "rgba(0, 0, 0, 0.26)";
    ctx.beginPath();
    ctx.ellipse(0, 22, 32, 7, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(-28, 20);
    ctx.lineTo(0, -12);
    ctx.lineTo(28, 20);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = "rgba(255, 238, 177, 0.18)";
    ctx.beginPath();
    ctx.moveTo(0, -12);
    ctx.lineTo(28, 20);
    ctx.lineTo(2, 20);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = "rgba(0, 0, 0, 0.28)";
    ctx.fillRect(-22, 20, 44, 6);
    ctx.restore();
  }

  drawGameHud(ctx, w, h) {
    const labels = [
      ["步兵盾槊阵", this.pointForDistance(58, -0.74, w, h)],
      ["弓兵后列", this.pointForDistance(100, 0.74, w, h)],
      ["两翼骑兵", this.pointForDistance(68, 1.03, w, h)],
    ];

    ctx.save();
    ctx.font = "800 12px system-ui, sans-serif";
    ctx.textAlign = "center";
    for (const [text, point] of labels) {
      ctx.fillStyle = "rgba(8, 10, 7, 0.62)";
      const width = ctx.measureText(text).width + 16;
      ctx.fillRect(point.x - width / 2, point.y - 28, width, 20);
      ctx.fillStyle = "rgba(255, 242, 195, 0.82)";
      ctx.fillText(text, point.x, point.y - 14);
    }

    ctx.textAlign = "left";
    ctx.fillStyle = "rgba(8, 10, 7, 0.58)";
    ctx.fillRect(14, 14, 156, 56);
    ctx.fillStyle = "#f1d47d";
    ctx.font = "900 13px system-ui, sans-serif";
    ctx.fillText("2D 战场推演", 26, 36);
    ctx.fillStyle = "rgba(244, 234, 210, 0.72)";
    ctx.font = "700 11px system-ui, sans-serif";
    ctx.fillText("200 米单骑冲阵路线", 26, 56);
    ctx.restore();
  }

  playerPosition(w, h) {
    const phase = this.scene.phase;
    const p = easeInOut(this.scene.progress);

    if (this.scene.event) {
      const distance = lerp(this.scene.event.distanceStart, this.scene.event.distanceEnd, p);
      let lane = 0;
      if (phase === "arrows") lane = Math.sin(p * Math.PI * 3) * 0.14;
      if (phase === "spears") lane = Math.sin(p * Math.PI * 2) * 0.1;
      if (phase === "cavalry") lane = Math.sin(p * Math.PI) * 0.2;
      if (phase === "return") lane = Math.sin(p * Math.PI * 2) * 0.14;
      if (phase === "duel") {
        const center = this.pointForDistance(0, 0, w, h);
        const angle = p * Math.PI * 2.8;
        return {
          x: center.x + Math.sin(angle) * 38,
          y: center.y + Math.cos(angle) * 18,
        };
      }
      return this.pointForDistance(distance, lane, w, h);
    }

    if (phase === "result" && this.scene.outcome) {
      return this.pointForDistance(this.scene.outcome.endDistance || 200, 0, w, h);
    }
    return this.pointForDistance(200, 0, w, h);
  }

  pointForDistance(distance, lane, width, height) {
    const ratio = clamp(distance / 200, 0, 1);
    const y = height * lerp(0.31, 0.9, ratio);
    const spread = width * lerp(0.08, 0.43, ratio);
    const curve = Math.sin(ratio * Math.PI) * width * 0.02;
    return {
      x: width * 0.5 + lane * spread + lane * curve,
      y,
    };
  }

  unitScale(distance) {
    return lerp(0.52, 1.18, clamp(distance / 200, 0, 1));
  }

  distanceToY(distance, height) {
    const ratio = clamp(distance / 200, 0, 1);
    return height * lerp(0.31, 0.9, ratio);
  }
}

function easeInOut(t) {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

function impactResponse(t) {
  const p = clamp(t, 0, 1);
  const settle = 1 - Math.pow(1 - p, 3);
  const rebound = Math.sin(p * Math.PI) * 0.16;
  return settle + rebound;
}
