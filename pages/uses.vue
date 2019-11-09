<template>
	<div class="-mt-4 md:-mt-16 xl:-mt-32 xxl:-mt-56 xxxl:-mt-64 px-8 md:px-32 xl:pl-64 md:max-w-3xl xl:max-w-5xl">
			<h1 class="text-3xl mb-4 font-semibold">Uses</h1>
			<h2 class="text-xl mb-4 font-semibold sm:text-2xl text-gray-700">Workstation</h2>
			<div v-for="(item, index) in hardware" :key="'hardware' + index" class="mb-2 md:text-xl">
				<me-uses :title="item.title" :link="item.link" :icon="item.icon" />
			</div>
			<h2 class="text-xl mb-4 mt-4 sm:text-2xl font-semibold">Software</h2>
			<ul v-for="(item, index) in software" :key="'software'+ index" class="mb-2 md:text-xl">
				<me-uses :title="item.title" :link="item.link" :icon="item.icon" />
			</ul>
	</div>
</template>

<script>
import MeUses from '@/components/MeUses'

export default {
	components: {
    MeUses
	},
	data () {
		return {
			hardware: [
				{ title: 'MacBook Pro 15 (2019), 256GB, i7 2.6GHz, 16GB RAM', link: 'https://www.apple.com/shop/buy-mac/macbook-pro/15-inch-space-gray-2.6ghz-6-core-processor-with-turbo-boost-up-to-4.5ghz-256gb#', icon: 'svg/computer-laptop.svg' },
				{ title: 'Samsung 34 inch LED Curved C34J791', link: 'https://www.samsung.com/uk/monitors/curved-cf791/', icon: 'svg/computer-desktop.svg' },
				{ title: 'Apple Magic 2 Keyboard Space Gray', link: 'https://www.apple.com/shop/product/MRMH2LL/A/magic-keyboard-with-numeric-keypad-us-english-space-gray?fnode=4c', icon: 'svg/keyboard.svg' },
				{ title: 'Razer Mamba Wireless', link: 'https://www.razer.com/gaming-mice/razer-mamba-wireless', icon: 'svg/mouse.svg' },
				{ title: 'Steelseries Arctis Pro Wireless Headset', link: 'https://steelseries.com/gaming-headsets/arctis-pro-wireless', icon: 'svg/headphones.svg' },
				{ title: 'IKEA Bekant Sit/Stand Desk', link: 'https://www.ikea.com/us/en/catalog/products/S49022538/', icon: 'svg/desk.svg' }
			],
			software: [
				{ title: 'VSCode', link: 'https://code.visualstudio.com/', icon: 'svg/visualstudiocode.svg' },
				{ title: 'iTerm2', link: 'https://www.iterm2.com/', icon: 'svg/terminal.svg' },
				{ title: 'Chrome', link: 'https://www.google.com/chrome/', icon: 'svg/googlechrome.svg' },
				{ title: 'GitKraken', link: 'https://www.gitkraken.com/', icon: 'svg/github.svg' }
			]
		}
	}
}
</script>
