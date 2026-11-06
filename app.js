const checks = [
  {
    id: 'updates', icon: '↻', title: 'Windows와 앱 업데이트',
    description: 'Windows와 자주 사용하는 앱이 지원 중이며 보안 업데이트를 받고 있는지 확인합니다. Windows 10은 일반 지원이 2025년 10월 14일 종료되어, 업데이트 화면에 최신이라고 표시되는 것만으로 지원 상태가 확인되지는 않습니다.',
    how: 'Windows 11: 설정 > Windows 업데이트에서 업데이트를 확인하세요. Windows 10: 설정 > 업데이트 및 보안 > Windows 업데이트를 확인하세요. Windows 10 Home/Pro는 ESU 등록 여부를, LTSC 에디션은 해당 에디션의 별도 지원 수명주기를 확인하세요. 에디션과 버전은 설정 > 시스템 > 정보에서 볼 수 있습니다.',
    answers: [
      { value: 'yes', label: '지원 상태와 업데이트를 확인했어요' },
      { value: 'no', label: '업데이트가 필요하거나 지원이 끝난 상태예요' },
      { value: 'unknown', label: '확인하지 못했어요' }
    ],
    explanation: '이 결과는 사용자가 Windows 버전·지원 상태와 업데이트 화면을 확인해 선택한 응답입니다. 이 도구는 업데이트 설치 여부나 지원 자격을 읽거나 검증하지 않습니다.',
    okAdvice: 'Windows 11은 Windows 업데이트를 정기적으로 확인하세요. Windows 10이라면 ESU 등록이 실제로 되어 있는지 또는 사용 중인 LTSC 에디션의 지원 기간에 포함되는지 확인하세요. Windows 업데이트 화면의 “최신 상태”만으로 지원 여부를 판단하지 마세요.',
    unknownAdvice: '설정 > 시스템 > 정보에서 Windows 에디션과 버전을 확인한 뒤, 위의 Windows 업데이트 경로에서 업데이트 상태를 살펴보세요. Windows 10 Home/Pro라면 Microsoft 공식 Windows 10 지원 안내에서 ESU 상태를, LTSC라면 해당 에디션의 지원 기간을 확인하세요. 이 앱은 지원 자격을 판별하지 않습니다.',
    advice: 'Windows 11은 설정 > Windows 업데이트에서 제공되는 업데이트를 설치하세요. Windows 10 Home/Pro는 일반 지원이 2025년 10월 14일 종료되었습니다. Microsoft의 공식 안내에서 기기의 ESU 등록 가능 여부와 등록 상태를 확인하거나, 지원되는 Windows 버전으로 전환을 계획하세요. LTSC 에디션은 에디션별 공식 수명주기를 확인하세요.'
  },
  {
    id: 'protection', icon: '◈', title: '화면 잠금과 계정 보호',
    description: '기기를 잠시 비울 때 다른 사람이 접근하지 못하도록 Windows 로그인과 화면 잠금을 사용하고, 중요한 온라인 계정에도 강한 인증 수단을 쓰는지 확인합니다.',
    how: 'Windows 10/11에서 설정 > 계정 > 로그인 옵션을 열어 로그인 방법을 확인하세요. 화면이 꺼지거나 절전 모드에 들어간 뒤 잠금이 필요한지도 확인합니다. 중요한 온라인 계정에는 계정마다 다른 비밀번호를 쓰고 다중 인증을 켜 두었는지 살펴보세요.',
    answers: [
      { value: 'yes', label: '화면 잠금과 계정 보호를 확인했어요' },
      { value: 'no', label: '화면 잠금 또는 계정 보호가 부족해요' },
      { value: 'unknown', label: '확인하지 못했어요' }
    ],
    explanation: '이 항목은 Windows 로그인·화면 잠금과 중요한 온라인 계정의 보호 습관을 함께 돌아봅니다. 계정별 설정은 해당 서비스에서 별도로 확인해야 합니다.',
    unknownAdvice: '설정 > 계정 > 로그인 옵션에서 Windows 로그인 방법과 화면 잠금 동작을 확인하세요. 중요한 온라인 계정의 다중 인증 여부는 각 서비스의 공식 앱이나 웹사이트에서 확인할 수 있습니다. 비밀번호나 인증 코드를 이 점검 앱에 입력하지 마세요.',
    advice: '설정 > 계정 > 로그인 옵션에서 사용 가능한 안전한 로그인 방법을 설정하고, 자리를 비울 때 화면을 잠그세요. 중요한 계정마다 고유한 비밀번호를 사용하고 다중 인증을 설정하세요.'
  },
  {
    id: 'security', icon: '⌑', title: 'Windows 보안 기능',
    description: 'Windows 보안의 바이러스 및 위협 방지와 방화벽 상태를 확인합니다. 별도 보안 제품을 사용한다면 해당 제품이 정상적으로 작동하는지도 확인하세요.',
    how: '시작 메뉴에서 “Windows 보안”을 검색해 앱을 여세요. 바이러스 및 위협 방지와 방화벽 및 네트워크 보호를 각각 확인하세요. Windows 11에서는 설정 > 개인정보 및 보안 > Windows 보안, Windows 10에서는 설정 > 업데이트 및 보안 > Windows 보안에서도 열 수 있습니다.',
    answers: [
      { value: 'yes', label: 'Windows 보안 기능이 켜져 있어요' },
      { value: 'no', label: '하나 이상 꺼져 있거나 경고가 보여요' },
      { value: 'unknown', label: '확인하지 못했어요' }
    ],
    explanation: '이 응답은 사용자가 Windows 보안 또는 보안 제품 화면을 확인한 결과일 뿐, 실제 보호 동작이나 감염 여부를 측정한 값이 아닙니다.',
    unknownAdvice: '시작 메뉴에서 Windows 보안을 검색해 열고, 바이러스 및 위협 방지와 방화벽 및 네트워크 보호 화면을 확인하세요. 화면을 열 수 없거나 경고 내용을 이해하기 어렵다면 신뢰할 수 있는 지원 담당자에게 문의하세요. 이 앱은 보안 기능의 실제 작동이나 감염 여부를 검사하지 않습니다.',
    advice: '시작 메뉴에서 Windows 보안을 열고 바이러스 및 위협 방지와 방화벽 및 네트워크 보호의 상태를 확인하세요. 별도 보안 제품을 설치했다면 그 제품의 공식 상태 화면도 확인하세요. 알 수 없는 경고가 있거나 기능을 켤 수 없다면 신뢰할 수 있는 지원 담당자에게 문의하세요.'
  },
  {
    id: 'backup', icon: '↥', title: '중요한 파일 백업',
    description: '기기 고장이나 계정 문제 등으로 파일을 잃더라도 복구할 수 있도록 중요한 파일의 별도 백업이 있는지 확인합니다.',
    how: 'Windows 시작 메뉴에서 “백업 설정”을 검색해 사용 중인 백업 옵션을 확인할 수 있습니다. 외장 드라이브의 파일 기록(File History)이나 신뢰할 수 있는 백업 서비스를 사용하는 경우, 최근 백업이 있는지와 복구할 수 있는지도 살펴보세요.',
    answers: [
      { value: 'yes', label: '별도 백업이 있고 복구 방법도 알아요' },
      { value: 'no', label: '백업이 없거나 오래되었어요' },
      { value: 'unknown', label: '확인하지 못했어요' }
    ],
    explanation: '백업은 기기 문제나 파일 손실에 대비하는 방법입니다. 백업이 있다는 응답만으로 백업의 완전성이나 복구 가능성이 보장되지는 않습니다.',
    unknownAdvice: '시작 메뉴에서 “백업 설정”을 검색해 사용 중인 백업 방식과 최근 백업 시점을 확인하세요. 가능하고 안전한 경우 중요하지 않은 시험용 파일 하나를 복원해 열리는지 확인하면 도움이 됩니다. 원본 파일을 덮어쓰거나 삭제하지 마세요.',
    advice: '중요한 파일을 기기와 분리된 위치에도 복사하고, 백업 계정을 보호하세요. 가능하면 일부 파일을 복원해 실제로 열리는지 확인하세요.'
  },
  {
    id: 'downloads', icon: '↧', title: '다운로드와 링크 주의',
    description: '최근 낯선 링크를 열거나 예상하지 못한 파일을 실행하지 않았는지, 출처가 불분명한 요청을 경계하는지 돌아봅니다.',
    how: '최근 받은 파일과 링크의 출처를 기억해 보세요. 급하게 로그인을 요구하는 메시지는 링크를 누르는 대신 해당 서비스의 공식 웹사이트나 앱에서 별도로 확인하세요.',
    answers: [
      { value: 'yes', label: '출처를 확인하고 신중하게 다루고 있어요' },
      { value: 'no', label: '의심스러운 링크나 파일을 확인해야 해요' },
      { value: 'unknown', label: '확인하지 못했어요' }
    ],
    explanation: '온라인 위협은 이 점검표로 감지할 수 없습니다. 이 항목은 최근의 사용 습관을 스스로 돌아보도록 돕습니다.',
    unknownAdvice: '최근 활동을 확실히 알 수 없다면 이 응답을 미확인으로 두어도 됩니다. 출처를 모르는 파일은 실행하지 말고, 메시지의 링크 대신 해당 기관의 공식 앱이나 주소를 직접 열어 확인하세요. 이 앱은 다운로드 파일이나 링크를 검사하지 않습니다.',
    advice: '의심스러운 파일을 더 실행하지 말고, 메시지 속 링크 대신 해당 기관의 공식 앱이나 주소를 직접 열어 확인하세요. 계정 정보를 입력했다면 공식 경로로 비밀번호를 바꾸고 다중 인증을 확인하세요.'
  }
];

