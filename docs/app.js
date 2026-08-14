// ===== 模擬資料 =====
const PROJECTS = [
  {
    id: 1,
    name: '電商平台改版',
    client: '台灣零售股份有限公司',
    pm: '王小明',
    status: '開發中',
    phases: [
      { name: '需求確認', plannedDate: '2026-02-15', actualDate: '2026-02-18', estimatedHours: 16, actualHours: 20 },
      { name: '開案',     plannedDate: '2026-03-01', actualDate: '2026-03-03', estimatedHours: 8,  actualHours: 8  },
      { name: '開發',     plannedDate: '2026-05-31', actualDate: '',           estimatedHours: 120, actualHours: null },
      { name: '測試',     plannedDate: '2026-06-20', actualDate: '',           estimatedHours: 40,  actualHours: null },
      { name: '發布',     plannedDate: '2026-06-30', actualDate: '',           estimatedHours: 8,   actualHours: null }
    ]
  },
  {
    id: 2,
    name: '會員系統升級',
    client: '台灣零售股份有限公司',
    pm: '王小明',
    status: '測試中',
    phases: [
      { name: '需求確認', plannedDate: '2026-01-10', actualDate: '2026-01-10', estimatedHours: 12, actualHours: 10 },
      { name: '開案',     plannedDate: '2026-01-20', actualDate: '2026-01-22', estimatedHours: 6,  actualHours: 7  },
      { name: '開發',     plannedDate: '2026-03-15', actualDate: '2026-03-20', estimatedHours: 80, actualHours: 92 },
      { name: '測試',     plannedDate: '2026-04-10', actualDate: '',           estimatedHours: 30, actualHours: null },
      { name: '發布',     plannedDate: '2026-04-20', actualDate: '',           estimatedHours: 6,  actualHours: null }
    ]
  },
  {
    id: 3,
    name: '企業入口網站',
    client: '全球科技有限公司',
    pm: '李美華',
    status: '需求確認中',
    phases: [
      { name: '需求確認', plannedDate: '2026-08-30', actualDate: '',           estimatedHours: 24, actualHours: null },
      { name: '開案',     plannedDate: '2026-09-15', actualDate: '',           estimatedHours: 8,  actualHours: null },
      { name: '開發',     plannedDate: '2026-11-30', actualDate: '',           estimatedHours: 160, actualHours: null },
      { name: '測試',     plannedDate: '2026-12-20', actualDate: '',           estimatedHours: 48, actualHours: null },
      { name: '發布',     plannedDate: '2026-12-31', actualDate: '',           estimatedHours: 8,  actualHours: null }
    ]
  },
  {
    id: 4,
    name: 'ERP 報表模組',
    client: '全球科技有限公司',
    pm: '李美華',
    status: '待開案',
    phases: [
      { name: '需求確認', plannedDate: '2026-07-15', actualDate: '2026-07-15', estimatedHours: 16, actualHours: 14 },
      { name: '開案',     plannedDate: '2026-08-01', actualDate: '',           estimatedHours: 6,  actualHours: null },
      { name: '開發',     plannedDate: '2026-10-31', actualDate: '',           estimatedHours: 100, actualHours: null },
      { name: '測試',     plannedDate: '2026-11-20', actualDate: '',           estimatedHours: 32, actualHours: null },
      { name: '發布',     plannedDate: '2026-11-30', actualDate: '',           estimatedHours: 6,  actualHours: null }
    ]
  },
  {
    id: 5,
    name: '行動 App 後台',
    client: '新世代數位媒體',
    pm: '陳志偉',
    status: '待發布',
    phases: [
      { name: '需求確認', plannedDate: '2025-11-01', actualDate: '2025-11-01', estimatedHours: 16, actualHours: 16 },
      { name: '開案',     plannedDate: '2025-11-15', actualDate: '2025-11-15', estimatedHours: 8,  actualHours: 7  },
      { name: '開發',     plannedDate: '2026-02-28', actualDate: '2026-03-05', estimatedHours: 200, actualHours: 215 },
      { name: '測試',     plannedDate: '2026-03-20', actualDate: '2026-03-22', estimatedHours: 60, actualHours: 55 },
      { name: '發布',     plannedDate: '2026-04-01', actualDate: '',           estimatedHours: 8,  actualHours: null }
    ]
  },
  {
    id: 6,
    name: '客服知識庫平台',
    client: '新世代數位媒體',
    pm: '陳志偉',
    status: '已發布',
    phases: [
      { name: '需求確認', plannedDate: '2025-07-01', actualDate: '2025-07-02', estimatedHours: 12, actualHours: 12 },
      { name: '開案',     plannedDate: '2025-07-15', actualDate: '2025-07-15', estimatedHours: 6,  actualHours: 5  },
      { name: '開發',     plannedDate: '2025-09-30', actualDate: '2025-10-08', estimatedHours: 90, actualHours: 104 },
      { name: '測試',     plannedDate: '2025-10-20', actualDate: '2025-10-22', estimatedHours: 28, actualHours: 26 },
      { name: '發布',     plannedDate: '2025-11-01', actualDate: '2025-11-01', estimatedHours: 6,  actualHours: 6  }
    ]
  },
  {
    id: 7,
    name: '供應商管理系統',
    client: '台灣零售股份有限公司',
    pm: '王小明',
    status: '已發布',
    phases: [
      { name: '需求確認', plannedDate: '2025-04-01', actualDate: '2025-04-03', estimatedHours: 20, actualHours: 22 },
      { name: '開案',     plannedDate: '2025-04-15', actualDate: '2025-04-16', estimatedHours: 8,  actualHours: 8  },
      { name: '開發',     plannedDate: '2025-07-31', actualDate: '2025-08-05', estimatedHours: 140, actualHours: 148 },
      { name: '測試',     plannedDate: '2025-08-20', actualDate: '2025-08-18', estimatedHours: 40, actualHours: 36 },
      { name: '發布',     plannedDate: '2025-09-01', actualDate: '2025-09-01', estimatedHours: 8,  actualHours: 8  }
    ]
  },
  {
    id: 8,
    name: '數位廣告投放平台',
    client: '新世代數位媒體',
    pm: '陳志偉',
    status: '開發中',
    phases: [
      { name: '需求確認', plannedDate: '2026-04-10', actualDate: '2026-04-10', estimatedHours: 20, actualHours: 18 },
      { name: '開案',     plannedDate: '2026-04-25', actualDate: '2026-04-28', estimatedHours: 8,  actualHours: 10 },
      { name: '開發',     plannedDate: '2026-08-31', actualDate: '',           estimatedHours: 180, actualHours: null },
      { name: '測試',     plannedDate: '2026-09-20', actualDate: '',           estimatedHours: 56, actualHours: null },
      { name: '發布',     plannedDate: '2026-09-30', actualDate: '',           estimatedHours: 8,  actualHours: null }
    ]
  }
];

