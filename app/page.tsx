const notes = [
  {
    date: "2026.07.08",
    title: "给 Agent 一张可回看的工作台",
    summary: "从短期上下文到长期记忆：我如何设计信息的进入、压缩与取回。",
    tag: "Memory",
  },
  {
    date: "2026.07.02",
    title: "一次工具调用，三个需要想清楚的问题",
    summary: "参数校验、失败回退和可观察性，让工具真正成为 Agent 的可靠延伸。",
    tag: "Tools",
  },
  {
    date: "2026.06.24",
    title: "ReAct 不是答案，是一个开始",
    summary: "把思考、行动、观察拆开之后，我开始理解 agent loop 的节奏。",
    tag: "Reasoning",
  },
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="主导航">
        <a className="brand" href="#top">Dai&apos;s Field Notes</a>
        <div className="nav-links">
          <a href="#notes">学习记录</a>
          <a href="#map">知识地图</a>
          <a href="#about">关于我</a>
        </div>
      </nav>

      <section className="hero shell" id="top">
        <p className="eyebrow">AGENT DEVELOPMENT · LEARNING IN PUBLIC</p>
        <div className="hero-grid">
          <div>
            <p className="issue">第 01 卷 · 2026 夏</p>
            <h1>把 Agent 开发的<br />每一步，慢慢写下来。</h1>
            <p className="intro">这里记录我学习 Agent 开发时的阅读、实验、失误与重新理解。不是标准答案，而是一条仍在生长的路径。</p>
            <a className="read-link" href="#notes">从最新一篇开始 <span aria-hidden="true">↓</span></a>
          </div>
          <aside className="field-card" aria-label="本站记录方式">
            <div className="stamp">FIELD<br />NOTES</div>
            <p>我的记录方式</p>
            <ol>
              <li>读到一个值得验证的想法</li>
              <li>把它放进真实的任务里</li>
              <li>写下结果，也写下疑问</li>
            </ol>
            <span className="card-foot">持续更新中 · 07 / 10</span>
          </aside>
        </div>
      </section>

      <section className="featured shell" aria-labelledby="featured-title">
        <div className="section-head"><p>最新记录</p><span>01</span></div>
        <article className="feature-article">
          <div className="feature-mark" aria-hidden="true"><span>PLAN</span><i></i><span>ACT</span><i></i><span>OBSERVE</span></div>
          <div className="feature-copy">
            <p className="date">2026.07.10 · BUILDING BLOCKS</p>
            <h2 id="featured-title">从一个循环开始：<br />我理解的 Agent 执行过程</h2>
            <p>当模型不再只负责生成文本，而需要规划、调用工具、读取结果并继续前进时，关键不是让循环更复杂，而是让每一步都可解释。</p>
            <a className="text-link" href="#notes">阅读笔记 <span aria-hidden="true">→</span></a>
          </div>
        </article>
      </section>

      <section className="notes shell" id="notes" aria-labelledby="notes-title">
        <div className="section-head"><p id="notes-title">学习记录</p><span>02—04</span></div>
        <div className="note-list">
          {notes.map((note, index) => (
            <article className="note" key={note.title}>
              <span className="note-no">0{index + 2}</span>
              <div className="note-body"><p className="date">{note.date} · {note.tag}</p><h3>{note.title}</h3><p>{note.summary}</p></div>
              <a href="#top" aria-label={`阅读：${note.title}`}>↗</a>
            </article>
          ))}
        </div>
      </section>

      <section className="map-section shell" id="map">
        <div><p className="eyebrow">MY LEARNING MAP</p><h2>正在搭建的<br />知识地图</h2></div>
        <div className="map-grid" aria-label="Agent 开发学习主题">
          <span>Prompt<br />Design</span><span>Tool<br />Use</span><span className="active">Agent<br />Loop</span><span>Memory<br />Systems</span><span>Evaluation</span><span>Multi-agent<br />Collaboration</span>
        </div>
      </section>

      <footer className="footer shell" id="about">
        <div><p className="eyebrow">ABOUT THIS NOTEBOOK</p><h2>一个开发者的<br />Agent 学习档案。</h2></div>
        <p>你好，我是 Dai。这里是我练习把复杂概念说清楚、把实验过程留下来的地方。愿每一页笔记，都比昨天多一点确定。</p>
      </footer>
    </main>
  );
}
