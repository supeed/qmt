import{_ as c,r as t,o as F,c as r,d as i,w as n,e as l,b as s}from"./app-4f7ad5aa.js";const p={},y=s("h2",{id:"获取总市值",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#获取总市值","aria-hidden":"true"},"#"),l(" 获取总市值")],-1),d=s("div",{class:"language-python line-numbers-mode","data-ext":"py"},[s("pre",{class:"shiki dracula",style:{"background-color":"#282A36"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#6272A4"}},"# coding:gbk")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6272A4"}},"'''")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6272A4"}},"内置python，总市值")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6272A4"}},"'''")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"def"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B"}},"init"),s("span",{style:{color:"#F8F8F2"}},"("),s("span",{style:{color:"#FFB86C","font-style":"italic"}},"C"),s("span",{style:{color:"#F8F8F2"}},"):")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    stock "),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#E9F284"}},"'"),s("span",{style:{color:"#F1FA8C"}},"000001.SZ"),s("span",{style:{color:"#E9F284"}},"'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    ticks "),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}}," C.get_full_tick([stock])")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    detail "),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}}," C.get_instrument_detail(stock)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    "),s("span",{style:{color:"#6272A4"}},"# 总市值 = 最新价 * 总股本")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    price "),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}}," ticks[stock]["),s("span",{style:{color:"#E9F284"}},'"'),s("span",{style:{color:"#F1FA8C"}},"lastPrice"),s("span",{style:{color:"#E9F284"}},'"'),s("span",{style:{color:"#F8F8F2"}},"] "),s("span",{style:{color:"#FF79C6"}},"*"),s("span",{style:{color:"#F8F8F2"}}," detail["),s("span",{style:{color:"#E9F284"}},"'"),s("span",{style:{color:"#F1FA8C"}},"TotalVolumn"),s("span",{style:{color:"#E9F284"}},"'"),s("span",{style:{color:"#F8F8F2"}},"]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    "),s("span",{style:{color:"#8BE9FD"}},"print"),s("span",{style:{color:"#F8F8F2"}},"(price)")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    "),s("span",{style:{color:"#FF79C6"}},"return")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"def"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#50FA7B"}},"handlebar"),s("span",{style:{color:"#F8F8F2"}},"("),s("span",{style:{color:"#FFB86C","font-style":"italic"}},"C"),s("span",{style:{color:"#F8F8F2"}},"):")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    "),s("span",{style:{color:"#FF79C6"}},"return")]),l(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),u=s("div",{class:"language-python line-numbers-mode","data-ext":"py"},[s("pre",{class:"shiki dracula",style:{"background-color":"#282A36"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#6272A4"}},"'''")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6272A4"}},"原生python，总市值")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6272A4"}},"'''")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FF79C6"}},"from"),s("span",{style:{color:"#F8F8F2"}}," xtquant "),s("span",{style:{color:"#FF79C6"}},"import"),s("span",{style:{color:"#F8F8F2"}}," xtdata")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"xtdata.connect("),s("span",{style:{color:"#FFB86C","font-style":"italic"}},"port"),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#BD93F9"}},"58601"),s("span",{style:{color:"#F8F8F2"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"stock "),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}}," "),s("span",{style:{color:"#E9F284"}},"'"),s("span",{style:{color:"#F1FA8C"}},"000001.SZ"),s("span",{style:{color:"#E9F284"}},"'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"ticks "),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}}," xtdata.get_full_tick([stock])")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"detail "),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}}," xtdata.get_instrument_detail(stock)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6272A4"}},"# 总市值 = 最新价 * 总股本")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"price "),s("span",{style:{color:"#FF79C6"}},"="),s("span",{style:{color:"#F8F8F2"}}," ticks[stock]["),s("span",{style:{color:"#E9F284"}},'"'),s("span",{style:{color:"#F1FA8C"}},"lastPrice"),s("span",{style:{color:"#E9F284"}},'"'),s("span",{style:{color:"#F8F8F2"}},"] "),s("span",{style:{color:"#FF79C6"}},"*"),s("span",{style:{color:"#F8F8F2"}}," detail["),s("span",{style:{color:"#E9F284"}},"'"),s("span",{style:{color:"#F1FA8C"}},"TotalVolume"),s("span",{style:{color:"#E9F284"}},"'"),s("span",{style:{color:"#F8F8F2"}},"]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8BE9FD"}},"print"),s("span",{style:{color:"#F8F8F2"}},"(price)")]),l(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),b=s("div",{class:"language-vb line-numbers-mode","data-ext":"vb"},[s("pre",{class:"shiki dracula",style:{"background-color":"#282A36"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"NA")]),l(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1);function m(v,_){const o=t("Tabs");return F(),r("div",null,[y,i(o,{id:"3",data:[{id:"内置python"},{id:"原生python"},{id:"VBA"}]},{title0:n(({value:e,isActive:a})=>[l("内置python")]),title1:n(({value:e,isActive:a})=>[l("原生python")]),title2:n(({value:e,isActive:a})=>[l("VBA")]),tab0:n(({value:e,isActive:a})=>[d]),tab1:n(({value:e,isActive:a})=>[u]),tab2:n(({value:e,isActive:a})=>[b]),_:1})])}const A=c(p,[["render",m],["__file","总市值.html.vue"]]);export{A as default};
