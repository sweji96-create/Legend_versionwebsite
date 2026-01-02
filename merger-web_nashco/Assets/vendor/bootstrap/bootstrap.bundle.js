(function () {
  function Collapse(trigger, target) {
    this.trigger = trigger;
    this.target = target;
    this.toggle = () => {
      if (!this.target) return;
      this.target.classList.toggle('show');
    };
    if (this.trigger) {
      this.trigger.addEventListener('click', (e) => {
        e.preventDefault();
        this.toggle();
      });
    }
  }

  function Modal(el) {
    this._el = el;
    if (!this._el) return;
    this._backdrop = null;
  }
  Modal.prototype.show = function () {
    if (!this._el) return;
    this._el.classList.add('show');
    this._el.style.display = 'flex';
  };
  Modal.prototype.hide = function () {
    if (!this._el) return;
    this._el.classList.remove('show');
    this._el.style.display = 'none';
  };

  window.bootstrap = window.bootstrap || {};
  window.bootstrap.Modal = Modal;
  window.bootstrap.Collapse = Collapse;

  // Auto-bind navbar toggler collapse targets
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-bs-toggle="collapse"]').forEach(btn => {
      const targetSel = btn.getAttribute('data-bs-target');
      if (targetSel) {
        const target = document.querySelector(targetSel);
        new Collapse(btn, target);
      }
    });
  });
})();
