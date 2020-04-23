const exitCode = (state, setState) => {
	setState({
		...state,
		code: {
			...state.code,
			maximized: false,
			minimized: false,
			closed: true,
		},
	});
};

const exitTerminal = (state, setState) => {
	setState({
		...state,
		terminal: {
			...state.terminal,
			maximized: false,
			minimized: false,
			closed: true,
		},
	});
};

const twitter = () => {
	window.open("https://twitter.com/Richanynguon", "_blank");
};

export const codeFile = [
	"File",
	{
		actionTitle: "New File",
		shortCut: "Ctrl+N",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "New Window",
		shortCut: "Ctrl+Shift+N",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Open File...",
		shortCut: "Ctrl+O",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Open Folder...[Ctrl+K Ctrl+O]",
		shortCut: "",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Open Workspace...",
		shortCut: "",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Open Recent",
		shortCut: "",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Add Folder to Worspace...",
		shortCut: "",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Save Workspace As...",
		shortCut: "",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Save",
		shortCut: "Ctrl+S",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Save As...",
		shortCut: "Ctrl+Shift+S",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Save All",
		shortCut: "",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Auto Save",
		shortCut: "",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Perferences",
		shortCut: "",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Revert File",
		shortCut: "",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Close Editior",
		shortCut: "Ctrl+W",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Close Folder[Ctrl+KF]",
		shortCut: "",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Close Window",
		shortCut: "Ctrl+W",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Exit",
		shortCut: "Ctrl+Q",
		active: true,
		callback: exitCode,
	},
];
export const codeEdit = [
	"Edit",
	{
		actionTitle: "Undo",
		shortCut: "Ctrl+Z",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Redo",
		shortCut: "Ctrl+Y",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Cut",
		shortCut: "Ctrl+X",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Copy",
		shortCut: "Ctrl+C",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Paste",
		shortCut: "Ctrl+V",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Find",
		shortCut: "Ctrl+F",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Replace",
		shortCut: "Ctrl+H",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Find in Files",
		shortCut: "Ctrl+Shift+F",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Replace in Files",
		shortCut: "Ctrl+Shift+H",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Toggle Line Comment",
		shortCut: "Ctrl+/",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Toggle Block Comment",
		shortCut: "Ctrl+Shift+A",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Emmet:Expand Abbreviation",
		shortCut: "Tab",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Emmet...",
		shortCut: "",
		active: false,
		callback: undefined,
	},
];
export const codeSelection = [
	"Selection",
	{
		actionTitle: "Select All",
		shortCut: "Ctrl+A",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Expand Selection",
		shortCut: "Alt+Shift+Right Arrow",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Shrink Selection",
		shortCut: "Alt+Shift+Left Arrow",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Copy Line Up",
		shortCut: "Alt+Shift+Up Arrow",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Copy Line Down",
		shortCut: "Alt+Shift+Down Arrow",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Move Line Up",
		shortCut: "Alt+Up Arrow",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Move Line Down",
		shortCut: "Alt+Down Arrow",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Duplicate Selection",
		shortCut: "",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Add Cursor Above",
		shortCut: "Alt+Shift+Up Arrow",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Add Cursor Below",
		shortCut: "Alt+Shift+Down Arrow",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Add Cursors to Line Ends",
		shortCut: "Alt+Shift+I",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Add Next Occurrence",
		shortCut: "Ctrl+D",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Add Previous Occurrence",
		shortCut: "",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Select All Occurrences",
		shortCut: "Ctrl+Shift+L",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Switch to Ctrl+Click for Multi-Cursor",
		shortCut: "",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Column Selection Mode",
		shortCut: "",
		active: false,
		callback: undefined,
	},
];
export const codeView = [
	"View",
	{
		actionTitle: "Command Palette...",
		shortCut: "Ctrl+Shift+P",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Open View...",
		shortCut: "",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Appearance",
		shortCut: "",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Editor Layout",
		shortCut: "",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Explorer",
		shortCut: "Ctrl+Shift+E",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Search",
		shortCut: "Ctrl+Shift+F",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "SCM[Ctrl+Shift+G G]",
		shortCut: "",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Run",
		shortCut: "Ctrl+Shift+D",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Extensions",
		shortCut: "Ctrl+Shift+X",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Output[Ctrl+K Ctrl+H]",
		shortCut: "",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Debug Console",
		shortCut: "Ctrl+Shift+Y",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Terminal",
		shortCut: "Ctrl+`",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Problems",
		shortCut: "Ctrl+Shift+M",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Toggle WordWrap",
		shortCut: "Alt+Z",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Show Minimap",
		shortCut: "",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Show Breadcrumbs",
		shortCut: "",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Render Whitespace",
		shortCut: "",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Render Control Characters",
		shortCut: "",
		active: false,
		callback: undefined,
	},
];
export const codeGo = [
	"Go",
	{
		actionTitle: "Back",
		shortCut: "Alt+Ctrl+-",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Forward",
		shortCut: "Ctrl+Shift+-",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Last Edit Location[Ctrl+K Ctrl+Q]",
		shortCut: "",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Switch Editor",
		shortCut: "",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Switch Group",
		shortCut: "",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Go to File...",
		shortCut: "Ctrl+P",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Go to Symbol in Workspace...",
		shortCut: "Ctrl+T",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Go to Symbol in Editor...",
		shortCut: "Ctrl+ Shift+O",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Go to Definition",
		shortCut: "F12",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Go to Declaration",
		shortCut: "",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Go to Type Definition",
		shortCut: "",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Go to Implementations",
		shortCut: "Ctrl+F12",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Go to References",
		shortCut: "Shift+F12",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Go to Line/Column",
		shortCut: "Ctrl+G",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Go to Bracket ",
		shortCut: "Ctrl+Shift+",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Next Problem ",
		shortCut: "F8",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Previous Problem",
		shortCut: "Shift+F8",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Next Change ",
		shortCut: "Alt+F3",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Previous Change",
		shortCut: "Alt+Shift+F3",
		active: false,
		callback: undefined,
	},
];
export const codeRun = [
	"Run",
	{
		actionTitle: "Start Debugging",
		shortCut: "F5",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Run Without Debugging",
		shortCut: "Ctrl+F5",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Stop Debugging",
		shortCut: "Shift+F5",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Restart Debugging",
		shortCut: "Ctrl+Shift+F5",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Open Configurations",
		shortCut: "",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Add Configuration...",
		shortCut: "",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Step Over",
		shortCut: "F10",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Step Into",
		shortCut: "F11",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Step Out",
		shortCut: "Shift+F11",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Continue",
		shortCut: "F5",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Toggle Breakpoint",
		shortCut: "F9",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "New Breakpoint",
		shortCut: "",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Enable All Breakpoints",
		shortCut: "",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Disable All Breakpoints",
		shortCut: "",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Remove All Breakpoints",
		shortCut: "",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Install Additional Debuggers...",
		shortCut: "",
		active: false,
		callback: undefined,
	},
];
export const codeTerminal = [
	"Terminal",
	{
		actionTitle: "New Terminal",
		shortCut: "Ctrl+Shift+`",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Split Terminal",
		shortCut: "Ctrl+Shift+5",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Run Task...",
		shortCut: "",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Run Build Task...",
		shortCut: "Ctrl+Shift+B",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Run Active File",
		shortCut: "",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Run Selected Text",
		shortCut: "",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Show Running Tasks...",
		shortCut: "",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Restart Running Task...",
		shortCut: "",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Terminate Task...",
		shortCut: "",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Configure Tasks...",
		shortCut: "",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Configure Default Build Task...",
		shortCut: "",
		active: false,
		callback: undefined,
	},
];
export const codeHelp = [
	"Help",
	{
		actionTitle: "Welcome",
		shortCut: "",
		active: true,
		callback: undefined,
	},
	{
		actionTitle: "Interactive Playground",
		shortCut: "",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Documentation",
		shortCut: "",
		active: true,
		callback: undefined,
	},
	{
		actionTitle: "Release Notes",
		shortCut: "",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Keyboard Shortcuts Reference[Ctrl+k Ctrl+R]",
		shortCut: "",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Introductory Videos",
		shortCut: "",
		active: true,
		callback: undefined,
	},
	{
		actionTitle: "Tips and Tricks",
		shortCut: "",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Join Us on Twitter",
		shortCut: "",
		active: true,
		callback: twitter,
	},
	{
		actionTitle: "Search Feature Requests",
		shortCut: "",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Report Issue",
		shortCut: "",
		active: true,
		callback: undefined,
	},
	{
		actionTitle: "View License",
		shortCut: "",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Privacy Statement",
		shortCut: "",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Toggle Developer Tools",
		shortCut: "Ctrl+Shift+I",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Open Process Explorer",
		shortCut: "",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Check for Updates...",
		shortCut: "",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "About",
		shortCut: "",
		active: true,
		callback: undefined,
	},
];
export const terminalFile = [
	"File",
	{
		actionTitle: "New Tab",
		shortCut: "",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "New Window",
		shortCut: "",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Close Tab",
		shortCut: "Shift+Ctrl+W",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Close Window",
		shortCut: "Shift+Ctrl+Q",
		active: true,
		callback: exitTerminal,
	},
];
export const terminalEdit = [
	"Edit",
	{
		actionTitle: "Copy",
		shortCut: "Shift+Ctrl+C",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Copy as HTML",
		shortCut: "",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Paste",
		shortCut: "Shift+Ctrl+V",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Select All",
		shortCut: "",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Preferences",
		shortCut: "",
		active: false,
		callback: undefined,
	},
];
export const terminalView = [
	"View",
	{
		actionTitle: "Show Menubar",
		shortCut: "",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Full Screen",
		shortCut: "F11",
		active: true,
		callback: undefined,
	},
	{
		actionTitle: "Zoom In",
		shortCut: "Ctrl++",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Normal Size",
		shortCut: "Ctrl+0",
		active: true,
		callback: undefined,
	},
	{
		actionTitle: "Zoom Out",
		shortCut: "Ctrl+-",
		active: false,
		callback: undefined,
	},
];
export const terminalSearch = [
	"Search",
	{
		actionTitle: "Find...",
		shortCut: "Shift+Ctrl+F",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Find Next",
		shortCut: "Shift+Ctrl+G",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Find Previous",
		shortCut: "Shift+Ctrl+H",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Clear Highlight",
		shortCut: "Shift+Ctrl+J",
		active: false,
		callback: undefined,
	},
];
export const terminalTerminal = [
	"Terminal",
	{
		actionTitle: "Set Character Encoding",
		shortCut: "",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Read-Only",
		shortCut: "",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Reset",
		shortCut: "",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Reset and Clear",
		shortCut: "",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "1.85x85",
		shortCut: "",
		active: false,
		callback: undefined,
	},
];
export const terminalHelp = [
	"Help",
	{
		actionTitle: "Contents",
		shortCut: "",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "About",
		shortCut: "",
		active: true,
		callback: undefined,
	},
];

export const settingPopOutCode = [
	{
		actionTitle: "Command Palette...",
		shortCut: "Ctrl+Shift+P",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Settings",
		shortCut: "Ctrl+Comma",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Online Services Settings",
		shortCut: "",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Extensions",
		shortCut: "Ctrl+Shift+X",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Keyboard Shortcuts[Ctrl+K Ctrl+S]",
		shortCut: "",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Keymaps[Ctrl+K Ctrl+M]",
		shortCut: "",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "User Snippets",
		shortCut: "",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Color Theme[Ctrl+K Ctrl+T]",
		shortCut: "",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "File Icon Theme",
		shortCut: "",
		active: false,
		callback: undefined,
	},
	{
		actionTitle: "Check for Updates...",
		shortCut: "",
		active: false,
		callback: undefined,
	},
];
