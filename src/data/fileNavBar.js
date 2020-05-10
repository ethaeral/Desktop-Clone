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
	},
	{
		actionTitle: "New Window",
		shortCut: "Ctrl+Shift+N",
		active: false,
	},
	{
		actionTitle: "Open File...",
		shortCut: "Ctrl+O",
		active: false,
	},
	{
		actionTitle: "Open Folder...[Ctrl+K Ctrl+O]",
		shortCut: "",
		active: false,
	},
	{
		actionTitle: "Open Workspace...",
		shortCut: "",
		active: false,
	},
	{
		actionTitle: "Open Recent",
		shortCut: "",
		active: false,
	},
	{
		actionTitle: "Add Folder to Worspace...",
		shortCut: "",
		active: false,
	},
	{
		actionTitle: "Save Workspace As...",
		shortCut: "",
		active: false,
	},
	{
		actionTitle: "Save",
		shortCut: "Ctrl+S",
		active: false,
	},
	{
		actionTitle: "Save As...",
		shortCut: "Ctrl+Shift+S",
		active: false,
	},
	{
		actionTitle: "Save All",
		shortCut: "",
		active: false,
	},
	{
		actionTitle: "Auto Save",
		shortCut: "",
		active: false,
	},
	{
		actionTitle: "Perferences",
		shortCut: "",
		active: false,
	},
	{
		actionTitle: "Revert File",
		shortCut: "",
		active: false,
	},
	{
		actionTitle: "Close Editior",
		shortCut: "Ctrl+W",
		active: false,
	},
	{
		actionTitle: "Close Folder[Ctrl+KF]",
		shortCut: "",
		active: false,
	},
	{
		actionTitle: "Close Window",
		shortCut: "Ctrl+W",
		active: false,
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
	},
	{
		actionTitle: "Redo",
		shortCut: "Ctrl+Y",
		active: false,
	},
	{
		actionTitle: "Cut",
		shortCut: "Ctrl+X",
		active: false,
	},
	{
		actionTitle: "Copy",
		shortCut: "Ctrl+C",
		active: false,
	},
	{
		actionTitle: "Paste",
		shortCut: "Ctrl+V",
		active: false,
	},
	{
		actionTitle: "Find",
		shortCut: "Ctrl+F",
		active: false,
	},
	{
		actionTitle: "Replace",
		shortCut: "Ctrl+H",
		active: false,
	},
	{
		actionTitle: "Find in Files",
		shortCut: "Ctrl+Shift+F",
		active: false,
	},
	{
		actionTitle: "Replace in Files",
		shortCut: "Ctrl+Shift+H",
		active: false,
	},
	{
		actionTitle: "Toggle Line Comment",
		shortCut: "Ctrl+/",
		active: false,
	},
	{
		actionTitle: "Toggle Block Comment",
		shortCut: "Ctrl+Shift+A",
		active: false,
	},
	{
		actionTitle: "Emmet:Expand Abbreviation",
		shortCut: "Tab",
		active: false,
	},
	{
		actionTitle: "Emmet...",
		shortCut: "",
		active: false,
	},
];
export const codeSelection = [
	"Selection",
	{
		actionTitle: "Select All",
		shortCut: "Ctrl+A",
		active: false,
	},
	{
		actionTitle: "Expand Selection",
		shortCut: "Alt+Shift+Right Arrow",
		active: false,
	},
	{
		actionTitle: "Shrink Selection",
		shortCut: "Alt+Shift+Left Arrow",
		active: false,
	},
	{
		actionTitle: "Copy Line Up",
		shortCut: "Alt+Shift+Up Arrow",
		active: false,
	},
	{
		actionTitle: "Copy Line Down",
		shortCut: "Alt+Shift+Down Arrow",
		active: false,
	},
	{
		actionTitle: "Move Line Up",
		shortCut: "Alt+Up Arrow",
		active: false,
	},
	{
		actionTitle: "Move Line Down",
		shortCut: "Alt+Down Arrow",
		active: false,
	},
	{
		actionTitle: "Duplicate Selection",
		shortCut: "",
		active: false,
	},
	{
		actionTitle: "Add Cursor Above",
		shortCut: "Alt+Shift+Up Arrow",
		active: false,
	},
	{
		actionTitle: "Add Cursor Below",
		shortCut: "Alt+Shift+Down Arrow",
		active: false,
	},
	{
		actionTitle: "Add Cursors to Line Ends",
		shortCut: "Alt+Shift+I",
		active: false,
	},
	{
		actionTitle: "Add Next Occurrence",
		shortCut: "Ctrl+D",
		active: false,
	},
	{
		actionTitle: "Add Previous Occurrence",
		shortCut: "",
		active: false,
	},
	{
		actionTitle: "Select All Occurrences",
		shortCut: "Ctrl+Shift+L",
		active: false,
	},
	{
		actionTitle: "Switch to Ctrl+Click for Multi-Cursor",
		shortCut: "",
		active: false,
	},
	{
		actionTitle: "Column Selection Mode",
		shortCut: "",
		active: false,
	},
];
export const codeView = [
	"View",
	{
		actionTitle: "Command Palette...",
		shortCut: "Ctrl+Shift+P",
		active: false,
	},
	{
		actionTitle: "Open View...",
		shortCut: "",
		active: false,
	},
	{
		actionTitle: "Appearance",
		shortCut: "",
		active: false,
	},
	{
		actionTitle: "Editor Layout",
		shortCut: "",
		active: false,
	},
	{
		actionTitle: "Explorer",
		shortCut: "Ctrl+Shift+E",
		active: false,
	},
	{
		actionTitle: "Search",
		shortCut: "Ctrl+Shift+F",
		active: false,
	},
	{
		actionTitle: "SCM[Ctrl+Shift+G G]",
		shortCut: "",
		active: false,
	},
	{
		actionTitle: "Run",
		shortCut: "Ctrl+Shift+D",
		active: false,
	},
	{
		actionTitle: "Extensions",
		shortCut: "Ctrl+Shift+X",
		active: false,
	},
	{
		actionTitle: "Output[Ctrl+K Ctrl+H]",
		shortCut: "",
		active: false,
	},
	{
		actionTitle: "Debug Console",
		shortCut: "Ctrl+Shift+Y",
		active: false,
	},
	{
		actionTitle: "Terminal",
		shortCut: "Ctrl+`",
		active: false,
	},
	{
		actionTitle: "Problems",
		shortCut: "Ctrl+Shift+M",
		active: false,
	},
	{
		actionTitle: "Toggle WordWrap",
		shortCut: "Alt+Z",
		active: false,
	},
	{
		actionTitle: "Show Minimap",
		shortCut: "",
		active: false,
	},
	{
		actionTitle: "Show Breadcrumbs",
		shortCut: "",
		active: false,
	},
	{
		actionTitle: "Render Whitespace",
		shortCut: "",
		active: false,
	},
	{
		actionTitle: "Render Control Characters",
		shortCut: "",
		active: false,
	},
];
export const codeGo = [
	"Go",
	{
		actionTitle: "Back",
		shortCut: "Alt+Ctrl+-",
		active: false,
	},
	{
		actionTitle: "Forward",
		shortCut: "Ctrl+Shift+-",
		active: false,
	},
	{
		actionTitle: "Last Edit Location[Ctrl+K Ctrl+Q]",
		shortCut: "",
		active: false,
	},
	{
		actionTitle: "Switch Editor",
		shortCut: "",
		active: false,
	},
	{
		actionTitle: "Switch Group",
		shortCut: "",
		active: false,
	},
	{
		actionTitle: "Go to File...",
		shortCut: "Ctrl+P",
		active: false,
	},
	{
		actionTitle: "Go to Symbol in Workspace...",
		shortCut: "Ctrl+T",
		active: false,
	},
	{
		actionTitle: "Go to Symbol in Editor...",
		shortCut: "Ctrl+ Shift+O",
		active: false,
	},
	{
		actionTitle: "Go to Definition",
		shortCut: "F12",
		active: false,
	},
	{
		actionTitle: "Go to Declaration",
		shortCut: "",
		active: false,
	},
	{
		actionTitle: "Go to Type Definition",
		shortCut: "",
		active: false,
	},
	{
		actionTitle: "Go to Implementations",
		shortCut: "Ctrl+F12",
		active: false,
	},
	{
		actionTitle: "Go to References",
		shortCut: "Shift+F12",
		active: false,
	},
	{
		actionTitle: "Go to Line/Column",
		shortCut: "Ctrl+G",
		active: false,
	},
	{
		actionTitle: "Go to Bracket ",
		shortCut: "Ctrl+Shift+",
		active: false,
	},
	{
		actionTitle: "Next Problem ",
		shortCut: "F8",
		active: false,
	},
	{
		actionTitle: "Previous Problem",
		shortCut: "Shift+F8",
		active: false,
	},
	{
		actionTitle: "Next Change ",
		shortCut: "Alt+F3",
		active: false,
	},
	{
		actionTitle: "Previous Change",
		shortCut: "Alt+Shift+F3",
		active: false,
	},
];
export const codeRun = [
	"Run",
	{
		actionTitle: "Start Debugging",
		shortCut: "F5",
		active: false,
	},
	{
		actionTitle: "Run Without Debugging",
		shortCut: "Ctrl+F5",
		active: false,
	},
	{
		actionTitle: "Stop Debugging",
		shortCut: "Shift+F5",
		active: false,
	},
	{
		actionTitle: "Restart Debugging",
		shortCut: "Ctrl+Shift+F5",
		active: false,
	},
	{
		actionTitle: "Open Configurations",
		shortCut: "",
		active: false,
	},
	{
		actionTitle: "Add Configuration...",
		shortCut: "",
		active: false,
	},
	{
		actionTitle: "Step Over",
		shortCut: "F10",
		active: false,
	},
	{
		actionTitle: "Step Into",
		shortCut: "F11",
		active: false,
	},
	{
		actionTitle: "Step Out",
		shortCut: "Shift+F11",
		active: false,
	},
	{
		actionTitle: "Continue",
		shortCut: "F5",
		active: false,
	},
	{
		actionTitle: "Toggle Breakpoint",
		shortCut: "F9",
		active: false,
	},
	{
		actionTitle: "New Breakpoint",
		shortCut: "",
		active: false,
	},
	{
		actionTitle: "Enable All Breakpoints",
		shortCut: "",
		active: false,
	},
	{
		actionTitle: "Disable All Breakpoints",
		shortCut: "",
		active: false,
	},
	{
		actionTitle: "Remove All Breakpoints",
		shortCut: "",
		active: false,
	},
	{
		actionTitle: "Install Additional Debuggers...",
		shortCut: "",
		active: false,
	},
];
export const codeTerminal = [
	"Terminal",
	{
		actionTitle: "New Terminal",
		shortCut: "Ctrl+Shift+`",
		active: false,
	},
	{
		actionTitle: "Split Terminal",
		shortCut: "Ctrl+Shift+5",
		active: false,
	},
	{
		actionTitle: "Run Task...",
		shortCut: "",
		active: false,
	},
	{
		actionTitle: "Run Build Task...",
		shortCut: "Ctrl+Shift+B",
		active: false,
	},
	{
		actionTitle: "Run Active File",
		shortCut: "",
		active: false,
	},
	{
		actionTitle: "Run Selected Text",
		shortCut: "",
		active: false,
	},
	{
		actionTitle: "Show Running Tasks...",
		shortCut: "",
		active: false,
	},
	{
		actionTitle: "Restart Running Task...",
		shortCut: "",
		active: false,
	},
	{
		actionTitle: "Terminate Task...",
		shortCut: "",
		active: false,
	},
	{
		actionTitle: "Configure Tasks...",
		shortCut: "",
		active: false,
	},
	{
		actionTitle: "Configure Default Build Task...",
		shortCut: "",
		active: false,
	},
];
export const codeHelp = [
	"Help",
	{
		actionTitle: "Welcome",
		shortCut: "",
		active: true,
	},
	{
		actionTitle: "Interactive Playground",
		shortCut: "",
		active: false,
	},
	{
		actionTitle: "Documentation",
		shortCut: "",
		active: true,
	},
	{
		actionTitle: "Release Notes",
		shortCut: "",
		active: false,
	},
	{
		actionTitle: "Keyboard Shortcuts Reference[Ctrl+k Ctrl+R]",
		shortCut: "",
		active: false,
	},
	{
		actionTitle: "Introductory Videos",
		shortCut: "",
		active: true,
	},
	{
		actionTitle: "Tips and Tricks",
		shortCut: "",
		active: false,
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
	},
	{
		actionTitle: "Report Issue",
		shortCut: "",
		active: true,
	},
	{
		actionTitle: "View License",
		shortCut: "",
		active: false,
	},
	{
		actionTitle: "Privacy Statement",
		shortCut: "",
		active: false,
	},
	{
		actionTitle: "Toggle Developer Tools",
		shortCut: "Ctrl+Shift+I",
		active: false,
	},
	{
		actionTitle: "Open Process Explorer",
		shortCut: "",
		active: false,
	},
	{
		actionTitle: "Check for Updates...",
		shortCut: "",
		active: false,
	},
	{
		actionTitle: "About",
		shortCut: "",
		active: true,
	},
];
export const terminalFile = [
	"File",
	{
		actionTitle: "New Tab",
		shortCut: "",
		active: false,
	},
	{
		actionTitle: "New Window",
		shortCut: "",
		active: false,
	},
	{
		actionTitle: "Close Tab",
		shortCut: "Shift+Ctrl+W",
		active: false,
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
	},
	{
		actionTitle: "Copy as HTML",
		shortCut: "",
		active: false,
	},
	{
		actionTitle: "Paste",
		shortCut: "Shift+Ctrl+V",
		active: false,
	},
	{
		actionTitle: "Select All",
		shortCut: "",
		active: false,
	},
	{
		actionTitle: "Preferences",
		shortCut: "",
		active: false,
	},
];
export const terminalView = [
	"View",
	{
		actionTitle: "Show Menubar",
		shortCut: "",
		active: false,
	},
	{
		actionTitle: "Full Screen",
		shortCut: "F11",
		active: true,
	},
	{
		actionTitle: "Zoom In",
		shortCut: "Ctrl++",
		active: false,
	},
	{
		actionTitle: "Normal Size",
		shortCut: "Ctrl+0",
		active: true,
	},
	{
		actionTitle: "Zoom Out",
		shortCut: "Ctrl+-",
		active: false,
	},
];
export const terminalSearch = [
	"Search",
	{
		actionTitle: "Find...",
		shortCut: "Shift+Ctrl+F",
		active: false,
	},
	{
		actionTitle: "Find Next",
		shortCut: "Shift+Ctrl+G",
		active: false,
	},
	{
		actionTitle: "Find Previous",
		shortCut: "Shift+Ctrl+H",
		active: false,
	},
	{
		actionTitle: "Clear Highlight",
		shortCut: "Shift+Ctrl+J",
		active: false,
	},
];
export const terminalTerminal = [
	"Terminal",
	{
		actionTitle: "Set Character Encoding",
		shortCut: "",
		active: false,
	},
	{
		actionTitle: "Read-Only",
		shortCut: "",
		active: false,
	},
	{
		actionTitle: "Reset",
		shortCut: "",
		active: false,
	},
	{
		actionTitle: "Reset and Clear",
		shortCut: "",
		active: false,
	},
	{
		actionTitle: "1.85x85",
		shortCut: "",
		active: false,
	},
];
export const terminalHelp = [
	"Help",
	{
		actionTitle: "Contents",
		shortCut: "",
		active: false,
	},
	{
		actionTitle: "About",
		shortCut: "",
		active: true,
	},
];

export const settingPopOutCode = [
	{
		actionTitle: "Command Palette...",
		shortCut: "Ctrl+Shift+P",
		active: false,
	},
	{
		actionTitle: "Settings",
		shortCut: "Ctrl+Comma",
		active: false,
	},
	{
		actionTitle: "Online Services Settings",
		shortCut: "",
		active: false,
	},
	{
		actionTitle: "Extensions",
		shortCut: "Ctrl+Shift+X",
		active: false,
	},
	{
		actionTitle: "Keyboard Shortcuts[Ctrl+K Ctrl+S]",
		shortCut: "",
		active: false,
	},
	{
		actionTitle: "Keymaps[Ctrl+K Ctrl+M]",
		shortCut: "",
		active: false,
	},
	{
		actionTitle: "User Snippets",
		shortCut: "",
		active: false,
	},
	{
		actionTitle: "Color Theme[Ctrl+K Ctrl+T]",
		shortCut: "",
		active: false,
	},
	{
		actionTitle: "File Icon Theme",
		shortCut: "",
		active: false,
	},
	{
		actionTitle: "Check for Updates...",
		shortCut: "",
		active: false,
	},
];
