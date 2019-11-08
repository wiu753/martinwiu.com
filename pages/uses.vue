<template>
	<div class="-mt-4 md:-mt-16 xl:-mt-32 xxl:-mt-56 xxxl:-mt-64 px-8 md:px-32 xl:pl-64 md:max-w-3xl xl:max-w-5xl">
			<h1 class="text-3xl mb-4 font-semibold">Uses</h1>
			<h2 class="text-xl mb-4 font-semibold sm:text-2xl">Workstation</h2>
			<ul v-for="(item, index) in hardware" :key="'hardware' + index" class="list-disc ml-5 md:text-xl">
				<me-uses :title="item.title" :link="item.link" />
			</ul>
			<h2 class="text-xl mb-4 mt-4 sm:text-2xl font-semibold">Software</h2>
			<ul v-for="(item, index) in software" :key="'software'+ index" class="list-disc ml-5 md:text-xl">
				<me-uses :title="item.title" :link="item.link" />
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
				{ title: 'MacBook Pro 15 (2019), 256GB, i7 2.6GHz, 16GB RAM', link: 'https://www.apple.com/shop/buy-mac/macbook-pro/15-inch-space-gray-2.6ghz-6-core-processor-with-turbo-boost-up-to-4.5ghz-256gb#' },
				{ title: 'Samsung 34 inch LED Curved C34J791', link: 'https://www.samsung.com/uk/monitors/curved-cf791/' },
				{ title: 'Apple Magic 2 Keyboard Space Gray', link: 'https://www.apple.com/shop/product/MRMH2LL/A/magic-keyboard-with-numeric-keypad-us-english-space-gray?fnode=4c' },
				{ title: 'Razer Mamba Wireless', link: 'https://www.razer.com/gaming-mice/razer-mamba-wireless' },
				{ title: 'Steelseries Arctis Pro Wireless Headset', link: 'https://steelseries.com/gaming-headsets/arctis-pro-wireless' },
				{ title: 'IKEA Bekant Sit/Stand Desk', link: 'https://www.ikea.com/us/en/catalog/products/S49022538/' }
			],
			software: [
				{ title: 'VSCode', link: 'https://code.visualstudio.com/' },
				{ title: 'iTerm2', link: 'https://www.iterm2.com/' },
				{ title: 'Chrome', link: 'https://www.google.com/chrome/' },
				{ title: 'GitKraken', link: 'https://www.gitkraken.com/' }
			]
		}
	}
}
</script>
