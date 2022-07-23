import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"

const GlobalStyles = createGlobalStyle`
	${reset}
	:root {
		--color-white: #fff;
		--color-red: #fe4411;
		--color-bg: #14171f;
		--color-gray: #30363d;
		--color-layer: rgba(0,0,0,0.5);
		--color-shaodw: rgba(0,0,0,0.1);
	}
	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
		word-break: break-all;
		color: var(--color-white);
		overscroll-behavior: none;
	}
	html,
	body {
		overflow: auto;
		height: 100%;
		font-family: "Roboto";
		background-color: var(--color-bg);
		line-height: 1.3;
		* {
			font-family: "Roboto";
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
