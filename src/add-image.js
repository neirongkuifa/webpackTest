import Rose from './rose.jpg'

const addImage = () => {
	const img = document.createElement('img')
	img.alt = 'Rose'
	img.width = 300
	img.src = Rose

	const body = document.querySelector('body')
	body.appendChild(img)
}

export default addImage
