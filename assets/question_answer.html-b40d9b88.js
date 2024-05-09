import{_ as c}from"./内置API_下载python库-6c9908d4.js";import{_ as i,a as s,b as p,c as l,d as h,e as _}from"./image-20210318151523278-7d5c8541.js";import{_ as u,r as g,o as b,c as m,b as t,e,d as o,a as r}from"./app-4f7ad5aa.js";const f="/assets/内置API_python库路径-d7c814ff.png",k="/assets/内置API_恢复默认页面布局-32bae122.png",a="/assets/image102-e241c2ea.png",n="/assets/image101-f08e9e1f.png",E={},x=r('<h2 id="python环境相关" tabindex="-1"><a class="header-anchor" href="#python环境相关" aria-hidden="true">#</a> Python环境相关</h2><h3 id="安装第三方-python-库报错" tabindex="-1"><a class="header-anchor" href="#安装第三方-python-库报错" aria-hidden="true">#</a> 安装第三方 Python 库报错</h3><p><strong>问题描述：</strong></p><p><code>&quot;ImportError:Forbidden:Moduleopenpyxl not in whitelist!&quot;</code></p><p><strong>问题解答：</strong></p><p>该报错是由于券商后台开启了 Python 库白名单，若您使用的是券商提供的QMT终端，请联系您的所属券商开通对应 Python 库白名单权限即可。</p><h3 id="启动策略时pandas库报错" tabindex="-1"><a class="header-anchor" href="#启动策略时pandas库报错" aria-hidden="true">#</a> 启动策略时pandas库报错</h3><p><strong>报错信息1 ：NameError: name &#39;pandas&#39; is not defined</strong></p><p><strong>解答：</strong></p><p>该报错是指当前环境下没有找到pandas库</p><p><strong>解决方法</strong></p><ol><li>请在<code>设置-模型设置</code>中检查正确设置了路径,正确路径应指向<code>{安装目录}\\bin.x64</code></li></ol><p><img src="'+f+'" alt="正确路径参考"></p><ol start="2"><li>请检查是否已经下载了python环境</li></ol><p><img src="'+c+'" alt="下载python环境"></p><p><strong>报错信息2 ：AttributeError: module &#39;pandas&#39; has no attribute &#39;core&#39;</strong></p><p><strong>解答：</strong></p><p>该报错是由于在pandas导入中被强行中断导致的</p><p><strong>解决方法</strong></p><p><strong>重启客户端</strong></p><h3 id="对第三方库的支持" tabindex="-1"><a class="header-anchor" href="#对第三方库的支持" aria-hidden="true">#</a> 对第三方库的支持</h3><p>QMT Python API 提供基于 <code>Python 3.6</code> 规范的标准量化投资策略应用程序接口，本文档示例代码基于 <code>Python 3.6</code> 规范。我司主要通过以下两种方式对外提供：</p><h3 id="系统自带的-python-环境" tabindex="-1"><a class="header-anchor" href="#系统自带的-python-环境" aria-hidden="true">#</a> 系统自带的 Python 环境</h3><p><code>QMT</code> 系统的安装包默认自带 <code>Python</code> 运行环境。用户安装完迅投客户端后，默认可以直接使用<code>Python</code>。在这个打包的<code>Python</code>环境中，迅投除了提供标准的 <code>Python api</code> 带的库外，还集成了如下一些第三方库：</p><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>NumPy</td><td>NumPy (Numeric Python) 提供了许多高级的数值编程工具，如：矩阵数据类型、矢量处理，以及精密的运算库。专为进行严格的数字处理而产生。</td></tr><tr><td>Pandas</td><td>Python Data Analysis Library 或 Pandas 是基于 NumPy 的一种工具，该工具是为了解决数据分析任务而创建的。Pandas 纳入了大量库和一些标准的数据模型，提供了高效地操作大型数据集所需的工具。Pandas 提供了大量能使我们快速便捷地处理数据的函数和方法。</td></tr><tr><td>Patsy</td><td>一个线性模型分析和构建工具库。</td></tr><tr><td>SciPy</td><td>SciPy 函数库在 NumPy 库的基础上增加了众多的数学、科学以及工程计算中常用的库函数。例如线性代数、常微分方程数值求解、信号处理、图像处理、稀疏矩阵等等。</td></tr><tr><td>Statsmodels</td><td>Python 的统计建模和计量经济学工具包，包括一些描述统计、统计模型估计和推断。</td></tr><tr><td>TA_Lib</td><td>称作技术分析库，是一种广泛用在程序化交易中进行金融市场数据的技术分析的函数库。它提供了多种技术分析的函数，可以大大方便我们量化投资中编程工作，内容包括：多种指标，如 ADX, MACD, RSI, 布林轨道等；K 线形态识别，如黄昏之星，锤形线等等。</td></tr></tbody></table><h3 id="第三方库导入指引" tabindex="-1"><a class="header-anchor" href="#第三方库导入指引" aria-hidden="true">#</a> 第三方库导入指引</h3><p>除迅投提供的标准 <code>Python api</code> 和集成的部分第三方库，用户也可自己在 <code>Python</code> 官网下载其他所需第三方库，使用方式如下：</p><p>（1）本地安装Python环境，下载python3.6，Python官网：https://www.python.org/downloads/release/python-360/</p><p>（2）安装位置：C:\\Python36</p><p>​ 新增环境变量：我的电脑--属性--高级系统设置--高级--环境变量---path：C:\\Python36;C:\\Python36\\Scripts</p><p>​ <img src="'+i+'" alt="img"></p><p>（3）Python环境检查</p><p>​ Win+R 打开运行,输入 <code>cmd</code></p><p><img src="'+s+'" alt="img"></p><p>​ 检查Python变量</p><p><img src="'+p+'" alt="image-20210318150744951"></p><p>（4）安装第三方库</p><p>​ 安装前先确认客户端安装目录，根据个人电脑进行调整。</p><p>​ 安装时若遇到下面错误提示，请执行 <code>pip</code> 更新命令 <code>python -m pip install --upgrade pip</code></p><p><img src="'+l+'" alt="image-20210318151342044"></p><p>​ 安装三方库命令 <code>pip install openpyxl -t E:\\QMT交易端20962\\bin.x64\\Lib\\site-packages</code></p><p><img src="'+h+'" alt="image-20210318151401916"></p><p>（5）检查安装结果</p><p>​ 安装位置\\bin.x64\\Lib\\site-packages检查安装库</p><p><img src="'+_+'" alt="image-20210318151523278"></p><h2 id="业务规则相关" tabindex="-1"><a class="header-anchor" href="#业务规则相关" aria-hidden="true">#</a> 业务规则相关</h2><h3 id="交易所委托数量规则" tabindex="-1"><a class="header-anchor" href="#交易所委托数量规则" aria-hidden="true">#</a> 交易所委托数量规则</h3><ol><li>科创板，连续交易时段限价单笔最大是10万股，市价单笔最大是5万股，盘后定价交易单笔最大量是100万股，200股起，1股递增。</li><li>创业板，连续交易时段限价单笔最大30万股，市价单笔最大15万股，100股起，100股递增。</li><li>主板，6和0开头的，连续交易时段单笔最大100万股，100股起，100股递增。</li></ol><h2 id="策略运行相关" tabindex="-1"><a class="header-anchor" href="#策略运行相关" aria-hidden="true">#</a> 策略运行相关</h2><h3 id="在策略没有勾选终端启动后自动运行的情况下-策略自动启动运行" tabindex="-1"><a class="header-anchor" href="#在策略没有勾选终端启动后自动运行的情况下-策略自动启动运行" aria-hidden="true">#</a> 在策略没有勾选<code>终端启动后自动运行</code>的情况下，策略自动启动运行</h3><p><strong>情况一</strong></p><p>策略被运行于行情界面的副图上，随客户端启动被启动</p><p><strong>解决方法</strong></p><p>在右上角的页面布局中选择<code>恢复默认布局</code>，并重启客户端 <img src="'+k+'" alt="恢复默认布局"></p><p><strong>情况二</strong></p><p>交易日切换/行情断线重连时，所有挂着的模型会被重新运行，这是正常的</p><h2 id="策略回测相关" tabindex="-1"><a class="header-anchor" href="#策略回测相关" aria-hidden="true">#</a> 策略回测相关</h2><h3 id="qmt在回测时如何选择复权方式" tabindex="-1"><a class="header-anchor" href="#qmt在回测时如何选择复权方式" aria-hidden="true">#</a> QMT在回测时如何选择复权方式</h3><p><strong>解答</strong></p><p>回测是为了更贴近历史数据，但实际中各类配股、增发的动作，会造成价格的异常波动，为了避免这样的波动对回测的影响，我们推荐用户在回测中使用<strong>等比前复权价</strong>，这样在回测过程中，无需考虑配股、增发带来的变化，始终以统一标准的价格进行买卖，方便的同时也能得到更贴合历史数据的回测收益和表现。</p><h2 id="交易相关" tabindex="-1"><a class="header-anchor" href="#交易相关" aria-hidden="true">#</a> 交易相关</h2><h3 id="系统对象-contextinfo-逐-k-线保存的机制" tabindex="-1"><a class="header-anchor" href="#系统对象-contextinfo-逐-k-线保存的机制" aria-hidden="true">#</a> 系统对象 ContextInfo 逐 k 线保存的机制</h3><p><strong>机制说明</strong></p><p><code>ContextInfo</code>是由底层维护并传递给<code>init</code>、<code>handlebar</code>等系统函数的参数，同一个 bar（不是 bar 里面的 tick，下同）内<code>ContextInfo</code>本质上是同一个变量且对其进行的修改只会对本次handlebar调用的下文所起作用。<code>handlebar</code>里对<code>ContextInfo</code>做的修改在该 bar 结束后才会进行保存，也就是说，对<code>ContextInfo</code>做的修改会在下一个 bar 体现出来。</p><p>具体来说，<code>ContextInfo</code>不同于一般 python 对象，做了逐 k 线更新设计，盘中主图品种每个 Level 1 分笔到达会触发<code>handlebar</code>函数调用，但只有 k 线结束时最后一个分笔触发的<code>handlebar</code>调用，对<code>ContextInfo</code>的修改才有效。</p><p>每次<code>handlebar</code>函数调用前会对<code>ContextInfo</code>对象进行深拷贝, 下一次分笔行情到来时，如果新的分笔不是新 k 线 bar 第一个分笔，则判断上一个分笔不是k线最后分笔，<code>ContextInfo</code>对象被回退为之前深拷贝的那个。</p><p><code>ContextInfo</code>对象逐k线更新机制设计的目的，是为了在盘中时模拟k线的效果，只在k线结束的分笔触发的<code>handlebar</code>函数运行时生效一次，丢弃所有其他分笔的修改。</p><p><strong>影响</strong></p><p>该机制有两个影响，一是在<code>ContextInfo</code>对象中存数据每次分笔到达时会被深拷贝，拖慢策略运行；二是<code>ContextInfo</code>适用于记录逐k线生效的交易信号（<code>quickTrade</code>参数传<code>0</code>），不适宜立刻下单的情况。</p><p>如不需要模拟k线效果，希望调用交易函数后立刻下单，<code>quickTrade</code>参数可以传<code>2</code>， 下单记录可以用普通的全局变量保存, 不能存在<code>ContextInfo</code>对象的属性里(实现可以参考实盘示例7-调整至目标持仓Demo)。</p><h3 id="快速交易参数-quicktrade" tabindex="-1"><a class="header-anchor" href="#快速交易参数-quicktrade" aria-hidden="true">#</a> 快速交易参数 quickTrade</h3><p>下单函数<code>passorder</code>有可选参数快速交易<code>quickTrade</code>， 默认为<code>0</code>。</p><ul><li>传<code>0</code>，只在k线结束分笔时调用<code>passorder</code>产生有效信号，其他情况调用不产生信号。</li><li>传<code>1</code>，在当前k线为最新k线时调用<code>passorder</code>函数产生有效信号, 历史k线调用不产生信号。</li><li>传<code>2</code>，任何情况下调用<code>passorder</code>都产生有效信号，不会丢弃任何一次调用的信号。</li><li>如果在定时器注册的回调函数，行情回调函数, <code>after_init</code>函数中调用下单函数，需要传<code>2</code>，确保不会漏单。</li><li><code>passorder</code>以外的下单函数不能指定快速交易参数，效果与传<code>0</code>的<code>passorder</code>一致。</li></ul><h3 id="下单与回报相关" tabindex="-1"><a class="header-anchor" href="#下单与回报相关" aria-hidden="true">#</a> 下单与回报相关</h3><ol><li><p>为保证以尽快的速度执行交易信号, qmt 客户端提供的交易接口是异步的, 以快速交易参数填<code>2</code>的<code>passorder</code>函数为例，调用后会立刻发出委托, 然后返回。不会等待委托回报, 也不会阻塞python线程的运行。</p></li><li><p>委托/成交/持仓/账号信息的更新, 是在客户端后台进行的, python策略中无法手动控制。python提供的取账号信息接口 <code>get_trade_detail_data</code>， 与四种交易回调函数, 都是从客户端本地缓存中读取数据 / 触发调用，不是调用时查询柜台再返回。客户端本地缓存状态定期接收柜台推送刷新，有交易主推的柜台50ms一次，没有交易主推的柜台1-6秒一次。 不能认为get_trade_detail_data查到的状态是与柜台完全一致的, 比如卖出委托后立刻查询, 不会查到对应委托, 可用资金也不会变多。</p></li><li><p>实盘策略需要设计盘中保存/更新委托状态的机制。常见的做法是用全局变量字典保存委托状态, 给每一笔委托独立的投资备注作为字典的<code>key</code>，委托状态作为字典的<code>value</code>, 下单后默认设置为待报, 之后查到委托后更新状态。如果某品种股票存在待报状态委托, 暂停该品种后续报单, 防止发生超单的情况。(实现可以参考实盘示例7-调整至目标持仓Demo)</p></li><li><p>QMT 所有策略是在同一个线程中被调用的，任意一个策略阻塞线程(死循环 sleep 加锁等操作)会导致所有策略的执行被阻塞，所以不能在策略里写等待操作。如需要多线程 / 多进程的用法，可以使用极简模式配合 xtquant 库使用</p></li></ol><h3 id="qmt-下单失败" tabindex="-1"><a class="header-anchor" href="#qmt-下单失败" aria-hidden="true">#</a> QMT 下单失败</h3><ol><li><p>检查是否是在模型交易界面，实盘模式运行的策略。模拟模式只显示策略信号，不发出委托。</p></li><li><p>如运行到交易函数，未看到策略信号，检查交易函数是否使用了快速下单参数(<code>quickTrade</code>)，默认为<code>0</code>，只会在k线结束发出委托，日线及以上周期等于全天不会委托。传<code>1</code>时，非历史bar上执行时（ContextInfo.is_last_bar()为True），只要策略模型中调用到就触发下单交易。传<code>2</code>，无论是否是历史bar，运行到交易函数时立刻发出委托。</p></li></ol><p>如果希望盘中出现信号立即下单，建议传<code>1</code>，这种情况下会有策略信号闪烁的风险，需要自己处理；如果希望K线结束下单（信号不闪烁），建议传<code>0</code>，<strong>通常情况下不建议传<code>2</code></strong></p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>具体到场景：</p><ol><li>handlebar逐k线下单, 每次k线结束的分笔生效一次, 传0;</li><li>需要在handlebar盘中触发立刻下单, 传1;</li><li>定时器/init/after_init与交易回调函数, 行情回调函数内下单, 传2.</li></ol></div><ol start="3"><li>如看到实盘的策略信号，未找到对应委托，检查客户端左下角消息提示是否有报错，如有，请根据消息提示的描述修改下单参数</li></ol><h2 id="行情相关" tabindex="-1"><a class="header-anchor" href="#行情相关" aria-hidden="true">#</a> 行情相关</h2><h3 id="qmt-行情数据基础概念" tabindex="-1"><a class="header-anchor" href="#qmt-行情数据基础概念" aria-hidden="true">#</a> QMT 行情数据基础概念</h3><p>QMT行情数据主要分为三种，包括<strong>本地数据</strong>，<strong>全推数据</strong>，<strong>订阅数据</strong>。</p>',83),y=t("strong",null,"本地数据：",-1),A={href:"https://dict.thinktrader.net/innerApi/data_function.html#contextinfo-get-market-data-ex-%E8%8E%B7%E5%8F%96%E8%A1%8C%E6%83%85%E6%95%B0%E6%8D%AE",target:"_blank",rel:"noopener noreferrer"},P=t("strong",null,"全推数据：",-1),q=t("strong",null,"服务器对交易所下发的数据，每50ms汇总一次期间的变化，打包发送给下游客户端",-1),C=t("code",null,"get_full_tick",-1),B=t("code",null,"subscribe_whole_quote",-1),v={href:"https://dict.thinktrader.net/innerApi/data_function.html#contextinfo-get-full-tick-%E8%8E%B7%E5%8F%96%E5%85%A8%E6%8E%A8%E6%95%B0%E6%8D%AE",target:"_blank",rel:"noopener noreferrer"},T={href:"https://dict.thinktrader.net/innerApi/data_function.html#contextinfo-subscribe-whole-quote-%E8%AE%A2%E9%98%85%E5%85%A8%E6%8E%A8%E6%95%B0%E6%8D%AE",target:"_blank",rel:"noopener noreferrer"},I=t("strong",null,[e("订阅："),t("strong",null,[e("指向行情服务器订阅指定品种行情, 共有四种周期(分笔 1分钟 5分钟 日线)，可以订阅当日数据，当天以前的需要用 "),t("code",null,"down_history_data"),e("下. 订阅有最大数量限制(例如：假设最大数量限制为300个，则可以单独订阅日线300个，若同时订阅日线和五分钟 则各150个)，如需订阅超过500个限额，可以在页面右上角，选购")]),e("行情vip服务")],-1),w={href:"https://dict.thinktrader.net/innerApi/data_function.html#contextinfo-subscribe-quote-%E8%AE%A2%E9%98%85%E8%A1%8C%E6%83%85%E6%95%B0%E6%8D%AE",target:"_blank",rel:"noopener noreferrer"},M={href:"https://dict.thinktrader.net/innerApi/data_function.html#contextinfo-get-market-data-ex-%E8%8E%B7%E5%8F%96%E8%A1%8C%E6%83%85%E6%95%B0%E6%8D%AE",target:"_blank",rel:"noopener noreferrer"},Q=t("code",null,"get_market_data",-1),F=t("code",null,"get_market_data_ex(subscribe=True,)",-1),L=t("code",null,"subscibe_quote",-1),X=r('<div class="custom-container danger"><p class="custom-container-title">警告</p><p>如果超出订阅数量限制，则返回的行情数据会使用前值填充，出现重复值，非正确行情数据。</p></div><h3 id="qmt-行情调用函数对比说明" tabindex="-1"><a class="header-anchor" href="#qmt-行情调用函数对比说明" aria-hidden="true">#</a> QMT 行情调用函数对比说明</h3><ul><li><code>down_history_data</code> 下载指定区间的行情数据到本地，存放在硬盘上。效果和界面,点击行情数据下载一致。 开始时间不填时，为增量下载(以本地数据最后一天为开始时间), 填写的话按填写值下载。</li><li><code>get_local_data</code> 取本地数据函数，盘中不会更新，速度快，回测可以用这个函数取。</li><li><code>get_full_tick</code> 取客户端缓存中的最新全推数据。全推数据不包括历史，不用订阅，没有品种数量限制，盘中50ms更新一次，速度快。</li><li><code>subscribe_quote</code> 向服务器订阅股票行情 盘中实时更新 初次订阅耗时长，最大订阅品种数受限. 订阅超过一定数量的品种k线行情不会更新.可订阅四种基本周期(分笔 一分钟 五分钟 日线)行情（如果有 Level-2 行情权限 也可以订 Level-2 的）, 同一品种订阅了不同周期累加计数(如订阅浦发银行 1分钟 5分钟 日线行情 算订阅3次). 复数策略订阅同一品种计数不会累加. Level-2 的订阅也会受限，但是和 Level 1 的互不影响。</li><li><code>unsubscribe_quote</code> 按订阅号反订阅行情, 释放可订阅数.</li><li><code>get_market_data_ex</code> 取订阅/本地数据接口。用<code>subscribe_quote</code>在<code>init</code>函数中先订阅后<code>subscribe</code>参数为<code>True</code>时，取本地数据和订阅的最新行情。<code>subscribe</code>参数传<code>False</code>时,可以用来取本地数据，不会订阅。 如股票池超过一定数量，可用 <code>down_history_data</code> + <code>get_local_data</code> + <code>get_full_tick</code> 拼接历史和最新数据替代<code>get_market_data_ex</code>。</li></ul><div class="custom-container warning"><p class="custom-container-title">注意</p><p><code>gmd</code>系列函数在<code>init</code>中运行时，只能读取到本地数据，不会取到最新行情数据，因子，<strong>不建议在<code>init</code>中调用使用<code>gmd</code>系列函数</strong></p></div><div class="custom-container danger"><p class="custom-container-title">警告</p><p><strong>不再推荐使用!</strong></p><p><code>set_universe</code>, <code>get_history_data</code>, <code>get_market_data</code> 是早期订阅股票池, 取订阅的行情数据接口. 因为<code>set_universe</code>订阅的品种没有订阅号 无法在策略中反订阅, 只能通过停止策略释放订阅数。</p></div><h3 id="全推接口和订阅接口的分笔行情没有5档行情-只有最新价" tabindex="-1"><a class="header-anchor" href="#全推接口和订阅接口的分笔行情没有5档行情-只有最新价" aria-hidden="true">#</a> 全推接口和订阅接口的分笔行情没有5档行情，只有最新价</h3><p><strong>问题描述</strong></p><p><code>get_full_tick</code>, <code>subscribe_while_quote</code>函数中获取分笔行情没有5档行情，只有最新价。</p><p><strong>解决办法</strong></p><p>修改行情源对应的<strong>全推行情</strong>级别，见下图</p><p><img src="'+a+'" alt="img"></p><p>或者</p><p><img src="'+n+'" alt="img"></p><h3 id="行情中心和交易中心到底有啥区别" tabindex="-1"><a class="header-anchor" href="#行情中心和交易中心到底有啥区别" aria-hidden="true">#</a> 行情中心和交易中心到底有啥区别？</h3><p>行情中心控制单支订阅，例如<code>subscribe_quote</code></p><p>交易中心影响全推数据，例如<code>get_full_tick</code>,<code>subscribe_whole_quote</code></p><h3 id="passorder使用对手价下单报错-有误" tabindex="-1"><a class="header-anchor" href="#passorder使用对手价下单报错-有误" aria-hidden="true">#</a> passorder使用对手价下单报错/有误</h3><p><strong>问题描述</strong></p><p>passorder参数<code>prType</code>填写<code>14</code>(对手价下单)时，委托价格有误，或信息提示<code>对手价无效，无法下单!</code></p><p><strong>解决办法</strong></p><p>修改行情源对应的<strong>全推行情</strong>级别，见下图</p><p><img src="'+a+'" alt="img"></p><p>或者</p><p><img src="'+n+'" alt="img"></p><h3 id="为什么在handlebar中获取期货tick时-tick是3s一个而非0-5s一个" tabindex="-1"><a class="header-anchor" href="#为什么在handlebar中获取期货tick时-tick是3s一个而非0-5s一个" aria-hidden="true">#</a> 为什么在handlebar中获取期货tick时，tick是3S一个而非0.5s一个？</h3>',25),D={href:"https://dict.thinktrader.net/innerApi/start_now.html#%E9%80%90-k-%E7%BA%BF%E9%A9%B1%E5%8A%A8-handlebar",target:"_blank",rel:"noopener noreferrer"},N=t("strong",null,"在实时行情中，handlebar会随着主图标的tick的更新被调用",-1),S=t("p",null,"在这个问题场景中，主图的标的通常被设置为股票，而股票的tick通常是3s一个，这就导致handlebar函数3s才被调用一次",-1),R=t("p",null,[t("strong",null,"解决方法")],-1),V={href:"https://dict.thinktrader.net/innerApi/start_now.html#%E5%AE%9A%E6%97%B6%E4%BB%BB%E5%8A%A1-run-time-%E5%AE%9A%E6%97%B6%E8%BF%90%E8%A1%8C",target:"_blank",rel:"noopener noreferrer"},K={href:"https://dict.thinktrader.net/innerApi/start_now.html#%E4%BA%8B%E4%BB%B6%E9%A9%B1%E5%8A%A8-subscribe-%E8%AE%A2%E9%98%85%E6%8E%A8%E9%80%81",target:"_blank",rel:"noopener noreferrer"},O=t("li",null,[t("p",null,"如果需要在handlebar中进行期货策略编写，建议将主图设置为期货品种，来保证handlebar调用频率")],-1),$=r('<h3 id="为什么在非交易时间段handlebar也会被调用" tabindex="-1"><a class="header-anchor" href="#为什么在非交易时间段handlebar也会被调用" aria-hidden="true">#</a> 为什么在非交易时间段handlebar也会被调用</h3><p><code>handlebar</code>受行情数据推送驱动，在非交易时段，行情服务会做一系列准备工作，其中可能伴随着服务重启，在重启后为了保证数据齐全，客户端会重新订阅数据，这时服务会推送最新的数据，客户端会把推送的最新数据更新至缓存，并向上层策略推送更新，也就是触发<code>handlebar</code>执行</p><p>这个合并数据的驱动执行只会在最新一根bar而不会在历史范围，策略可以根据需要处理这次推送或直接根据交易时间跳过这个驱动，例如判断time小于09:15则直接return</p><h3 id="关于证券状态openint值的详细说明" tabindex="-1"><a class="header-anchor" href="#关于证券状态openint值的详细说明" aria-hidden="true">#</a> 关于证券状态<code>openint</code>值的详细说明</h3><p><strong>沪市</strong></p><table><thead><tr><th>时间段</th><th>状态</th><th>编码</th></tr></thead><tbody><tr><td>9:15 - 9:25</td><td>盘前集合竞价</td><td>12</td></tr><tr><td>9:25 - 14:57</td><td>盘中连续竞价</td><td>13</td></tr><tr><td>14:57 - 15:00</td><td>盘后集合竞价</td><td>18</td></tr><tr><td>15:00</td><td>收盘状态</td><td>15</td></tr><tr><td>15:05 - 15:30</td><td>盘后定价</td><td>22</td></tr><tr><td>15:30</td><td>盘后定价结束</td><td>23</td></tr><tr><td>上一状态后</td><td>收盘状态</td><td>15</td></tr></tbody></table><p><strong>深市</strong></p><table><thead><tr><th>时间段</th><th>状态</th><th>编码</th></tr></thead><tbody><tr><td>9:15 - 9:25</td><td>盘前集合竞价</td><td>12</td></tr><tr><td>9:25 - 9:30</td><td>休市</td><td>14</td></tr><tr><td>9:30 - 11:30</td><td>盘中连续竞价</td><td>13</td></tr><tr><td>11:30 - 13:00</td><td>休市</td><td>14</td></tr><tr><td>13:00 - 14:57</td><td>盘中连续竞价</td><td>13</td></tr><tr><td>14:57 - 15:00</td><td>盘后集合竞价</td><td>18</td></tr><tr><td>15:00</td><td>发收盘状态</td><td>15</td></tr><tr><td>15:05 - 15:30</td><td>盘后定价</td><td>22</td></tr><tr><td>15:30</td><td>盘后定价结束</td><td>23</td></tr><tr><td>上一状态后</td><td>收盘状态</td><td>15</td></tr></tbody></table><h2 id="静态数据问题" tabindex="-1"><a class="header-anchor" href="#静态数据问题" aria-hidden="true">#</a> 静态数据问题</h2><h3 id="报错-系统-error-获取合约乘数和最小变动价位失败-跳过" tabindex="-1"><a class="header-anchor" href="#报错-系统-error-获取合约乘数和最小变动价位失败-跳过" aria-hidden="true">#</a> 报错：[系统]ERROR：******.**获取合约乘数和最小变动价位失败，跳过</h3><p>点击右下角【<strong>行情</strong>】按钮，选择【<strong>智能下载</strong>】，数据选项下拉框勾选【<strong>过期合约列表</strong>】点击该面板右下角【<strong>开始</strong>】，待过期合约数据补充完毕后，即可正常获取过期合约数据。</p><h2 id="软件运行日志相关" tabindex="-1"><a class="header-anchor" href="#软件运行日志相关" aria-hidden="true">#</a> 软件运行日志相关</h2><h3 id="如何找到软件运行日志" tabindex="-1"><a class="header-anchor" href="#如何找到软件运行日志" aria-hidden="true">#</a> 如何找到软件运行日志</h3><p>Log文件通常在安装目录下的<code>.\\userdata\\log</code>文件夹中，在 <code>.\\userdata\\log</code> 文件夹中，你可能会看到一个或者多个 log 文件，通常以 <code>&#39;.log&#39;</code> 作为扩展名。这些文件将包含软件运行时的详细情况。</p><p>投研：{安装目录}\\userdata\\log</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>XtClient_20210922.log - 客户端常规日志</p><p>XtClient_datasource_20210922.log - 行情数据日志</p><p>XtClient_Formula_20210922.log - 策略运行日志</p><p>XtClient_FormulaOutput.log - 策略输出日志</p></div><p>QMT：{安装目录}\\userdata\\log</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>XtClient_20210922.log - 客户端常规日志</p><p>XtClient_Formula_20210922.log - 策略运行日志</p><p>XtClient_FormulaOutput.log - 策略输出日志</p><p>XtClient_PerformanceFile_20210922.log - 客户端流程节点日志</p></div><p>极简模式：{安装目录}\\userdata_mini\\log</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>XtMiniQuote_20210917.log - 行情策略模块日志</p><p>XtMiniQmt_20210917.log - 客户端常规日志</p><p>XtMiniQmt_perform_20210917.log - 客户端流程节点日志</p></div>',20);function W(j,z){const d=g("ExternalLinkIcon");return b(),m("div",null,[x,t("ol",null,[t("li",null,[t("p",null,[y,e(" 指下载到本地的行情数据加密文件。包括历史数据，适合回测模式使用，对应python接口为"),t("a",A,[e("get_market_data_ex(subscribe=False) "),o(d)])])]),t("li",null,[t("p",null,[P,e(" 指客户端启动后, 自动接收，更新的全市场最新数据快照， 包括日线的开高低收,成交量成交额，与五档盘口（在行情界面选择了五档行情时可用五档 具体见行情常规问题3）。支持取全市场品种, 只有最新值，没有历史值，"),q,e("。可以用"),C,e("一次性取出当前最新值，也可以用"),B,e("注册回调函数，每次处理增量的部分。 对应python接口为"),t("a",v,[e("get_full_tick"),o(d)]),e("，"),t("a",T,[e("subscribe_whole_quote"),o(d)])])]),t("li",null,[t("p",null,[I,e("。对应python接口为"),t("a",w,[e("subscribe_quote"),o(d)]),e("和"),t("a",M,[e("get_market_data_ex(subscribe=True,)"),o(d)]),e("其中，使用"),Q,e("或"),F,e("时客户端会自动订阅传入的品种，不需要额外调用"),L,e(",但这种方式订阅的品种没有订阅号，无法手动反订阅，只能通过停止策略释放可订阅数。")])])]),X,t("p",null,[e("这是由于handlebar函数是"),t("a",D,[e("逐K线驱动"),o(d)]),e("的，"),N,e("。")]),S,R,t("ol",null,[t("li",null,[t("p",null,[e("使用"),t("a",V,[e("定时器(run_time)"),o(d)]),e("进行计算")])]),t("li",null,[t("p",null,[e("使用"),t("a",K,[e("订阅推送(subscribe)"),o(d)]),e(",在回调函数中进行计算")])]),O]),$])}const U=u(E,[["render",W],["__file","question_answer.html.vue"]]);export{U as default};