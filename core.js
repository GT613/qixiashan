(function (root) {
  'use strict';
  function safeUrl(value) {
    try { const u = new URL(value); return u.protocol === 'https:' && !u.username && !u.password ? u.href : null; }
    catch { return null; }
  }
  function search(question, records, category='全部') {
    const q = String(question).trim().slice(0,500);
    if (!q) return {kind:'empty',message:'请输入一个问题，例如：舍利塔有什么历史？',items:[]};
    if (/首班|末班|时刻|班次|票价|门票|多少钱|开放|开门|关门|营业|天气|下雨|拥挤|客流|今天|明天|现在|实时|封路|停车|预约|电话/.test(q))
      return {kind:'live',message:'样例没有实时运营数据，无法确认票价、开放时间、天气或当前通行情况。请以景区当日公告为准。',items:[]};
    if (/路线|怎么走|导航|无障碍|轮椅|多久|几分钟|公里|距离|捷径|近路/.test(q))
      return {kind:'route',message:'尚未接入经核验的景区道路与坐标，不能生成步行路线、距离或无障碍承诺。可点击“看地图”，再打开高德检索，再核对景区现场指示。',items:[]};
    const eligible = records.filter(r=>r.verified===true && r.checked && safeUrl(r.source) && (category==='全部'||r.category===category));
    const items = eligible.map(r => ({record:r,score:r.keywords.reduce((n,k)=>n+(q.toLowerCase().includes(k.toLowerCase())?(k==='栖霞山'?0.5:k.length):0),0)}))
      .filter(x=>x.score>0).sort((a,b)=>b.score-a.score).slice(0,6).map(x=>x.record);
    return {kind:items.length?'found':'missing',message:items.length ? '以下是关键词匹配到的相关资料，未必覆盖问题的全部细节。当前未接入大模型，不作额外推断。' : '样例知识库中没有找到相关资料。可以尝试景点名称，或补充有出处的知识条目。',items};
  }
  function validateImport(value) {
    if (!Array.isArray(value) || value.length===0 || value.length>100) throw Error('请提供包含 1–100 条知识的 JSON 数组。');
    const ids=new Set();
    return value.map((r,i)=>{
      if (!r || typeof r!=='object') throw Error('第 '+(i+1)+' 条不是对象。');
      for(const [key,max] of [['id',80],['title',100],['text',3000],['source',2000],['sourceTitle',200]]) {
        if(typeof r[key]!=='string' || !r[key].trim() || r[key].length>max) throw Error('第 '+(i+1)+' 条的 '+key+' 缺失或过长。');
      }
      if(ids.has(r.id)) throw Error('知识 id 不能重复。'); ids.add(r.id);
      if(!safeUrl(r.source)) throw Error('来源必须是无账号密码的 HTTPS 链接。');
      if(!Array.isArray(r.keywords) || !r.keywords.length || r.keywords.length>20 || r.keywords.some(k=>typeof k!=='string'||k.trim().length<2||k.length>40)) throw Error('每条需 1–20 个关键词，每个 2–40 字。');
      return {id:r.id,title:r.title,text:r.text,keywords:r.keywords.map(k=>k.trim()),source:safeUrl(r.source),sourceTitle:r.sourceTitle,published:typeof r.published==='string'?r.published.slice(0,10):'',checked:'',status:'用户导入 · 未核验',verified:false,category:'待核验',place:typeof r.place==='string'?r.place.slice(0,100):r.title};
    });
  }
  function mapUrl(place) { return 'https://uri.amap.com/search?keyword='+encodeURIComponent('南京 '+place)+'&city='+encodeURIComponent('南京')+'&view=map&src=qixia-local-demo'; }
  function reply(question,records,previousId){
    const q=String(question).trim().slice(0,200);
    if(/^(你好|您好|嗨|哈喽|hello)[！!。？?]*$/i.test(q))return {title:'你好呀！',text:'我是小枫，可以介绍栖霞山的文化、景点和交通。试试问我“栖霞山三宝是什么”。',items:[]};
    if(/^(谢谢|感谢|多谢)/.test(q))return {title:'不客气！',text:'很高兴陪你认识栖霞山。还想听哪处景点的故事？',items:[]};
    if(/人工|投诉|联系.*客服/.test(q))return {title:'联系景区服务',text:'我不是人工客服，暂未接入景区客服转接。请通过景区官方公告或现场游客服务中心联系工作人员；我不会编造电话号码。',items:[]};
    const previous=records.find(r=>r.id===previousId&&r.verified===true);
    const follow=previous&&/^(它|那里|这个|那它|那儿|那座|还有呢|再讲|继续)/.test(q);
    const result=search(follow?previous.title+' '+q:q,records);
    if(result.kind==='found')return {title:'小枫找到这些资料',text:'',items:result.items};
    return {title:result.kind==='live'?'请核对当日公告':result.kind==='route'?'出行小提醒':'这个问题还需要核实',text:result.kind==='missing'?'现有官方资料里没有可靠答案，我先不猜。你可以换个景点名称，或者到“知识卡”看看已有资料。':result.message,items:[]};
  }
  const api={safeUrl,search,reply,validateImport,mapUrl}; root.QixiaCore=api;
  if(typeof module!=='undefined') module.exports=api;
})(globalThis);
