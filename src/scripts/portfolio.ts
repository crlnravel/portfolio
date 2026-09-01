const sections = Array.from(document.querySelectorAll<HTMLElement>('[data-section]'));
const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('[data-nav-link]'));
const header = document.querySelector<HTMLElement>('[data-header]');
const progress = document.querySelector<HTMLElement>('[data-progress]');
const progressRail = progress?.closest<HTMLElement>('.progress-rail');
const menuButton = document.querySelector<HTMLButtonElement>('[data-menu-button]');
const mobileMenu = document.querySelector<HTMLElement>('[data-mobile-menu]');
const mobileLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('[data-mobile-link]'));

let progressHideTimeout: number | undefined;

function setActiveSection(id: string) {
	navLinks.forEach((link) => {
		const active = link.dataset.navLink === id;
		link.classList.toggle('active', active);
		if (active) link.setAttribute('aria-current', 'location');
		else link.removeAttribute('aria-current');
	});
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

function updateScrollState() {
	header?.classList.toggle('scrolled', window.scrollY > 20);
	const max = document.documentElement.scrollHeight - window.innerHeight;
	const value = max > 0 ? Math.min(100, Math.max(0, (window.scrollY / max) * 100)) : 0;
	progress?.style.setProperty('--progress', `${value}%`);
}

function handleScroll() {
	updateScrollState();
	if (!progressRail) return;
	progressRail.classList.remove('is-idle');
	if (progressHideTimeout !== undefined) window.clearTimeout(progressHideTimeout);
	progressHideTimeout = window.setTimeout(() => progressRail.classList.add('is-idle'), 1000);
}
handleScroll();
window.addEventListener('scroll', handleScroll, { passive: true });
window.addEventListener('resize', updateScrollState, { passive: true });

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

function bindGalleryDialogs(buttonSelector: string, dialogSelector: string) {
	const focusTargets = new WeakMap<HTMLDialogElement, HTMLButtonElement>();
	const buttons = Array.from(document.querySelectorAll<HTMLButtonElement>(buttonSelector));
	const dialogs = Array.from(document.querySelectorAll<HTMLDialogElement>(dialogSelector));

	function openDialog(button: HTMLButtonElement) {
		const dialogId = button.getAttribute('aria-controls');
		const dialog = dialogId ? document.getElementById(dialogId) : null;
		if (!(dialog instanceof HTMLDialogElement) || dialog.open) return;

		focusTargets.set(dialog, button);
		button.setAttribute('aria-expanded', 'true');
		if (typeof dialog.showModal === 'function') dialog.showModal();
		else dialog.setAttribute('open', '');
		dialog.querySelector<HTMLElement>('[data-gallery-close]')?.focus();
	}

	buttons.forEach((button) => button.addEventListener('click', () => openDialog(button)));
	dialogs.forEach((dialog) => {
		dialog.addEventListener('click', (event) => {
			if (event.target === dialog) dialog.close();
		});
		dialog.addEventListener('cancel', (event) => {
			event.preventDefault();
			dialog.close();
		});
		dialog.addEventListener('close', () => {
			const button = focusTargets.get(dialog);
			button?.setAttribute('aria-expanded', 'false');
			button?.focus();
			focusTargets.delete(dialog);
		});
	});
}

bindGalleryDialogs('[data-experience-button]', '[data-experience-dialog]');
bindGalleryDialogs('[data-project-button]', '[data-project-dialog]');

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
