import { SearchIcon } from "@/components/pasteHeader/search-svg"; 
import { ThemeToggle } from "@/components/pasteThemes/themeToogle";
import { Button } from "@/components/ui/button";
import { Li } from "@/components/pasteHeader/li";
import { MenuSvg } from "@/components/pasteHeader/menu-svg";
import { SideBar } from "@/components/pasteSideBar/sideBar";
import { Logo } from "@/components/pasteHeader/logo";
import { InputForm } from "./inputForm";

export const Header = () => {
  return (
    <header className="w-full h-20 ">
      <div className="h-full flex flex-col lg:flex-row lg:items-center lg:justify-center">
        <div className="flex-1 flex">
          <Logo />
          <div className="flex flex-1 items-center justify-end  ">
            <nav className="hidden lg:block">
              <ul className="flex gap-4 mr-6">
                <Li link="/">Início</Li>
                <Li link="/ofertas">Ofertas</Li>
                <Li link="/genero/masculinos">Masculinos</Li>
                <Li link="/genero/femininos">Femininos</Li>
                <Li link="/genero/criancas">Crianças</Li>
              </ul>
            </nav>
            <div className="hidden max-w-xs lg:flex lg:flex-1 items-center rounded-md border-[2px] gap-1 overflow-hidden border-secondary-foreground/50">
              <Button
                disabled
                size={"icon"}
                variant={"ghost"}
                className="h-full rounded-none bg-none"
              >
                <SearchIcon />
              </Button>
              <InputForm/>
            </div>
            <div className="mx-5 flex items-center">
              <SideBar />
              <div className="h-5 w-[1.9px] mx-1 bg-slate-900/25 dark:bg-white/50"></div>
              <ThemeToggle />
            </div>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center lg:hidden mt-3">
          <div className="w-[90%] flex items-center px-1.5 rounded-md border-[2px] border-secondary-foreground/50 overflow-hidden gap-2">
            <Button
              disabled
              size={"icon"}
              variant={"ghost"}
              className="h-full rounded-none bg-none"
            >
              <SearchIcon />
            </Button>
            <input
              type="text"
              className="py-1.5 mr-1.5 flex-1 outline-none bg-transparent"
              placeholder="Buscar"
            />
          </div>
          <div className="ml-5 block mr-3 lg:hidden">
            <MenuSvg />
          </div>
        </div>
      </div>
    </header>
  );
};
