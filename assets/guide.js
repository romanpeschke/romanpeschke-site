/* romanpeschke.com guide behaviors: copy pasted values, tick off steps. */
(function () {
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Copy: any code.copy copies its text and says so. */
  document.querySelectorAll('code.copy').forEach(function (code) {
    var btn = document.createElement('button');
    btn.type = 'button'; btn.className = 'copy-btn';
    btn.setAttribute('aria-label', 'Copy ' + code.textContent.trim());
    code.parentNode.insertBefore(btn, code); btn.appendChild(code);
    var tag = document.createElement('span'); tag.className = 'copied'; tag.setAttribute('aria-live', 'polite');
    btn.after(tag);
    var t;
    btn.addEventListener('click', function () {
      var text = code.textContent.trim();
      var done = function () {
        tag.textContent = 'Copied'; btn.classList.add('is-copied');
        clearTimeout(t); t = setTimeout(function () { tag.textContent = ''; btn.classList.remove('is-copied'); }, 1600);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(done, function () { fallback(text); done(); });
      else { fallback(text); done(); }
    });
  });
  function fallback(text) {
    var ta = document.createElement('textarea'); ta.value = text; ta.setAttribute('readonly', ''); ta.style.position = 'fixed'; ta.style.opacity = '0';
    document.body.appendChild(ta); ta.select(); try { document.execCommand('copy'); } catch (e) {} document.body.removeChild(ta);
  }

  /* Steps: tap the numeral to mark a step done. Remembered per guide on this device. */
  var steps = document.querySelectorAll('.steps .step');
  if (!steps.length) return;
  var key = 'done:' + location.pathname;
  var done = [];
  try { done = JSON.parse(localStorage.getItem(key) || '[]'); } catch (e) {}
  var progress = document.querySelector('.steps-progress');
  var check = '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3.5 8.5l3 3 6-7"/></svg>';
  steps.forEach(function (li, i) {
    var num = li.querySelector('.step-num'); if (!num) return;
    var n = num.textContent.trim();
    var btn = document.createElement('button');
    btn.type = 'button'; btn.className = 'step-num'; btn.innerHTML = '<span class="step-n">' + n + '</span>' + check;
    btn.setAttribute('aria-label', 'Mark step ' + n + ' done');
    num.replaceWith(btn);
    var set = function (on, announce) {
      li.classList.toggle('is-done', on); btn.setAttribute('aria-pressed', on ? 'true' : 'false');
      if (announce && !reduce) { btn.classList.remove('bump'); void btn.offsetWidth; btn.classList.add('bump'); }
    };
    set(done.indexOf(i) > -1, false);
    btn.addEventListener('click', function () {
      var on = !li.classList.contains('is-done');
      set(on, true);
      done = on ? done.concat([i]) : done.filter(function (x) { return x !== i; });
      try { localStorage.setItem(key, JSON.stringify(done)); } catch (e) {}
      update();
    });
  });
  function update() {
    if (!progress) return;
    var c = done.length, all = steps.length;
    progress.textContent = c ? (c === all ? 'All ' + all + ' done. You are in.' : c + ' of ' + all + ' done') : '';
    progress.hidden = !c;
  }
  update();
})();
