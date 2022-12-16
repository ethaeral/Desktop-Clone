import { createContext } from "react";
// Data
import { allProjects } from "../data/projectsData";

export const WindowsContext = createContext();

export class WindowsState {
        constructor(){
	    this.zCounter = 1;
		this.firefoxTabs= ["1"];
		this.tabbedWindows= [];
		this.all= allProjects;
		this.inProgress = allProjects.filter((p) => p.inProgress === true);
		this.projects = allProjects.filter((project) => project.nonWeb === false);
		this.exts = allProjects.filter((project) => project.isExt === true);
		this.otherProjects = allProjects.filter(
			(project) => project.nonWeb === true && project.isExt === false
		);
		this.webPageProjects= allProjects.filter((project) => project.webPage === true);
		this.sideNavActive= {
			search: true,
			branch: false,
			bug: false,
			ext: false,
			projects: false,
			setting: false,
		};
		this.terminal= {
			minimized: false,
			maximized: false,
			closed: true,
			clear: false,
			z: 0,
		};
		this.code= {
			minimized: false,
			maximized: false,
			closed: false,
			clear: false,
			z: 0,
		};
		this.homepage= {
			minimized: false,
			maximized: false,
			closed: false,
			z: 1,
		};
		this.modalIsOpen= {
			windowBar: false,
			tabbedBar: false,
		};
    }
}