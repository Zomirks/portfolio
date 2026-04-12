import { BurgerMenu } from "@components/ui/burger-menu";

export default function Header() {
	return (
		<header className="flex items-center justify-between p-4 fixed z-10 w-full">
			<div className="font-space">Cyril Fischer</div>

				<BurgerMenu />
		</header>
	)
}
export default Header