const introScreen = document.querySelector('#intro-screen');
const checkScreen = document.querySelector('#check-screen');
const resultsScreen = document.querySelector('#results-screen');
const checklist = document.querySelector('#checklist');
const resultList = document.querySelector('#result-list');
const summary = document.querySelector('#summary');
const progressLabel = document.querySelector('#progress-label');
const progressHint = document.querySelector('#progress-hint');
const progressBar = document.querySelector('.progress-track');
const progressFill = document.querySelector('#progress-fill');
const progressLive = document.querySelector('#progress-live');

function renderChecklist() {
  checklist.innerHTML = checks.map((item, index) => `
    <article class="check-card" data-check-id="${item.id}">
      <div class="check-title-row">
        <span class="check-icon" aria-hidden="true">${item.icon}</span>
        <div>
          <h2>${index + 1}. ${item.title}</h2>
          <p class="description">${item.description}</p>
        </div>
      </div>
      <p id="help-${item.id}" class="how-to"><strong>확인 방법</strong> · ${item.how}</p>
      <fieldset class="choices" aria-describedby="help-${item.id}">
        <legend class="visually-hidden">${item.title} 상태 선택</legend>
        ${item.answers.map(answer => `
          <button class="choice" type="button" aria-pressed="false" data-value="${answer.value}">
            <span>${answer.label}</span>
          </button>`).join('')}
      </fieldset>
    </article>`).join('');
}

