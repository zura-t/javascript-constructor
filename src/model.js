import img from './assets/img.jpg'
import {TitleBlock, ImageBlock, TextBlock, TextColumnsBlock} from './classes/blocks.js'
import {css} from './utils'

export const model = [
	new TitleBlock('Test Title', {
		tag: 'h2',
		styles: css({
			background: 'linear-gradient(to right, #ff0099, #493240)',
			color: '#fff',
			padding: '1.5rem',
			'text-align': 'center'
		})
	}),
	new ImageBlock(img, {
		styles: 'padding: 2rem 0; display: flex;justify-content: center;',
		alt: 'my image',
		imageStyles: 'width: 700px; height: 300px; margin-l: 50px;'
	}),
	new TextBlock('Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum eum sapiente cumque harum laudantium? Rerum quod quasi eum enim a.', {
		styles: 'background: linear-gradient(to left, #f2994a, #f2c94c);font-weight: bold;padding: 1rem;'
	}),
	new TextColumnsBlock([
		'1 text',
		'2 text',
		'3 text'
	], {
		styles: 'padding: 2rem 0; color: #fff;background: linear-gradient(to bottom, #8e2de2, #4a00e0);font-weight: bold; text-align: center'
	})
]