// ===== 狀態 → CSS class 對應 =====
const STATUS_CLASS = {
  '需求確認中': 'badge--requirements',
  '待開案':     'badge--pending',
  '開發中':     'badge--development',
  '測試中':     'badge--testing',
  '待發布':     'badge--staging',
  '已發布':     'badge--released'
};

// ===== 狀態 → 對應階段名稱 =====
const STATUS_PHASE = {
  '需求確認中': '需求確認',
  '待開案':     '開案',
  '開發中':     '開發',
  '測試中':     '測試',
  '待發布':     '發布',
  '已發布':     '發布'
};

// ===== 取得目前階段預計完成日期 =====
function currentPhasePlannedDate(project) {
  const phaseName = STATUS_PHASE[project.status];
  const phase = project.phases.find(p => p.name === phaseName);
  return (phase && phase.plannedDate) ? phase.plannedDate : '—';
}
function diffText(estimated, actual) {
  if (actual === null || actual === '') return '—';
  const d = Number(actual) - estimated;
  if (d > 0) return '+' + d;
  if (d < 0) return String(d);
  return '0';
}

function diffClass(estimated, actual) {
  if (actual === null || actual === '') return 'diff';
  const d = Number(actual) - estimated;
  if (d > 0) return 'diff diff--over';
  if (d < 0) return 'diff diff--under';
  return 'diff';
}

