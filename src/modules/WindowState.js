class WindowState {
	constructor() {
		this.state = {
			terminal: {
				minimized: false,
				maximized: false,
				closed: true,
				active: false,
			},
			code: {
				minimized: false,
				maximized: false,
				closed: false,
				active: true,
			},
		};
	}
	setWindowState(window, stateProperty, value) {
		if (window in this.state && stateProperty in this.state[window]) {
			this.state[window][stateProperty] = value;
		} else {
			console.log(
				`${window} is in state: ${
					window in this.state
				} and/or ${stateProperty} is in ${window}: ${
					stateProperty in this.state[window]
				}`
			);
		}
	}
}

export const statefulWindows = new WindowState()