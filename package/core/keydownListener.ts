
function keydownListener(element?: Element) {
  const events = []
  const keys = []
	let isShifting = false
	let isCtroling = false
	function changeIsPressing(e: KeyboardEvent) {
		if (e && e.key === 'Shift' && isShifting === isShifting) {
			isShifting = !isShifting
		}

		if (e && e.key === 'Meta' && isCtroling === isCtroling) {
			isCtroling = !isCtroling
    }
	}

	document.addEventListener('keydown', (e) => {
    events.push(e)
	})

	document.addEventListener('keyup', (e) => {
    console.log(e)
	})

  const KeyPressWatch = {
    keys,
    events,
		unbind: function () {
			document?.removeEventListener('keydown', changeIsPressing)
			document?.removeEventListener('keyup', changeIsPressing)
    },
	}

	return KeyPressWatch
}


export {
	keydownListener
}

export default keydownListener