// ===== SVG 趨勢圖 =====
function renderTrendChart(phases, container) {
  const svgNS = 'http://www.w3.org/2000/svg';
  const W = 500, H = 140;
  const PAD = { top: 10, right: 10, bottom: 30, left: 30 };
  const chartW = W - PAD.left - PAD.right;
  const chartH = H - PAD.top - PAD.bottom;

  const maxH = Math.max(...phases.map(p => Math.max(p.estimatedHours, p.actualHours || 0)), 1);
  const colW = chartW / phases.length;
  const barW = colW * 0.3;

  const svg = document.createElementNS(svgNS, 'svg');
  svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
  svg.setAttribute('aria-label', '各階段工時趨勢圖');

  phases.forEach((phase, i) => {
    const x = PAD.left + i * colW;

    // 預估工時（灰色）
    const estH = (phase.estimatedHours / maxH) * chartH;
    const estRect = document.createElementNS(svgNS, 'rect');
    estRect.setAttribute('x', x + colW * 0.1);
    estRect.setAttribute('y', PAD.top + chartH - estH);
    estRect.setAttribute('width', barW);
    estRect.setAttribute('height', estH);
    estRect.setAttribute('fill', '#b0bec5');
    svg.appendChild(estRect);

    // 實際工時（藍色，有填才畫）
    if (phase.actualHours !== null && phase.actualHours !== '') {
      const actH = (Number(phase.actualHours) / maxH) * chartH;
      const actRect = document.createElementNS(svgNS, 'rect');
      actRect.setAttribute('x', x + colW * 0.1 + barW + 2);
      actRect.setAttribute('y', PAD.top + chartH - actH);
      actRect.setAttribute('width', barW);
      actRect.setAttribute('height', actH);
      actRect.setAttribute('fill', '#1976d2');
      svg.appendChild(actRect);
    }

    // 階段名稱（X 軸標籤）
    const label = document.createElementNS(svgNS, 'text');
    label.setAttribute('x', x + colW * 0.5);
    label.setAttribute('y', H - 6);
    label.setAttribute('text-anchor', 'middle');
    label.setAttribute('font-size', '11');
    label.setAttribute('fill', '#555');
    label.textContent = phase.name;
    svg.appendChild(label);
  });

  // 圖例
  const legend = [
    { color: '#b0bec5', label: '預估' },
    { color: '#1976d2', label: '實際' }
  ];
  legend.forEach((item, i) => {
    const lx = PAD.left + i * 60;
    const rect = document.createElementNS(svgNS, 'rect');
    rect.setAttribute('x', lx);
    rect.setAttribute('y', PAD.top);
    rect.setAttribute('width', 10);
    rect.setAttribute('height', 10);
    rect.setAttribute('fill', item.color);
    svg.appendChild(rect);

    const txt = document.createElementNS(svgNS, 'text');
    txt.setAttribute('x', lx + 13);
    txt.setAttribute('y', PAD.top + 9);
    txt.setAttribute('font-size', '11');
    txt.setAttribute('fill', '#333');
    txt.textContent = item.label;
    svg.appendChild(txt);
  });

  container.innerHTML = '';
  container.appendChild(svg);
}

// ===== 卡片 HTML 產生 =====
function buildCardHTML(project) {
  const badgeClass = STATUS_CLASS[project.status] || 'badge--requirements';

  const rows = project.phases.map(phase => {
    const dc = diffClass(phase.estimatedHours, phase.actualHours);
    const dt = diffText(phase.estimatedHours, phase.actualHours);
    const actualVal = phase.actualHours !== null ? phase.actualHours : '';
    return `
      <tr>
        <td data-label="階段">${phase.name}</td>
        <td data-label="預計完成日期">${phase.plannedDate}</td>
        <td data-label="實際完成日期">
          <input type="date" aria-label="${phase.name}實際完成日期" value="${phase.actualDate}">
        </td>
        <td data-label="預估工時（h）">${phase.estimatedHours}</td>
        <td data-label="實際工時（h）">
          <input type="number" class="actual-hours" aria-label="${phase.name}實際工時"
            min="0" value="${actualVal}" data-estimated="${phase.estimatedHours}">
        </td>
        <td data-label="差異" class="${dc}">${dt}</td>
      </tr>`;
  }).join('');

  return `
    <div class="project-card" data-id="${project.id}">
      <div class="project-card__summary" role="button" tabindex="0" aria-expanded="false">
        <span class="project-name">${project.name}</span>
        <span class="project-client">${project.client}</span>
        <span class="project-pm">${project.pm}</span>
        <span class="badge ${badgeClass}">${project.status}</span>
        <span class="current-phase-date" aria-label="當前階段預計完成日期">${currentPhasePlannedDate(project)}</span>
      </div>
      <div class="project-card__detail" hidden>
        <table class="phase-table">
          <thead>
            <tr>
              <th scope="col">階段</th>
              <th scope="col">預計完成日期</th>
              <th scope="col">實際完成日期</th>
              <th scope="col">預估工時（h）</th>
              <th scope="col">實際工時（h）</th>
              <th scope="col">差異</th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
        <div class="trend-chart" aria-label="${project.name}工時趨勢圖"></div>
      </div>
    </div>`;
}

