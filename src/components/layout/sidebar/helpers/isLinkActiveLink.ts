export const isLinkActiveLink = (href: string, path: string) =>
	(href === '/' && path === '/') || (path.startsWith(href) && href !== '/')
