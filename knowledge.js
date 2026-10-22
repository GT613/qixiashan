(function(root){
  const data = [
  {
    "id": "qixia",
    "title": "栖霞山",
    "keywords": [
      "栖霞山",
      "摄山",
      "名字",
      "别名"
    ],
    "text": "栖霞山又名摄山，文章将此名与山中可供养生的药草联系起来；栖霞山名与南朝栖霞精舍有关。",
    "source": "https://dfz.nanjing.gov.cn/gzdt/202409/t20240930_4778265.html",
    "sourceTitle": "南京市地方志工作办公室｜金陵揽胜之古刹摄山",
    "published": "2024-09-30",
    "checked": "2026-10-21",
    "status": "官方文章摘要",
    "place": "栖霞山",
    "category": "历史文化",
    "verified": true
  },
  {
    "id": "temple",
    "title": "栖霞寺",
    "keywords": [
      "栖霞寺",
      "精舍",
      "古寺",
      "建寺",
      "南齐"
    ],
    "text": "栖霞寺的历史可追溯至南齐，早期称栖霞精舍。此处采用朝代层面的介绍，不以调研材料中的不同建寺年份作确定结论。",
    "source": "https://dfz.nanjing.gov.cn/gzdt/202409/t20240930_4778265.html",
    "sourceTitle": "南京市地方志工作办公室｜金陵揽胜之古刹摄山",
    "published": "2024-09-30",
    "checked": "2026-10-21",
    "status": "官方文章摘要",
    "place": "栖霞寺",
    "category": "历史文化",
    "verified": true
  },
  {
    "id": "pagoda",
    "title": "舍利塔",
    "keywords": [
      "舍利塔",
      "石塔",
      "南唐",
      "隋代"
    ],
    "text": "文中记载舍利塔始建于隋代、南唐重建，位于毗卢殿东南。",
    "source": "https://dfz.nanjing.gov.cn/gzdt/202409/t20240930_4778265.html",
    "sourceTitle": "南京市地方志工作办公室｜金陵揽胜之古刹摄山",
    "published": "2024-09-30",
    "checked": "2026-10-21",
    "status": "官方文章摘要",
    "place": "舍利塔",
    "category": "历史文化",
    "verified": true
  },
  {
    "id": "grotto",
    "title": "千佛岩",
    "keywords": [
      "千佛岩",
      "千佛崖",
      "石窟",
      "石刻",
      "造像"
    ],
    "text": "千佛岩位于舍利塔东侧，文中将其石壁造像的开凿联系到齐梁时期。",
    "source": "https://dfz.nanjing.gov.cn/gzdt/202409/t20240930_4778265.html",
    "sourceTitle": "南京市地方志工作办公室｜金陵揽胜之古刹摄山",
    "published": "2024-09-30",
    "checked": "2026-10-21",
    "status": "官方文章摘要",
    "place": "千佛岩",
    "category": "历史文化",
    "verified": true
  },
  {
    "id": "stele",
    "title": "明征君碑",
    "keywords": [
      "明征君碑",
      "碑刻",
      "石碑",
      "674"
    ],
    "text": "文中记载栖霞寺门外的明征君碑立于唐上元元年（674年）。",
    "source": "https://dfz.nanjing.gov.cn/gzdt/202409/t20240930_4778265.html",
    "sourceTitle": "南京市地方志工作办公室｜金陵揽胜之古刹摄山",
    "published": "2024-09-30",
    "checked": "2026-10-21",
    "status": "官方文章摘要",
    "place": "明征君碑",
    "category": "历史文化",
    "verified": true
  },
  {
    "id": "autumn",
    "title": "秋栖霞",
    "keywords": [
      "秋栖霞",
      "红叶",
      "赏秋",
      "枫叶",
      "秋天"
    ],
    "text": "栖霞山以秋景著称，文中介绍了深秋枫叶与古寺相映的景致。",
    "source": "https://dfz.nanjing.gov.cn/gzdt/202409/t20240930_4778265.html",
    "sourceTitle": "南京市地方志工作办公室｜金陵揽胜之古刹摄山",
    "published": "2024-09-30",
    "checked": "2026-10-21",
    "status": "官方文章摘要",
    "place": "栖霞山",
    "category": "自然风景",
    "verified": true
  },
  {
    "id": "treasures",
    "title": "栖霞山三宝",
    "keywords": [
      "三宝",
      "文化遗产",
      "文物"
    ],
    "text": "地方志部门在《志说栖霞山》讲座报道中，将明征君碑、舍利塔、千佛崖合称为“栖霞山三宝”。",
    "source": "https://dfz.nanjing.gov.cn/gzdt/202409/t20240930_4778210.html",
    "sourceTitle": "南京市地方志工作办公室｜栖霞区志办“方志人讲志”系列活动开讲",
    "published": "2024-09-30",
    "checked": "2026-10-21",
    "status": "官方原文核对摘要",
    "verified": true,
    "category": "历史文化",
    "place": ""
  },
  {
    "id": "lake",
    "title": "明镜湖",
    "keywords": [
      "明镜湖",
      "湖景"
    ],
    "text": "区政府发布的秋景报道提到明镜湖及其秋日景观。报道记录的是2025年秋景，不代表今日红叶状态。",
    "source": "https://www.njqxq.gov.cn/qxzx/tpxw/202511/t20251125_5697124.html",
    "sourceTitle": "南京市栖霞区人民政府｜红枫染栖霞",
    "published": "2025-11-25",
    "checked": "2026-10-21",
    "status": "官方原文核对摘要",
    "verified": true,
    "category": "自然风景",
    "place": "栖霞山 明镜湖"
  },
  {
    "id": "redvalley",
    "title": "红叶谷与桃花湖",
    "keywords": [
      "红叶谷",
      "桃花湖",
      "赏枫",
      "看红叶"
    ],
    "text": "区政府2025年11月的报道列举了红叶谷、桃花湖等赏景地点。可作为认识景区的线索；具体通行与观赏情况以现场公告为准。",
    "source": "https://www.njqxq.gov.cn/qxzx/tpxw/202511/t20251125_5697124.html",
    "sourceTitle": "南京市栖霞区人民政府｜红枫染栖霞",
    "published": "2025-11-25",
    "checked": "2026-10-21",
    "status": "官方原文核对摘要",
    "verified": true,
    "category": "自然风景",
    "place": "栖霞山 红叶谷"
  },
  {
    "id": "qianlong",
    "title": "乾隆“第一金陵明秀山”碑",
    "keywords": [
      "乾隆",
      "明秀山",
      "御碑",
      "碑刻"
    ],
    "text": "南京市第五批市级文物保护单位名单收录了这块清代碑刻，名录地址为栖霞区栖霞山原佛学院。“第一金陵明秀山”在此是碑名，不作为本项目的景点评分或排名。",
    "source": "https://www.nanjing.gov.cn/zdgk/202309/t20230918_4013972.html",
    "sourceTitle": "南京市人民政府｜第五批市级文物保护单位通知",
    "published": "2023-09-14",
    "checked": "2026-10-21",
    "status": "官方原文核对摘要",
    "verified": true,
    "category": "历史文化",
    "place": ""
  },
  {
    "id": "well",
    "title": "受降井",
    "keywords": [
      "受降井",
      "抗战",
      "文物"
    ],
    "text": "受降井列入第五批南京市文物保护单位名单，时代标注为民国，地址为栖霞区栖霞寺内。名录未说明当前参观安排。",
    "source": "https://www.nanjing.gov.cn/zdgk/202309/t20230918_4013972.html",
    "sourceTitle": "南京市人民政府｜第五批市级文物保护单位通知",
    "published": "2023-09-14",
    "checked": "2026-10-21",
    "status": "官方原文核对摘要",
    "verified": true,
    "category": "历史文化",
    "place": ""
  },
  {
    "id": "jiran",
    "title": "寂然上人碑",
    "keywords": [
      "寂然",
      "上人碑",
      "文物"
    ],
    "text": "寂然上人碑列入第五批南京市文物保护单位名单，时代标注为民国，地址为栖霞区栖霞寺祖堂西侧。这里仅提供名录事实，不补写未经核实的生平故事。",
    "source": "https://www.nanjing.gov.cn/zdgk/202309/t20230918_4013972.html",
    "sourceTitle": "南京市人民政府｜第五批市级文物保护单位通知",
    "published": "2023-09-14",
    "checked": "2026-10-21",
    "status": "官方原文核对摘要",
    "verified": true,
    "category": "历史文化",
    "place": ""
  },
  {
    "id": "metro",
    "title": "地铁6号线与栖霞山站",
    "keywords": [
      "地铁",
      "6号线",
      "六号线",
      "南京南站",
      "S1",
      "机场线",
      "交通"
    ],
    "text": "据规划资源局2026年10月13日发布的介绍，6号线北起栖霞山站，南至南京南站，并与S1号线贯通运营。乘车班次和运营调整请查地铁当日公告。",
    "source": "https://ghj.nanjing.gov.cn/xwzx/gzdt/202610/t20261013_5924898.html",
    "sourceTitle": "南京市规划和自然资源局｜全线开通！跟随规划视角读懂地铁6号线",
    "published": "2026-10-13",
    "checked": "2026-10-21",
    "status": "官方原文核对摘要",
    "verified": true,
    "category": "交通出行",
    "place": "栖霞山站"
  },
  {
    "id": "station",
    "title": "栖霞山站的“司南”设计",
    "keywords": [
      "司南",
      "出入口",
      "栖霞山站"
    ],
    "text": "市规划资源局介绍，栖霞山站位于栖霞大道北侧，与景区隔九乡河相望；1号出入口的造型取意于古代司南。此条介绍车站设计，不提供站口到景区的步行导航。",
    "source": "https://ghj.nanjing.gov.cn/xwzx/gzdt/202610/t20261013_5924898.html",
    "sourceTitle": "南京市规划和自然资源局｜全线开通！跟随规划视角读懂地铁6号线",
    "published": "2026-10-13",
    "checked": "2026-10-21",
    "status": "官方原文核对摘要",
    "verified": true,
    "category": "交通出行",
    "place": "栖霞山站"
  }
];
  root.QixiaData=data;
  if(typeof module!=="undefined") module.exports=data;
})(globalThis);