// ===== 渲染專案列表 =====
function renderProjects(list) {
  const container = document.getElementById('project-list');
  container.innerHTML = list.map(buildCardHTML).join('');

  // 為每張卡片的 trend-chart 畫 SVG（detail 預設 hidden，先渲染不影響顯示）
  list.forEach(project => {
    const card = container.querySelector(`[data-id="${project.id}"]`);
    const chartEl = card.querySelector('.trend-chart');
    renderTrendChart(project.phases, chartEl);
  });
}

// ===== 初始化篩選 =====
function initFilters() {
  const clientSelect = document.getElementById('client-filter');
  const statusSelect = document.getElementById('status-filter');

  // 初始化客戶選單
  const clients = [...new Set(PROJECTS.map(p => p.client))];
  clients.forEach(client => {
    const opt = document.createElement('option');
    opt.value = client;
    opt.textContent = client;
    clientSelect.appendChild(opt);
  });

  // 客戶篩選事件
  clientSelect.addEventListener('change', applyFilters);
  statusSelect.addEventListener('change', applyFilters);
}

// ===== 排序比較函式 =====
const STATUS_ORDER = {
  '需求確認中': 1,
  '待開案': 2,
  '開發中': 3,
  '測試中': 4,
  '待發布': 5,
  '已發布': 6
};

function parseDate(str) {
  const [y, m, d] = str.split('-').map(Number);
  return new Date(y, m - 1, d);
}

function sortProjects(list, sortBy) {
  if (!sortBy) return list;

  const sorted = [...list];
  sorted.sort((a, b) => {
    if (sortBy === 'client') {
      return a.client.localeCompare(b.client, 'zh-Hant');
    }
    if (sortBy === 'status') {
      return (STATUS_ORDER[a.status] || 0) - (STATUS_ORDER[b.status] || 0);
    }
    if (sortBy === 'date') {
      // 取目前階段的 plannedDate
      const phaseA = a.phases.find(p => p.name === STATUS_PHASE[a.status]);
      const phaseB = b.phases.find(p => p.name === STATUS_PHASE[b.status]);
      const dateA = phaseA && phaseA.plannedDate ? parseDate(phaseA.plannedDate) : null;
      const dateB = phaseB && phaseB.plannedDate ? parseDate(phaseB.plannedDate) : null;
      // null 排最後
      if (!dateA && !dateB) return 0;
      if (!dateA) return 1;
      if (!dateB) return -1;
      return dateA.getTime() - dateB.getTime();
    }
    return 0;
  });
  return sorted;
}

// ===== 初始化篩選 =====
function initFilters() {
  const clientSelect = document.getElementById('client-filter');
  const statusSelect = document.getElementById('status-filter');
  const sortSelect = document.getElementById('sort-by');
  const pmSelect = document.getElementById('pm-filter');

  // 初始化客戶選單
  const clients = [...new Set(PROJECTS.map(p => p.client))];
  clients.forEach(client => {
    const opt = document.createElement('option');
    opt.value = client;
    opt.textContent = client;
    clientSelect.appendChild(opt);
  });

  // 初始化 PM 選單
  const pms = [...new Set(PROJECTS.map(p => p.pm))];
  pms.forEach(pm => {
    const opt = document.createElement('option');
    opt.value = pm;
    opt.textContent = pm;
    pmSelect.appendChild(opt);
  });

  // 事件監聽
  clientSelect.addEventListener('change', applyFilters);
  statusSelect.addEventListener('change', applyFilters);
  sortSelect.addEventListener('change', applyFilters);
  pmSelect.addEventListener('change', applyFilters);
}

