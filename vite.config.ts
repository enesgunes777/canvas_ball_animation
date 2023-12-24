import { defineConfig } from 'vite';

const userConfig = defineConfig({
	base: '/canvas_ball_animation',
	server: {
		port: 3035,
		host: 'localhost'
	}
});

export default userConfig;
