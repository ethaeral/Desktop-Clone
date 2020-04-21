import React from "react";
import { NavContainer } from "./styles/fileNavStyles";

/*
File 
[New File(Ctrl+N), New Window(Ctrl+Shift+N), Open File...(Ctrl+O), Open Folder...[Ctrl+K Ctrl+O], Open Workspace..., Open Recent, Add Folder to Worspace..., Save Workspace As.., Save(Ctrl+S), Save As...(Ctrl+Shift+S), Save All, Auto Save, Perferences, Revert File, Close Editior(Ctrl+W), Close Folder[Ctrl+KF], Close Window(Ctrl+W), Exit(Ctrl+Q)]

Edit 
[Undo(Ctrl+Z), Redo(Ctrl+Y), Cut(Ctrl+X), Copy(Ctrl+C), Paste(Ctrl+V), Find(Ctrl+F), Replace(Ctrl+H), Find in Files(Ctrl+Shift+F), Replace in Files(Ctrl+Shift+H), Toggle Line Comment(Ctrl+/), Toggle Block Comment(Ctrl+Shift+A), Emmet:Expand Abbreviation(Tab), Emmet...]

Selection
[Select All (Ctrl+A), Expand Selection (Alt+Shift+Right Arrow), Shrink Selection (Alt+Shift+Left Arrow), Copy Line Up (Alt+Shift+Up Arrow), Copy Line Down (Alt+Shift+Down Arrow), Move Line Up(Alt+Up Arrow), Move Line Down(Alt+Down Arrow), Duplicate Selection, Add Cursor Above(Alt+Shift+Up Arrow), Add Cursor Below(Alt+Shift+Down Arrow), Add Cursors to Line Ends(Alt +Shift +I), Add Next Occurrence(Ctrl+D), Add Previous Occurrence, Select All Occurrences(Ctrl+Shift+L), Switch to Ctrl +Click for Multi-Cursor, Column Selection Mode]

View 
[Command Palette... Ctrl+Shift+P, Open View..., Appearance, Editor Layout, Explorer(Ctrl+Shift+E),Search(Ctrl+Shift+f), SCM[Ctrl+Shift+G G], Run (Ctrl+Shift+D), Extensions(Ctrl+Shift+X), Output[Ctrl+K Ctrl+H], Debug Console(Ctrl+Shift+Y), Terminal(Ctrl+`), Problems(Ctrl+Shift+M), Toggle WordWrap(Alt+Z), Show Minimap, Show Breadcrumbs, Render Whitespace, Render Control Characters ]

Go
[Back(Alt+Ctrl+-), Forward(Ctrl+Shift+-), Last Edit Location[Ctrl+K Ctrl+Q], Switch Editor, Switch Group, Go to File...(Ctrl+P), Go to Symbol in Workspace...(Ctrl+T), Go to Symbol in Editor...(Ctrl+ Shift+O), go to Definition(F12), Go to Declaration, Go to Type Definition, Go to Implementations(Ctrl+F12), Go to References(Shift+F12), Go to Line/Column(Ctrl+G), Go to Bracket (Ctrl+Shift+\), Next Problem (F8), Previous Problem(Shift+F8), Next Change (Alt+F3), Previous Change(Alt+Shift+F3)   ]

Run
[Start Debugging (F5), Run Without Debugging (Ctrl+F5), Stop Debugging(Shift+F5), Restart Debugging(Ctrl+Shift+F5), Open Configurations, Add Configuration..., Step Over(F10), Step Into(F11), Step Out (Shift+F11), Continue(F5), Toggle Breakpoint(F9), New Breakpoint, Enable All Breakpoints, Disable All Breakpoints, Remove All Breakpoints, Install Additional Debuggers...]

Terminal
[New Terminal (Ctrl+Shift+`), Split Terminal (Ctrl+Shift+5), Run Task..., Run Build Task...(Ctrl+Shift+B), Run Active File, Run Selected Text, Show Running Tasks..., Restart Running Task..., Terminate Task..., Configure Tasks..., Configure Default Build Task...]

Help
[Welcome, Interactive Playground, Documentation, release Notes, Keyboard Shortcuts Reference[Ctrl+k Ctrl+R], Introductory Videos, Tips and Tricks, Join Us on Twitter, Search Feature Requests, Report Issue, View License, Privacy Statement, Toggle Developer Tools(Ctrl+Shift+I), Open Process Explorer, Check for Updates..., About]

Terminal
File
[New Tab, New Window, Close Tab(Shift+Ctrl+W), Close Window(Shift+Ctrl+Q)]

Edit
[Copy (Shift+Ctrl+C), Copy as HTML, Paste (Shift+Ctrl+V), Select All, Preferences]

View
[Show Menubar, Full Screen (F11), Zoom In(Ctrl++), Normal Size(Ctrl+0), Zoom Out (Ctrl+-)]

Search
[Find...(Shift+Ctrl+F), Find Next (Shift+Ctrl+G), Find Previous(Shift+Ctrl+H), Clear Highlight(Shift+Ctrl+J)]

Terminal
[Set Character Encoding, Read-Only, Reset, Reset and Clear, 1.85x85]

Help
[Contents, About]

{
	actionTitle: '',
	shortCut: '',
	active: false,
	callback: undefined
}

*/
export default function FileNavBar() {
	return <NavContainer>FileNavBar</NavContainer>;
}