function applyFilters() {
  const clientVal = document.getElementById('client-filter').value;
  const statusVal = document.getElementById('status-filter').value;
  const sortVal = document.getElementById('sort-by').value;
  const pmVal = document.getElementById('pm-filter').value;

  let filtered = PROJECTS;
  if (clientVal) filtered = filtered.filter(p => p.client === clientVal);
  if (statusVal) filtered = filtered.filter(p => p.status === statusVal);
  if (pmVal) filtered = filtered.filter(p => p.pm === pmVal);
  filtered = sortProjects(filtered, sortVal);

  renderProjects(filtered);
  // 若目前為甘特圖模式，同步更新
  if (!document.getElementById('gantt-view').hidden) {
    renderGantt(filtered);
  }
}

// ===== 事件委派：展開 / 收合 =====
document.getElementById('project-list').addEventListener('click', e => {
  const summary = e.target.closest('.project-card__summary');
  if (!summary) return;

  const card = summary.closest('.project-card');
  const detail = card.querySelector('.project-card__detail');
  const isOpen = !detail.hidden;

  // 收合其他卡片
  document.querySelectorAll('.project-card__detail').forEach(d => {
    d.hidden = true;
    d.closest('.project-card').querySelector('.project-card__summary').setAttribute('aria-expanded', 'false');
  });

  if (!isOpen) {
    detail.hidden = false;
    summary.setAttribute('aria-expanded', 'true');
  }
});

// ===== 事件委派：鍵盤展開（Enter / Space）=====
document.getElementById('project-list').addEventListener('keydown', e => {
  if (e.key !== 'Enter' && e.key !== ' ') return;
  const summary = e.target.closest('.project-card__summary');
  if (!summary) return;
  e.preventDefault();
  summary.click();
});

// ===== 事件委派：實際工時 / 實際日期 input → 更新差異 & 回寫資料 =====
document.getElementById('project-list').addEventListener('input', e => {
  const input = e.target;
  const card = input.closest('.project-card');
  if (!card) return;

  const projectId = Number(card.dataset.id);
  const project = PROJECTS.find(p => p.id === projectId);
  if (!project) return;

  const row = input.closest('tr');
  const phaseIndex = Array.from(row.parentElement.children).indexOf(row);
  const phase = project.phases[phaseIndex];
  if (!phase) return;

  // 實際工時回寫 + 即時更新差異欄
  if (input.classList.contains('actual-hours')) {
    const actual = input.value === '' ? null : Number(input.value);
    phase.actualHours = actual;
    const td = row.querySelector('.diff');
    td.textContent = diffText(phase.estimatedHours, actual);
    td.className = diffClass(phase.estimatedHours, actual);
  }

  // 實際日期回寫
  if (input.type === 'date') {
    phase.actualDate = input.value;
  }
});

// ===== 甘特圖 =====

// 將 'YYYY-MM-DD' 轉為當日 00:00 的 Date（避免時區偏移）
function parseDate(str) {
  const [y, m, d] = str.split('-').map(Number);
  return new Date(y, m - 1, d);
}

// 計算每個專案各階段的起訖區間
// 起始：上一個階段 plannedDate 隔日；第一個階段：第一個 plannedDate 前推 30 天
function getPhaseRanges(phases) {
  const ranges = [];
  let prevEnd = null;
  phases.forEach(phase => {
    if (!phase.plannedDate) return;
    const end = parseDate(phase.plannedDate);
    const start = prevEnd
      ? new Date(prevEnd.getTime() + 86400000)
      : new Date(end.getTime() - 30 * 86400000);
    ranges.push({ name: phase.name, start, end });
    prevEnd = end;
  });
  return ranges;
}

