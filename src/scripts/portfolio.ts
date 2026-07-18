const sections = Array.from(document.querySelectorAll<HTMLElement>('[data-section]'));
const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('[data-nav-link]'));
const header = document.querySelector<HTMLElement>('[data-header]');
const progress = document.querySelector<HTMLElement>('[data-progress]');
const menuButton = document.querySelector<HTMLButtonElement>('[data-menu-button]');
const mobileMenu = document.querySelector<HTMLElement>('[data-mobile-menu]');
const mobileLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('[data-mobile-link]'));

function setActiveSection(id: string) {
	navLinks.forEach((link) => link.classList.toggle('active', link.dataset.navLink === id));
}

const sectionObserver = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) setActiveSection(entry.target.id);
		});
	},
	{ rootMargin: '-35% 0px -55%', threshold: 0 },
);
sections.forEach((section) => sectionObserver.observe(section));

function handleScroll() {
	header?.classList.toggle('scrolled', window.scrollY > 20);
	const max = document.documentElement.scrollHeight - window.innerHeight;
	const value = max > 0 ? Math.min(100, Math.max(0, (window.scrollY / max) * 100)) : 0;
	progress?.style.setProperty('--progress', `${value}%`);
}
handleScroll();
window.addEventListener('scroll', handleScroll, { passive: true });

function setMenu(open: boolean) {
	if (!menuButton || !mobileMenu) return;
	menuButton.dataset.open = String(open);
	menuButton.setAttribute('aria-expanded', String(open));
	menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
	mobileMenu.dataset.open = String(open);
	mobileMenu.setAttribute('aria-hidden', String(!open));
	mobileMenu.toggleAttribute('inert', !open);
	document.body.classList.toggle('menu-open', open);
	document.querySelector('main')?.toggleAttribute('inert', open);
	document.querySelector('footer')?.toggleAttribute('inert', open);
	const wordmark = document.querySelector<HTMLAnchorElement>('.wordmark');
	if (wordmark) wordmark.tabIndex = open ? -1 : 0;
	if (open) mobileLinks[0]?.focus();
}

menuButton?.addEventListener('click', () => setMenu(menuButton.dataset.open !== 'true'));
mobileLinks.forEach((link) => link.addEventListener('click', () => setMenu(false)));
window.addEventListener('keydown', (event) => {
	if (event.key === 'Escape' && menuButton?.dataset.open === 'true') {
		setMenu(false);
		menuButton.focus();
	}
});

document.querySelectorAll<HTMLButtonElement>('[data-experience-button]').forEach((button) => {
	button.addEventListener('click', () => {
		const isOpen = button.getAttribute('aria-expanded') === 'true';
		button.setAttribute('aria-expanded', String(!isOpen));
		button.closest('.experience-item')?.classList.toggle('open', !isOpen);
		const detailId = button.getAttribute('aria-controls');
		if (detailId) document.getElementById(detailId)?.setAttribute('aria-hidden', String(isOpen));
	});
});

const projectRoot = document.querySelector<HTMLElement>('[data-projects]');
if (projectRoot) {
	const tabs = Array.from(projectRoot.querySelectorAll<HTMLButtonElement>('[data-project-tab]'));
	const panels = Array.from(projectRoot.querySelectorAll<HTMLElement>('[data-project-panel]'));

	function selectProject(index: number, moveFocus = false) {
		tabs.forEach((tab, tabIndex) => {
			const active = tabIndex === index;
			tab.classList.toggle('active', active);
			tab.setAttribute('aria-selected', String(active));
			tab.tabIndex = active ? 0 : -1;
			const mark = tab.querySelector<HTMLElement>('.project-tab-mark');
			if (mark) mark.textContent = active ? '↗' : '·';
		});
		panels.forEach((panel, panelIndex) => {
			const active = panelIndex === index;
			panel.hidden = !active;
			panel.classList.toggle('active', active);
		});
		try {
			window.localStorage.setItem('carleano:selected-project', String(index));
		} catch {}
		if (moveFocus) tabs[index]?.focus();
	}

	tabs.forEach((tab, index) => {
		tab.addEventListener('click', () => selectProject(index));
		tab.addEventListener('keydown', (event) => {
			if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) return;
			event.preventDefault();
			let next = index;
			if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
			if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
			if (event.key === 'Home') next = 0;
			if (event.key === 'End') next = tabs.length - 1;
			selectProject(next, true);
		});
	});

	try {
		const saved = Number(window.localStorage.getItem('carleano:selected-project') ?? 0);
		if (Number.isInteger(saved) && saved >= 0 && saved < tabs.length) selectProject(saved);
	} catch {}
}

const revealObserver = new IntersectionObserver(
	(entries, observer) => {
		entries.forEach((entry) => {
			if (!entry.isIntersecting) return;
			entry.target.classList.add('revealed');
			observer.unobserve(entry.target);
		});
	},
	{ rootMargin: '0px 0px -8%', threshold: 0.08 },
);
document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((element) => revealObserver.observe(element));
