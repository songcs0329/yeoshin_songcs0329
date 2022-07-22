import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"

const GlobalStyles = createGlobalStyle`
	${reset}
	:root {
		--color-black1: #111;
		--color-black2: #222;
		--color-black3: #333;
		--color-black4: #444;
		--color-black5: #555;
		--color-black6: #666;
		--color-white: #fff;
		--color-red: #f72512;
		--color-border: #ddd;
		--color-layer: rgba(0,0,0,0.5);
		--color-shaodw: rgba(0,0,0,0.1);
	}
	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
		word-break: break-all;
		color: var(--color-black1);
		overscroll-behavior: none;
	}
	html,
	body {
		overflow: auto;
		height: 100%;
		font-family: 'Noto Sans KR', sans-serif;
		* {
			font-family: 'Noto Sans KR', sans-serif;
			font-size: 12px;
		}
	}
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		letter-spacing: -1px;
	}
	a {
		text-decoration: none;
		color: inherit;
	}
	input,
	textarea {
		user-select: auto;
		&:focus {
			outline: none;
		}
	}
	button {
		border: 0;
		background: none;
		cursor: pointer;
	}
	.hide {
		position: absolute;
		left: -9999px;
		opacity: 0;
		font-size: 0;
	}
	.img {
		display: block;
		img {
			width: 100%;
			max-width: 100%;
			vertical-align: top;
		}
	}
`

export default GlobalStyles