function renderGantt(list) {
  const container = document.getElementById('gantt-view');
  if (!list.length) {
    container.innerHTML = '<p class="gantt-empty">查無符合的專案</p>';
    return;
  }

  const svgNS = 'http://www.w3.org/2000/svg';
  const ROW_H = 36;        // 每個專案列高
  const LABEL_W = 160;     // 左側專案名稱寬
  const HEADER_H = 36;     // 上方日期標頭高
  const TODAY_MS = new Date().setHours(0, 0, 0, 0);

  // 計算全域時間範圍
  let minMs = Infinity, maxMs = -Infinity;
  list.forEach(p => {
    getPhaseRanges(p.phases).forEach(r => {
      if (r.start.getTime() < minMs) minMs = r.start.getTime();
      if (r.end.getTime()   > maxMs) maxMs = r.end.getTime();
    });
  });
  // 左右各加 14 天緩衝
  minMs -= 14 * 86400000;
  maxMs += 14 * 86400000;
  const totalDays = (maxMs - minMs) / 86400000;

  const CHART_W = Math.max(totalDays * 3, 600); // 每天 3px，最少 600px
  const SVG_W   = LABEL_W + CHART_W;
  const SVG_H   = HEADER_H + list.length * ROW_H;

  const PHASE_COLORS = ['#90caf9','#a5d6a7','#ffe082','#ce93d8','#80cbc4','#ef9a9a'];

  // ms → x 座標（相對於 LABEL_W）
  function msToX(ms) {
    return LABEL_W + ((ms - minMs) / 86400000) * 3;
  }

  const svg = document.createElementNS(svgNS, 'svg');
  svg.setAttribute('viewBox', `0 0 ${SVG_W} ${SVG_H}`);
  svg.setAttribute('width', SVG_W);
  svg.setAttribute('height', SVG_H);
  svg.setAttribute('aria-label', '專案甘特圖');

  // ---- 背景 ----
  const bg = document.createElementNS(svgNS, 'rect');
  bg.setAttribute('x', 0); bg.setAttribute('y', 0);
  bg.setAttribute('width', SVG_W); bg.setAttribute('height', SVG_H);
  bg.setAttribute('fill', '#fafafa');
  svg.appendChild(bg);

  // ---- 月份標頭 ----
  const cur = new Date(minMs);
  cur.setDate(1);
  while (cur.getTime() <= maxMs) {
    const x = msToX(cur.getTime());
    const label = `${cur.getFullYear()}/${cur.getMonth() + 1}`;

    const line = document.createElementNS(svgNS, 'line');
    line.setAttribute('x1', x); line.setAttribute('y1', 0);
    line.setAttribute('x2', x); line.setAttribute('y2', SVG_H);
    line.setAttribute('stroke', '#dde1ea'); line.setAttribute('stroke-width', '1');
    svg.appendChild(line);

    const txt = document.createElementNS(svgNS, 'text');
    txt.setAttribute('x', x + 4); txt.setAttribute('y', 22);
    txt.setAttribute('font-size', '11'); txt.setAttribute('fill', '#666');
    txt.textContent = label;
    svg.appendChild(txt);

    cur.setMonth(cur.getMonth() + 1);
  }

  // ---- 今日線 ----
  if (TODAY_MS >= minMs && TODAY_MS <= maxMs) {
    const tx = msToX(TODAY_MS);
    const todayLine = document.createElementNS(svgNS, 'line');
    todayLine.setAttribute('x1', tx); todayLine.setAttribute('y1', HEADER_H);
    todayLine.setAttribute('x2', tx); todayLine.setAttribute('y2', SVG_H);
    todayLine.setAttribute('stroke', '#e53935');
    todayLine.setAttribute('stroke-width', '2');
    todayLine.setAttribute('stroke-dasharray', '4 3');
    svg.appendChild(todayLine);

    const todayLabel = document.createElementNS(svgNS, 'text');
    todayLabel.setAttribute('x', tx + 3); todayLabel.setAttribute('y', HEADER_H + 12);
    todayLabel.setAttribute('font-size', '10'); todayLabel.setAttribute('fill', '#e53935');
    todayLabel.textContent = '今日';
    svg.appendChild(todayLabel);
  }

  // ---- 專案列 ----
  list.forEach((project, ri) => {
    const y = HEADER_H + ri * ROW_H;

    // 列背景（交替）
    const rowBg = document.createElementNS(svgNS, 'rect');
    rowBg.setAttribute('x', 0); rowBg.setAttribute('y', y);
    rowBg.setAttribute('width', SVG_W); rowBg.setAttribute('height', ROW_H);
    rowBg.setAttribute('fill', ri % 2 === 0 ? '#fff' : '#f5f6fa');
    svg.appendChild(rowBg);

    // 左側名稱
    const nameTxt = document.createElementNS(svgNS, 'text');
    nameTxt.setAttribute('x', 6); nameTxt.setAttribute('y', y + ROW_H / 2 + 4);
    nameTxt.setAttribute('font-size', '12'); nameTxt.setAttribute('fill', '#222');
    nameTxt.setAttribute('clip-path', `url(#clip-label-${ri})`);
    // 截斷過長名稱
    const maxChars = 14;
    nameTxt.textContent = project.name.length > maxChars
      ? project.name.slice(0, maxChars) + '…'
      : project.name;
    svg.appendChild(nameTxt);

    // 各階段長條
    const ranges = getPhaseRanges(project.phases);
    ranges.forEach((r, pi) => {
      const x1 = msToX(r.start.getTime());
      const x2 = msToX(r.end.getTime());
      const barW = Math.max(x2 - x1, 2);
      const barH = ROW_H * 0.55;
      const barY = y + (ROW_H - barH) / 2;

      const bar = document.createElementNS(svgNS, 'rect');
      bar.setAttribute('x', x1); bar.setAttribute('y', barY);
      bar.setAttribute('width', barW); bar.setAttribute('height', barH);
      bar.setAttribute('fill', PHASE_COLORS[pi % PHASE_COLORS.length]);
      bar.setAttribute('rx', '3');
      svg.appendChild(bar);

      // 階段標籤（只在夠寬時顯示）
      if (barW > 28) {
        const pTxt = document.createElementNS(svgNS, 'text');
        pTxt.setAttribute('x', x1 + 4); pTxt.setAttribute('y', barY + barH / 2 + 4);
        pTxt.setAttribute('font-size', '10'); pTxt.setAttribute('fill', '#333');
        pTxt.textContent = r.name;
        svg.appendChild(pTxt);
      }
    });
  });

  // 左側名稱區域底線
  const labelBorder = document.createElementNS(svgNS, 'line');
  labelBorder.setAttribute('x1', LABEL_W); labelBorder.setAttribute('y1', 0);
  labelBorder.setAttribute('x2', LABEL_W); labelBorder.setAttribute('y2', SVG_H);
  labelBorder.setAttribute('stroke', '#ccc'); labelBorder.setAttribute('stroke-width', '1');
  svg.appendChild(labelBorder);

  // 包在可橫向捲動的容器
  container.innerHTML = '';
  const wrapper = document.createElement('div');
  wrapper.className = 'gantt-scroll';
  wrapper.appendChild(svg);

  // 捲動到今日（置中）
  container.appendChild(wrapper);
  const todayX = msToX(TODAY_MS);
  wrapper.scrollLeft = todayX - wrapper.clientWidth / 2;
}