function updateProgress(selection = null) {
  const answeredCount = [...checklist.querySelectorAll('.check-card')]
    .filter(card => card.querySelector('.choice[aria-pressed="true"]')).length;
  const total = checks.length;
  const allAnswered = answeredCount === total;

  progressLabel.textContent = `응답한 항목 ${answeredCount} / ${total}`;
  progressHint.textContent = allAnswered
    ? '모든 항목에 응답했습니다. “확인하지 못함” 응답은 결과에서 별도로 표시됩니다.'
    : '선택하지 않은 항목은 결과에서 ‘확인하지 못함’으로 표시됩니다.';
  progressBar.setAttribute('aria-valuenow', String(answeredCount));
  progressFill.style.width = `${(answeredCount / total) * 100}%`;
  progressLive.textContent = selection
    ? `선택한 응답: ${selection.title} — ${selection.label}. 응답한 항목 ${answeredCount} / ${total}.`
    : `전체 ${total}개 항목 중 ${answeredCount}개에 응답했습니다.`;
}

checklist.addEventListener('click', event => {
  const choice = event.target.closest('.choice');
  if (!choice || !checklist.contains(choice)) return;

  const group = choice.closest('.choices');
  group.querySelectorAll('.choice').forEach(option => {
    option.setAttribute('aria-pressed', String(option === choice));
  });
  const item = checks.find(check => check.id === choice.closest('.check-card').dataset.checkId);
  const answer = item.answers.find(option => option.value === choice.dataset.value);
  updateProgress({ title: item.title, label: answer.label });
});

