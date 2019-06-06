import './hello-world.scss'

class helloWorldButton {
	btnStyle = 'hello-world-button'
	render() {
		const button = document.createElement('button')
		const body = document.querySelector('body')
		button.innerHTML = 'Greet'
		button.classList.add(this.btnStyle)
		button.addEventListener('click', () => {
			const p = document.createElement('p')
			p.innerHTML = 'Hello World!'
			p.classList.add('hello-world-text')
			body.appendChild(p)
		})
		body.appendChild(button)
	}
}

export default helloWorldButton
