import{_ as t,a as e,b as a,c as d,d as o,e as p}from"./image-20210318151523278-7d5c8541.js";import{_ as i,o as c,c as r,a as n}from"./app-4f7ad5aa.js";const s={},h=n('<div class="custom-container tip"><p class="custom-container-title">提示</p><p>QMT所使用的Python版本为 3.6.8 - 64位</p></div><h2 id="手册说明" tabindex="-1"><a class="header-anchor" href="#手册说明" aria-hidden="true">#</a> 手册说明</h2><h3 id="对第三方库的支持" tabindex="-1"><a class="header-anchor" href="#对第三方库的支持" aria-hidden="true">#</a> 对第三方库的支持</h3><p>QMT Python API 提供基于 <code>Python 3.6</code> 规范的标准量化投资策略应用程序接口，本文档示例代码基于 <code>Python 3.6</code> 规范。我司主要通过以下两种方式对外提供：</p><h3 id="系统自带的-python-环境" tabindex="-1"><a class="header-anchor" href="#系统自带的-python-环境" aria-hidden="true">#</a> 系统自带的 Python 环境</h3><p><code>QMT</code> 系统的安装包默认自带 <code>Python</code> 运行环境。用户安装完迅投客户端后，默认可以直接使用<code>Python</code>。在这个打包的<code>Python</code>环境中，迅投除了提供标准的 <code>Python api</code> 带的库外，还集成了如下一些第三方库：</p><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>NumPy</td><td>NumPy (Numeric Python) 提供了许多高级的数值编程工具，如：矩阵数据类型、矢量处理，以及精密的运算库。专为进行严格的数字处理而产生。</td></tr><tr><td>Pandas</td><td>Python Data Analysis Library 或 Pandas 是基于 NumPy 的一种工具，该工具是为了解决数据分析任务而创建的。Pandas 纳入了大量库和一些标准的数据模型，提供了高效地操作大型数据集所需的工具。Pandas 提供了大量能使我们快速便捷地处理数据的函数和方法。</td></tr><tr><td>Patsy</td><td>一个线性模型分析和构建工具库。</td></tr><tr><td>SciPy</td><td>SciPy 函数库在 NumPy 库的基础上增加了众多的数学、科学以及工程计算中常用的库函数。例如线性代数、常微分方程数值求解、信号处理、图像处理、稀疏矩阵等等。</td></tr><tr><td>Statsmodels</td><td>Python 的统计建模和计量经济学工具包，包括一些描述统计、统计模型估计和推断。</td></tr><tr><td>TA_Lib</td><td>称作技术分析库，是一种广泛用在程序化交易中进行金融市场数据的技术分析的函数库。它提供了多种技术分析的函数，可以大大方便我们量化投资中编程工作，内容包括：多种指标，如 ADX, MACD, RSI, 布林轨道等；K 线形态识别，如黄昏之星，锤形线等等。</td></tr></tbody></table><h3 id="第三方库导入指引" tabindex="-1"><a class="header-anchor" href="#第三方库导入指引" aria-hidden="true">#</a> 第三方库导入指引</h3><p>除迅投提供的标准 <code>Python api</code> 和集成的部分第三方库，用户也可自己在 <code>Python</code> 官网下载其他所需第三方库，使用方式如下：</p><p>（1）本地安装Python环境，下载python3.6，Python官网：https://www.python.org/downloads/release/python-360/</p><p>（2）安装位置：C:\\Python36</p><p>​ 新增环境变量：我的电脑--属性--高级系统设置--高级--环境变量---path：C:\\Python36;C:\\Python36\\Scripts</p><p>​ <img src="'+t+'" alt="img"></p><p>（3）Python环境检查</p><p>​ Win+R 打开运行,输入 <code>cmd</code></p><p><img src="'+e+'" alt="img"></p><p>​ 检查Python变量</p><p><img src="'+a+'" alt="image-20210318150744951"></p><p>（4）安装第三方库</p><p>​ 安装前先确认客户端安装目录，根据个人电脑进行调整。</p><p>​ 安装时若遇到下面错误提示，请执行 <code>pip</code> 更新命令 <code>python -m pip install --upgrade pip</code></p><p><img src="'+d+'" alt="image-20210318151342044"></p><p>​ 安装三方库命令 <code>pip install openpyxl -t E:\\QMT交易端20962\\bin.x64\\Lib\\site-packages</code></p><p><img src="'+o+'" alt="image-20210318151401916"></p><p>（5）检查安装结果</p><p>​ 安装位置\\bin.x64\\Lib\\site-packages检查安装库</p><p><img src="'+p+'" alt="image-20210318151523278"></p>',27),y=[h];function m(l,P){return c(),r("div",null,y)}const g=i(s,[["render",m],["__file","related_instructions.html.vue"]]);export{g as default};
