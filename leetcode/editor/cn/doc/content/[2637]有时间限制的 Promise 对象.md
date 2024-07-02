<p>请你编写一个函数，它接受一个异步函数 <code>fn</code>&nbsp;和一个以毫秒为单位的时间 <code>t</code>。它应根据限时函数返回一个有 <strong>限时</strong> 效果的函数。函数 <code>fn</code> 接受提供给 <strong>限时</strong> 函数的参数。</p>

<p><strong>限时</strong> 函数应遵循以下规则：</p>

<ul> 
 <li>如果 <code>fn</code> 在 <code>t</code> 毫秒的时间限制内完成，<strong>限时</strong> 函数应返回结果。</li> 
 <li>如果 <code>fn</code> 的执行超过时间限制，<strong>限时&nbsp;</strong>函数应拒绝并返回字符串 <code>"Time Limit Exceeded"</code> 。</li> 
</ul>

<p>&nbsp;</p>

<p><b>示例 1：</b></p>

<pre>
<strong>输入：</strong>
fn = async (n) =&gt; { 
&nbsp; await new Promise(res =&gt; setTimeout(res, 100)); 
&nbsp; return n * n; 
}
inputs = [5]
t = 50
<strong>输出：</strong>{"rejected":"Time Limit Exceeded","time":50}
<strong>解释：</strong>
const limited = timeLimit(fn, t)
const start = performance.now()
let result;
try {
&nbsp; &nbsp;const res = await limited(...inputs)
&nbsp; &nbsp;result = {"resolved": res, "time": Math.floor(performance.now() - start)};
} catch (err) {
&nbsp;  result = {"rejected": err, "time": Math.floor(performance.now() - start)};
}
console.log(result) // 输出结果
<b>
</b>提供的函数设置在 100ms 后执行完成，但是设置的超时时间为 50ms，所以在 t=50ms 时拒绝因为达到了超时时间。
</pre>

<p><b>示例 2：</b></p>

<pre>
<strong>输入：</strong>
fn = async (n) =&gt; { 
&nbsp; await new Promise(res =&gt; setTimeout(res, 100)); 
&nbsp; return n * n; 
}
inputs = [5]
t = 150
<strong>输出：</strong>{"resolved":25,"time":100}
<strong>解释：</strong>
在 t=100ms 时执行 5*5=25 ，没有达到超时时间。
</pre>

<p><b>示例 3：</b></p>

<pre>
<strong>输入：</strong>
fn = async (a, b) =&gt; { 
&nbsp; await new Promise(res =&gt; setTimeout(res, 120)); 
&nbsp; return a + b; 
}
inputs = [5,10]
t = 150
<strong>输出：</strong>{"resolved":15,"time":120}
<strong>解释：</strong><b>
</b>在 t=120ms 时执行 5+10=15，没有达到超时时间。
</pre>

<p><b>示例 4：</b></p>

<pre>
<strong>输入：</strong>
fn = async () =&gt; { 
&nbsp; throw "Error";
}
inputs = []
t = 1000
<strong>输出：</strong>{"rejected":"Error","time":0}
<strong>解释：</strong>
此函数始终丢出 Error</pre>

<p>&nbsp;</p>

<p><b>提示：</b></p>

<ul> 
 <li><code>0 &lt;= inputs.length &lt;= 10</code></li> 
 <li><code>0 &lt;= t &lt;= 1000</code></li> 
 <li><code>fn</code> 返回一个 Promise 对象</li> 
</ul>

<div><li>👍 20</li><li>👎 0</li></div>