// ===== 切換列表 / 甘特圖 =====
function initViewToggle() {
  const btnList  = document.getElementById('btn-list');
  const btnGantt = document.getElementById('btn-gantt');
  const listView  = document.getElementById('project-list');
  const ganttView = document.getElementById('gantt-view');

  btnList.addEventListener('click', () => {
    listView.hidden  = false;
    ganttView.hidden = true;
    btnList.classList.add('btn-view--active');
    btnList.setAttribute('aria-pressed', 'true');
    btnGantt.classList.remove('btn-view--active');
    btnGantt.setAttribute('aria-pressed', 'false');
  });

  btnGantt.addEventListener('click', () => {
    listView.hidden  = true;
    ganttView.hidden = false;
    btnGantt.classList.add('btn-view--active');
    btnGantt.setAttribute('aria-pressed', 'true');
    btnList.classList.remove('btn-view--active');
    btnList.setAttribute('aria-pressed', 'false');
    // 取得目前篩選條件後渲染甘特圖
    const clientVal = document.getElementById('client-filter').value;
    const statusVal = document.getElementById('status-filter').value;
    const pmVal = document.getElementById('pm-filter').value;
    let filtered = PROJECTS;
    if (clientVal) filtered = filtered.filter(p => p.client === clientVal);
    if (statusVal) filtered = filtered.filter(p => p.status === statusVal);
    if (pmVal) filtered = filtered.filter(p => p.pm === pmVal);
    renderGantt(filtered);
  });
}

// ===== 啟動 =====
initFilters();
initViewToggle();
renderProjects(PROJECTS);