function selectedAnswer(item) {
  return checklist.querySelector(`.check-card:nth-child(${checks.indexOf(item) + 1}) .choice[aria-pressed="true"]`)?.dataset.value ?? 'unknown';
}

function statusFor(value) {
  if (value === 'yes') return { key: 'ok', label: '확인함 · 양호 응답' };
  if (value === 'no') return { key: 'attention', label: '주의 필요' };
  return { key: 'unknown', label: '확인하지 못함' };
}

function renderResults() {
  const results = checks.map(item => ({ item, value: selectedAnswer(item), status: statusFor(selectedAnswer(item)) }));
  const okCount = results.filter(result => result.status.key === 'ok').length;
  const attentionCount = results.filter(result => result.status.key === 'attention').length;
  const unknownCount = results.filter(result => result.status.key === 'unknown').length;
  let headline = '확인할 항목이 남아 있어요';
  if (attentionCount > 0) headline = '먼저 살펴볼 항목이 있어요';
  else if (unknownCount === 0) headline = '선택한 항목을 모두 확인했어요';

  summary.innerHTML = `
    <div class="summary-score">
      <strong>${headline}</strong>
      <span>자가 응답 ${checks.length}개 기준 · 자동 진단 아님</span>
    </div>
    <div class="summary-counts" aria-label="항목별 응답 수">
      <div class="count-chip count-ok"><span class="count">${okCount}</span><span>양호 응답</span></div>
      <div class="count-chip count-attention"><span class="count">${attentionCount}</span><span>주의 필요</span></div>
      <div class="count-chip count-unknown"><span class="count">${unknownCount}</span><span>확인하지 못함</span></div>
    </div>`;

  const ordered = [...results].sort((a, b) => {
    const priority = { attention: 0, unknown: 1, ok: 2 };
    return priority[a.status.key] - priority[b.status.key];
  });
  resultList.innerHTML = ordered.map(({ item, value, status }) => {
    let recommendation;
    if (value === 'yes') {
      recommendation = item.okAdvice || '현재 선택하신 응답을 기록했습니다. 정기적으로 다시 확인하고 공식 보안 안내를 참고하세요.';
    } else if (value === 'unknown') {
      recommendation = item.unknownAdvice || '먼저 위의 확인 방법을 참고해 상태를 확인하세요. 확인할 수 없으면 미확인으로 두어도 됩니다.';
    } else {
      recommendation = item.advice;
    }
    const responseLabel = item.answers.find(answer => answer.value === value)?.label ?? '확인하지 못했어요';
    return `
      <article class="result-card status-${status.key}">
        <div class="result-header">
          <h3>${item.title}</h3>
          <span class="status-badge">${status.label}</span>
        </div>
        <p class="chosen-answer"><strong>내 응답</strong> · ${responseLabel}</p>
        <p>${item.explanation}</p>
        <p class="next-step"><strong>다음 조치</strong> · ${recommendation}</p>
      </article>`;
  }).join('');
}

function showScreen(target) {
  introScreen.hidden = target !== 'intro';
  checkScreen.hidden = target !== 'check';
  resultsScreen.hidden = target !== 'results';
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  const heading = target === 'intro' ? '#intro-title' : target === 'check' ? '#check-title' : '#results-title';
  document.querySelector(heading).focus({ preventScroll: true });
}

function resetChecklist() {
  checklist.querySelectorAll('.choice').forEach(choice => choice.setAttribute('aria-pressed', 'false'));
  updateProgress();
}

document.querySelector('#start-button').addEventListener('click', () => showScreen('check'));
document.querySelector('#back-button').addEventListener('click', () => {
  resetChecklist();
  showScreen('intro');
});
document.querySelector('#results-button').addEventListener('click', () => {
  renderResults();
  showScreen('results');
});
document.querySelector('#edit-button').addEventListener('click', () => showScreen('check'));
document.querySelector('#restart-button').addEventListener('click', () => {
  resetChecklist();
  showScreen('intro');
});
document.querySelector('#print-button').addEventListener('click', () => window.print());

renderChecklist();
updateProgress();
