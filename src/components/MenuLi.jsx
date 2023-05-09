export default function MenuLi({ children }) {
	return (
		<nav
			className="h-[50px] opacity-60 group cursor-pointer w-full flex items-center gap-3 px-[6%]"
		>
			{children}
		</nav>
	)
}
