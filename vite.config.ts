import { resolve } from 'path';
import { defineConfig } from 'vite';

const userConfig = defineConfig({
	base: '/canvas_ball_animation',
	server: {
		port: 3035,
		host: 'localhost'
	},
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html')
			}
		}
	}
});

export default userConfig;
